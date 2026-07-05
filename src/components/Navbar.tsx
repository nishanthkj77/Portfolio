import { useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useActiveSection } from "../hooks/useActiveSection";

const items = [
  { id: "work", label: "Work" },
  { id: "capabilities", label: "Capabilities" },
  { id: "about", label: "About" },
  { id: "credentials", label: "Credentials" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const active = useActiveSection(items.map((item) => item.id));

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/8 bg-[#080a0f]/80 backdrop-blur-xl">
      <nav className="site-shell flex h-18 items-center justify-between" aria-label="Primary navigation">
        <a href="#top" className="group flex items-center gap-2" aria-label="Nishanth K J home">
          <span className="font-display text-sm font-semibold tracking-[-0.03em] text-white">NKJ</span>
          <span className="h-1.5 w-1.5 rounded-full bg-mint shadow-[0_0_18px_rgba(124,240,197,.8)] transition-transform group-hover:scale-125" />
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {items.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`nav-link ${active === item.id ? "text-white" : "text-ink-muted"}`}
            >
              {item.label}
            </a>
          ))}
          <a href="#contact" className="button-outline px-4 py-2 text-sm">Contact</a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 text-white md:hidden"
          aria-expanded={open}
          aria-label={open ? "Close navigation" : "Open navigation"}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="site-shell pb-4 md:hidden"
          >
            <div className="rounded-2xl border border-white/10 bg-[#0d1119] p-3 shadow-2xl">
              {items.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-4 py-3 text-sm text-ink-soft hover:bg-white/5 hover:text-white"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 block rounded-xl bg-mint px-4 py-3 text-center text-sm font-semibold text-[#07100d]"
              >
                Contact
              </a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
