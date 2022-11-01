import React from "react";
import "./hero.css";
import {
  FaLinkedin,
  FaFacebookSquare,
  FaGithubSquare,
  FaEnvelope,
} from "react-icons/fa";

const Hero = () => {
  return (
    <section className="bg-[#F0F2F5] bg-pattern ">
      <div className="bg-img">
        <div className="container mx-auto px-1 md:px-2 flex min-h-[calc(100vh-56px)]">
          <div className="w-[40%] flex items-center mb-40">
            <div className="ml-20">
              <h3 className="text-3xl text-purple-600 font-semibold mb-2">
                HELLO, I'M
              </h3>
              <h1 className="text-5xl text-gray-800 font-medium mb-2">
                TANVIR AHMED
              </h1>
              <h5 className="text-gray-600 text-lg font-light">
                A MARN Web Develope and Freelancer
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
          <div className="w-[60%]"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
