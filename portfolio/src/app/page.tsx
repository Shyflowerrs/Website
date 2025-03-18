import { text } from "stream/consumers";
import Particle from "../components/Particles/Particles";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Navigation Bar */}
      <nav className="bg-mainBG fixed top-0 left-0 w-full z-10 size-16 ">
        <div className="max-w-screen-lg mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-bold">Chelsea's Portfolio</h1>
          <ul className="flex space-x-6 text-lg text-bold">
            <li>
              <a href="#about" className="hover:text-[#DBB5B5] transition">
                About
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-[#DBB5B5] transition">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-[#DBB5B5] transition">
                Contact
              </a>
            </li>
            <li>
              <a href="#resume" className="hover:text-[#DBB5B5] transition">
                Resume
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-16">
        <header className="bg-mainBG whitespace-pre h-screen flex flex-col justify-center items-center text-center px-4">
          {/* <Particle /> */}
          <p className="font-bold text-2xl sm:text-4xl lg:text-5xl">
            Hello, I'm Chelsea, <br />
            I'm a fullstack web developer <br />
            <a
              href="#about"
              className="text-lg border-solid border-2 border-[#DBB5B5] p-2 mt-4 inline-block"
            >
              Check out my work
            </a>
          </p>
        </header>
      </div>
      <div
        className="bg-divBG h-auto py-12 flex flex-col items-center justify-center mx-auto px-4"
        id="about"
      >
        <h1 className="font-bold text-bold text-4xl sm:text-8xl lg:text-5xl mb-8">
          About me
        </h1>
        <div className="flex flex-col lg:flex-row items-center lg:items-center lg:justify-center text-center lg:text-left max-w-screen-lg mx-auto">
          <img
            className="lg:mr-8 mb-6 lg:mb-0 rounded-full w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72"
            src="/myself.jpg"
            alt="Chelsea"
          />
          <div className="flex flex-col gap-6 max-w-prose">
            <p className="text-black text-base sm:text-lg lg:text-xl">
              Hey there! 👋 Welcome to my site. I'm a full-stack developer with
              3 years of hands-on experience building robust, scalable, and
              innovative web applications from the ground up. From writing
              clean, efficient code to crafting smooth, user-friendly
              interfaces, I thrive in every aspect of the development process!
            </p>
            <p className="text-black text-base sm:text-lg lg:text-xl">
              What excites me most? Collaboration and teamwork! 🤝 I believe the
              best solutions come from working together, brainstorming, and
              bouncing ideas off brilliant minds. Whether I’m diving deep into
              backend architecture or creating front-end experiences, I always
              bring a positive attitude and a solution-oriented mindset to the
              table.
            </p>
            <p className="text-black text-base sm:text-lg lg:text-xl">
              💻 Tech Stack:
              <br />
              Frontend: React, HTML, CSS, JavaScript
              <br />
              Backend: Node.js, Express, C#, PHP
              <br />
              Database: PostgreSQL, MySQL
              <br />
              Tools: Git, AWS
            </p>
            <p className="text-black text-base sm:text-lg lg:text-xl">
              Every line of code I write is a part of the bigger picture—making
              impactful products that solve real problems. I’m constantly
              learning, evolving, and pushing myself to be a better developer
              every day. But what really drives me is being part of a team
              that’s committed to growth, innovation, and success!
              <br />
              Let's connect if you're looking for a developer who’s not only
              technically proficient but also loves collaborating, learning, and
              sharing ideas with teammates to build something great together! 🚀
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
