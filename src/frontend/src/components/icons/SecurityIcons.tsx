import type React from "react";

interface IconProps {
  className?: string;
}

/* ===== 1. LockNotificationIcon (bell with lock) ===== */
export const LockNotificationIcon: React.FC<IconProps> = ({
  className = "",
}) => (
  <svg
    viewBox="0 0 64 64"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-label="Lock notification icon"
    role="img"
  >
    {/* Bell body */}
    <path d="M32 8 C 22 8 18 16 18 24 L 18 38 L 12 44 L 52 44 L 46 38 L 46 24 C 46 16 42 8 32 8 Z" />
    {/* Bell clapper */}
    <circle cx="32" cy="48" r="4" />
    {/* Lock on bell */}
    <rect x="26" y="18" width="12" height="10" rx="2" />
    <path d="M29 18 V 14 A 3 3 0 0 1 35 14 V 18" />
  </svg>
);

/* ===== 2. PerAppLockIcon (grid with locks) ===== */
export const PerAppLockIcon: React.FC<IconProps> = ({ className = "" }) => (
  <svg
    viewBox="0 0 64 64"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-label="Per-app lock icon"
    role="img"
  >
    {/* 2x2 grid */}
    <rect x="8" y="8" width="20" height="20" rx="3" />
    <rect x="36" y="8" width="20" height="20" rx="3" />
    <rect x="8" y="36" width="20" height="20" rx="3" />
    <rect x="36" y="36" width="20" height="20" rx="3" />
    {/* Locks on each cell */}
    <rect x="14" y="14" width="8" height="6" rx="1" strokeWidth="2" />
    <path d="M16 14 V 12 A 2 2 0 0 1 20 12 V 14" strokeWidth="2" />
    <rect x="42" y="14" width="8" height="6" rx="1" strokeWidth="2" />
    <path d="M44 14 V 12 A 2 2 0 0 1 48 12 V 14" strokeWidth="2" />
    <rect x="14" y="42" width="8" height="6" rx="1" strokeWidth="2" />
    <path d="M16 42 V 40 A 2 2 0 0 1 20 40 V 42" strokeWidth="2" />
    <rect x="42" y="42" width="8" height="6" rx="1" strokeWidth="2" />
    <path d="M44 42 V 40 A 2 2 0 0 1 48 40 V 42" strokeWidth="2" />
  </svg>
);

/* ===== 3. SelfDestructIcon (phone with timer) ===== */
export const SelfDestructIcon: React.FC<IconProps> = ({ className = "" }) => (
  <svg
    viewBox="0 0 64 64"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-label="Self destruct icon"
    role="img"
  >
    {/* Phone body */}
    <rect x="18" y="6" width="28" height="52" rx="5" />
    {/* Screen */}
    <rect x="22" y="14" width="20" height="32" rx="2" />
    {/* Timer circle on screen */}
    <circle cx="32" cy="30" r="10" />
    {/* Timer hands */}
    <line x1="32" y1="30" x2="32" y2="24" />
    <line x1="32" y1="30" x2="36" y2="30" />
    {/* Home indicator */}
    <line x1="28" y1="52" x2="36" y2="52" strokeWidth="2" />
  </svg>
);

/* ===== 4. FiveGToLteIcon (signal bars with arrow) ===== */
export const FiveGToLteIcon: React.FC<IconProps> = ({ className = "" }) => (
  <svg
    viewBox="0 0 64 64"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-label="5G to LTE icon"
    role="img"
  >
    {/* Signal bars */}
    <line x1="8" y1="52" x2="8" y2="44" strokeWidth="3" />
    <line x1="16" y1="52" x2="16" y2="36" strokeWidth="3" />
    <line x1="24" y1="52" x2="24" y2="28" strokeWidth="3" />
    <line x1="32" y1="52" x2="32" y2="20" strokeWidth="3" />
    {/* Arrow pointing down (degradation) */}
    <path d="M44 16 L 56 28" />
    <polyline points="50,28 56,28 56,22" />
    {/* Crossed out 5G text representation */}
    <line x1="40" y1="8" x2="52" y2="8" strokeWidth="2" />
    <line x1="46" y1="8" x2="46" y2="14" strokeWidth="2" />
    <line x1="40" y1="14" x2="52" y2="14" strokeWidth="2" />
    <line x1="50" y1="10" x2="54" y2="6" strokeWidth="2" />
  </svg>
);

