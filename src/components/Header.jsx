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
      <nav className="flex items-center gap-6 font-source3">
        {menu.map(([item, path], index) => (
          <NavLink
            key={index}
            to={path}
            className={({ isActive }) =>
              isActive
                ? "text-main-300 relative z-0 before:content-[''] before:absolute before:-left-3 before:-right-3 before:-top-1 before:-bottom-2 before:rounded before:bg-main-800 before:-z-10"
                : "text-main-400"
            }>
            <span className="">{item}</span>
          </NavLink>
        ))}
      </nav>
    </header>
  );
};

export default Header;
