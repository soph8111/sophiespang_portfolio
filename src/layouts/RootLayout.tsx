import { useEffect, useState } from "react";
import { AnimatePresence } from "motion/react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { projects } from "../data/projects";
import ScrollToTop from "../components/ScrollToTop";
import CustomCursor from "../components/CustomCursor";
import PageLoader from "../components/PageLoader";

export interface HomePageContext {
  onGalleryReady: () => void;
  introReady: boolean;
}

function RootLayout() {
  const { pathname } = useLocation();

  const isInnerPage = pathname === "/about" || projects.some(({ slug }) => pathname === `/${slug}`);

  const [isLoading, setIsLoading] = useState(pathname === "/");
  const [introReady, setIntroReady] = useState(pathname !== "/");
  const [shouldAnimateIntro] = useState(pathname === "/");
  const [introFinished, setIntroFinished] = useState(false);

  const handleGalleryReady = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    if (!introReady || !shouldAnimateIntro) return;

    const timeout = setTimeout(() => {
      setIntroFinished(true);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [introReady, shouldAnimateIntro]);

  return (
    <div className="min-h-screen">
      <CustomCursor />
      <ScrollToTop />

      <AnimatePresence onExitComplete={() => setIntroReady(true)}>{isLoading && <PageLoader />}</AnimatePresence>

      {(!shouldAnimateIntro || introReady) && (
        <>
          <Header collapsed={isInnerPage} animateIn={shouldAnimateIntro && !introFinished} />

          <Footer collapsed={isInnerPage} animateIn={shouldAnimateIntro && !introFinished} />
        </>
      )}

      <main className="min-h-screen">
        <Outlet
          context={{
            onGalleryReady: handleGalleryReady,
            introReady,
          }}
        />
      </main>
    </div>
  );
}

export default RootLayout;