/* ===== 5. MultipleProfilesIcon (two users) ===== */
export const MultipleProfilesIcon: React.FC<IconProps> = ({
  className = "",
}) => (
  <svg
    viewBox="0 0 64 64"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-label="Multiple profiles icon"
    role="img"
  >
    {/* First user (front) */}
    <circle cx="28" cy="20" r="8" />
    <path d="M14 52 C 14 40 20 34 28 34 C 36 34 42 40 42 52" />
    {/* Second user (back, offset) */}
    <circle cx="44" cy="16" r="6" strokeWidth="2" />
    <path d="M34 44 C 34 34 38 28 44 28 C 50 28 54 34 54 44" strokeWidth="2" />
  </svg>
);

/* ===== 6. BfuProtectionIcon (shield with fingerprint) ===== */
export const BfuProtectionIcon: React.FC<IconProps> = ({ className = "" }) => (
  <svg
    viewBox="0 0 64 64"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-label="BFU protection icon"
    role="img"
  >
    {/* Shield */}
    <path d="M32 6 C 42 12 52 16 52 28 C 52 42 42 52 32 58 C 22 52 12 42 12 28 C 12 16 22 12 32 6 Z" />
    {/* Fingerprint */}
    <path d="M26 28 C 26 22 30 20 32 20 C 34 20 38 22 38 28" strokeWidth="2" />
    <path d="M28 32 C 28 28 30 26 32 26 C 34 26 36 28 36 32" strokeWidth="2" />
    <path d="M30 36 C 30 34 31 33 32 33 C 33 33 34 34 34 36" strokeWidth="2" />
    <circle cx="32" cy="40" r="1.5" fill="currentColor" stroke="none" />
  </svg>
);

/* ===== 7. ScrambledPinIcon (scrambled keypad) ===== */
export const ScrambledPinIcon: React.FC<IconProps> = ({ className = "" }) => (
  <svg
    viewBox="0 0 64 64"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-label="Scrambled PIN icon"
    role="img"
  >
    {/* Keypad grid 3x3 */}
    <circle cx="16" cy="14" r="3" />
    <circle cx="32" cy="14" r="3" />
    <circle cx="48" cy="14" r="3" />
    <circle cx="16" cy="32" r="3" />
    <circle cx="32" cy="32" r="3" />
    <circle cx="48" cy="32" r="3" />
    <circle cx="16" cy="50" r="3" />
    <circle cx="32" cy="50" r="3" />
    <circle cx="48" cy="50" r="3" />
    {/* Scramble arrows */}
    <path d="M8 8 L 12 12" strokeWidth="2" />
    <path d="M56 8 L 52 12" strokeWidth="2" />
    <path d="M8 56 L 12 52" strokeWidth="2" />
    <path d="M56 56 L 52 52" strokeWidth="2" />
  </svg>
);

/* ===== 8. UsbLockdownIcon (USB with lock) ===== */
export const UsbLockdownIcon: React.FC<IconProps> = ({ className = "" }) => (
  <svg
    viewBox="0 0 64 64"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-label="USB lockdown icon"
    role="img"
  >
    {/* USB connector body */}
    <rect x="24" y="6" width="16" height="14" rx="2" />
    {/* USB metal plug */}
    <rect x="28" y="2" width="8" height="6" rx="1" strokeWidth="2" />
    {/* USB holes */}
    <circle cx="30" cy="5" r="1" fill="currentColor" stroke="none" />
    <circle cx="34" cy="5" r="1" fill="currentColor" stroke="none" />
    {/* Cable */}
    <line x1="32" y1="20" x2="32" y2="32" />
    {/* Lock body */}
    <rect x="22" y="32" width="20" height="16" rx="3" />
    {/* Lock shackle */}
    <path d="M26 32 V 26 A 6 6 0 0 1 38 26 V 32" />
    {/* Keyhole */}
    <circle cx="32" cy="40" r="2" fill="currentColor" stroke="none" />
    <line x1="32" y1="42" x2="32" y2="46" strokeWidth="2" />
  </svg>
);

