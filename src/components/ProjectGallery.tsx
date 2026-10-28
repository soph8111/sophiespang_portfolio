import { useEffect, useRef } from "react";
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";
import { motion } from "motion/react";
import { galleryEnterTransition } from "../utils/motion";

function ProjectGallery() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const groupRef = useRef<HTMLDivElement>(null);

  const currentX = useRef(0);
  const targetX = useRef(0);
  const groupWidth = useRef(0);

  const animationFrame = useRef<number | null>(null);

  useEffect(() => {
    const viewport = viewportRef.current;
    const track = trackRef.current;
    const group = groupRef.current;

    if (!viewport || !track || !group) return;

    const updateGroupWidth = () => {
      groupWidth.current = group.offsetWidth;
    };

    const resizeObserver = new ResizeObserver(updateGroupWidth);
    resizeObserver.observe(group);

    updateGroupWidth();

    const normalizePosition = () => {
      const width = groupWidth.current;

      if (!width) return;

      if (currentX.current <= -width) {
        currentX.current += width;
        targetX.current += width;
      }

      if (currentX.current >= 0) {
        currentX.current -= width;
        targetX.current -= width;
      }
    };

    const animate = () => {
      currentX.current += (targetX.current - currentX.current) * 0.08;

      normalizePosition();

      track.style.transform = `translateX(${currentX.current}px)`;

      if (Math.abs(targetX.current - currentX.current) > 0.1) {
        animationFrame.current = requestAnimationFrame(animate);
      } else {
        currentX.current = targetX.current;
        track.style.transform = `translateX(${currentX.current}px)`;
        animationFrame.current = null;
      }
    };

    const handleWheel = (event: WheelEvent) => {
      event.preventDefault();

      const delta = Math.abs(event.deltaX) > Math.abs(event.deltaY) ? event.deltaX : event.deltaY;

      targetX.current -= delta * 0.5;

      if (!animationFrame.current) {
        animationFrame.current = requestAnimationFrame(animate);
      }
    };

    viewport.addEventListener("wheel", handleWheel, {
      passive: false,
    });

    return () => {
      viewport.removeEventListener("wheel", handleWheel);
      resizeObserver.disconnect();

      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
      }
    };
  }, []);

  return (
    <>
      {/* Mobile */}
      <div className="flex flex-col gap-10 px-6 pb-32 pt-36 md:hidden">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} mobile />
        ))}
      </div>

      {/* Desktop */}
      <motion.div ref={viewportRef} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={galleryEnterTransition} className="hidden h-dvh overflow-hidden md:block">
        <div ref={trackRef} className="flex h-full w-max items-center will-change-transform">
          {[0, 1].map((groupIndex) => (
            <div key={groupIndex} ref={groupIndex === 0 ? groupRef : undefined} className="flex h-full items-center gap-6 pl-6">
              {projects.map((project) => (
                <ProjectCard key={`${groupIndex}-${project.slug}`} project={project} />
              ))}
            </div>
          ))}
        </div>
      </motion.div>
    </>
  );
}

export default ProjectGallery;
