import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./slide-up"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
  {
    name: "Sōshal",
    description:
      "Sōshal is a fullstack microblogging app built using Next.js, Tailwind CSS, TypeScript, and MongoDB Atlas.",
    image: "/soshal.png",
    github: "https://github.com/Elwoodbond/soshal",
    link: "https://soshal.vercel.app/",
  },
  {
    name: "IMDb Clone",
    description:
      "IMDb Clone is a movie database app built using Next.js and Tailwind CSS.",
    image: "/IMDb.png",
    github: "https://github.com/Elwoodbond/imdb-clone",
    link: "https://imdb-wheat.vercel.app/",
  },
  {
    name: "Drum Kit",
    description: "Drum Kit is a virtual drum kit built using JavaScript and JQuery.",
    image: "/drum.png",
    github: "https://github.com/Elwoodbond/DrumMachine",
    link: "https://drum-machine-xi.vercel.app/",
  },
  {
    name: "Anime Vault",
    description: "Anime Vault is a visual anime poster app built using React, Tailwind CSS, and the Shikimori API.",
    image: "/animevault.png",
    github: "https://github.com/Elwoodbond/anime_vault",
    link: "https://anime-vault-b7po.vercel.app/",
  },
  {
    name: "TinDog",
    description:
      "TinDog is a landing page built using Bootstrap.",
    image: "/tindog.png",
    github: "https://github.com/Elwoodbond/tindog-main",
    link: "https://elwoodbond.github.io/tindog-main/",
  }
]

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          )
        })}
        
      </div>
    </section>
  )
}

export default ProjectsSection
