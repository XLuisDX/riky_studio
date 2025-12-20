import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const easeOut: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function ScrollToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function goTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          type="button"
          onClick={goTop}
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{ duration: 0.3, ease: easeOut }}
          whileHover={{ y: -6, scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl hover:border-sky-400/30 hover:bg-white/10 transition-all md:bottom-8 md:right-8"
          aria-label="Scroll to top"
        >
          <motion.div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-sky-400/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="relative z-10 text-white/80 group-hover:text-sky-400 transition-colors"
          >
            <path d="M18 15l-6-6-6 6" />
          </svg>

          <motion.div
            className="absolute inset-0 rounded-2xl border-2 border-sky-400/40"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <motion.div className="pointer-events-none absolute -inset-2 rounded-2xl bg-sky-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
