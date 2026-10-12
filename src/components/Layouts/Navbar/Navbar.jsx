const Navbar = () => {
  return (
    <div className="flex items-center justify-between bg-sky-600 w-full h-20 text-white">
      <div className="w-2/4">
        <a href="" className="font-bold text-3xl min-w-md ml-48">
          Muhamad Reyhan
        </a>
      </div>
      <div className="w-2/4 flex gap-10">
        <a href="" className="text-xl font-semibold">
          Home
        </a>
        <a href="" className="text-xl font-semibold">
          About
        </a>
        <a href="" className="text-xl font-semibold">
          Portofolio
        </a>
        <a href="" className="text-xl font-semibold">
          Tech Stack
        </a>
        <a href="" className="text-xl font-semibold">
          Contact
        </a>
      </div>
    </div>
  );
};

export default Navbar;
