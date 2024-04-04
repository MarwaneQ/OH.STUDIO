import { useEffect, useState } from "react";
import Footer from "../../Footer/Footer";
function Contact() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);
  return (
    <div className="h-[100dvh] flex flex-col">
      <div className="h-[100dvh] flex justify-center ">
        <div className={` bg-white  flex flex-col  justify-center `}>
          <div className="flex flex-col  justify-center text-center h-[400px]">
            <h1
              className={`font-normal	md:leading-tight text-4xl	md:text-6xl mb-3 hero-text ${
                loaded ? "animate" : ""
              }`}>
              Let's work together.
            </h1>
            <div className="md:w-full md:flex md:justify-center">
              <a
                href="/"
                className={`md:flex text-[#7f7f7f] text-4xl md:text-6xl md:justify-center hero-text ${
                  loaded ? "animated" : ""
                }`}>
                Get in touch.
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
