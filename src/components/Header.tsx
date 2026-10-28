import { AnimatePresence, motion } from "motion/react";
import { NavLink } from "react-router-dom";
import { pageTransition, introTransition } from "../utils/motion";

interface HeaderProps {
  collapsed: boolean;
  animateIn?: boolean;
}

function Header({ collapsed, animateIn }: HeaderProps) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 flex items-start justify-between px-6 py-4 bg-background md:bg-transparent">
      <NavLink to="/" className="flex overflow-hidden text-5xl md:text-8xl font-bold uppercase text-foreground">
        <motion.span initial={animateIn ? { y: "100%" } : false} animate={{ y: 0 }} transition={animateIn ? introTransition : pageTransition}>
          S
        </motion.span>

        <AnimatePresence>
          {!collapsed && (
            <motion.span
              initial={animateIn ? { y: "100%", clipPath: "inset(0 0 0 0)" } : { y: 0, clipPath: "inset(0 100% 0 0)" }}
              animate={{
                y: 0,
                clipPath: "inset(0 0% 0 0)",
              }}
              exit={{
                clipPath: "inset(0 100% 0 0)",
              }}
              transition={animateIn ? introTransition : pageTransition}
              className="inline-block"
            >
              OPHIE
            </motion.span>
          )}
        </AnimatePresence>
      </NavLink>

      <nav className="flex flex-col gap-1 text-right font-medium">
        <NavLink to="/" className="text-foreground">
          PROJECTS
        </NavLink>

        <NavLink to="/about" className="text-foreground">
          ABOUT
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
