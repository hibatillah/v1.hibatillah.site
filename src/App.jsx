import { Route, Routes } from "react-router-dom";
import { Header } from "./components";
import { About, Projects } from "./pages";

function App() {
  const year = new Date().getFullYear();

  return (
    <>
      <Header />
      <main className="container py-12 min-h-[calc(100vh-88.8px)]">
        <Routes>
          <Route index element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </main>
      <footer className="p-2 text-center">
        <span className="text-main-400/50 font-source3 select-none">
          <a
            href="https://creativecommons.org/licenses/by-nd/2.0/"
            className="hover:underline underline-offset-2">
            CC BY-ND 2.0
          </a>{" "}
          {year} &copy; Hibatillah Hasanin
        </span>
      </footer>
    </>
  );
}

export default App;
