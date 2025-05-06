import { FunctionComponent } from "react";

const AboutSection: FunctionComponent = () => {  
  return (
    <div
      id="about-section"
      className="min-h-[50vh] w-full flex flex-col items-center justify-center bg-gray-800 relative px-4 py-8"
    >
      <h2 className="text-yellow-400 text-3xl md:text-4xl font-bold mb-8 tracking-wide text-center">
        About Me
      </h2>

      <div className="max-w-2xl text-white text-lg leading-relaxed text-center">
        <p className="mb-6">
          My name is Tucker Ritti, and I am an undergraduate computer science student at Georgia Tech. I have always been fascinated with how things work.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-12 mb-4">
          <div className="text-center">
            <p className="text-yellow-400 font-bold">GPA</p>
            <p>3.84 / 4.00</p>
          </div>
          <div className="text-center">
            <p className="text-yellow-400 font-bold">ACT Score</p>
            <p>36</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
