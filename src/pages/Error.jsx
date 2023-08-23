import { motion as m } from "framer-motion";
import { Link } from "react-router-dom";
import { container, text } from "../components/animate";

const Error = () => {
  return (
    <div className="w-full min-h-[calc(100dvh-188px)] grid place-items-center">
      <m.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex flex-col items-center">
        <m.h1 variants={text}>Page Not Found</m.h1>
        <m.p variants={text} className="mt-1 mb-5">
          something {"you're"} looking for not found
        </m.p>
        <Link to="/">
          <m.button
            variants={text}
            className="px-4 py-2 rounded-md bg-main-700 text-main-100 hover:bg-main-600">
            Back to home
          </m.button>
        </Link>
      </m.div>
    </div>
  );
};

export default Error;
