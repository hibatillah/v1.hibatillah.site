import { motion as m } from "framer-motion";
import { ProjectCard } from "../components";
import { container, text } from "../components/animate";
import { projects } from "../db";

const Projects = () => {
  return (
    <>
      <m.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mt-5 text-center overflow-hidden">
        <m.h1 variants={text}>Masterpiece</m.h1>
        <m.p variants={text}>Several projects that have been made</m.p>
      </m.div>
      <m.ul
        variants={container}
        initial="hidden"
        animate="show"
        className="mt-16 md:mb-16 flex flex-col gap-y-12">
        {projects.map((item, index) => (
          <li key={index} className="w-full">
            <ProjectCard
              image={item.image}
              title={item.title}
              date={item.date}
              desc={item.desc}
              tag={item.tag}
              link={item.link}
            />
          </li>
        ))}
      </m.ul>
    </>
  );
};

export default Projects;
