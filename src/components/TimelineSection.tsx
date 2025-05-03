import { FunctionComponent } from "react";

interface TimelineItem {
  year: string;
  content: string;
}

const TimelineSection: FunctionComponent = () => {
  const timelineItems: TimelineItem[] = [
    { year: "2025:", content: "Software Engineering Internship at Amazon" },
    { year: "2024:", content: "Software Engineering Internship at Loops" },
    { year: "2022:", content: "Co-Founder and CTO of Ticket Tutors Inc." },
    { year: "2022:", content: "Creator and lead developer of the Crossroads Sign Out App" },
    { year: "2021:", content: "Completed the Stanford CS106B computer science summer program" },
    { year: "2020:", content: "Worked as a backend engineer at Cazino.LTD" },
    { year: "2023:", content: "Software Engineering Internship at Snap Inc on the Privacy Engineering Team" },
    { year: "2022:", content: "Software Engineering Internship at Snap Inc on the Human-Computer Interaction Team" },
    { year: "2022:", content: "Certified ASEL Private Pilot with an instrument rating" },
    { year: "2020:", content: "Lead Technical Director at Chords2Cure" },
    { year: "2020:", content: "Started a freelance web development business, creating full stack web applications and bitcoin casinos for clients" },
    { year: "2019:", content: "Started a network deployment business for residential infrastructures" },
    { year: "2019:", content: "Completed the cyber-security and encryption course at iDTech UCLA" },
    { year: "2019:", content: "Started a Discord community with 2,795 members that helps people perform P2P exchanges between crypto and fiat currencies. My co-owner and I manage 6 staff members which are paid based on commission" },
    { year: "2018:", content: "Completed the C++ course at iDTech UCLA" },
    { year: "2019:", content: "Converted VHS tapes to digital for customers, including Saban Entertainment, Inc." },
    { year: "2019:", content: "Completed the artificial intelligence and machine learning course at iDTech UCLA" },
    { year: "2018:", content: "Created a phone repair business, fixing phones for students and staff at my school" },
    { year: "2017:", content: "Started a custom PC building business" },
  ];
  
  return (
    <div className="py-20 pr-3 md:px-6 timeline-section">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-yellow-400 text-3xl md:text-4xl font-bold mb-6 tracking-wide text-center">
          My Timeline
        </h2>
        
        <div className="relative w-full">
          {/* Timeline center line - desktop center, mobile left */}
          <div className="absolute md:left-1/2 left-4 md:transform md:-translate-x-1/2 w-1 bg-yellow-400 h-full"></div>
          
          {/* Timeline content container */}
          <div className="relative">
            {timelineItems.map((item, index) => {
              const isLeft = index % 2 === 0; // Alternate between left and right on desktop
              
              return (
                <div key={`item-${index}`} className="flex flex-row items-start mb-8 md:mb-5">
                  {/* Left side content - hidden on mobile */}
                  <div className={`md:w-1/2 w-0 md:pr-8 md:text-right ${!isLeft && 'md:opacity-0'}`}>
                    {isLeft && (
                      <div className="hidden md:block">
                        <span className="text-yellow-400 font-mono font-bold">{item.year}</span>{" "}
                        <span className="text-white">{item.content}</span>
                      </div>
                    )}
                  </div>
                  
                  {/* Circle marker - centered on desktop, left on mobile */}
                  <div className="absolute md:left-1/2 ml-[10px] mt-[3px] md:m-0 md:transform md:-translate-x-1/2 flex items-center justify-center">
                    <div className="w-4 h-4 rounded-full bg-yellow-400"></div>
                  </div>
                  
                  {/* Right side content - all content on mobile */}
                  <div className={`md:w-1/2 w-full pl-8 ${isLeft && 'md:opacity-0'}`}>
                    {/* For desktop - show only on right side items */}
                    <div className="hidden md:block">
                      {!isLeft && (
                        <>
                          <span className="text-yellow-400 font-mono font-bold">{item.year}</span>{" "}
                          <span className="text-white">{item.content}</span>
                        </>
                      )}
                    </div>
                    
                    {/* For mobile - show all items */}
                    <div className="md:hidden">
                      <span className="text-yellow-400 font-mono font-bold">{item.year}</span>{" "}
                      <span className="text-white">{item.content}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineSection; 