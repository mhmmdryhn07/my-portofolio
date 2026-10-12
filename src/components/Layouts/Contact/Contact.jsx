import { FaGithub, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa6";

const Contact = () => {
  return (
    <div className="bg-gray-900 text-white">
      <h1 className="text-3xl py-4 font-bold text-center pt-10">Contact</h1>
      <div className="flex justify-around max-w-5xl w-full mx-auto py-10 flex-col lg:flex-row">
        <div className="text-center">
          <h1 className="text-2xl lg:text-3xl font-semibold">Muhamad Reyhan</h1>
          <h3 className="py-3">muhammdreyhan650@gmail.com</h3>
          <h3>Kota Tangerang</h3>
        </div>
        <div className="flex flex-col gap-5 text-xl lg:text-3xl">
          <div>
            <h1 className="text-center mt-5 font-semibold">Connect With Me</h1>
          </div>
          <div className="flex gap-5 justify-center">
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
  );
};

export default Contact;
