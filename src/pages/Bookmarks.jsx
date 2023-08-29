import clsx from "clsx";
import { motion as m } from "framer-motion";
import React from "react";
import { container, list, text } from "../components/animate";
import { bookmarks } from "../db";

const label = [
  "Inspirations",
  "Images",
  "Icons",
  "Illustrations",
  "3D Assets",
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

  const filteredBookmarks = bookmarks.find(
    (bookmark) => bookmark.label.toLowerCase() === activeLabel.toLowerCase()
  );

  return (
    <div className="min-h-[calc(100dvh-220px)] space-y-9 xl:px-16 2xl:px-20">
      <m.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mt-5 text-center overflow-hidden">
        <m.h1 variants={text}>Legacy</m.h1>
        <m.p variants={text}>Some useful references and resources</m.p>
      </m.div>
      <m.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex flex-col items-center gap-10 md:gap-20 md:flex-row md:w-fit md:mx-auto md:items-start lg:gap-28 xl:gap-36">
        <m.ul
          variants={list}
          className="flex-none flex flex-wrap justify-center md:block">
          {label.map((item, index) => (
            <li key={index}>
              <button
                onClick={() => setActiveLabel(item)}
                className={clsx({
                  "px-3 py-1.5 w-fit rounded-md text-medium cursor-pointer": true,
                  "text-main-200 bg-main-800": activeLabel === item,
                  "text-main-400 hover:text-main-300": activeLabel !== item,
                })}>
              {item}
              </button>
            </li>
          ))}
        </m.ul>
        <m.ul
          variants={list}
          className="flex-none w-4/5 max-h-[350px] mx-auto flex flex-col flex-wrap gap-2 md:mx-0 md:w-80 md:mt-6">
          {filteredBookmarks?.list?.map((item, index) => (
            <li key={index}>
              {filteredBookmarks.label !== "Quotes" ? (
                <a href={item.url} className="link">
                  <abbr title={item.url.split('//')[1]}>{item.name.toLowerCase()}</abbr>
                </a>
              ) : (
                <span className="text-main-300 hover:text-main-100">{item}</span>
              )}
            </li>
          ))}
        </m.ul>
      </m.div>
    </div>
  );
};

export default Bookmarks;
