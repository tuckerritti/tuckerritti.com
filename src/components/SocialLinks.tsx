import { FunctionComponent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faFileAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const LinkedIn: FunctionComponent = () => (
  <div className="flex items-center mb-4">
    <span className="text-yellow-400 mr-3 w-6">
      <FontAwesomeIcon icon={faLinkedin} />
    </span>
    <a href="https://www.linkedin.com/in/tucker-ritti-201871236/" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:text-yellow-300">
      LinkedIn
    </a>
  </div>
);

const GitHub: FunctionComponent = () => (
  <div className="flex items-center mb-4">
    <span className="text-yellow-400 mr-3 w-6">
      <FontAwesomeIcon icon={faGithub} />
    </span>
    <a href="https://github.com/tuckerritti" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:text-yellow-300">
      GitHub
    </a>
  </div>
);

const Resume: FunctionComponent = () => (
  <div className="flex items-center mb-4">
    <span className="text-yellow-400 mr-3 w-6">
      <FontAwesomeIcon icon={faFileAlt} />
    </span>
    <a href="/resume" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:text-yellow-300">
      Resume
    </a>
  </div>
);

const Email: FunctionComponent = () => (
  <div className="flex items-center mb-4">
    <span className="text-yellow-400 mr-3 w-6">
      <FontAwesomeIcon icon={faEnvelope} />
    </span>
    <a href="mailto:tucker@tuckerritti.com" className="text-yellow-400 hover:text-yellow-300">
      tucker@tuckerritti.com
    </a>
  </div>
);

const SocialLinks: FunctionComponent = () => {
  return (
    <div className="mt-2 md:mt-4 text-lg md:text-xl flex flex-col items-center">
      <LinkedIn />
      <GitHub />
      <Resume />
      <Email />
    </div>
  );
};

export default SocialLinks; 