/* ===== 9. LockdownModeIcon (fortified shield) ===== */
export const LockdownModeIcon: React.FC<IconProps> = ({ className = "" }) => (
  <svg
    viewBox="0 0 64 64"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-label="Lockdown mode icon"
    role="img"
  >
    {/* Outer fortified shield */}
    <path d="M32 4 C 44 10 54 16 54 30 C 54 46 44 54 32 60 C 20 54 10 46 10 30 C 10 16 20 10 32 4 Z" />
    {/* Inner shield */}
    <path
      d="M32 14 C 38 18 44 22 44 30 C 44 40 38 46 32 50 C 26 46 20 40 20 30 C 20 22 26 18 32 14 Z"
      strokeWidth="2"
    />
    {/* Lock in center */}
    <rect x="26" y="28" width="12" height="10" rx="2" strokeWidth="2" />
    <path d="M29 28 V 24 A 3 3 0 0 1 35 24 V 28" strokeWidth="2" />
    {/* Fortress crenellations on top */}
    <line x1="20" y1="10" x2="20" y2="6" strokeWidth="2" />
    <line x1="32" y1="8" x2="32" y2="4" strokeWidth="2" />
    <line x1="44" y1="10" x2="44" y2="6" strokeWidth="2" />
  </svg>
);

/* ===== 10. KillPinIcon (keypad with X) ===== */
export const KillPinIcon: React.FC<IconProps> = ({ className = "" }) => (
  <svg
    viewBox="0 0 64 64"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-label="Kill PIN icon"
    role="img"
  >
    {/* Keypad outline */}
    <rect x="10" y="6" width="44" height="52" rx="4" />
    {/* Key rows */}
    <circle cx="22" cy="18" r="3" strokeWidth="2" />
    <circle cx="32" cy="18" r="3" strokeWidth="2" />
    <circle cx="42" cy="18" r="3" strokeWidth="2" />
    <circle cx="22" cy="32" r="3" strokeWidth="2" />
    <circle cx="32" cy="32" r="3" strokeWidth="2" />
    <circle cx="42" cy="32" r="3" strokeWidth="2" />
    <circle cx="22" cy="46" r="3" strokeWidth="2" />
    <circle cx="32" cy="46" r="3" strokeWidth="2" />
    <circle cx="42" cy="46" r="3" strokeWidth="2" />
    {/* X overlay */}
    <line x1="48" y1="8" x2="60" y2="20" strokeWidth="3" />
    <line x1="60" y1="8" x2="48" y2="20" strokeWidth="3" />
  </svg>
);

/* ===== 11. SensorPrivacyIcon (location pin with eye-slash) ===== */
export const SensorPrivacyIcon: React.FC<IconProps> = ({ className = "" }) => (
  <svg
    viewBox="0 0 64 64"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-label="Sensor privacy icon"
    role="img"
  >
    {/* Location pin */}
    <path d="M32 8 C 20 8 14 18 14 26 C 14 38 32 54 32 54 C 32 54 50 38 50 26 C 50 18 44 8 32 8 Z" />
    <circle cx="32" cy="26" r="6" />
    {/* Eye-slash overlay */}
    <line x1="14" y1="14" x2="50" y2="50" strokeWidth="3" />
    <path d="M20 20 Q 32 14 44 20" strokeWidth="2" />
    <path d="M18 26 Q 32 20 46 26" strokeWidth="2" />
  </svg>
);

/* ===== 12. HardwareVerificationIcon (chip with checkmark) ===== */
export const HardwareVerificationIcon: React.FC<IconProps> = ({
  className = "",
}) => (
  <svg
    viewBox="0 0 64 64"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-label="Hardware verification icon"
    role="img"
  >
    {/* Chip body */}
    <rect x="14" y="14" width="36" height="36" rx="4" />
    {/* Inner chip square */}
    <rect x="22" y="22" width="20" height="20" rx="2" strokeWidth="2" />
    {/* Chip pins top */}
    <line x1="22" y1="14" x2="22" y2="10" strokeWidth="2" />
    <line x1="32" y1="14" x2="32" y2="10" strokeWidth="2" />
    <line x1="42" y1="14" x2="42" y2="10" strokeWidth="2" />
    {/* Chip pins bottom */}
    <line x1="22" y1="50" x2="22" y2="54" strokeWidth="2" />
    <line x1="32" y1="50" x2="32" y2="54" strokeWidth="2" />
    <line x1="42" y1="50" x2="42" y2="54" strokeWidth="2" />
    {/* Chip pins left */}
    <line x1="14" y1="22" x2="10" y2="22" strokeWidth="2" />
    <line x1="14" y1="32" x2="10" y2="32" strokeWidth="2" />
    <line x1="14" y1="42" x2="10" y2="42" strokeWidth="2" />
    {/* Chip pins right */}
    <line x1="50" y1="22" x2="54" y2="22" strokeWidth="2" />
    <line x1="50" y1="32" x2="54" y2="32" strokeWidth="2" />
    <line x1="50" y1="42" x2="54" y2="42" strokeWidth="2" />
    {/* Checkmark */}
    <polyline points="26,32 30,36 38,28" strokeWidth="3" />
  </svg>
);

