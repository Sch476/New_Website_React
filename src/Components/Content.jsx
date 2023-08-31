import React from 'react'
import TypewriterComponent from 'typewriter-effect';
import "../CSS/Content.css"
import pf from "../Icons/github.png"
import ld from "../Icons/LinkedIn.svg"
import ins from "../Icons/Insta.svg"
import git from "../Icons/GitHub.svg"
import x from "../Icons/Twitter.svg"

const Content = () => {

    const languages = [
        "English",
        "Spanish",
        "French",
        "German",
        "Italian",
        "Japanese",
        "Chinese (Mandarin)",
        "Russian",
        "Portuguese",
        "Korean",
        "Arabic",
        "Hindi",
        "Dutch",
        "Turkish",
        "Swedish"
      ];

    var greetings = ["Hello",         
    "Hola",            
    "Bonjour",         
    "Hallo",           
    "Ciao",            
    "こんにちは",    
    "你好",            
    "Привет",         
    "Olá",             
    "안녕하세요",     
    "مرحباً",         
    "नमस्ते",        
    "Hallo",          
    "Merhaba",         
    "Hej"              ];
      
    var count = Math.floor(Math.random()*greetings.length);
    var Hello = greetings[count];
    var onHover = languages[count];

    const Resume = () =>{
      window.open("https://drive.google.com/file/d/1vUAM5_cACx8McZez4yiHuIzXbUohV5T8/view?usp=sharing","_self");
    };
    const LinkedIn = () =>{
      window.open("https://www.linkedin.com/in/sayantan-choudhury/","_self");
    };
    const twitter = () =>{
      window.open("https://twitter.com/sayantanchr13","_self");
    };
    const Gh = () =>{
      window.open("https://github.com/Sch476","_self");
    };
  
  return (
    <div>
    <div className=' invisible md:visible flex items-center'>
    <div className=' flex-1'>
    
        <h3 className=' ml-36 text-3xl text-white font-poppins pt-24 pb-10 font-semibold'><span className=' text-3xl text-[#0ef] '>{Hello}</span>👋🏼, I am</h3>
        <h1 className=' text-white text-6xl ml-36 font-semibold font-poppins pb-10'>Sayantan Choudhury</h1>
        <h3 className='text-3xl ml-36 text-white font-poppins font-semibold pb-10'>
          And I am a{' '}
          <span className='font-poppins text-[#0ef]' style={{ display: 'inline-block' }}>
            <TypewriterComponent
              options={{
                strings: ["Full Stack Developer", "Gamer", "CS Undergrad", "Programmer"],
                autoStart: true,
                loop: true,
              }}
            />
          </span>
        </h3>
        <p className=' text-white ml-36 text-xl pb-10'>I am a Computer Science undergraduate student with a passion for exploring the latest technology trends. Through this website, I hope to share my journey of learning and discovery in the world of computer science. From new programming languages to emerging technologies, I'm constantly seeking out the next big thing.</p>
        <div className='flex items-center space-x-2 pb-6'>
        <button className="btn btn-outline btn-info rounded-lg ml-60" onClick={LinkedIn}><img src={ld} /></button>
        <button className="btn btn-outline btn-info rounded-lg" onClick={Gh}><img src={git} /></button>
        <button className="btn btn-outline btn-info rounded-lg" onClick={twitter}><img src={x} /></button>
        <button className="btn btn-outline btn-info rounded-lg" onClick={Resume}><img src={ins} /></button>
        </div>
        <button className="btn btn-outline btn-info ml-[19rem]" onClick={Resume}>Download CV</button>
        </div>
        <div className="flex-1">
            <img src={pf} alt="Profile" className="w-[400px]  h-[480px] ml-20 rounded-lg" />
          </div>
    </div>
    </div>
  )
}

export default Content
