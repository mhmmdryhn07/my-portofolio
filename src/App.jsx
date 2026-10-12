import About from "./components/Layouts/About";
import Certificate from "./components/Layouts/Certificate";
import Home from "./components/Layouts/Home";
import Navbar from "./components/Layouts/Navbar";
import Portofolio from "./components/Layouts/Portofolio";
import TechStack from "./components/Layouts/TechStack";
import Contact from "./components/Layouts/Contact";

function App() {
  return (
    <div className="w-full min-h-screen overflow-x-hidden">
      <Navbar></Navbar>
      <Home></Home>
      <About></About>
      <Portofolio></Portofolio>
      <TechStack></TechStack>
      <Certificate></Certificate>
      <Contact></Contact>
    </div>
  );
}

export default App;
