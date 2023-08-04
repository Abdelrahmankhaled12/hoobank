import Footer from "./components/Footer";
import Images from "./components/Images";
import Numbers from "./components/Numbers";
import SectionBetterCard from "./components/SectionBetterCard";
import SectionBusinees from "./components/SectionBusinees";
import SectionEasilyControl from "./components/SectionEasilyControl";
// import SectionHome from "./components/SectionHome";
import SectionService from "./components/SectionService";
import { useEffect } from "react"
import WOW from 'wowjs';
import 'animate.css/animate.css';

function App() {

  useEffect(() => {
    const wow = new WOW.WOW({
      live: false,
    });
    wow.init();
  }, []);

  return (
    <div className="App bg-black  text-white">
      {/* <SectionHome /> */}
      <Numbers />
      <div className="relative">
        <SectionBusinees />
        <SectionEasilyControl />
        <div className="absolute w-[800px] h-[800px] top-[50%] left-[-175%] sm:left-[-80%] md:left-[-50%] rounded-[45%] bg-[rgba(255,255,255,0.6)] blur-[300px]"></div>
      </div>
      <SectionBetterCard />
      <Images />
      <SectionService />
      <Footer />
    </div>
  );
}

export default App;
