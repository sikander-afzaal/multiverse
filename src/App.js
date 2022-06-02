import "./App.css";
import Footer from "./Layout/Footer/Footer";
import Advantage from "./Pages/Advantage/Advantage";
import Hero from "./Pages/Hero/Hero";
import Market from "./Pages/Market/Market";
import Problem from "./Pages/Problem/Problem";
import Revenue from "./Pages/Revenue/Revenue";
import Roadmap from "./Pages/Roadmap/Roadmap";
import Scholarship from "./Pages/Scholarship/Scholarship";
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
        <Scholarship />
        <Revenue />
        <Market />
        <Footer />
      </div>
    </div>
  );
}

export default App;