/* ===== 13. TopFiveIcon (star badge) ===== */
export const TopFiveIcon: React.FC<IconProps> = ({ className = "" }) => (
  <svg
    viewBox="0 0 64 64"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-label="Top five icon"
    role="img"
  >
    {/* Badge circle */}
    <circle cx="32" cy="32" r="26" />
    {/* Star */}
    <path d="M32 10 L 36 24 L 50 24 L 39 32 L 43 46 L 32 38 L 21 46 L 25 32 L 14 24 L 28 24 Z" />
    {/* Number 5 */}
    <path
      d="M28 52 L 36 52 L 36 56 L 28 56 M 28 52 L 28 48 L 34 48 L 34 44 L 28 44"
      strokeWidth="2"
      strokeLinecap="square"
    />
  </svg>
);

/* ===== 14. AntiTrackingIcon (eye with slash and signal waves) ===== */
export const AntiTrackingIcon: React.FC<IconProps> = ({ className = "" }) => (
  <svg
    viewBox="0 0 64 64"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-label="Anti-tracking icon"
    role="img"
  >
    {/* Eye outline */}
    <path d="M6 32 C 14 18 24 14 32 14 C 40 14 50 18 58 32 C 50 46 40 50 32 50 C 24 50 14 46 6 32 Z" />
    {/* Pupil */}
    <circle cx="32" cy="32" r="8" strokeWidth="2" />
    {/* Slash through eye */}
    <line x1="10" y1="10" x2="54" y2="54" strokeWidth="3" />
    {/* Tracking signal waves blocked */}
    <path d="M44 8 Q 52 12 54 20" strokeWidth="2" />
    <path d="M50 6 Q 58 12 58 22" strokeWidth="2" />
  </svg>
);

/* ===== 15. AppSandboxIcon (box within box, isolated) ===== */
export const AppSandboxIcon: React.FC<IconProps> = ({ className = "" }) => (
  <svg
    viewBox="0 0 64 64"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-label="App sandbox icon"
    role="img"
  >
    {/* Outer container */}
    <rect x="6" y="6" width="52" height="52" rx="4" />
    {/* Inner sandboxed app box */}
    <rect x="20" y="20" width="24" height="24" rx="3" strokeWidth="2" />
    {/* App icon dots inside */}
    <circle cx="28" cy="28" r="1.5" fill="currentColor" stroke="none" />
    <circle cx="36" cy="28" r="1.5" fill="currentColor" stroke="none" />
    <circle cx="28" cy="36" r="1.5" fill="currentColor" stroke="none" />
    <circle cx="36" cy="36" r="1.5" fill="currentColor" stroke="none" />
    {/* Isolation barrier lines (dashed feel via short segments) */}
    <line x1="6" y1="20" x2="20" y2="20" strokeWidth="2" />
    <line x1="44" y1="20" x2="58" y2="20" strokeWidth="2" />
    <line x1="6" y1="44" x2="20" y2="44" strokeWidth="2" />
    <line x1="44" y1="44" x2="58" y2="44" strokeWidth="2" />
  </svg>
);

/* ===== 16. SecureBootIcon (chip with shield and lock) ===== */
export const SecureBootIcon: React.FC<IconProps> = ({ className = "" }) => (
  <svg
    viewBox="0 0 64 64"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-label="Secure boot icon"
    role="img"
  >
    {/* Boot arrow (power-on) */}
    <path d="M32 8 L 32 24" strokeWidth="3" />
    <path d="M20 14 A 16 16 0 1 0 44 14" strokeWidth="3" />
    {/* Shield below */}
    <path
      d="M32 32 C 38 36 44 38 44 46 C 44 52 38 56 32 58 C 26 56 20 52 20 46 C 20 38 26 36 32 32 Z"
      strokeWidth="2"
    />
    {/* Lock inside shield */}
    <rect x="27" y="42" width="10" height="8" rx="1.5" strokeWidth="2" />
    <path d="M29 42 V 39 A 3 3 0 0 1 35 39 V 42" strokeWidth="2" />
  </svg>
);

