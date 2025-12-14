import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import { ImHtmlFive } from "react-icons/im";
import { TbBrandJavascript } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";
import { ReactTyped } from "react-typed";
import pic from "../utils/pic/Developer.webp";
function About() {
  return (
    <>
     <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
       <div className="flex flex-col md:flex-row" >
       <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
       <span className="text-xl">Welcome In My Feed</span>
       <div className="flex space-x-1 text-2xl md:text-4xl">
        <h1>Hello, I am a </h1>
       <ReactTyped
          className="text-red-700 font-bold"
          strings={["Developer","Programmer","Coder"]}
          typeSpeed={40}
          backSpeed={50}
          loop={true}
        />
       </div>
       <br/>
     <p className="text-sm md:text-md text-justify">
     Hi👋
         I'm passionate React Developer in Frontend web development and proficient in React.js,
         JavaScript, HTML5, TailwindCSS and Version Control System. The dynamic and fast-paced 
         nature of frontend development has always fascinated me and I am eager to apply my skills 
         and continue learning in a professional setting.
     </p>
     <br/>
  <div  className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0">
  <div className="space-y-2">
      <h1 className="font-bold"> Available on </h1>
     <ul className="flex space-x-5"> 
      <li>
       <a href="https://www.instagram.com/chandan04._/" target="_blank">
        <AiOutlineInstagram className="text-2xl cursor-pointer"/>
        </a>
      </li>
      <li>
      <a href="https://www.linkedin.com/in/chandan-kushwaha-599534151/" target="_blank">
      <FaLinkedin className="text-2xl cursor-pointer"/> 
      </a>
      </li>
      <li>
      <a href="https://x.com/Chandan274702/" target="_blank">
      <FaSquareXTwitter className="text-2xl cursor-pointer"/>
      </a>
      </li>
      <li>
      <a href="https://github.com/chandan-0416/" target="_blank">
      <FaGithub className="text-2xl cursor-pointer"/>
      </a>
      </li>
     </ul>
     </div>
    <div className="space-y-2"> 
     <h1 className="font-bold">Currently working on</h1>
     <div className="flex space-x-5"> 
     <RiReactjsLine className="text-x-5 md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]"/>
     <ImHtmlFive className="text-x-5 md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]"/>
     <TbBrandJavascript className="text-x-5 md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]"/>
     <RiTailwindCssFill className="text-x-5 md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]"/>
     </div>
    </div>
  </div>
       </div>
       <div className="md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1">
        <img src={pic}
         className="rounded-full md:w-[450px] md:h-[450px]" 
        alt="" /> 
       </div>
       </div>
     </div> 
     <hr/>  
    </>
  )
}
export default About;