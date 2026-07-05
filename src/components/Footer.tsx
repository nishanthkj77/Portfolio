export function Footer() {
  return (
    <footer className="border-t border-white/8">
      <div className="site-shell flex min-h-22 flex-col justify-center gap-2 py-5 text-xs text-ink-dim sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Nishanth K J</p>
        <p>React · TypeScript · Vite · Tailwind CSS · Motion</p>
      </div>
    </footer>
  );
}
