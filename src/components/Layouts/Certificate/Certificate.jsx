const Certificate = () => {
  return (
    <div className="bg-sky-600 text-white pb-10">
      <div className="flex flex-col justify-center max-w-5xl w-full mx-auto py-10">
        <h1 className="text-3xl py-4 font-bold text-center">Certificate</h1>
      </div>
      <div className="flex justify-center">
        <div className="flex justify-center gap-5 ml-5 w-3/4 flex-wrap">
          <a href="">
            <img src="/images/certificate/mern.jpeg" alt="" width={400} className="rounded rounded-lg" />
          </a>
          <a href="">
            <img src="/images/certificate/ai.jpeg" alt="" width={400} className="rounded rounded-lg" />
          </a>
          <a href="">
            <img src="/images/certificate/python.jpeg" alt="" width={400} className="rounded rounded-lg" />
          </a>
          <a href="">
            <img src="/images/certificate/cyber.png" alt="" width={400} className="rounded rounded-lg" />
          </a>
          <a href="">
            <img src="/images/certificate/uml.png" alt="" width={400} className="rounded rounded-lg" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Certificate;
