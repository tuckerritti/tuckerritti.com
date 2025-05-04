import { FunctionComponent } from "react";
import { Link } from "react-router-dom";

const NotFoundPage: FunctionComponent = () => {
  return (
    <div className="bg-gray-900 h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-yellow-400 text-6xl font-bold mb-4">404</h1>
      <h2 className="text-white text-3xl font-semibold mb-6">Page Not Found</h2>
      <p className="text-gray-300 text-xl mb-8">The page you are looking for doesn't exist or has been moved.</p>
      <Link to="/" className="px-6 py-3 bg-yellow-400 text-gray-900 font-bold rounded-md hover:bg-yellow-300 transition-colors">
        Go Home
      </Link>
    </div>
  );
};

export default NotFoundPage; 