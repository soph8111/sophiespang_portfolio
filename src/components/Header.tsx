import { AnimatePresence, motion } from "motion/react";
import { NavLink } from "react-router-dom";

interface HeaderProps {
  collapsed: boolean;
}

function Header({ collapsed }: HeaderProps) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 flex items-start justify-between px-6 py-4">
      <NavLink to="/" className="flex text-8xl font-bold uppercase text-foreground">
        <span>S</span>

        <AnimatePresence initial={false}>
          {!collapsed && (
            <motion.span
              initial={{ clipPath: "inset(0 0 0 0)" }}
              animate={{ clipPath: "inset(0 0 0 0)" }}
              exit={{ clipPath: "inset(0 100% 0 0)" }}
              transition={{
                duration: 0.55,
                ease: [0.76, 0, 0.24, 1],
              }}
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
