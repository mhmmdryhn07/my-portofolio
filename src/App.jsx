import { FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa6";
import About from "./components/Layouts/About";
import Certificate from "./components/Layouts/Certificate";
import Home from "./components/Layouts/Home";
import Navbar from "./components/Layouts/Navbar";
import Portofolio from "./components/Layouts/Portofolio";
import TechStack from "./components/Layouts/TechStack";
import { FaGithub } from "react-icons/fa";

function App() {
  return (
    <div className="w-full min-h-screen">
      <Navbar></Navbar>
      <Home></Home>
      <About></About>
      <Portofolio></Portofolio>
      <TechStack></TechStack>
      <Certificate></Certificate>
      <div className="bg-gray-900 text-white">
        <h1 className="text-3xl py-4 font-bold text-center pt-10">Contact</h1>
        <div className="flex justify-around max-w-5xl w-full mx-auto py-10">
          <div>
            <h1 className="text-3xl font-semibold">Muhamad Reyhan</h1>
            <h3 className="py-3">muhammdreyhan650@gmail.com</h3>
            <h3>Kota Tangerang</h3>
          </div>
          <div className="flex flex-col gap-5">
            <div>
              <h1 className="text-xl">Connect With Me</h1>
            </div>
            <div className="flex text-3xl gap-5">
              <a href="https://www.instagram.com/__mhmmdryhn/" target="_blank">
                <FaInstagram />
              </a>
              <a href="">
                <FaTiktok />
              </a>
              <a href="https://github.com/mhmmdryhn07" target="_blank">
                <FaGithub />
              </a>
              <a href="">
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-800 py-6 text-sm text-gray-500 text-center">© 2026 Reyhan. All rights reserved.</div>
      </div>
    </div>
  );
}

export default App;
