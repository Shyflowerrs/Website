import { text } from "stream/consumers";
import Particle from "../components/Particles/Particles";

import Image from "next/image";

const headerText : String = "Hello, I'm &nbsp Chelsea, <br/> I'm a fullstack web developer";


export default function Home() {
  return (
    <>

    <header className="bg-mainBG  whitespace-pre  h-screen justify-center flex items-center">
      <p className="text-bold text-6xl text-center">
        Hello, I'm Chelsea, <br/>
        I'm a fullstack web developer <br/>
        <a href="#about" className="border-2">tbasd</a>
      </p>
      <p className=" justify-center flex ">


      </p>

      <Particle/>
    </header>
    <main className="bg-mainBG">
testcsdasdads
    </main>

    </>
  );
}
