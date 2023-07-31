/* eslint-disable react/prop-types */
import { FiArrowUpRight } from "react-icons/fi";

export const ProjectCard = ({ image, title, date, desc, tag }) => {
  return (
    <div className="flex gap-16 2xl:gap-20">
      <div className="relative hidden lg:block flex-none pr-12 w-40">
        <p>{date}</p>
        <span className="absolute top-2 -right-px w-2.5 h-2.5 rounded-full bg-main-900 border border-main-400 z-10" />
        <span className="absolute top-3 right-[3px] w-0.5 lg:h-52 xl:h-56 bg-main-500 z-0" />
      </div>
      <div className="flex flex-col gap-4 hover:card cursor-pointer md:flex-row md:items-center md:gap-6 lg:flex-auto lg:gap-8 group">
        <img
          src={image}
          alt={title}
          loading="eager"
          className="w-full aspect-video object-cover rounded-lg md:w-1/3 md:aspect-[4/3] lg:w-[30%] lg:aspect-[4/3] xl:aspect-video 2xl:w-1/4 2xl:aspect-video pointer-events-none select-none brightness-90"
        />
        <div>
          <p className="text-sm lg:hidden">{date}</p>
          <div className="my-1 flex gap-1.5 items-center">
            <h2 className="line-clamp-1 select-all">{title}</h2>
            <FiArrowUpRight size={20} className="text-main-400 group-hover:text-white" />
          </div>
          <p className="line-clamp-2">{desc}</p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {tag.map((item, index) => (
              <li key={index} className="tag">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
