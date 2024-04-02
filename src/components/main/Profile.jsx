import { useEffect, useState } from "react";
import './hero/hero.css'
function Profile() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);
  return (
    <div>
      <div className={` bg-white  flex flex-col items-center md:mt-16 `}>
        <div className="flex flex-col items-center align-middle justify-center text-center h-[400px]">
          <h1 className={`font-normal	md:leading-tight text-4xl	md:text-6xl mb-7 hero-text ${loaded ? 'profile' : ''}`}>
            Hey 👋🏼 I'm Oli 
          </h1>
        </div>
      </div>
      <div className={`flex flex-wrap md:mt-44 `}>
        <div className='flex justify-center flex-wrap md:mb-9 p-5 md:p-0 '>
          <div className={`w-full lg:h-[88%] md:w-1/2 lg:w-1/3 overflow-hidden rounded-2xl md:mr-3 hero-text ${loaded ? 'animate' : ''}`}>
          <img src="/public/img-12.webp" className="w-full bg-cover " />
          </div>
          <div className={`w-full lg:h-[88%] md:w-1/2 lg:w-1/3 overflow-hidden rounded-2xl md:ml-2 mt-8 md:mt-0 hero-text ${loaded ? 'animate' : ''}`}>
          <img src="/public/img-13.webp" className="w-full md:h-full bg-cover " />
          </div>
        </div>
        </div>
        <div className={` bg-white  flex flex-col items-center md:mt-16 `}>
        <div className="flex flex-col items-center align-middle justify-center text-center h-[400px]">
        <ul className={`md:flex  md:justify-center hero-text ${loaded ? 'animated' : ''}`}>
            <li className="m-2 bg-[#e8e5e480] rounded-full px-[10px] py-[5px] font-thin">About</li>
          </ul>
          <h1 className={`font-normal	md:leading-tight text-md	md:text-xl mb-7 hero-text ${loaded ? 'profile' : ''}`}>
          A freelance designer based in the UK.<br /> I combine my experience in product<br /> and brand to solve problems, tell stories, and <br />create compelling experiences.
          </h1>
          
        </div>
      </div>
    </div>
  )
}

export default Profile