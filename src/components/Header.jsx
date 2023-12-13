import { NavLink } from "react-router-dom";
import signature from "../assets/img/signature.png";

const Header = () => {
  const menu = [
    ["About", "/"],
    ["Projects", "/projects"],
    // ["Bookmarks", "/bookmarks"],
  ];

  return (
    <header className="container py-3 flex justify-between items-center">
      <a
        href="/"
        target="_top"
        className="text-white font-semibold font-poppins">
        <div className="w-7 h-7 p-1 rounded-md bg-main-600">
          <div className="w-full h-full rounded bg-main-200" />
        </div>
        {/* <img src={signature} alt="hibatillah.site signature" className="w-auto h-6" /> */}
      </a>
      <nav className="flex items-center gap-6 font-source3">
        {menu.map(([item, path], index) => (
          <NavLink
            key={index}
            to={path}
            className={({ isActive }) =>
              isActive
                ? "text-main-200 hover:text-white"
                : "text-main-400 hover:text-main-300"
            }>
            <div className="relative z-0 before:content-[''] before:absolute before:-left-3 before:-right-3 before:-top-1 before:-bottom-[6px] before:rounded-md hover:before:bg-main-800 before:-z-10">
              {item}
            </div>
          </NavLink>
        ))}
      </nav>
    </header>
  );
};

export default Header;
