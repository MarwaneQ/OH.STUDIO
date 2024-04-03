import { useEffect, useState } from "react";
import './hero.css'
function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);
  return (
    <div>
      <div className={` bg-white  flex flex-col items-center md:mt-16 `}>
        <div className="flex flex-col items-center align-middle justify-center text-center h-[400px]">
          <h1 className={`font-normal	md:leading-tight text-4xl	md:text-6xl mb-7 hero-text ${loaded ? 'animate' : ''}`}>
            A brand and product
            <br /> designer working with <br />
            clients globally
          </h1>
          <div className="md:w-full md:flex md:justify-center hidden">
          <ul className={`md:flex  md:justify-center hero-text ${loaded ? 'animated' : ''}`}>
            <li className="m-2 rounded-full px-[5px] py-[5px]">Expertise</li>
            <li className="m-2 bg-[#e8e5e480] rounded-full px-[10px] py-[5px] font-light">Branding</li>
            <li className="m-2 bg-[#e8e5e480] rounded-full px-[10px] py-[5px] font-light">Product</li>
            <li className="m-2 bg-[#e8e5e480] rounded-full px-[10px] py-[5px] font-light">Design Systems</li>
          </ul>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
