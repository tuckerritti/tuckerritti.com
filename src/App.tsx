import { FunctionComponent } from "react";
import HomePage from "./components/HomePage";
import AboutSection from "./components/AboutSection";
import TimelineSection from "./components/TimelineSection";

const App: FunctionComponent = () => {
  return (
    <div className="bg-gray-900">
      <HomePage />
      <AboutSection />
      <TimelineSection />
    </div>
  );
};

export default App;
