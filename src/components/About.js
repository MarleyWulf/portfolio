import React from "react";
import codeimage from "../images/Code typing-amico.png";

const About = () => {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, my name is Marlon
            <br className="hidden lg:inline-block" /> I love making web apps.
          </h1>
          <p className="mb-8 leading-relaxed">
            I'm a front-end developer with 2 years of experience. I've been
            self-taught and always try to continue learning and evolving in the
            developer space. I love to learn and I'm willing to adapt to any
            situation I'm put in. I'm enthusiastic and enjoy designing pages and
            projects, and I want to keep on improving my skills.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
            >
              Work with me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              See my past work
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src={codeimage}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
