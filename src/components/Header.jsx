import { NavLink } from "react-router-dom";

const Header = () => {
  const menu = [
    ["About", "/"],
    ["Projects", "/projects"],
  ];

  return (
    <header className="container py-3 flex justify-between items-center">
      <a
        href="/"
        target="_parent"
        className="text-white font-semibold font-poppins">
        Habib
      </a>
      <nav className="flex items-center gap-8 font-source3">
        {menu.map(([item, path], index) => (
          <NavLink
            key={index}
            to={path}
            className={({ isActive }) =>
              isActive ? "text-main-200 hover:text-white" : "text-main-400 hover:text-main-300"
            }>
            <div className="relative z-0 before:content-[''] before:absolute before:-left-4 before:-right-4 before:-top-1 before:-bottom-[6px] before:rounded-lg hover:before:bg-main-800 before:-z-10">
              {item}
            </div>
          </NavLink>
        ))}
      </nav>
    </header>
  );
};

export default Header;
