import { motion } from "motion/react";
import { useLayoutEffect, useRef, useState } from "react";
import { pageTransition, introTransition } from "../utils/motion";

interface FooterProps {
  collapsed: boolean;
  animateIn?: boolean;
}

function Footer({ collapsed, animateIn }: FooterProps) {
  const sRef = useRef<HTMLSpanElement>(null);
  const gRef = useRef<HTMLSpanElement>(null);
  const [distance, setDistance] = useState(0);

  useLayoutEffect(() => {
    if (!sRef.current || !gRef.current) return;

    const s = sRef.current.getBoundingClientRect();
    const g = gRef.current.getBoundingClientRect();

    setDistance(g.left - s.left);
  }, []);

  return (
    <footer className="fixed inset-x-0 bottom-0 z-50 flex items-end justify-between px-6 py-4 bg-background md:bg-transparent">
      <div className="flex flex-col gap-1 text-sm font-medium">
        <a href="https://www.linkedin.com/in/sophie-feline-spang-kjeldsen/" target="_blank" rel="noreferrer" className="text-foreground">
          LinkedIn
        </a>

        <a href="https://github.com/soph8111" target="_blank" rel="noreferrer" className="text-foreground">
          GitHub
        </a>
      </div>

      <div className="overflow-hidden">
        <motion.div
          initial={animateIn ? { y: "100%" } : false}
          animate={{
            y: 0,
            x: collapsed ? distance : 0,
          }}
          transition={animateIn ? introTransition : pageTransition}
          className="flex cursor-default text-5xl md:text-8xl font-bold uppercase text-foreground"
        >
          <span ref={sRef}>S</span>

          <motion.span
            initial={
              animateIn
                ? {
                    clipPath: "inset(0 0 0 0)",
                  }
                : {
                    clipPath: collapsed ? "inset(0 100% 0 0)" : "inset(0 0% 0 0)",
                  }
            }
            animate={{
              clipPath: collapsed ? "inset(0 100% 0 0)" : "inset(0 0% 0 0)",
            }}
            transition={pageTransition}
            className="inline-block"
          >
            PAN<span ref={gRef}>G</span>
          </motion.span>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;
