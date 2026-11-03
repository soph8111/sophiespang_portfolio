import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { projectEnterTransition } from "../utils/motion";

function NotFoundPage() {
  return (
    <motion.section initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={projectEnterTransition} className="mx-auto flex min-h-dvh max-w-[1400px] flex-col justify-center px-6 py-32">
      <p className="text-sm uppercase">Page not found</p>

      <h1 className="mt-4 text-7xl font-bold uppercase tracking-tight md:text-9xl">404</h1>

      <p className="mt-6 max-w-md text-lg">Looks like this page got lost somewhere along the way.</p>

      <Link to="/" className="mt-10 inline-flex w-fit items-center gap-2 text-sm font-medium uppercase transition-opacity hover:opacity-50">
        ← Back to projects
      </Link>
    </motion.section>
  );
}

export default NotFoundPage;
