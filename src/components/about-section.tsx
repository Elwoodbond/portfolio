import React from "react"
import Image from "next/image"

const skills = [
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "Bootstrap" },
  { skill: "React" },
  { skill: "Next.js" },
  { skill: "Tailwind CSS" },
  { skill: "GitHub" },
  { skill: "JQuery" },
  { skill: "Node.js" },
  { skill: "Git" },
  { skill: "WordPress" },
  { skill: "Wix" },
  { skill: "GoDaddy" },
  { skill: "Graphic Design" },
  { skill: "Canva" },
  { skill: "Elementor" },
]

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
              I am a lifelong resident of Tampa and graduate of 
              the University of Tampa with a passion for
              creating. With my background in performing arts, I have a
              unique perspective on the creative process and how to
              effectively work with others to create engaging content.                         
            </p>
            <br />
            <p>
              When I am not coding I enjoy traveling, practicing Brazilian Jiu Jitsu, 
              vegetable gardening, and performing on stage.
            </p>
            <br />

          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
