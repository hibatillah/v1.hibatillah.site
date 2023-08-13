import clsx from "clsx";
import { motion as m } from "framer-motion";
import React from "react";
import { container, text } from "../components/animate";

const label = [
  "Inspirations",
  "Images",
  "Icons",
  "Illustrations",
  "Fonts",
  "Colors",
  "Patterns",
  "Mockups",
  "Tools",
  "Blogs",
  "Quotes",
];

const Bookmarks = () => {
  const [activeLabel, setActiveLabel] = React.useState(label[0]);

  return (
    <div className="xl:px-16 2xl:px-20">
      <m.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mt-5 text-center overflow-hidden">
        <m.h1 variants={text}>Bookmarks</m.h1>
        <m.p variants={text}>Some useful references and resources</m.p>
        <m.ul
          variants={text}
          className="mt-14 flex flex-wrap items-center justify-center gap-x-7 gap-y-3 md:w-4/5 md:mx-auto lg:w-full xl:gap-x-10">
          {label.map((item, index) => (
            <li
              key={index}
              onClick={() => setActiveLabel(item)}
              className={clsx({
                "text-medium cursor-pointer hover:underline underline-offset-4": true,
                "text-main-400": activeLabel !== item,
                "text-main-200": activeLabel === item,
              })}>
              {item}
            </li>
          ))}
        </m.ul>
      </m.div>
    </div>
  );
};

export default Bookmarks;
