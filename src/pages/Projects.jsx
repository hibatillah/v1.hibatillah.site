import { Link } from "react-router-dom";
import { ProjectCard } from "../components";
import { projects } from "../db";

const Projects = () => {
  return (
    <>
      <div className="mt-5 text-center">
        <h1>Masterpiece</h1>
        <p>{"Some of the projects that i've made"}</p>
      </div>
      <ul className="mt-16 md:mb-16 space-y-12">
        {projects.map((item, index) => (
          <li key={index}>
            <Link to={item.link}>
              <ProjectCard
                image={"https://source.unsplash.com/random/?laptop"}
                title={item.title}
                date={item.date}
                desc={item.desc}
                tag={item.tag}
              />
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Projects;
