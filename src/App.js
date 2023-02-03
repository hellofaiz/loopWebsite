import MainSection from "./component/MainSection";
import NavBar from "./component/NavBar";
import WorkSection from "./component/WorkSection";
import { motion, useScroll } from "framer-motion";
import ProjectSection from "./component/ProjectSection";
import WhyUsSection from "./component/WhyUsSection";
import Footer from "./component/Footer";

function App() {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <div className="App">
        <NavBar />
        <motion.div
          className="progress-bar"
          style={{ scaleX: scrollYProgress }}
        />
        <MainSection />
        <WorkSection />
        <ProjectSection />
        <WhyUsSection />
        <Footer />
      </div>
    </>
  );
}

export default App;
