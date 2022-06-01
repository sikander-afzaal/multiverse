import "./App.css";
import Advantage from "./Pages/Advantage/Advantage";
import Hero from "./Pages/Hero/Hero";
import Problem from "./Pages/Problem/Problem";
import Roadmap from "./Pages/Roadmap/Roadmap";
import Studio from "./Pages/Studio/Studio";
import Utility from "./Pages/UtilityFix/Utility";
import Way from "./Pages/Way/Way";

function App() {
  return (
    <div className="App">
      <Hero />
      <div className="container">
        <Way />
        <Utility />
        <Problem />
        <Studio />
        <Roadmap />
        <Advantage />
      </div>
    </div>
  );
}

export default App;
