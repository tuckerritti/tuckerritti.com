import React, { useState, useEffect, useRef, ReactNode } from "react";

interface FullPageScrollerProps {
  children: ReactNode;
  scrollingSpeed?: number;
}

interface FullPageApiType {
  moveSectionDown: () => void;
  moveSectionUp: () => void;
  moveTo: (section: number) => void;
}

export const useFullPageScroller = (): FullPageApiType => {

  const context = React.useContext(FullPageScrollerContext);
  if (!context) {
    throw new Error(
      "useFullPageScroller must be used within a FullPageScroller"
    );
  }
  return context;
};


const FullPageScrollerContext = React.createContext<FullPageApiType | null>(
  null
);

const FullPageScroller: React.FC<FullPageScrollerProps> = ({
  children,
  scrollingSpeed = 1000,
}) => {
  const [currentSection, setCurrentSection] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const isScrolling = useRef(false);
  const sections = React.Children.toArray(children);


  const moveTo = (section: number) => {
    if (isScrolling.current) return;
    if (section < 0 || section >= sections.length) return;

    isScrolling.current = true;
    setCurrentSection(section);

    setTimeout(() => {
      isScrolling.current = false;
    }, scrollingSpeed);
  };


  const moveSectionDown = () => {
    moveTo(currentSection + 1);
  };


  const moveSectionUp = () => {
    moveTo(currentSection - 1);
  };


  const fullpageApi: FullPageApiType = {
    moveSectionDown,
    moveSectionUp,
    moveTo,
  };


  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown") {
        moveSectionDown();
      } else if (e.key === "ArrowUp") {
        moveSectionUp();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentSection]);


  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();

      if (isScrolling.current) return;

      if (e.deltaY > 0) {
        moveSectionDown();
      } else {
        moveSectionUp();
      }
    };

    const containerElement = containerRef.current;
    if (containerElement) {
      containerElement.addEventListener("wheel", handleWheel, {
        passive: false,
      });
    }

    return () => {
      if (containerElement) {
        containerElement.removeEventListener("wheel", handleWheel);
      }
    };
  }, [currentSection]);


  useEffect(() => {
    let touchStartY = 0;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      e.preventDefault();

      if (isScrolling.current) return;

      const touchEndY = e.touches[0].clientY;
      const diff = touchStartY - touchEndY;


      if (Math.abs(diff) > 50) {
        if (diff > 0) {
          moveSectionDown();
        } else {
          moveSectionUp();
        }
      }
    };

    const containerElement = containerRef.current;
    if (containerElement) {
      containerElement.addEventListener("touchstart", handleTouchStart, {
        passive: false,
      });
      containerElement.addEventListener("touchmove", handleTouchMove, {
        passive: false,
      });
    }

    return () => {
      if (containerElement) {
        containerElement.removeEventListener("touchstart", handleTouchStart);
        containerElement.removeEventListener("touchmove", handleTouchMove);
      }
    };
  }, [currentSection]);

  return (
    <FullPageScrollerContext.Provider value={fullpageApi}>
      <div
        ref={containerRef}
        className="fullpage-container"
        style={{
          height: "100vh",
          width: "100%",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <div
          className="fullpage-sections-container"
          style={{
            height: "100%",
            transition: `transform ${scrollingSpeed}ms ease`,
            transform: `translateY(-${currentSection * 100}%)`,
          }}
        >
          {React.Children.map(children, (child, index) => (
            <div
              key={index}
              className="fullpage-section"
              style={{
                height: "100%",
                width: "100%",
              }}
            >
              {child}
            </div>
          ))}
        </div>


        <div className="fullpage-navigation">
          <div
            className="fullpage-dots"
            style={{
              position: "fixed",
              right: "20px",
              top: "50%",
              transform: "translateY(-50%)",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              zIndex: 10,
            }}
          >
            {sections.map((_, index) => (
              <div
                key={index}
                onClick={() => moveTo(index)}
                style={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  cursor: "pointer",
                  backgroundColor:
                    currentSection === index
                      ? "#FBBF24"
                      : "rgba(255, 255, 255, 0.5)",
                }}
                aria-label={`Go to section ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </FullPageScrollerContext.Provider>
  );
};

export default FullPageScroller;
