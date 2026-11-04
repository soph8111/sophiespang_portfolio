import { motion } from "motion/react";

function PageLoader() {
  return (
    <motion.div exit={{ opacity: 0 }} transition={{ duration: 0.5 }} className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background">
      <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-2xl font-bold">
        SOPHIE SPANG
      </motion.p>

      <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1, ease: "easeInOut" }} className="mt-5 h-px w-24 origin-left bg-foreground" />
    </motion.div>
  );
}

export default PageLoader;
