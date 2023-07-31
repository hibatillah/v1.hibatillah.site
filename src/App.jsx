import { Route, Routes } from "react-router-dom";
import { About, Projects } from "./pages";
import { Header } from "./components";

function App() {
  const year = new Date().getFullYear();

  return (
    <>
      <Header />
      <main className="container py-5 min-h-[calc(100vh-88.8px)]">
        <Routes>
          <Route index element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </main>
      <footer className="p-2 text-center">
        <span className="text-main-500 font-source3">
          {year} &copy; Hibatillah. All rights reserved
        </span>
      </footer>
    </>
  );
}

export default App;
