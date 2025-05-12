import axios from "axios";

const URL = import.meta.env.VITE_API_BASE_URL;

// Send OTP to mobile
export const SendOtpToMobile = async ({ mobile, setError }) => {
  try {
    const response = await axios.post(`${URL}/send-otp`, { mobile });
    if (response.data.success) {
      console.log("OTP sent successfully");
    } else {
      setError(response.data.message || "Error sending OTP");
    }
  } catch (error) {
    console.error("Error sending OTP:", error);
    setError("Error sending OTP. Please try again later.");
  }
};

// Resend OTP
export const SendResendOTPTomobile = async ({ mobile, method, setError }) => {
  try {
    const response = await axios.post(`${URL}/send-otp`, { mobile, method });
    if (response.data.success) {
      console.log("OTP resent successfully via", method);
    } else {
      setError(response.data.message || "Error resending OTP");
    }
  } catch (error) {
    console.error("Error resending OTP:", error);
    setError("Error resending OTP. Please try again later.");
  }
};

// Verify OTP and login or create user
export const VerifyOTPToMobile = async ({
  mobile,
  otp,
  setOpen,
  onVerified,
  setError,
  navigate,
}) => {
  try {
    const response = await axios.post(`${URL}/verify-otp`, { mobile, otp });

    if (response.data.success) {
      const token = response.data.token;
      localStorage.setItem("token", token);

      setOpen(false);
      if (onVerified) onVerified();
      if (navigate) navigate();
    } else {
      setError(response.data.message || "Invalid OTP");
    }
  } catch (error) {
    console.error("Error verifying OTP:", error);
    setError(error?.response?.data?.message || "Error verifying OTP");
  }
};

// Google Login Handler
export const googleWithLogin = async (credentialResponse) => {
  try {
    const response = await axios.post(`${URL}/auth/google-login`, {
      token: credentialResponse.credential,
    });
    return response;
  } catch (err) {
    console.error("Error during Google login:", err);
    throw new Error("Login failed, please try again.");
  }
};
