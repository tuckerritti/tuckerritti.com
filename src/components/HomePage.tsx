import { FunctionComponent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import SocialLinks from "./SocialLinks";
import { useFullPageScroller } from "./FullPageScroller";
import IconBackground from "./IconBackground";

const HomePage: FunctionComponent = () => {
  const fullpageApi = useFullPageScroller();
  
  return (
    <div className="section">
      <div className="bg-gray-900 flex flex-col items-center justify-center min-h-screen w-full relative px-4 py-8">
        <IconBackground />
        
        <div className="mb-4 md:mb-8">
          <div className="rounded-full bg-yellow-400 w-32 h-32 md:w-48 md:h-48 flex items-center justify-center">
            <div className="w-full h-full rounded-full overflow-hidden p-3 md:p-4">
              <img src="/images/profile.png" alt="Tucker Ritti" className="w-full h-full" />
            </div>
          </div>
        </div>
        
        <h1 className="text-yellow-400 text-4xl md:text-5xl lg:text-7xl font-bold mb-8 md:mb-16 tracking-wide text-center">Tucker Ritti</h1>
        
        <SocialLinks />
        
        <div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer" 
          onClick={() => fullpageApi.moveSectionDown()}
          aria-label="Scroll down"
        >
          <FontAwesomeIcon icon={faChevronDown} className="text-yellow-400 text-2xl md:text-3xl" />
        </div>
      </div>
    </div>
  );
};

export default HomePage; 