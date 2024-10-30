import './about.css';
import Image from 'next/image';
// import design from '../public/design.png';
import html from '../public/html.png';
import css from '../public/css-3.png';
import js from '../public/js.png';
import react from '../public/react.png';
import nextjs from '../public/nextjs.png';
import git from '../public/git.png';
import figma from '../public/figma.png';



export default function About(){
  return(
    <div>
    <h1 className="main-head">ABOUT ME</h1>
    <p className="about-para">Hi! I'm Yusra, a passionate front-end developer with a focus on creating 
        engaging and user-friendly web experiences. Currently pursuing a Bachelor's degree in Statistics with Finance, I love combining analytical skills with creative design. I'm always eager to learn new technologies and enhance my coding skills, and I'm currently exploring tools like Figma and Tailwind CSS. My portfolio showcases a variety of projects that highlight my abilities and dedication to delivering high-quality work. When I'm not coding,
         I enjoy brainstorming innovative ideas and staying updated on the latest trends in web development.
     </p>
 


      <div className='container-2'>
     <div className='line1'></div>
     <h2 className='explore'>EXPLORE</h2>
     <div className='line2'></div>
     </div>
     <h1 className='design'>DESIGN</h1>
     <p className='design-para'>
     I offer complete website design services tailored to your unique needs and preferences.<br/> Whether you have a clear vision or need guidance, I’m here to bring your ideas to life.<br/>
      I can build your site from scratch, ensuring every detail aligns with your goals, or work <br/>collaboratively, consulting with you throughout the process. With my skills and dedication,<br/>
      I’ll create a user-friendly, visually appealing website that reflects your brand and drives results
     </p>
     <h2 className='develop'>DEVELOPMENT</h2>
     <p className='develop-para'>
     I provide comprehensive website development services, ensuring a seamless and responsive <br/>experience across all devices.
      Whether you need a custom-built solution from scratch <br/>or improvements to an existing site, I work closely with you to understand 
      your requirements<br/> and implement features that enhance functionality and user engagement. From front-end <br/>design to back-end integration, I ensure your website is optimized, secure, and aligned <br/>with industry best practices to support your business goals..</p>
        <h2 className='maintenence'>MAINTENANCE</h2>
        <p className='maint-para'>
        I offer ongoing website maintenance services to keep your site running smoothly, secure, and up-to-date.<br/>
         From regular updates and security checks to performance optimization and troubleshooting, I ensure <br/>
         your website stays responsive and performs at its best. I’m available to address any issues promptly,<br/> make necessary updates, and implement improvements as your business evolves. With my maintenance <br/>
         support, you can focus on your goals while your website remains in excellent condition.
        </p>
        <h1 className='skills'>Skills</h1>
        <h2 className='using'>Using Now:</h2>
       <Image
        src={html}
        width={100 }  
        height={100}   
       alt="html-logo"
        className='html'
      />
      <Image
        src={css}
        width={100 }  
        height={100}   
       alt="css-logo"
        className='css'
      />
    <Image
        src={js}
        width={125 }  
        height={100}   
       alt="js-logo"
        className='js'
      />


     <Image
        src={react}
        width={100 }  
        height={100}   
       alt="react-logo"
        className='react'
      />
    <Image
        src={nextjs}
        width={100 }  
        height={100}   
       alt="react-logo"
        className='nextjs'
      />
         <Image
        src={git}
        width={100 }  
        height={100}   
       alt="git-logo"
        className='git'
      />
         <Image
        src={figma}
        width={70 }  
        height={100}   
       alt="figma-logo"
        className='figma'
      />
  


    </div>
    
  )
}
