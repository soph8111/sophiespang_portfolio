import { motion } from "motion/react";
import ProjectGallery from "../components/ProjectGallery";

function HomePage() {
  return (
    <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.45,
          duration: 0.7,
          ease: [0.76, 0, 0.24, 1],
        }}
      >
        <ProjectGallery />
      </motion.div>
    </motion.section>
  );
}

export default HomePage;
