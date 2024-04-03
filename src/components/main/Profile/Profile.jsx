import { useEffect, useState } from "react";
import '../hero/hero.css'
import Experience from "./Experience";
function Profile() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);
  return (
    <div>
      <div className={` bg-white  flex flex-col items-center md:mt-16 `}>
        <div className="flex flex-col items-center align-middle justify-center text-center h-[400px]">
          <h1 className={`font-normal	md:leading-tight text-4xl	md:text-6xl  hero-text ${loaded ? 'profile' : ''}`}>
            Hey 👋🏼 I'm Oli 
          </h1>
        </div>
      </div>
      <div className={`flex flex-wrap md:mt-44 `}>
        <div className='flex justify-center flex-wrap  p-5 md:p-0 '>
          <div className={`w-full lg:h-[88%] md:w-1/2 lg:w-1/3 overflow-hidden rounded-2xl md:mr-3 hero-text ${loaded ? 'animate' : ''}`}>
          <img src="/public/img-12.webp" className="w-full bg-cover " />
          </div>
          <div className={`hidden md:block w-full lg:h-[88%] md:w-1/2 lg:w-1/3 overflow-hidden rounded-2xl md:ml-2 mt-8 md:mt-0 hero-text ${loaded ? 'animate' : ''}`}>
          <img src="/public/img-13.webp" className="w-full md:h-full bg-cover " />
          </div>
        </div>
        </div>
        <div className={` bg-white  flex flex-col items-center md:mt-5 `}>
        <div className="flex flex-col items-center align-middle justify-center text-center h-[400px]">
        <ul className={`md:flex  md:justify-center hero-text ${loaded ? 'animated' : ''}`}>
            <li className="m-2 bg-[#e8e5e480] rounded-full px-[10px] py-[5px] font-thin">About</li>
          </ul>
          <h1 className={`font-normal	md:leading-tight text-xl	md:text-4xl mb-7 hero-text ${loaded ? 'profile' : ''}`}>
          A freelance designer based in the UK.<br /> I combine my experience in product<br /> and brand to solve problems, tell stories, and <br />create compelling experiences.
          </h1>
          
        </div>
      </div>
      <div className={` bg-white  flex flex-col items-center  `}>
        <div className="flex flex-col items-center align-middle justify-center text-center h-[400px]">
        <ul className={`md:flex  md:justify-center hero-text ${loaded ? 'animated' : ''}`}>
            <li className="m-2 bg-[#e8e5e480] rounded-full px-[10px] py-[5px] font-thin">Experience</li>
          </ul>
          <h1 className={`font-normal	md:leading-tight text-3xl	md:text-4xl mb-7 hero-text ${loaded ? 'profile' : ''}`}>
          Where I've worked
          </h1>
        </div>
        <div className="grid md:grid-cols-3  w-[70%]">
        <Experience date={'2017 - Present'} place={`OH.STUDIO`} type={'Freelance Designer'} position={'Director'}/>
        <Experience date={'2021 - Present'} place={`Friendly Studio`} type={'Lead Product Designer'} position={'Freelance'}/>
        <Experience date={'2022'} place={`R/GA`} type={'Senior Visual Designer'} position={'Freelance'}/>
        <Experience date={'2021'} place={`R/GA`} type={'Senior Visual Designer'} position={'Freelance'}/>
        <Experience date={'2021'} place={`AKQA`} type={'Senior Designer'} position={'Freelance'}/>
        <Experience date={'2020'} place={`AKQA`} type={'Senior Designer'} position={'Freelance'}/>
        <Experience date={'2019'} place={`UI Centric`} type={'Senior Product Designer'} position={'Freelance'}/>
        <Experience date={'2017'} place={`Agency TK`} type={'Senior Digital Designer'} position={'Permanent'}/>
        <Experience date={'2012'} place={`Agency TK`} type={'Digital Designer'} position={'Permanent'}/>
        <Experience date={'2009'} place={`Next Level`} type={'Digital Designer'} position={'Permanent'}/>
        <Experience date={'2008'} place={`Next Level`} type={'Junior Digital Designer'} position={'Permanent'}/>
        </div>
        
      </div>
    </div>
  )
}

export default Profile