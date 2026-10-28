import { motion } from "motion/react";
import { projectEnterTransition } from "../utils/motion";

function AboutPage() {
  return (
    <motion.section initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={projectEnterTransition} className="mx-auto max-w-300 px-6 pb-32 mt-32 md:pt-40">
      <div className="grid gap-12 md:grid-cols-2">
        <div>
          <h1 className="text-6xl font-bold uppercase">About</h1>
        </div>

        <div className="max-w-xl">
          <p className="text-lg leading-relaxed">Frontend developer with a background in Multimedia Design and Web Development. I enjoy combining development, design and UX to create digital experiences that feel intuitive and considered.</p>
        </div>
      </div>
    </motion.section>
  );
}

export default AboutPage;
