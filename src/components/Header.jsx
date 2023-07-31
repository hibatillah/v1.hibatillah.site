import { NavLink } from "react-router-dom";

const Header = () => {
  const menu = [
    ["About", "/"],
    ["Projects", "/projects"],
  ];

  return (
    <header className="container py-3 flex justify-between items-center">
      <a href="/" className="text-white font-semibold font-poppins">
        Habib
      </a>
      <nav className="flex items-center gap-5 font-source3 ">
        {menu.map(([item, path], index) => (
          <NavLink
            key={index}
            to={path}
            className={({ isActive }) =>
              isActive ? "text-main-100" : "text-main-400"
            }>
            {item}
          </NavLink>
        ))}
      </nav>
    </header>
  );
};

export default Header;
