import { useEffect, useState } from "react";
import { motion } from "motion/react";

function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setPosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    const handleMouseOver = (event: MouseEvent) => {
      const target = event.target as HTMLElement;

      setIsHovering(!!target.closest("a, button, [data-cursor='hover']"));
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-9999 hidden rounded-full bg-foreground md:block"
      animate={{
        x: position.x - (isHovering ? 14 : 6),
        y: position.y - (isHovering ? 14 : 6),
        width: isHovering ? 28 : 12,
        height: isHovering ? 28 : 12,
        opacity: isHovering ? 0.85 : 1,
      }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 35,
        mass: 0.3,
      }}
    />
  );
}

export default CustomCursor;
