/* eslint-disable react/prop-types */
import { motion as m } from "framer-motion";
import { BsBehance, BsDribbble, BsGithub, BsSpotify } from "react-icons/bs";
import { FaFigma } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { SiLinkedin } from "react-icons/si";
import { SlSocialInstagram } from "react-icons/sl";
import { container, text } from "../components/animate";
import { socials } from "../db";

const icons = {
  email: <HiOutlineMail size={18} />,
  instagram: <SlSocialInstagram size={14} />,
  linkedin: <SiLinkedin size={14} />,
  github: <BsGithub size={14} />,
  dribbble: <BsDribbble size={14} />,
  behance: <BsBehance size={16} />,
  figma: <FaFigma size={14} />,
  spotify: <BsSpotify size={14} />,
};

const Linkto = ({ title, to }) => {
  return (
    <a href={`https://${to}`} className="link">
      {title}
    </a>
  );
};

const About = () => {
  return (
    <div className="w-full min-h-[calc(100vh-184px)] lg:px-20 xl:px-40 grid place-items-center">
      <m.div
        variants={container}
        initial="hidden"
        animate="show"
        className="space-y-16  overflow-hidden">
        <div className="flex flex-col gap-1">
          <m.h1 variants={text}>M. Hibatillah Hasanin</m.h1>
          <m.p variants={text} className="mt-2">
            Hi {"i'm"} <Linkto to="read.cv/hibatillah" title="Habib" />, 3rd
            year student Bachelor of Applied Information Systems at{" "}
            <Linkto to="pcr.ac.id" title="Polytechnic Caltex Riau" />.
          </m.p>
          <m.p variants={text}>
            Enjoy life in{" "}
            <Linkto to="bit.ly/473IIbY" title="Pekanbaru, Indonesia" />.{" "}
            {"I'm "}a UI Designer and Frontend Developer, interested and
            passionate in web development and love to design.
          </m.p>
          <m.p variants={text} className="my-2">
            Currently focusing on deepening material related to{" "}
            <Linkto to="react.dev" title="React" />, styling components with{" "}
            <Linkto to="tailwindcss.com" title="Tailwindcss" /> and creating
            various UI Design innovations in{" "}
            <Linkto to="figma.com/@hibatillah" title="Figma" />.
          </m.p>
          <m.p variants={text}>
            <a
              href="mailto:hibatillah21si@mahasiswa.pcr.ac.id"
              className="link">
              Contact me
            </a>{" "}
            to collaborate on creating various innovative designs.{" "}
            <Linkto to="github.com/sponsors/hibatillah" title="Support me" /> in
            creating various other interesting projects.
          </m.p>
        </div>
        <div className="space-y-2">
          <m.h2 variants={text}>Stay Connected</m.h2>
          <m.ul variants={text} className="flex flex-wrap items-center gap-2">
            {socials.map((item, index) => (
              <li key={index} className="relative">
                <a
                  href={
                    item.title !== "Email"
                      ? `https://${item.link}`
                      : `mailto:${item.link}`
                  }
                  className="socials-link">
                  {icons[item.title.toLowerCase()]}
                  {item.title}
                </a>
              </li>
            ))}
          </m.ul>
        </div>
      </m.div>
    </div>
  );
};

export default About;
