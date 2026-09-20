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
      60,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 30;

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // --- Particules ---
    const particleCount = 110;
    const positions = new Float32Array(particleCount * 3);
    const velocities: THREE.Vector3[] = [];

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 60;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 40;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 30;

      velocities.push(
        new THREE.Vector3(
          (Math.random() - 0.5) * 0.02,
          (Math.random() - 0.5) * 0.02,
          (Math.random() - 0.5) * 0.02
        )
      );
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );

    // Couleurs alternées entre les tons de la marque
    const colors = new Float32Array(particleCount * 3);
    const palette = [
      new THREE.Color(0x148ad7),
      new THREE.Color(0x25c6e6),
      new THREE.Color(0xe7aa39),
    ];

    for (let i = 0; i < particleCount; i++) {
      const c = palette[i % palette.length];
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }

    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 0.55,
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
      sizeAttenuation: true,
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    // --- Lignes de connexion (effet "réseau") ---
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
              posAttr[i * 3],
              posAttr[i * 3 + 1],
              posAttr[i * 3 + 2],
              posAttr[j * 3],
              posAttr[j * 3 + 1],
              posAttr[j * 3 + 2]
            );
          }
        }
      }

      linesGeometry.setAttribute(
        "position",
        new THREE.BufferAttribute(new Float32Array(linePoints), 3)
      );
    }

    let frameId: number;
    let frameCount = 0;

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
      renderer.dispose();
      geometry.dispose();
      material.dispose();
      linesGeometry.dispose();
      lineMaterial.dispose();
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
