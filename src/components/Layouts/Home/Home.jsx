import { useEffect, useState } from "react";

const Home = () => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [positionIndex, setPositionIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const position = ["Front End Web Developer", "Back End Web Developer", "Fullstack Web Developer"];
  const currentPosition = position[positionIndex];
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log({
        index,
        isDeleting,
        currentPosition,
      });
      setText(currentPosition.substring(0, index));
      if (isDeleting && index === 0) {
        setPositionIndex((prevIndex) => (prevIndex + 1) % position.length);
        setIsDeleting(false);
      } else if (isDeleting) {
        setIndex((prevIndex) => prevIndex - 1);
      } else {
        if (index < currentPosition.length) {
          setIndex((prevIndex) => prevIndex + 1);
        } else {
          setIsDeleting(true);
        }
      }
    }, 100);

    return () => {
      clearTimeout(timer);
    };
  }, [index, isDeleting, currentPosition]);

  return (
    <div className="flex py-5 bg-slate-100 h-[600px]">
      <div className="w-2/4 flex justify-center flex-col">
        <div className="max-w-md mx-auto">
          <p>-Hello</p>
          <h1 className="text-4xl font-bold text-gray-800 py-5">
            I'm <span className="text-regal-blue">Muhamad</span> Reyhan
          </h1>
          <h1 className="text-3xl font-bold text-gray-800 pb-2">
            {text}
            <span className="animate-pulse">|</span>{" "}
          </h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error repudiandae fugit ratione animi ex, dolorem velit nostrum vel veritatis cumque!</p>
        </div>
      </div>
      <div className="relative w-2/4 m-auto">
        <img src="/images/blob.svg" alt="" height={400} width={400} className="scale-110" />
        <img src="/images/hero.png" alt="" width={300} className="z-10 absolute top-0 left-16 rounded-full" />
      </div>
    </div>
  );
};

export default Home;
