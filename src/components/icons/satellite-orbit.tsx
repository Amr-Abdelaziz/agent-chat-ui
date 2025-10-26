import React from "react";

export interface SatelliteOrbitIconProps {
  width?: string | number;
  height?: string | number;
  className?: string;
  title?: string;
}

// A clean, minimal satellite + orbit SVG matching the GitHubSVG convention
export const SatelliteOrbitIcon: React.FC<SatelliteOrbitIconProps> = ({
  width = "100%",
  height = "100%",
  className,
  title = "Satellite Orbit",
}) => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    width={width}
    height={height}
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <title>{title}</title>
    {/* Orbit ring */}
    <ellipse cx="12" cy="12.5" rx="8.5" ry="6.5" opacity="0.9" />
    {/* Satellite body */}
    <rect x="10.5" y="6.5" width="3" height="3.8" rx="0.6" />
    {/* Solar panels */}
    <rect x="7.2" y="7" width="2.5" height="2.8" rx="0.4" />
    <rect x="14.3" y="7" width="2.5" height="2.8" rx="0.4" />
    {/* Connectors */}
    <line x1="9.7" y1="8.4" x2="10.5" y2="8.4" />
    <line x1="13.5" y1="8.4" x2="14.3" y2="8.4" />
    {/* Antenna */}
    <path d="M12 10.3v1.8m0 0l1.2 1.2M12 12.1l-1.2 1.2" />
    {/* Sparkle/star near orbit for motion cue */}
    <path d="M18.2 5.5l.5 1 .9.2-.9.2-.5 1-.5-1-.9-.2.9-.2.5-1z" strokeWidth="1.2" />
  </svg>
);
