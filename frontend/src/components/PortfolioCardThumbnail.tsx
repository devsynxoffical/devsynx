"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { ClientProject } from "@/data/clients";

interface PortfolioCardThumbnailProps {
  project: ClientProject;
  aspectRatio?: string;
}

export function PortfolioCardThumbnail({ project, aspectRatio = "200px" }: PortfolioCardThumbnailProps) {
  const [imgSrc, setImgSrc] = useState(project.image);
  const [failed, setFailed] = useState(false);

  return (
    <Link
      href={`/clients/${project.id}/`}
      className="portfolio-card__image-wrap"
      style={{ display: "block", textDecoration: "none", position: "relative", height: aspectRatio }}
    >
      {!failed ? (
        <Image
          src={imgSrc}
          alt={`${project.clientName} preview`}
          fill
          style={{ objectFit: "cover", objectPosition: "top" }}
          onError={() => {
            if (project.desktopImage && imgSrc !== project.desktopImage) {
              setImgSrc(project.desktopImage);
            } else {
              setFailed(true);
            }
          }}
        />
      ) : (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: project.gradient || "linear-gradient(135deg, #0b151c, #06909d)",
            padding: "20px",
            textAlign: "center",
          }}
        >
          <div>
            <div style={{ display: "flex", justifyContent: "center", marginBottom: "8px" }}>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "44px",
                  height: "44px",
                  borderRadius: "12px",
                  background: "rgba(255,255,255,0.12)",
                  color: "#fff",
                }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" />
                  <path d="M8 21h8" />
                  <path d="M12 17v4" />
                </svg>
              </span>
            </div>
            <div style={{ fontSize: "0.938rem", fontWeight: 800, color: "#fff" }}>{project.clientName}</div>
            <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.75)" }}>{project.domain}</div>
          </div>
        </div>
      )}
      <div
        style={{
          position: "absolute",
          top: "12px",
          right: "12px",
          background: "rgba(5, 11, 14, 0.75)",
          backdropFilter: "blur(8px)",
          padding: "4px 12px",
          borderRadius: "12px",
          fontSize: "0.75rem",
          fontWeight: 700,
          color: "#fff",
          border: "1px solid rgba(255,255,255,0.15)",
          zIndex: 2,
          display: "inline-flex",
          alignItems: "center",
          gap: "6px",
        }}
      >
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
        <span>{project.region}</span>
      </div>
    </Link>
  );
}
