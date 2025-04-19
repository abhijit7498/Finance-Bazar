import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const OTP_EXPIRY_TIME = 60 * 1000; // 60 seconds in milliseconds

// Function to generate and store OTP
export function generateOTP(length = 6) {
  const otp = Math.floor(100000 + Math.random() * 900000)
    .toString()
    .substring(0, length);

  const data = {
    otp,
    timestamp: Date.now(),
  };

  sessionStorage.setItem("otp_data", JSON.stringify(data));

  // Auto remove OTP after expiry
  setTimeout(() => {
    const stored = sessionStorage.getItem("otp_data");
    if (stored) {
      const { timestamp } = JSON.parse(stored);
      if (Date.now() - timestamp >= OTP_EXPIRY_TIME) {
        sessionStorage.removeItem("otp_data");
      }
    }
  }, OTP_EXPIRY_TIME);

  return otp;
}

// Function to get OTP only if it's not expired
export function getStoredOTP() {
  const data = sessionStorage.getItem("otp_data");

  if (!data) return "";

  try {
    const { otp, timestamp } = JSON.parse(data);

    if (Date.now() - timestamp > OTP_EXPIRY_TIME) {
      // Expired: remove from session storage
      sessionStorage.removeItem("otp_data");
      return "";
    }

    return otp;
  } catch (error) {
    console.error("Failed to parse OTP data:", error);
    return "";
  }
}

// Optional: Clear OTP manually
export function clearOTP() {
  sessionStorage.removeItem("otp_data");
}

export function AddSessionStorage(key, value) {
  const stringified = typeof value === "string" ? value : JSON.stringify(value);
  sessionStorage.setItem(key, stringified);
}
