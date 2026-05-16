"use client";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ArrowRight, MessageCircle, RotateCcw } from "lucide-react";
import { useState } from "react";
import { PROBLEMS, ZODIACS, BENEFITS, recommendGem, waLink, type Gem } from "@/lib/data";
import { SectionHeader } from "./Gemstones";
import SmartImage from "./SmartImage";

const easing = [0.2, 0.8, 0.2, 1] as const;

export default function GemstoneFinder() {
  const [step, setStep] = useState(0);
  const [problem, setProblem] = useState("");
  const [zodiac, setZodiac] = useState("");
  const [benefit, setBenefit] = useState("");
  const [results, setResults] = useState<Gem[] | null>(null);

  const reset = () => {
    setStep(0);
    setProblem("");
    setZodiac("");
    setBenefit("");
    setResults(null);
  };

  const finish = (b: string) => {
    setBenefit(b);
    setResults(recommendGem({ problem, zodiac, benefit: b }));
    setStep(3);
  };

  return (
    <section id="finder" className="relative overflow-hidden section-dark py-24 sm:py-32">
      <div className="absolute inset-0 hero-glow opacity-60" />
      <div className="container-luxe relative">
        <SectionHeader
          dark
          eyebrow="Personalised Recommendation"
          title={<>Find your <span className="shimmer-text">Sacred Stone</span></>}
          subtitle="Three guided steps. Discover the gemstone that resonates with your planetary energy and life intent."
        />

        <div className="mx-auto mt-14 max-w-4xl">
          <Stepper step={step} />
          <div className="mt-10 rounded-3xl glass-dark p-7 sm:p-10">
            <AnimatePresence mode="wait">
              {step === 0 && (
                <Choices
                  key="p"
                  title="What area of life seeks support?"
                  options={PROBLEMS}
                  onPick={(v) => {
                    setProblem(v);
                    setStep(1);
                  }}
                />
              )}
              {step === 1 && (
                <Choices
                  key="z"
                  title="Select your zodiac (Rashi)"
                  options={ZODIACS}
                  onPick={(v) => {
                    setZodiac(v);
                    setStep(2);
                  }}
                />
              )}
              {step === 2 && (
                <Choices
                  key="b"
                  title="What outcome do you seek most?"
                  options={BENEFITS}
                  onPick={(v) => finish(v)}
                />
              )}
              {step === 3 && results && (
                <Results
                  key="r"
                  gems={results}
                  context={{ problem, zodiac, benefit }}
                  onReset={reset}
                />
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stepper({ step }: { step: number }) {
  const labels = ["Concern", "Zodiac", "Desired Benefit", "Recommendation"];
  return (
    <div className="mx-auto flex max-w-2xl items-center justify-between gap-2">
      {labels.map((l, i) => {
        const active = i <= step;
        return (
          <div key={l} className="flex flex-1 items-center gap-2">
            <div
              className={`grid h-8 w-8 place-items-center rounded-full border text-xs transition-colors ${
                active
                  ? "border-gold-300 bg-gold-gradient text-ink-950"
                  : "border-gold-300/30 text-gold-200/70"
              }`}
            >
              {i + 1}
            </div>
            <div
              className={`hidden text-[11px] uppercase tracking-[0.25em] sm:block ${
                active ? "text-gold-200" : "text-gold-200/40"
              }`}
            >
              {l}
            </div>
            {i < labels.length - 1 && (
              <div className="ml-1 h-px flex-1 bg-gradient-to-r from-gold-300/40 to-transparent" />
            )}
          </div>
        );
      })}
    </div>
  );
}

function Choices({
  title,
  options,
  onPick
}: {
  title: string;
  options: string[];
  onPick: (v: string) => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.5, ease: easing }}
    >
      <div className="flex items-center gap-2 text-gold-200">
        <Sparkles className="h-4 w-4" />
        <span className="text-[11px] uppercase tracking-[0.28em]">Step</span>
      </div>
      <h3 className="mt-2 heading-display text-2xl text-ivory-50 sm:text-3xl">{title}</h3>
      <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {options.map((o, i) => (
          <motion.button
            key={o}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: easing, delay: i * 0.04 }}
            onClick={() => onPick(o)}
            className="group flex items-center justify-between rounded-xl border border-gold-300/25 bg-white/[0.03] px-4 py-3.5 text-left text-sm text-ivory-100 backdrop-blur-md transition-all hover:border-gold-300/70 hover:bg-white/[0.07]"
          >
            <span>{o}</span>
            <ArrowRight className="h-4 w-4 text-gold-300 transition-transform group-hover:translate-x-1" />
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
}

function Results({
  gems,
  context,
  onReset
}: {
  gems: Gem[];
  context: { problem: string; zodiac: string; benefit: string };
  onReset: () => void;
}) {
  const msg = `Namaste, based on the gem finder I would like guidance.\n• Concern: ${context.problem}\n• Zodiac: ${context.zodiac}\n• Benefit: ${context.benefit}\nSuggested: ${gems.map((g) => g.name).join(", ")}.`;
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: easing }}
    >
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <div className="eyebrow-dark">Your Sacred Match</div>
          <h3 className="mt-3 heading-display text-3xl text-ivory-50 sm:text-4xl">
            Recommended for <span className="shimmer-text">{context.zodiac}</span>
          </h3>
        </div>
        <button onClick={onReset} className="btn-ghost-dark !px-4 !py-2 text-xs">
          <RotateCcw className="h-3.5 w-3.5" /> Reset
        </button>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {gems.map((g, i) => (
          <motion.div
            key={g.name}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easing, delay: i * 0.08 }}
            className="gem-card-dark p-6"
          >
            <div className="mx-auto h-24 w-24 overflow-hidden rounded-full ring-2 ring-gold-400/60 shadow-[0_15px_30px_-12px_rgba(168,117,40,0.55)]">
              <SmartImage
                src={g.photo}
                alt={g.name}
                className="h-full w-full object-cover"
                fallback={
                  <div
                    className="h-full w-full gem-orb"
                    style={
                      {
                        ["--orb-a" as any]: g.orbA,
                        ["--orb-b" as any]: g.orbB,
                        ["--orb-glow" as any]: g.orbGlow
                      } as React.CSSProperties
                    }
                  />
                }
              />
            </div>
            <div className="mt-5 text-center">
              <div className="text-[10px] uppercase tracking-[0.28em] text-gold-300">
                {g.planet}
              </div>
              <h4 className="mt-1 heading-display text-2xl text-ivory-50">{g.name}</h4>
              <div className="mt-1 heading-display text-sm text-gold-200">{g.hindi}</div>
              <p className="mt-3 text-sm text-ivory-200/85">{g.benefit}</p>
              <div className="mt-4 flex flex-wrap justify-center gap-1.5">
                {g.origins.slice(0, 4).map((o) => (
                  <span
                    key={o}
                    className="rounded-full border border-gold-300/30 bg-white/[0.04] px-2 py-0.5 text-[10px] tracking-wide text-ivory-100"
                  >
                    {o}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <a href={waLink(msg)} target="_blank" rel="noreferrer" className="btn-gold">
          <MessageCircle className="h-4 w-4" /> Discuss with Expert
        </a>
        <a href="#enquiry" className="btn-ghost-dark">
          Submit Detailed Enquiry
        </a>
      </div>

      <p className="mt-6 text-center text-[11px] uppercase tracking-[0.28em] text-gold-200/60">
        Indicative only · Final wearing recommended after personal consultation
      </p>
    </motion.div>
  );
}
