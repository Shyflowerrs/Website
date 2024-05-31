import { text } from "stream/consumers";
import Particle from "../components/Particles/Particles";

import Image from "next/image";

const headerText : String = "Hello, I'm &nbsp Chelsea, <br/> I'm a fullstack web developer";


export default function Home() {
  return (
    <>

    <header className="bg-mainBG">
      <p className="  text-bold text-6xl text-center h-screen justify-center flex items-center">
        Hello, I'm Chelsea, <br/>
        I'm a fullstack web developer <br />

      </p>
      <Particle/>
    </header>
    <main className="bg-mainBG">

    </main>

    </>
  );
}
