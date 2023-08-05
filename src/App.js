import Footer from "./components/Footer";
import Images from "./components/Images";
import Numbers from "./components/Numbers";
import SectionBetterCard from "./components/SectionBetterCard";
import SectionBusinees from "./components/SectionBusinees";
import SectionEasilyControl from "./components/SectionEasilyControl";
import SectionHome from "./components/SectionHome";
import SectionService from "./components/SectionService";
// import { useEffect } from "react"
// import WOW from 'wowjs';
import 'animate.css/animate.css';
import SectionPeople from "./components/SectionPeople.";
import Header from "./components/Header";

function App() {

  // useEffect(() => {
  //   const wow = new WOW.WOW({
  //     live: false,
  //   });
  //   wow.init();
  // }, []);

  return (
    <div className="App bg-black  text-white overflow-hidden">
      <div className="relative">
        <Header />
        <SectionHome />
        <div className="absolute w-[800px] h-[800px] top-[10%] left-[-175%] sm:left-[-80%] md:left-[-50%] rounded-[45%] bg-[rgba(255,255,255,0.6)] blur-[300px]"></div>
      </div>
      <Numbers />
      <div className="relative">
        <SectionBusinees />
        <SectionEasilyControl />
        <div className="absolute w-[800px] h-[800px] top-[50%] left-[-175%] sm:left-[-80%] md:left-[-50%] rounded-[45%] bg-[rgba(255,255,255,0.6)] blur-[300px]"></div>
      </div>
      <SectionBetterCard />
      <div className="relative">
        <SectionPeople />
        <div className="absolute w-[800px] h-[800px] top-[0%] right-[-170%] sm:right-[-75%] md:right-[-45%] rounded-[45%] blur-[300px]" style={{ backgroundImage: 'linear-gradient(90deg, #1A2980 0%, #26D0CE 100%)' }}></div>
      </div>
      <Images />
      <SectionService />
      <Footer />
    </div>
  );
}

export default App;
