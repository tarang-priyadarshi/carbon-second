import { useState } from "react";
import api from "../services/api";

export default function ForgotPassword() {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");

  const sendOtp = async () => {
    const res = await api.post("/auth/forgot-password", { email });
    alert("OTP: " + res.data.otp);
    setStep(2);
  };

  const reset = async () => {
    await api.post("/auth/reset-password", { email, otp, newPassword: password });
    alert("Password reset");
  };

  return (
    <div>
      {step === 1 ? (
        <>
          <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
          <button onClick={sendOtp}>Send OTP</button>
        </>
      ) : (
        <>
          <input placeholder="OTP" onChange={e => setOtp(e.target.value)} />
          <input type="password" placeholder="New Password" onChange={e => setPassword(e.target.value)} />
          <button onClick={reset}>Reset Password</button>
        </>
      )}
    </div>
  );
}
