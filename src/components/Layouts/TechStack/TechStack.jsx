const TechStack = () => {
  return (
    <div>
      <div className="text-sky-600">
        <div className="flex flex-col justify-center max-w-5xl w-full mx-auto py-10">
          <div className="pb-5">
            <h1 className="text-3xl py-4 font-bold text-center">Tech Stack</h1>
          </div>
          <div className="flex justify-around">
            <img src="/images/tech-stack/react.jpg" alt="" width={100} />
            <img src="/images/tech-stack/express.jpg" alt="" width={100} />
            <img src="/images/tech-stack/mongodb.jpg" alt="" width={100} />
            <img src="/images/tech-stack/ts.jpg" alt="" width={100} />
            <img src="/images/tech-stack/nodejs.jpg" alt="" width={100} />
            <img src="/images/tech-stack/tailwind.jpg" alt="" width={100} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
