import './home.css';
import Image from 'next/image';
import girl from './public/girl.png'; 

export default function Home() {
  return (
    <div className="hero">
      <p className="para">Hi, I am</p>
      <h1 className="main-heading">Yusra Fatima</h1>
      <h2 className="h2">Front-end developer</h2>

      <Image
        src={girl}
        width={300}
        height={900}
        alt="Girl Image"
        className="girl"
      />
     
    
    </div>
  );
}
