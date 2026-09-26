import { useState } from "react";
import { Link } from "react-router-dom";

const verificationEndpoint = import.meta.env.VITE_CERTIFICATE_API_URL;

export default function CertificateVerify() {
  const [result, setResult] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    const fields = new FormData(form);
    const payload = {
      certificateNumber: String(fields.get("certificateNumber") || "").trim(),
      serialNumber: String(fields.get("serialNumber") || "").trim()
    };

    if (!verificationEndpoint) {
      setResult({
        tone: "notice",
        message: "Online certificate verification is not connected yet. Send us your certificate number and serial number and our team will confirm the certificate for you."
      });
      return;
    }

    setResult({ tone: "pending", message: "Checking certificate details…" });
    try {
      const response = await fetch(verificationEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      if (!response.ok) throw new Error("verification-failed");
      const data = await response.json();
      setResult({
        tone: data?.verified ? "success" : "notice",
        message: data?.message || "Certificate details received. Our team will confirm the certificate status with you."
      });
      if (data?.verified) form.reset();
    } catch {
      setResult({
        tone: "error",
        message: "We could not verify this certificate right now. Please try again later or share the details with our team."
      });
    }
  };

  return (
    <form className="contact-form verify-form reveal reveal-right" onSubmit={handleSubmit}>
      <h3>Certificate Verification Portal</h3>
      <p>Enter the details printed on your calibration certificate.</p>
      <div className="form-grid">
        <div className="form-field">
          <label htmlFor="certificate-number">Calibration Certificate Number</label>
          <input id="certificate-number" name="certificateNumber" type="text" autoComplete="off" spellCheck="false" required />
        </div>
        <div className="form-field">
          <label htmlFor="certificate-serial">Serial Number</label>
          <input id="certificate-serial" name="serialNumber" type="text" autoComplete="off" spellCheck="false" required />
        </div>
      </div>
      <button className="button" type="submit">
        <span>Verify Certificate</span>
      </button>
      <p
        className={`form-status${result ? " is-visible" : ""}${result ? ` is-${result.tone}` : ""}`}
        role="status"
        aria-live="polite"
      >
        {result?.message || ""}
      </p>
      {result?.tone === "notice" ? (
        <p className="verify-help">
          Prefer to talk to us? <Link to="/contact">Contact the calibration team</Link>
        </p>
      ) : null}
    </form>
  );
}
