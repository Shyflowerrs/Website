import Particle from "../components/Particles/Particles";

import Image from "next/image";

export default function Home() {
  return (
    <>
    <Particle/>
    <main className="bg-mainBG">
      <p className="text-bold text-6xl text-center h-screen justify-center flex items-center">
        Hello, I'm Chelsea.<br/>
        I'm a full stack web developer.
      </p>
      <a href="#about">View my work</a>


    </main>
    </>
  );
}
