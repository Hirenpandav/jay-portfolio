import { useEffect } from "react";

const ResumeRedirect = () => {
  useEffect(() => {
    window.open("/resume.pdf", "_blank");
    // Optionally, redirect back to home or show a message
    window.location.replace("/");
  }, []);

  return <div>Opening resume...</div>;
};

export default ResumeRedirect;