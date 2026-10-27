import { motion } from "motion/react";
import { useLayoutEffect, useRef, useState } from "react";

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

  const transition = {
    duration: 0.6,
    ease: [0.76, 0, 0.24, 1] as const,
  };

  return (
    <motion.footer
      initial={animateIn ? { opacity: 0, y: 20 } : false}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: animateIn ? 0.12 : 0,
        duration: 0.6,
        ease: [0.76, 0, 0.24, 1],
      }}
      className="fixed inset-x-0 bottom-0 z-50 flex items-end justify-between px-6 py-4"
    >
      <div className="flex flex-col gap-1 text-sm font-medium">
        <a href="https://www.linkedin.com/in/sophie-feline-spang-kjeldsen/" target="_blank" rel="noreferrer" className="text-foreground">
          LinkedIn
        </a>

        <a href="https://github.com/soph8111" target="_blank" rel="noreferrer" className="text-foreground">
          GitHub
        </a>
      </div>

      <motion.div animate={{ x: collapsed ? distance : 0 }} transition={transition} className="flex cursor-default text-8xl font-bold uppercase text-foreground">
        <span ref={sRef}>S</span>

        <motion.span
          animate={{
            clipPath: collapsed ? "inset(0 100% 0 0)" : "inset(0 0% 0 0)",
          }}
          transition={transition}
          className="inline-block"
        >
          PAN<span ref={gRef}>G</span>
        </motion.span>
      </motion.div>
    </motion.footer>
  );
}

export default Footer;
