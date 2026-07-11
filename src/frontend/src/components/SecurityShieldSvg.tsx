import type React from "react";

interface SecurityShieldSvgProps {
  className?: string;
}

/**
 * SecurityShieldSvg — Qmobile homepage security visualization
 *
 * Shows a central phone with a shield, surrounded by 5 blocked threats:
 * - Thieves (masked figure)
 * - Curious people (peeking eye)
 * - Forensic devices (microscope/chip)
 * - Fake base stations (cell tower)
 * - App spying (bug with antenna)
 *
 * Each threat has a colored border matching Qmobile's accent system:
 * blue = system/trust, green = security-focused OS, black = privacy/stealth,
 * purple = Q-PWA/messaging.
 *
 * Usage: <SecurityShieldSvg className="w-full max-w-lg" />
 */
export const SecurityShieldSvg: React.FC<SecurityShieldSvgProps> = ({
  className = "",
}) => {
  const blue = "oklch(0.45 0.18 240)";
  const green = "oklch(0.58 0.2 170)";
  const black = "oklch(0.15 0.01 260)";
  const purple = "oklch(0.55 0.2 300)";

  const phoneBody = "oklch(0.18 0.018 260)";
  const phoneScreen = "oklch(0.12 0.015 260)";
  const shieldFill = "oklch(0.58 0.2 170 / 0.15)";
  const shieldStroke = "oklch(0.58 0.2 170)";
  const blockedStroke = "oklch(0.55 0.22 25)";
  const threatFill = "oklch(0.22 0.02 260)";
  const threatStroke = "oklch(0.52 0.012 260)";
  const waveStroke = "oklch(0.45 0.18 240 / 0.3)";
  const bgGrid = "oklch(0.22 0.02 260 / 0.3)";

  return (
    <svg
      viewBox="0 0 600 500"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Security phone protecting against threats"
      role="img"
    >
      <defs>
        {/* Subtle grid pattern for background depth */}
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path
            d="M 40 0 L 0 0 0 40"
            fill="none"
            stroke={bgGrid}
            strokeWidth="0.5"
          />
        </pattern>

        {/* Shield glow filter */}
        <filter id="shieldGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="8" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Pulse animation for shield ring */}
        <style>{`
          @keyframes pulse-ring {
            0%, 100% { opacity: 0.4; r: 95; }
            50% { opacity: 0.7; r: 105; }
          }
          .shield-ring {
            animation: pulse-ring 3s ease-in-out infinite;
          }
          @keyframes block-flash {
            0%, 100% { opacity: 0.6; }
            50% { opacity: 1; }
          }
          .block-line {
            animation: block-flash 2s ease-in-out infinite;
          }
        `}</style>
      </defs>

      {/* Background grid */}
      <rect width="600" height="500" fill="url(#grid)" />

      {/* Concentric shield waves emanating from phone */}
      <circle
        cx="300"
        cy="250"
        r="140"
        fill="none"
        stroke={waveStroke}
        strokeWidth="1"
        opacity="0.3"
      />
      <circle
        cx="300"
        cy="250"
        r="170"
        fill="none"
        stroke={waveStroke}
        strokeWidth="1"
        opacity="0.2"
      />
      <circle
        cx="300"
        cy="250"
        r="200"
        fill="none"
        stroke={waveStroke}
        strokeWidth="0.5"
        opacity="0.15"
      />

      {/* ===== THREAT 1: THIEVES (top-left) — Blue accent ===== */}
      <g transform="translate(80, 80)">
        {/* Threat circle background */}
        <circle
          cx="50"
          cy="50"
          r="48"
          fill={threatFill}
          stroke={blue}
          strokeWidth="2"
        />
        {/* Masked thief icon */}
        <circle cx="50" cy="35" r="14" fill={threatStroke} />
        <path
          d="M 30 55 Q 50 45 70 55 L 70 75 Q 50 85 30 75 Z"
          fill={threatStroke}
        />
        {/* Mask eye slits */}
        <rect x="40" y="33" width="8" height="3" rx="1" fill={phoneBody} />
        <rect x="52" y="33" width="8" height="3" rx="1" fill={phoneBody} />
        {/* Block slash */}
        <line
          x1="20"
          y1="20"
          x2="80"
          y2="80"
          stroke={blockedStroke}
          strokeWidth="4"
          strokeLinecap="round"
          className="block-line"
        />
      </g>

      {/* ===== THREAT 2: CURIOUS PEOPLE (top-right) — Green accent ===== */}
      <g transform="translate(420, 80)">
        <circle
          cx="50"
          cy="50"
          r="48"
          fill={threatFill}
          stroke={green}
          strokeWidth="2"
        />
        {/* Peeking eye icon */}
        <ellipse
          cx="50"
          cy="50"
          rx="22"
          ry="14"
          fill="none"
          stroke={threatStroke}
          strokeWidth="2.5"
        />
        <circle cx="50" cy="50" r="8" fill={threatStroke} />
        <circle cx="50" cy="50" r="3" fill={phoneBody} />
        {/* Peeking corner (hand/curtain) */}
        <path
          d="M 72 38 Q 85 45 80 62"
          fill="none"
          stroke={threatStroke}
          strokeWidth="2"
          strokeLinecap="round"
        />
        {/* Block slash */}
        <line
          x1="20"
          y1="20"
          x2="80"
          y2="80"
          stroke={blockedStroke}
          strokeWidth="4"
          strokeLinecap="round"
          className="block-line"
        />
      </g>

      {/* ===== THREAT 3: FORENSIC DEVICES (bottom-left) — Black accent ===== */}
      <g transform="translate(80, 320)">
        <circle
          cx="50"
          cy="50"
          r="48"
          fill={threatFill}
          stroke={black}
          strokeWidth="2"
        />
        {/* Microscope / forensic chip icon */}
        <rect
          x="30"
          y="35"
          width="40"
          height="30"
          rx="3"
          fill="none"
          stroke={threatStroke}
          strokeWidth="2"
        />
        {/* Chip pins */}
        <line
          x1="25"
          y1="42"
          x2="30"
          y2="42"
          stroke={threatStroke}
          strokeWidth="2"
        />
        <line
          x1="25"
          y1="50"
          x2="30"
          y2="50"
          stroke={threatStroke}
          strokeWidth="2"
        />
        <line
          x1="25"
          y1="58"
          x2="30"
          y2="58"
          stroke={threatStroke}
          strokeWidth="2"
        />
        <line
          x1="70"
          y1="42"
          x2="75"
          y2="42"
          stroke={threatStroke}
          strokeWidth="2"
        />
        <line
          x1="70"
          y1="50"
          x2="75"
          y2="50"
          stroke={threatStroke}
          strokeWidth="2"
        />
        <line
          x1="70"
          y1="58"
          x2="75"
          y2="58"
          stroke={threatStroke}
          strokeWidth="2"
        />
        {/* Circuit trace */}
        <path
          d="M 40 45 L 45 45 L 48 50 L 55 50"
          fill="none"
          stroke={threatStroke}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle cx="40" cy="45" r="2" fill={threatStroke} />
        <circle cx="55" cy="50" r="2" fill={threatStroke} />
        {/* Block slash */}
        <line
          x1="20"
          y1="20"
          x2="80"
          y2="80"
          stroke={blockedStroke}
          strokeWidth="4"
          strokeLinecap="round"
          className="block-line"
        />
      </g>

      {/* ===== THREAT 4: FAKE BASE STATIONS (bottom-right) — Purple accent ===== */}
      <g transform="translate(420, 320)">
        <circle
          cx="50"
          cy="50"
          r="48"
          fill={threatFill}
          stroke={purple}
          strokeWidth="2"
        />
        {/* Cell tower icon */}
        <line
          x1="50"
          y1="70"
          x2="50"
          y2="25"
          stroke={threatStroke}
          strokeWidth="3"
          strokeLinecap="round"
        />
        {/* Tower crossbars */}
        <line
          x1="35"
          y1="40"
          x2="65"
          y2="40"
          stroke={threatStroke}
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="40"
          y1="32"
          x2="60"
          y2="32"
          stroke={threatStroke}
          strokeWidth="2"
          strokeLinecap="round"
        />
        {/* Signal waves (fake/bad) */}
        <path
          d="M 65 28 Q 75 22 80 30"
          fill="none"
          stroke={blockedStroke}
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.7"
        />
        <path
          d="M 68 22 Q 82 12 88 24"
          fill="none"
          stroke={blockedStroke}
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.5"
        />
        {/* Block slash */}
        <line
          x1="20"
          y1="20"
          x2="80"
          y2="80"
          stroke={blockedStroke}
          strokeWidth="4"
          strokeLinecap="round"
          className="block-line"
        />
      </g>

      {/* ===== THREAT 5: APP SPYING (bottom-center) — Blue accent ===== */}
      <g transform="translate(250, 400)">
        <circle
          cx="50"
          cy="40"
          r="38"
          fill={threatFill}
          stroke={blue}
          strokeWidth="2"
        />
        {/* Bug / spy app icon */}
        <ellipse
          cx="50"
          cy="40"
          rx="14"
          ry="10"
          fill="none"
          stroke={threatStroke}
          strokeWidth="2"
        />
        {/* Antenna */}
        <line
          x1="50"
          y1="30"
          x2="50"
          y2="15"
          stroke={threatStroke}
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="50" cy="12" r="2.5" fill={threatStroke} />
        {/* Bug legs */}
        <line
          x1="38"
          y1="35"
          x2="30"
          y2="30"
          stroke={threatStroke}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <line
          x1="38"
          y1="42"
          x2="30"
          y2="45"
          stroke={threatStroke}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <line
          x1="62"
          y1="35"
          x2="70"
          y2="30"
          stroke={threatStroke}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <line
          x1="62"
          y1="42"
          x2="70"
          y2="45"
          stroke={threatStroke}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        {/* Block slash */}
        <line
          x1="18"
          y1="12"
          x2="82"
          y2="68"
          stroke={blockedStroke}
          strokeWidth="3.5"
          strokeLinecap="round"
          className="block-line"
        />
      </g>

      {/* ===== CENTRAL PHONE WITH SHIELD ===== */}
      <g transform="translate(300, 250)">
        {/* Outer glow ring */}
        <circle
          cx="0"
          cy="0"
          r="100"
          fill="none"
          stroke={shieldStroke}
          strokeWidth="1.5"
          opacity="0.25"
          className="shield-ring"
        />

        {/* Phone body */}
        <rect
          x="-55"
          y="-95"
          width="110"
          height="190"
          rx="16"
          fill={phoneBody}
          stroke={threatStroke}
          strokeWidth="2"
        />

        {/* Phone screen */}
        <rect
          x="-48"
          y="-85"
          width="96"
          height="170"
          rx="10"
          fill={phoneScreen}
        />

        {/* Notch */}
        <rect x="-18" y="-88" width="36" height="6" rx="3" fill={phoneBody} />

        {/* Shield icon on screen */}
        <g transform="translate(0, -10)" filter="url(#shieldGlow)">
          {/* Shield shape */}
          <path
            d="M 0 -35 C 20 -25 30 -10 30 10 C 30 30 0 48 0 48 C 0 48 -30 30 -30 10 C -30 -10 -20 -25 0 -35 Z"
            fill={shieldFill}
            stroke={shieldStroke}
            strokeWidth="2.5"
          />
          {/* Checkmark inside shield */}
          <polyline
            points="-12,2 -4,12 16,-10"
            fill="none"
            stroke={green}
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>

        {/* Home indicator */}
        <rect
          x="-15"
          y="78"
          width="30"
          height="3"
          rx="1.5"
          fill={threatStroke}
          opacity="0.5"
        />
      </g>
    </svg>
  );
};

export default SecurityShieldSvg;