/* ===== 17. EndToEndEncryptionIcon (two devices with lock and key exchange) ===== */
export const EndToEndEncryptionIcon: React.FC<IconProps> = ({
  className = "",
}) => (
  <svg
    viewBox="0 0 64 64"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-label="End-to-end encryption icon"
    role="img"
  >
    {/* Left device */}
    <rect x="4" y="14" width="16" height="24" rx="2" strokeWidth="2" />
    <line x1="8" y1="34" x2="16" y2="34" strokeWidth="2" />
    {/* Right device */}
    <rect x="44" y="14" width="16" height="24" rx="2" strokeWidth="2" />
    <line x1="48" y1="34" x2="56" y2="34" strokeWidth="2" />
    {/* Encrypted channel (dashed line) */}
    <line x1="20" y1="26" x2="28" y2="26" strokeWidth="2" />
    <line x1="36" y1="26" x2="44" y2="26" strokeWidth="2" />
    {/* Lock in middle */}
    <rect x="28" y="22" width="8" height="8" rx="1.5" strokeWidth="2" />
    <path d="M30 22 V 19 A 2 2 0 0 1 34 19 V 22" strokeWidth="2" />
    {/* Key exchange dots */}
    <circle cx="24" cy="26" r="1" fill="currentColor" stroke="none" />
    <circle cx="40" cy="26" r="1" fill="currentColor" stroke="none" />
  </svg>
);

/* ===== 18. ServerSideIcon (server rack with shield) ===== */
export const ServerSideIcon: React.FC<IconProps> = ({ className = "" }) => (
  <svg
    viewBox="0 0 64 64"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-label="Server-side icon"
    role="img"
  >
    {/* Server rack unit 1 */}
    <rect x="10" y="8" width="28" height="12" rx="2" strokeWidth="2" />
    <circle cx="16" cy="14" r="1" fill="currentColor" stroke="none" />
    <line x1="22" y1="14" x2="34" y2="14" strokeWidth="2" />
    {/* Server rack unit 2 */}
    <rect x="10" y="24" width="28" height="12" rx="2" strokeWidth="2" />
    <circle cx="16" cy="30" r="1" fill="currentColor" stroke="none" />
    <line x1="22" y1="30" x2="34" y2="30" strokeWidth="2" />
    {/* Server rack unit 3 */}
    <rect x="10" y="40" width="28" height="12" rx="2" strokeWidth="2" />
    <circle cx="16" cy="46" r="1" fill="currentColor" stroke="none" />
    <line x1="22" y1="46" x2="34" y2="46" strokeWidth="2" />
    {/* Shield on right (server-side protection) */}
    <path
      d="M48 12 C 54 16 58 18 58 28 C 58 40 54 46 48 52 C 42 46 38 40 38 28 C 38 18 42 16 48 12 Z"
      strokeWidth="2"
    />
    {/* Checkmark in shield */}
    <polyline points="43,32 46,36 53,28" strokeWidth="2.5" />
  </svg>
);

/* ===== 19. HideLockContentIcon (lock screen with hidden content) ===== */
export const HideLockContentIcon: React.FC<IconProps> = ({
  className = "",
}) => (
  <svg
    viewBox="0 0 64 64"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-label="Hide lock content icon"
    role="img"
  >
    {/* Phone outline */}
    <rect x="14" y="6" width="36" height="52" rx="4" />
    {/* Lock screen bar */}
    <line x1="14" y1="22" x2="50" y2="22" strokeWidth="2" />
    {/* Lock icon at top */}
    <rect x="27" y="12" width="10" height="7" rx="1.5" strokeWidth="2" />
    <path d="M29 12 V 9 A 2 2 0 0 1 33 9 V 12" strokeWidth="2" />
    {/* Hidden content blocks (blurred/redacted bars) */}
    <rect x="22" y="30" width="20" height="4" rx="1" strokeWidth="2" />
    <rect x="22" y="38" width="20" height="4" rx="1" strokeWidth="2" />
    <rect x="22" y="46" width="14" height="4" rx="1" strokeWidth="2" />
    {/* Eye-slash indicating hidden */}
    <line x1="18" y1="18" x2="46" y2="50" strokeWidth="2" />
  </svg>
);

