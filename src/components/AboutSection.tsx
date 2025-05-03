import { FunctionComponent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { useFullPageScroller } from "./FullPageScroller";

const AboutSection: FunctionComponent = () => {
  const fullpageApi = useFullPageScroller();
  
  return (
    <div className="section">
      <div className="bg-gray-800 flex flex-col items-center justify-center min-h-screen w-full relative px-4 py-8">
        <h2 className="text-yellow-400 text-3xl md:text-4xl font-bold mb-8 tracking-wide text-center">About Me</h2>
        
        <div className="max-w-2xl text-white text-lg leading-relaxed">
          <p className="mb-4">
            I'm a passionate developer with expertise in web technologies and software development. 
            My journey in technology began with a curiosity about how things work, which has evolved 
            into a career building innovative solutions.
          </p>
          <p className="mb-4">
            When I'm not coding, you can find me exploring new technologies, contributing to open-source 
            projects, or enjoying outdoor activities.
          </p>
        </div>
        
        {/* Scroll up arrow */}
        <div 
          className="absolute top-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer" 
          onClick={() => fullpageApi.moveSectionUp()}
          aria-label="Scroll up"
        >
          <FontAwesomeIcon icon={faChevronUp} className="text-yellow-400 text-2xl md:text-3xl" />
        </div>
      </div>
    </div>
  );
};

export default AboutSection; 