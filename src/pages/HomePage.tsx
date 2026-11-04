import { useOutletContext } from "react-router-dom";
import ProjectGallery from "../components/ProjectGallery";
import type { HomePageContext } from "../layouts/RootLayout";

function HomePage() {
  const { onGalleryReady, introReady } = useOutletContext<HomePageContext>();

  return (
    <section className="overflow-hidden">
      <ProjectGallery onReady={onGalleryReady} startAnimation={introReady} />
    </section>
  );
}

export default HomePage;
