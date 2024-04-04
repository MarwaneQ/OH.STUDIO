import { useEffect, useState } from "react";
import './showcase.css'
function ShowCase() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div>
      <div className={`flex flex-wrap md:mt-44 justify-center`}>
        <div className='flex justify-center flex-wrap md:mb-9 p-5 md:p-0 '>
          <div className={`w-full  md:w-1/2 lg:w-1/3 overflow-hidden rounded-2xl md:mr-3 hero-text ${loaded ? 'animate' : ''}`}>
          <img src="p" alt="" className="w-full  transition duration-400	 hover:blur-md bg-cover " />
          </div>
          <div className={`w-full md:w-1/2 lg:w-1/3 overflow-hidden rounded-2xl md:ml-2 mt-8 md:mt-0 hero-text ${loaded ? 'animate' : ''}`}>
          <img src="/img-6.webp" alt="" className="w-full transition duration-400 hover:blur-md bg-cover " />
          </div>
        </div>
        <div className='flex justify-center flex-wrap md:mb-9 p-5 md:p-0'>
          <div className={`w-full md:w-1/2 lg:w-1/3 overflow-hidden rounded-2xl md:mr-3 hero-text ${loaded ? 'animate' : ''}`}>
            <img src="/img-3.webp" alt="" className="w-full transition duration-400	 hover:blur-md bg-cover" />
          </div>
          <div className={`w-full md:w-1/2 lg:w-1/3 overflow-hidden rounded-2xl md:ml-2 mt-8 md:mt-0 hero-text ${loaded ? 'animate' : ''}`}>
            <img src="/img-2.webp" alt="" className="w-full transition duration-400	 hover:blur-md bg-cover" />
          </div>
        </div>
        <div className='flex justify-center flex-wrap md:mb-9 p-5 md:p-0'>
          <div className={`w-full md:w-1/2 lg:w-1/3 overflow-hidden rounded-2xl md:mr-3 hero-text ${loaded ? 'animate' : ''}`}>
            <img src="/img-1.webp" alt="" className="w-full transition duration-400	 hover:blur-md bg-cover" />
          </div>
          <div className={`w-full md:w-1/2 lg:w-1/3 overflow-hidden rounded-2xl md:ml-2 mt-8 md:mt-0 hero-text ${loaded ? 'animate' : ''}`}>
          <img src="/img-8.webp" alt="" className="w-full h-full transition duration-400	 hover:blur-md bg-cover" />
          </div>
        </div>
        <div className='flex justify-center flex-wrap md:mb-9 p-5 md:p-0'>
          <div className={`w-full  md:w-1/2 lg:w-1/3 overflow-hidden rounded-2xl md:mr-3 hero-text ${loaded ? 'animate' : ''}`}>
            <img src="/img-4.webp" alt="" className="w-full transition duration-400 h-full	 hover:blur-md bg-cover" />
          </div>
          <div className={`w-full md:w-1/2 lg:w-1/3 overflow-hidden rounded-2xl md:ml-2 mt-8 md:mt-0 hero-text ${loaded ? 'animate' : ''}`}>
            <video src="/vid-2.mp4" alt="" className="w-full transition duration-400	 hover:blur-md bg-cover" autoPlay loop playsInline/>
          </div>
        </div>
        <div className='flex justify-center flex-wrap md:mb-9 p-5 md:p-0'>
          <div className={`w-full  md:w-1/2 lg:w-1/3 overflow-hidden rounded-2xl md:mr-3 hero-text ${loaded ? 'animate' : ''}`}>
            <img src="/img-10.webp" alt="" className="w-full transition duration-400	 hover:blur-md bg-cover" />
          </div>
          <div className={`w-full md:w-1/2 lg:w-1/3 overflow-hidden rounded-2xl md:ml-2 mt-8 md:mt-0 hero-text ${loaded ? 'animate' : ''}`}>
            <img src="/img-9.webp" alt="" className="w-full transition duration-400	 hover:blur-md bg-cover" />
          </div>
        </div>
        <div className='flex justify-center flex-wrap md:mb-9 p-5 md:p-0'>
          <div className={`w-full  md:w-1/2 lg:w-1/3 overflow-hidden rounded-2xl md:mr-3 hero-text ${loaded ? 'animate' : ''}`}>
            <img src="/img-11.webp" alt="" className="w-full transition duration-400	 hover:blur-md bg-cover" />
          </div>
          <div className={`w-full md:w-1/2 lg:w-1/3 overflow-hidden rounded-2xl md:ml-2 mt-8 md:mt-0 hero-text ${loaded ? 'animate' : ''}`}>
            <video src="/vid-1.mp4" alt="" className="w-full transition duration-400	 hover:blur-md bg-cover object-cover h-full" autoPlay loop playsInline />
          </div>
        </div>
        <div className=" flex justify-center items-center">
      <div className={` bg-white  flex flex-col  justify-center `}>
        <div className="flex flex-col  justify-center text-center h-[400px]">
          <h1
            className={`font-normal	md:leading-tight text-4xl	md:text-6xl mb-3 hero-text ${
              loaded ? "animate" : ""
            }`}>
            Let's work together.
          </h1>
          <div className="md:w-full md:flex md:justify-center">
            <a href="/"
              className={`md:flex text-[#7f7f7f] text-4xl md:text-6xl md:justify-center hero-text ${
                loaded ? "animated" : ""
              }`}>
              Get in touch.
            </a>
          </div>
        </div>
      </div>
    </div>
      </div>
    </div>
  )
}

export default ShowCase