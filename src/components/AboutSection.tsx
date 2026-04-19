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
        <p className="mb-4">
          I'm Tucker, a junior at Dartmouth studying Computer Science and Economics.
        </p>
        <p className="mb-4">
          Most of what I work on lives at the intersection of software and business. I've interned at Amazon, Snap, and Loops, and in high school I founded Ticket Tutors, a tutoring marketplace that reached 1,900+ users. My interests sit with startups in fintech and construction tech, and I spend most of my time thinking about problems in those spaces.
        </p>
        <p className="mb-4">
          Outside of school, I'm a private pilot with an instrument rating, and I restore and flip Porsches. I'm also training for a triathlon later this year.
        </p>
        <p>
          If you want to talk about a project or an idea, my inbox is open.
        </p>
      </div>
    </div>
  );
};

export default AboutSection;
