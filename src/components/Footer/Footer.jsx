function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className=" flex justify-center items-center">
      <div className="flex justify-between md:w-[65%] w-[85%] h-20 items-center">
        <div>
          <p className="font-light">&copy; Oli Harris {year}</p>
        </div>
        <div>
          <ul className="flex items-center ">
            <ul className="mr-3 ">
              <a href="https://twitter.com/olvhrs">Twitter</a>
            </ul>
            <ul className="mr-3">
              <a href="https://www.linkedin.com/in/oliiharris/">Linkedin</a>
            </ul>
            <ul className="">
              <a href="mailto:oli@oh.studio">Mail</a>
            </ul>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