/* ===== 20. RemoteWipeIcon (phone with remote erase waves) ===== */
export const RemoteWipeIcon: React.FC<IconProps> = ({ className = "" }) => (
  <svg
    viewBox="0 0 64 64"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-label="Remote wipe icon"
    role="img"
  >
    {/* Phone body */}
    <rect x="22" y="10" width="20" height="36" rx="3" strokeWidth="2" />
    {/* Erase X on screen */}
    <line x1="27" y1="18" x2="37" y2="28" strokeWidth="2" />
    <line x1="37" y1="18" x2="27" y2="28" strokeWidth="2" />
    {/* Home indicator */}
    <line x1="28" y1="42" x2="36" y2="42" strokeWidth="2" />
    {/* Remote signal waves emanating */}
    <path d="M14 28 Q 18 24 18 28 Q 18 32 14 28" strokeWidth="2" />
    <path d="M8 28 Q 14 18 14 28 Q 14 38 8 28" strokeWidth="2" />
    <path d="M50 28 Q 46 24 46 28 Q 46 32 50 28" strokeWidth="2" />
    <path d="M56 28 Q 50 18 50 28 Q 50 38 56 28" strokeWidth="2" />
    {/* Trash/erase bin below */}
    <path d="M26 50 L 28 56 L 36 56 L 38 50" strokeWidth="2" />
    <line x1="24" y1="50" x2="40" y2="50" strokeWidth="2" />
  </svg>
);

/* ===== 21. NetworkSecurityIcon (network nodes with shield) ===== */
export const NetworkSecurityIcon: React.FC<IconProps> = ({
  className = "",
}) => (
  <svg
    viewBox="0 0 64 64"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-label="Network security icon"
    role="img"
  >
    {/* Network nodes */}
    <circle cx="12" cy="14" r="4" strokeWidth="2" />
    <circle cx="52" cy="14" r="4" strokeWidth="2" />
    <circle cx="12" cy="50" r="4" strokeWidth="2" />
    <circle cx="52" cy="50" r="4" strokeWidth="2" />
    {/* Network connections to center shield */}
    <line x1="16" y1="16" x2="26" y2="28" strokeWidth="2" />
    <line x1="48" y1="16" x2="38" y2="28" strokeWidth="2" />
    <line x1="16" y1="48" x2="26" y2="36" strokeWidth="2" />
    <line x1="48" y1="48" x2="38" y2="36" strokeWidth="2" />
    {/* Central shield */}
    <path
      d="M32 24 C 36 27 40 28 40 34 C 40 40 36 43 32 45 C 28 43 24 40 24 34 C 24 28 28 27 32 24 Z"
      strokeWidth="2"
    />
    {/* Lock in shield */}
    <rect x="29" y="32" width="6" height="5" rx="1" strokeWidth="2" />
    <path d="M30 32 V 30 A 1.5 1.5 0 0 1 34 30 V 32" strokeWidth="2" />
  </svg>
);

/* ===== 22. ForensicProtectionIcon (magnifying glass with shield) ===== */
export const ForensicProtectionIcon: React.FC<IconProps> = ({
  className = "",
}) => (
  <svg
    viewBox="0 0 64 64"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-label="Forensic protection icon"
    role="img"
  >
    {/* Shield outline */}
    <path
      d="M32 6 C 42 12 50 16 50 28 C 50 42 42 50 32 56 C 22 50 14 42 14 28 C 14 16 22 12 32 6 Z"
      strokeWidth="2"
    />
    {/* Magnifying glass inside */}
    <circle cx="28" cy="30" r="8" strokeWidth="2" />
    <line x1="34" y1="36" x2="42" y2="44" strokeWidth="3" />
    {/* Forensic scan lines inside lens */}
    <line x1="22" y1="28" x2="34" y2="28" strokeWidth="1.5" />
    <line x1="22" y1="32" x2="34" y2="32" strokeWidth="1.5" />
    {/* Block cross (forensic resistance) */}
    <line x1="44" y1="14" x2="52" y2="22" strokeWidth="2" />
    <line x1="52" y1="14" x2="44" y2="22" strokeWidth="2" />
  </svg>
);
