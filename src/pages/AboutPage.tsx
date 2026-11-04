import { motion } from "motion/react";
import { projectEnterTransition } from "../utils/motion";

function AboutPage() {
  return (
    <motion.section initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={projectEnterTransition} className="mx-auto max-w-300 px-6 md:px-30 xl:px-20 pt-32 md:pt-45 mb-10 md:mb-0">
      <div className="grid gap-12 lg:gap-8 lg:grid-cols-2">
        <div className="col-span-2/3">
          <h1 className="text-5xl md:text-6xl font-bold uppercase">About</h1>
          <div className="mt-12 max-w-xl space-y-6 text-base leading-relaxed">
            Driven by creativity and technology, I’ve found my sweet spot in frontend development — where logical thinking and visual ideas come together. With experience across UX and web development, I have a broad understanding of the digital
            process and enjoy collaborating with designers, developers and other creative minds to bring ideas to life. Curious, experimental and ambitious by nature, I enjoy throwing myself into new challenges and keeping up with the fast-moving
            world of technology, exploring how AI, new tools and workflows can bring fresh possibilities to the creative and development process.
          </div>
          <div className="mt-12 flex flex-col">
            <motion.p
              animate={{
                x: [0, -2, 2, -1, 1, 0],
              }}
              transition={{
                duration: 0.45,
                repeat: Infinity,
                repeatDelay: 4,
                ease: "easeInOut",
              }}
              className="inline-block text-sm uppercase font-semibold"
            >
              Let&apos;s talk
            </motion.p>

            <a href="mailto:sophiefeline@hotmail.com" className="transition-opacity hover:opacity-50">
              sophiefeline@hotmail.com
            </a>
          </div>
        </div>

        <div className="flex items-center">
          <img src="/images/sophie.webp" alt="Sophie Spang" className="h-auto w-2/3 object-cover mx-auto mb-20 lg:mb-0" />
        </div>
      </div>
    </motion.section>
  );
}

export default AboutPage;
