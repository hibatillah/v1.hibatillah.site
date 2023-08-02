/* eslint-disable react/prop-types */
import { motion as m } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import Image from "react-image-webp";
import { Link } from "react-router-dom";
import { card } from "./animate";

export const ProjectCard = ({ image, webp, title, date, desc, tag, link }) => {
  return (
    <div className="flex-1 flex gap-16">
      <m.div
        initial={{ opacity: 0, x: "-20%" }}
        animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
        className="relative hidden lg:block flex-none pr-12 w-48">
        <m.p
          initial={{ opacity: 0, x: "-30%" }}
          animate={{
            opacity: 1,
            x: 0,
            transition: { duration: 0.5, delay: 0.5 },
          }}>
          {date}
        </m.p>
        <span className="absolute top-2 -right-px w-2.5 h-2.5 rounded-full bg-main-900 border border-main-400 z-10" />
        <span className="absolute top-3 right-[3px] w-0.5 lg:h-52 bg-main-500 z-0" />
      </m.div>
      <Link to={link}>
        <m.div
          variants={card}
          className="flex flex-col gap-4 hover:card cursor-pointer md:flex-auto md:flex-row md:justify-end md:items-center md:gap-6 lg:flex-auto lg:gap-8 group">
          <Image
            src={image}
            webp={webp}
            alt={title}
            loading="eager"
            className="card-img"
          />
          <div className="md:w-2/3 2xl:w-2/3">
            <p className="text-sm lg:hidden">{date}</p>
            <div className="my-1 flex gap-1.5 items-center">
              <h2 className="line-clamp-1 select-all">{title}</h2>
              <FiArrowUpRight
                size={20}
                className="text-main-400 group-hover:text-white"
              />
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
        </m.div>
      </Link>
    </div>
  );
};
