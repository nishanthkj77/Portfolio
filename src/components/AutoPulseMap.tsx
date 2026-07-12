import { motion, useReducedMotion } from "motion/react";

const healthItems = [
  { label: "Insurance", value: "24 days left", status: "Alert" },
  { label: "PUC", value: "41 days left", status: "Valid" },
  { label: "Service", value: "850 km remaining", status: "Due soon" },
];

const flowItems = [
  ["01", "Vehicle Profile", "Type · model · usage"],
  ["02", "Document Vault", "RC · insurance · PUC"],
  ["03", "Smart Alerts", "Dates · distance · reminders"],
  ["04", "Predictive Care", "Service · tyres · battery"],
];

export function AutoPulseMap() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative min-h-[430px] overflow-hidden rounded-2xl border border-white/10 bg-[#080b11] p-5">
      <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(255,255,255,.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.07)_1px,transparent_1px)] [background-size:34px_34px] [mask-image:linear-gradient(to_bottom_right,black,transparent_86%)]" />
      <div className="absolute left-[-15%] top-[-20%] h-64 w-64 rounded-full bg-mint/10 blur-3xl" />
      <div className="absolute bottom-[-18%] right-[-12%] h-72 w-72 rounded-full bg-blue/10 blur-3xl" />

      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 18 }}
        whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
        className="relative z-10 mx-auto max-w-[330px] rounded-[2rem] border border-white/12 bg-[#10151f]/90 p-4 shadow-[0_30px_90px_rgba(0,0,0,.35)] backdrop-blur"
      >
        <div className="rounded-[1.5rem] border border-white/10 bg-black/20 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-mono text-[10px] tracking-[.18em] text-mint uppercase">
                AutoPulse
              </p>
              <h4 className="mt-2 font-display text-2xl font-semibold tracking-[-0.045em] text-white">
                Vehicle Health
              </h4>
            </div>
            <div className="grid h-12 w-12 place-items-center rounded-2xl border border-mint/20 bg-mint/10 text-xl">
              ⚡
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.035] p-4">
            <div className="flex items-end justify-between">
              <div>
                <span className="text-[11px] text-ink-dim">Overall status</span>
                <strong className="mt-1 block font-display text-3xl tracking-[-0.05em] text-white">
                  82%
                </strong>
              </div>
              <span className="rounded-full border border-mint/20 bg-mint/10 px-3 py-1 text-[10px] font-semibold tracking-[.12em] text-mint uppercase">
                Good
              </span>
            </div>

            <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/8">
              <motion.div
                initial={reduceMotion ? false : { width: 0 }}
                whileInView={reduceMotion ? undefined : { width: "82%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.2 }}
                className="h-full rounded-full bg-mint"
              />
            </div>
          </div>

          <div className="mt-4 space-y-3">
            {healthItems.map((item, index) => (
              <motion.div
                key={item.label}
                initial={reduceMotion ? false : { opacity: 0, x: 16 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.42, delay: 0.16 * index }}
                className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.025] px-4 py-3"
              >
                <div>
                  <strong className="block text-sm text-white">{item.label}</strong>
                  <span className="text-xs text-ink-dim">{item.value}</span>
                </div>
                <span className="text-[10px] font-semibold tracking-[.12em] text-blue uppercase">
                  {item.status}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      <div className="relative z-10 mt-5 grid gap-3 sm:grid-cols-2">
        {flowItems.map(([index, title, meta], position) => (
          <motion.div
            key={title}
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.42, delay: 0.1 * position }}
            className="rounded-2xl border border-white/10 bg-[#10151f]/85 p-4 backdrop-blur"
          >
            <span className="font-mono text-[10px] tracking-[.16em] text-mint uppercase">
              {index}
            </span>
            <strong className="mt-2 block font-display text-sm tracking-[-0.02em] text-white">
              {title}
            </strong>
            <small className="mt-1 block text-[11px] text-ink-dim">{meta}</small>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
