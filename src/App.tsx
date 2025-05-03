import { FunctionComponent } from "react";
import HomePage from "./components/HomePage";
import AboutSection from "./components/AboutSection";
import FullPageScroller from "./components/FullPageScroller";

const App: FunctionComponent = () => {
  return (
    <FullPageScroller scrollingSpeed={1000}>
      <HomePage />
      <AboutSection />
      {/* Add additional sections here */}
    </FullPageScroller>
  );
};

export default App;
