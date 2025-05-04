import { FunctionComponent, useEffect } from "react";

const ResumePage: FunctionComponent = () => {
  useEffect(() => {
    // Redirect to Google when the component mounts
    window.location.href = "https://docs.google.com/document/d/1QovF2jplNSzTWZa0RNLTUX3F3omp7MpZ/edit";
  }, []);

  // This content will briefly appear before the redirect happens
  return (
    <div className="bg-gray-900 h-screen flex items-center justify-center">
      <p className="text-white text-xl">Redirecting to resume...</p>
    </div>
  );
};

export default ResumePage; 