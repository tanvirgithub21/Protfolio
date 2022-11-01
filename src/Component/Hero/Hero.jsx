import React from "react";
import "./hero.css";
import {
  FaLinkedin,
  FaFacebookSquare,
  FaGithubSquare,
  FaEnvelope,
} from "react-icons/fa";
import threeDmodle from "../../ThreeDmodle/model.obj.glb";

const Hero = () => {
  return (
    <section className="bg-[#F0F2F5] bg-pattern ">
      <div className="bg-img">
        <div className="container mx-auto px-1 md:px-2 flex min-h-[calc(100vh-56px)]">
          {/* left side */}
          <div className="w-[45%] flex items-center">
            <div className="ml-20">
              <h3 className="text-3xl text-purple-600 font-semibold mb-2">
                HELLO, I'M
              </h3>
              <h1 className="text-5xl text-gray-800 font-semibold mb-2">
                TANVIR AHMED
              </h1>
              <h5 className="text-gray-700 text-lg font-normal text-justify">
                I am a web developer with more than 1 year plus of experience
                creating a website. My website design is good. I am good at time
                management and love to take on new challenges. I have a mindset
                of maintaining a good relationship with clients. I have
                experience working with a team, I'm always ready to learn any
                new technology
              </h5>

              <ul className="flex mt-6">
                <li className="text-3xl mr-3 text-gray-600 hover:text-gray-900 duration-150 ease-in-out cursor-pointer ">
                  {" "}
                  <a target="_blank" href="dslk">
                    <FaLinkedin />
                  </a>
                </li>
                <li className="text-3xl mr-3 text-gray-600 hover:text-gray-900 duration-150 ease-in-out cursor-pointer ">
                  {" "}
                  <a target="_blank" href="dslk">
                    <FaFacebookSquare />
                  </a>
                </li>
                <li className="text-3xl mr-3 text-gray-600 hover:text-gray-900 duration-150 ease-in-out cursor-pointer ">
                  {" "}
                  <a target="_blank" href="dslk">
                    <FaGithubSquare />
                  </a>
                </li>
                <li className="text-3xl mr-3 text-gray-600 hover:text-gray-900 duration-150 ease-in-out cursor-pointer ">
                  {" "}
                  <a href="mailto:tanvir.bd.global@gmail.com">
                    <FaEnvelope />
                  </a>
                </li>
              </ul>

              <button className="px-4 py-2 bg-orange-600 hover:bg-orange-700 text-gray-100 font-medium rounded duration-150 ease-in-out mt-6">
                Download CV
              </button>
            </div>
          </div>
          {/* right side  */}
          <div className="w-[55%]">
            <div className="h-full">
              <model-viewer
                className="w-full h-full mx-auto border-2"
                alt="Tanvir Ahmed 3D model"
                src={threeDmodle}
                camera-controls
                touch-action="pan-y"
              ></model-viewer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
