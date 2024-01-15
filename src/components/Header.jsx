import { NavLink } from "react-router-dom";

const Header = () => {
  const menu = [
    ["About", "/"],
    ["Projects", "/projects"],
    ["Bookmarks", "/bookmarks"],
  ];

  return (
    <header className="container py-3 flex justify-between items-center">
      <a
        href="/"
        target="_top"
        className="flex items-center text-white font-semibold font-poppins group">
        <div className="w-7 h-7 p-1 flex-none rounded-md bg-main-600 transition-all duration-500 ease-out">
          <div className="w-full h-full rounded bg-main-200 transition-all duration-500 ease-out" />
        </div>
        <div className="hidden flex-1 sm:flex ps-2 w-20 overflow-hidden text-main-200 *:leading-none">
          <span className="group-hover:translate-y-10 group-hover:opacity-0 transition-all duration-500 ease-out">Habib</span>
          <span className="-translate-x-11 -translate-y-10 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out">Hibatillah</span>
        </div>
      </a>
      <nav className="flex items-center gap-8 font-source3">
        {menu.map(([item, path], index) => (
          <NavLink
            key={index}
            to={path}
            className={({ isActive }) =>
              isActive
                ? "relative text-main-200 hover:text-white before:content-[''] before:absolute before:-left-4 before:-right-4 before:-top-1 before:-bottom-[6px] before:rounded-md before:bg-main-800 before:-z-10"
                : "text-main-400 hover:text-main-300"
            }>
            <div className="z-0">
              {item}
            </div>
          </NavLink>
        ))}
      </nav>
    </header>
  );
};

export default Header;
