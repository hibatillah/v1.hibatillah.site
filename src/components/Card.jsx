/* eslint-disable react/prop-types */
import { motion as m } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import Image from "react-image-webp";
import { Link } from "react-router-dom";
import { card } from "./animate";

export const ProjectCard = ({ image, webp, title, date, desc, tag, link, formatedDate }) => {
  const year = new Date().getFullYear()

  return (
    <div className="flex flex-1 gap-12 xl:gap-16">
      
      <m.div
        initial={{ opacity: 0, x: "-20%" }}
        animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
        className="relative hidden lg:block flex-none pr-12 lg:w-40 xl:w-48">
        <m.time
          initial={{ opacity: 0, x: "-30%" }}
          animate={{
            opacity: 1,
            x: 0,
            transition: { duration: 0.5, delay: 0.5 },
          }}
          dateTime={date == "On Progress" ? year : formatedDate}
          className="text-main-400">
          {date}
        </m.time>
        <span className="absolute top-2 -right-px w-2.5 h-2.5 rounded-full bg-main-900 border border-main-400 z-10" />
        <span className="absolute top-3 right-[3px] w-0.5 lg:h-52 xl:h-60 bg-main-500 z-0" />
      </m.div>

      <Link to={link} className="md:grow">
        <abbr title={title}>
          <m.div
          variants={card}
          className="flex flex-col gap-4 hover:card cursor-pointer md:flex-auto md:flex-row md:justify-start md:items-center md:gap-6 lg:flex-auto lg:gap-8 group/card">
            <Image
              src={image}
              webp={webp}
              alt={title}
              loading="eager"
              className="card-img"
            />
            <div className="md:w-2/3 lg:pe-1 2xl:w-2/3">
              <p className="text-sm lg:hidden">{date}</p>
              <div className="my-1 flex gap-1.5 items-start md:items-center">
                <h2 className="line-clamp-2 select-all md:line-clamp-1">{title}</h2>
                <FiArrowUpRight
                  size={20}
                  strokeWidth={2}
                  className="flex-none ms-1 text-main-300 opacity-0 group-hover/card:opacity-100"
                />
              </div>
              <p className="line-clamp-3 md:line-clamp-2">{desc}</p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {tag.map((item, index) => (
                  <li key={index} className="tag">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </m.div>
        </abbr>
      </Link>

    </div>
  );
};
