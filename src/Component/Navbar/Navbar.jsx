import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
const Navbar = () => {
  const [navSwitch, setNavSwitch] = useState(false);

  return (
    <nav className=" h-[56px] bg-[#F0F2F5] backdrop-blur-sm relative shadow-md">
      <div className="container mx-auto">
        <div className="px-1 md:px-2 md:flex justify-between items-center">
          {/* logo  */}
          <div className="py-2 flex justify-between items-center">
            <a href="df">
              <img className="w-10" src="./developer.svg" alt="Logo_Img" />
            </a>
            {/* nav switch */}
            <div
              onClick={() => setNavSwitch(!navSwitch)}
              className="text-3xl cursor-pointer md:hidden "
            >
              {navSwitch ? <MdClose /> : <GiHamburgerMenu />}
            </div>
          </div>

          {/* Nav link section  */}
          <div
            className={`bg-[#F0F2F5] backdrop-blur-sm w-full md:w-auto absolute md:static left-0 duration-200 ease-in-out ${
              navSwitch ? "top-[56px]" : "top-[-500px]"
            }`}
          >
            <ul className="md:flex pt-3 md:pt-0 container mx-auto items-center px-1">
              <li className="nav-btn">Home</li>
              <li className="nav-btn">About-Me</li>
              <li className="nav-btn">Services</li>
              <li className="nav-btn">Project</li>
              <li className="nav-btn">Contact-US</li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
