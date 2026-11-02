"use client";

import React, { useState, useEffect } from "react";

export const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = (localStorage.getItem("devsynx-theme") as "dark" | "light") || "dark";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    localStorage.setItem("devsynx-theme", nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
  };

  if (!mounted) {
    return <div style={{ width: '64px', height: '32px' }} />;
  }

  return (
    <button
      onClick={toggleTheme}
      className="theme-switch-pill"
      aria-label={`Switch to ${theme === "dark" ? "Light" : "Dark"} Mode`}
      title={`Switch to ${theme === "dark" ? "Light" : "Dark"} Mode`}
      style={{
        position: "relative",
        width: "68px",
        height: "34px",
        borderRadius: "20px",
        background: theme === "dark" ? "#0F172A" : "#E2E8F0",
        border: theme === "dark" ? "2px solid rgba(255,255,255,0.2)" : "2px solid #CBD5E1",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 6px",
        transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
        boxShadow: "0 2px 10px rgba(0,0,0,0.15)",
      }}
    >
      {/* Sun Icon (Left) */}
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FDBD02" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: theme === "light" ? 1 : 0.4 }}>
        <circle cx="12" cy="12" r="5" />
        <line x1="12" y1="1" x2="12" y2="3" />
        <line x1="12" y1="21" x2="12" y2="23" />
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
        <line x1="1" y1="12" x2="3" y2="12" />
        <line x1="21" y1="12" x2="23" y2="12" />
      </svg>

      {/* Moon Icon (Right) */}
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#06909D" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: theme === "dark" ? 1 : 0.4 }}>
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      </svg>

      {/* Sliding Knob */}
      <div
        style={{
          position: "absolute",
          top: "3px",
          left: theme === "dark" ? "37px" : "3px",
          width: "24px",
          height: "24px",
          borderRadius: "50%",
          background: theme === "dark" ? "#06909D" : "#FDBD02",
          boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
          transition: "left 0.3s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.3s ease",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {theme === "dark" ? (
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="3"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" /></svg>
        ) : (
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#0F172A" strokeWidth="3"><circle cx="12" cy="12" r="5" /></svg>
        )}
      </div>
    </button>
  );
};
