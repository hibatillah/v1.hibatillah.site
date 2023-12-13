/* eslint-disable react/prop-types */
import { motion as m } from "framer-motion";
import {
  BsBehance,
  BsDiscord,
  BsDribbble,
  BsGithub,
  BsInstagram,
  BsSpotify,
} from "react-icons/bs";
import { FaFigma } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { RxKeyboard } from "react-icons/rx";
import { SiLinkedin } from "react-icons/si";
import { container, text } from "../components/animate";
import { socials } from "../db";

const icons = {
  email: <HiOutlineMail size={18} />,
  instagram: <BsInstagram size={14} />,
  linkedin: <SiLinkedin size={14} />,
  github: <BsGithub size={14} />,
  dribbble: <BsDribbble size={14} />,
  behance: <BsBehance size={16} />,
  figma: <FaFigma size={14} />,
  spotify: <BsSpotify size={14} />,
  monkeytype: <RxKeyboard size={18} />,
  discord: <BsDiscord size={16} />,
};

const Linkto = ({ title, to }) => <a href={`https://${to}`} className="link">{title}</a>

const AboutContent = () => {
  return (
    <>
      <m.h1 variants={text}>M. Hibatillah Hasanin</m.h1>

      {/* first */}
      <m.p variants={text} className="mt-2">
        Hi {"i'm"} <Linkto to="linkedin.com/in/hibatillahhabib/" title="Habib" />, 3rd
        year student Bachelor of Applied Science in Information Systems at{" "}
        <Linkto to="pcr.ac.id" title="Politeknik Caltex Riau" />.
      </m.p>

      {/* second */}
      <m.p variants={text}>
        UI Designer • Frontend Developer in{" "}
        <Linkto to="www.google.com/search?q=pekanbaru+indonesia" title="Pekanbaru, Indonesia" />
        . Interested, passionate and knowledgeable in frontend development and love to design. Currently focus on exploring{" "}
        <Linkto to="nextjs.org" title="Nextjs" />, styling components using{" "}
        <Linkto to="tailwindcss.com" title="Tailwindcss" />, creating UI Design in{" "}
        <Linkto to="figma.com/@hibatillah" title="Figma" /> and dive into the internet with{" "}
        <Linkto to="arc.net" title="Arc" />.
      </m.p>

      {/* third */}
      <m.p variants={text}>
        <a href="mailto:hibatillah21si@mahasiswa.pcr.ac.id" className="link">Contact me</a>{" "}
        to collaborate on creating various innovative designs.{" "}
        <Linkto to="github.com/sponsors/hibatillah" title="Support" /> to create other interesting projects.
      </m.p>

      {/* cta */}
      <m.button variants={text} className="w-fit mt-3">
        <a href="https://read.cv/hibatillah" className="socials-link">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5"
            viewBox="0 0 256 256">
            <path
              fill="currentColor"
              d="m210.78 39.25l-130.25-23A16 16 0 0 0 62 29.23l-29.75 169a16 16 0 0 0 13 18.53l130.25 23a16 16 0 0 0 18.54-13l29.75-169a16 16 0 0 0-13.01-18.51ZM178.26 224L48 201L77.75 32L208 55ZM89.34 58.42a8 8 0 0 1 9.27-6.48l83 14.65a8 8 0 0 1-1.39 15.88a8.36 8.36 0 0 1-1.4-.12l-83-14.66a8 8 0 0 1-6.48-9.27ZM83.8 89.94a8 8 0 0 1 9.27-6.49l83 14.66a8 8 0 0 1-1.4 15.89a7.55 7.55 0 0 1-1.41-.13l-83-14.65a8 8 0 0 1-6.46-9.28Zm-5.55 31.51a8 8 0 0 1 9.27-6.45l41.48 7.29a8 8 0 0 1-1.38 15.88a8.27 8.27 0 0 1-1.4-.12l-41.5-7.33a8 8 0 0 1-6.47-9.27Z"
            />
          </svg>
          read.cv
        </a>
      </m.button>
    </>
  );
};

const About = () => {
  return (
    <div className="w-full min-h-[calc(100dvh-188px)] grid place-items-center lg:px-16">
      <m.div
        variants={container}
        initial="hidden"
        animate="show"
        className="space-y-12 overflow-hidden xl:w-4/5">
        <div className="flex flex-col gap-1">
          <AboutContent />
        </div>
        <div className="space-y-2">
          <m.h2 variants={text}>Stay Connected</m.h2>
          <m.ul variants={text} className="flex flex-wrap items-center gap-2">
            {socials.map((item, index) => (
              <li key={index} className="relative">
                <a
                  href={item.title !== "Email" ? item.link : `mailto:${item.link}`}
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
