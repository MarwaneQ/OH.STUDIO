import { NavLink, Outlet } from "react-router-dom";
import './Header.css'
function Header() {
  return (
    <>
    <header className="flex  bg-transparent  justify-center w-full">
      <nav className="p-6 md:w-[870px]  flex justify-center">
        <ul className="flex lg:justify-around backdrop-blur-md bg-[#e8e5e480] p-2 w-[270px] md:w-1/3 justify-around lg:w-2/6 lg:h-12 items-center   rounded-full">
          <div>
            <li>
              <NavLink to='/' className="font-thin ">Home</NavLink>
            </li>
          </div>
          <div>
            <li>
              <NavLink to='Profile' className="font-thin">Profile</NavLink>
            </li>
          </div>
          <div>
            <li>
              <NavLink to='Contact' className="font-thin">Contact</NavLink>
            </li>
          </div>
        </ul>
      </nav>
    </header>
    <Outlet />
    </>
  );
}

export default Header;
