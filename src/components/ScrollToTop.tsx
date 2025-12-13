import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const easeOut: [number, number, number, number] = [0.16, 1, 0.3, 1]

export function ScrollToTop() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  function goTop() {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          type="button"
          onClick={goTop}
          initial={{ opacity: 0, y: 12, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 12, scale: 0.96 }}
          transition={{ duration: 0.25, ease: easeOut }}
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.98 }}
          className="fixed bottom-5 right-5 z-50 rounded-2xl border border-white/12 bg-white/5 px-4 py-3 text-sm font-semibold text-white/90 shadow-soft backdrop-blur hover:bg-white/10"
          aria-label="Scroll to top"
        >
          ↑ Top
        </motion.button>
      )}
    </AnimatePresence>
  )
}
