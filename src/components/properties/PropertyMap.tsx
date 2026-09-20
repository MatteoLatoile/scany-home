"use client";

import {
  useEffect,
  useRef,
} from "react";

import L from "leaflet";

import {
  Property,
  PropertyLocale,
} from "@/types/property";

type Props = {
  properties: Property[];
  locale: PropertyLocale;
};

export default function PropertyMap({
  properties,
  locale,
}: Props) {
  const containerRef =
    useRef<HTMLDivElement | null>(
      null
    );

  const mapRef =
    useRef<L.Map | null>(null);

  useEffect(() => {
    if (!containerRef.current) {
      return;
    }

    if (!mapRef.current) {
      mapRef.current = L.map(
        containerRef.current,
        {
          zoomControl: false,
        }
      ).setView(
        [24.4686, 39.6142],
        12
      );

      L.tileLayer(
        "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
        {
          attribution:
            "&copy; OpenStreetMap contributors",
        }
      ).addTo(mapRef.current);

      L.control
        .zoom({
          position: "bottomright",
        })
        .addTo(mapRef.current);
    }

    const map = mapRef.current;

    const layer =
      L.layerGroup().addTo(map);

    properties.forEach(
      (property) => {
        const priceMarker =
          L.divIcon({
            className: "",

            html: `
              <div style="
                background:#148ad7;
                color:white;
                padding:7px 11px;
                border-radius:999px;
                font-size:12px;
                font-weight:700;
                white-space:nowrap;
                box-shadow:0 6px 20px rgba(0,0,0,.18);
                border:2px solid white;
              ">
                ${property.price.toLocaleString()} SAR
              </div>
            `,

            iconSize: [90, 32],

            iconAnchor: [45, 16],
          });

        const marker = L.marker(
          [
            property.latitude,
            property.longitude,
          ],
          {
            icon: priceMarker,
          }
        );

        marker.bindPopup(`
          <div style="min-width:190px">
            <img
              src="${property.images[0]}"
              style="
                width:100%;
                height:100px;
                object-fit:cover;
                border-radius:12px;
                margin-bottom:10px;
              "
            />

            <strong
              style="
                display:block;
                font-size:14px;
                margin-bottom:5px;
              "
            >
              ${property.title[locale]}
            </strong>

            <span
              style="
                display:block;
                color:#64748b;
                font-size:12px;
                margin-bottom:9px;
              "
            >
              ${property.district[locale]}
            </span>

            <a
              href="/${locale}/properties/${property.slug}"
              style="
                display:block;
                background:#148ad7;
                color:white;
                text-decoration:none;
                text-align:center;
                border-radius:10px;
                padding:8px 10px;
                font-weight:600;
              "
            >
              View property
            </a>
          </div>
        `);

        marker.addTo(layer);
      }
    );

    if (properties.length > 1) {
      const bounds = L.latLngBounds(
        properties.map(
          (property) => [
            property.latitude,
            property.longitude,
          ]
        )
      );

      map.fitBounds(bounds, {
        padding: [45, 45],
        maxZoom: 14,
      });
    }

    if (properties.length === 1) {
      map.setView(
        [
          properties[0].latitude,
          properties[0].longitude,
        ],
        14
      );
    }

    return () => {
      layer.remove();
    };
  }, [properties, locale]);

  useEffect(() => {
    return () => {
      mapRef.current?.remove();
      mapRef.current = null;
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="h-full min-h-[520px] w-full"
    />
  );
}