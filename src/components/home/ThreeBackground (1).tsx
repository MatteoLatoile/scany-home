"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      55,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 32;

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const palette = [0x148ad7, 0x25c6e6, 0xe7aa39];

    // --- Particules en réseau ---
    const particleCount = 90;
    const positions = new Float32Array(particleCount * 3);
    const velocities: THREE.Vector3[] = [];
    const colors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 60;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 40;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 30;

      velocities.push(
        new THREE.Vector3(
          (Math.random() - 0.5) * 0.018,
          (Math.random() - 0.5) * 0.018,
          (Math.random() - 0.5) * 0.018
        )
      );

      const c = new THREE.Color(palette[i % palette.length]);
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 0.55,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x148ad7,
      transparent: true,
      opacity: 0.12,
    });

    const linesGeometry = new THREE.BufferGeometry();
    const lineSegments = new THREE.LineSegments(linesGeometry, lineMaterial);
    scene.add(lineSegments);

    const maxDistance = 9;

    function updateLines() {
      const posAttr = geometry.attributes.position.array as Float32Array;
      const linePoints: number[] = [];

      for (let i = 0; i < particleCount; i++) {
        for (let j = i + 1; j < particleCount; j++) {
          const dx = posAttr[i * 3] - posAttr[j * 3];
          const dy = posAttr[i * 3 + 1] - posAttr[j * 3 + 1];
          const dz = posAttr[i * 3 + 2] - posAttr[j * 3 + 2];
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

          if (dist < maxDistance) {
            linePoints.push(
              posAttr[i * 3], posAttr[i * 3 + 1], posAttr[i * 3 + 2],
              posAttr[j * 3], posAttr[j * 3 + 1], posAttr[j * 3 + 2]
            );
          }
        }
      }

      linesGeometry.setAttribute(
        "position",
        new THREE.BufferAttribute(new Float32Array(linePoints), 3)
      );
    }

    // --- Icosaèdres flottants ---
    const shapes: { mesh: THREE.Mesh; speed: number; offset: number }[] = [];

    palette.forEach((color, i) => {
      const geo = new THREE.IcosahedronGeometry(3 + i, 0);
      const mat = new THREE.MeshBasicMaterial({
        color,
        wireframe: true,
        transparent: true,
        opacity: 0.35,
      });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.set((i - 1) * 18, i % 2 === 0 ? 8 : -8, -10 - i * 4);
      scene.add(mesh);
      shapes.push({ mesh, speed: 0.002 + i * 0.0008, offset: i * 2 });
    });

    // --- Parallax souris ---
    const mouse = { x: 0, y: 0 };

    function handleMouseMove(e: MouseEvent) {
      mouse.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.y = (e.clientY / window.innerHeight - 0.5) * 2;
    }

    window.addEventListener("mousemove", handleMouseMove);

    let frameId: number;
    let frameCount = 0;
    const clock = new THREE.Clock();

    function animate() {
      frameId = requestAnimationFrame(animate);

      const posAttr = geometry.attributes.position.array as Float32Array;

      for (let i = 0; i < particleCount; i++) {
        posAttr[i * 3] += velocities[i].x;
        posAttr[i * 3 + 1] += velocities[i].y;
        posAttr[i * 3 + 2] += velocities[i].z;

        if (Math.abs(posAttr[i * 3]) > 30) velocities[i].x *= -1;
        if (Math.abs(posAttr[i * 3 + 1]) > 20) velocities[i].y *= -1;
        if (Math.abs(posAttr[i * 3 + 2]) > 15) velocities[i].z *= -1;
      }

      geometry.attributes.position.needsUpdate = true;

      frameCount++;
      if (frameCount % 3 === 0) updateLines();

      points.rotation.y += 0.0007;
      lineSegments.rotation.y += 0.0007;

      const t = clock.getElapsedTime();
      shapes.forEach(({ mesh, speed, offset }) => {
        mesh.rotation.x += speed;
        mesh.rotation.y += speed * 1.3;
        mesh.position.y += Math.sin(t * 0.5 + offset) * 0.01;
      });

      camera.position.x += (mouse.x * 4 - camera.position.x) * 0.02;
      camera.position.y += (-mouse.y * 3 - camera.position.y) * 0.02;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    }

    animate();

    function handleResize() {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      renderer.dispose();
      geometry.dispose();
      material.dispose();
      linesGeometry.dispose();
      lineMaterial.dispose();
      shapes.forEach(({ mesh }) => {
        mesh.geometry.dispose();
        (mesh.material as THREE.Material).dispose();
      });
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none absolute inset-0"
    />
  );
}
