import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./slide-up"
import { BsArrowUpRightSquare } from "react-icons/bs"

const experience = [
    {
      name: "Training USA",
      image: "/WeTrainAmerica.png",
      link: "https://www.wetrainamerica.com",
    },
    {
      name: "Joint Ventures Network",
      image: "/jointventures.png",
      link: "https://www.jointventuresnetwork.com",
    },
    {
      name: "TD Tax Consult",
      image: "/tdtax.png",
      link: "https://tdtaxconsult.godaddysites.com/",
    },
    {
        name: "TinDog",
        image: "/tindog.png",
        link: "https://elwoodbond.github.io/tindog-main/",
    }
  ]
  
  const WebDesign = () => {
    return (
      <section id="webDesign">
        <h1 className="my-10 text-center font-bold text-4xl">
          Web Design
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>
  
        <div className="flex flex-col space-y-28">
          {experience.map((experience, idx) => {
            return (
              <div key={idx}>
                <SlideUp offset="-300px 0px -300px 0px">
                  <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                    <div className=" md:w-1/2">
                      <Link href={experience.link}>
                        <Image
                          src={experience.image}
                          alt=""
                          width={1000}
                          height={1000}
                          className="rounded-xl shadow-xl hover:opacity-70"
                        />
                      </Link>
                    </div>
                    <div className="mt-8 md:w-1/2">
                      <h1 className="text-4xl font-bold mb-6">{experience.name}</h1>
                      <div className="flex flex-row align-bottom space-x-4">
                        <Link href={experience.link} target="_blank">
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
  
  export default WebDesign