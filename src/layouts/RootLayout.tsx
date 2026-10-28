import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { projects } from "../data/projects";
import ScrollToTop from "../components/ScrollToTop";
import CustomCursor from "../components/CustomCursor";

function RootLayout() {
  const { pathname } = useLocation();

  const isInnerPage = pathname === "/about" || projects.some(({ slug }) => pathname === `/${slug}`);

  const [isInitialLoad, setIsInitialLoad] = useState(pathname === "/");

  useEffect(() => {
    if (!isInitialLoad) return;

    const timeout = setTimeout(() => {
      setIsInitialLoad(false);
    }, 700);

    return () => clearTimeout(timeout);
  }, [isInitialLoad]);

  return (
    <div className="min-h-screen">
      <CustomCursor />
      <ScrollToTop />

      <Header collapsed={isInnerPage} animateIn={isInitialLoad} />

      <main className="min-h-screen">
        <Outlet />
      </main>

      <Footer collapsed={isInnerPage} animateIn={isInitialLoad} />
    </div>
  );
}

export default RootLayout;
