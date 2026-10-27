import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { projects } from "../data/projects";

function RootLayout() {
  const { pathname } = useLocation();

  const isHomePage = pathname === "/";

  const isProjectPage = projects.some(({ slug }) => pathname === `/${slug}`);

  return (
    <div className="min-h-screen">
      <Header collapsed={isProjectPage} animateIn={isHomePage} />

      <main className="min-h-screen">
        <Outlet />
      </main>

      <Footer collapsed={isProjectPage} animateIn={isHomePage} />
    </div>
  );
}

export default RootLayout;
