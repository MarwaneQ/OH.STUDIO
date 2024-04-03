import { NavLink, Outlet } from "react-router-dom";
import './Header.css'
function Header() {
  return (
    <>
    <header className=" flex  bg-transparent  justify-center w-full">
      <div className="fixed  z-50">
      <nav className="p-6 md:w-[900px]  flex justify-center">
        <ul className="flex lg:justify-around backdrop-blur-md bg-[#e8e5e480] p-2 w-[270px] md:w-1/3 justify-around lg:w-2/6 lg:h-12 items-center   rounded-full">
          <div className="">
            <li>
              <NavLink to='/' className="font-light ">Home</NavLink>
            </li>
          </div>
          <div>
            <li>
              <NavLink to='Profile' className="font-light">Profile</NavLink>
            </li>
          </div>
          <div>
            <li>
              <NavLink to='Contact' className="font-light">Contact</NavLink>
            </li>
          </div>
        </ul>
      </nav>
      </div>
    </header>
    <Outlet />
    </>
  );
}

export default Header;
