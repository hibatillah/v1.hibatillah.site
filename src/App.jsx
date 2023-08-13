import { BsGithub } from "react-icons/bs";
import { Route, Routes } from "react-router-dom";
import { Header } from "./components";
import { About, Error, Projects, Bookmarks } from "./pages";

function App() {
  const year = new Date().getFullYear();

  return (
    <>
      <Header />
      <main className="container py-12 min-h-[calc(100dvh-92px)]">
        <Routes>
          <Route index element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/bookmarks" element={<Bookmarks />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </main>
      <footer className="container py-2.5 flex justify-between items-center text-center md:text-left">
        <span className="text-main-400/50 font-source3 select-none">
          © {year} Hibatillah Hasanin
        </span>
        <a href="https://github.com/hibatillah/hibatillah.site">
          <abbr title="site source">
            <BsGithub size={20} className="text-main-400 hover:text-main-300" />
          </abbr>
        </a>
      </footer>
    </>
  );
}

export default App;
