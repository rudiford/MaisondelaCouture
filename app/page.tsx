"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Gem, TrendingUp, Share2, Camera, Layers, Sparkles } from "lucide-react";

/* ── Intersection Observer Hook ────────────────────────────────────────── */

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          obs.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return ref;
}

/* ── Ornamental Divider ────────────────────────────────────────────────── */

function Divider({ dark = false }: { dark?: boolean }) {
  return (
    <div className={dark ? "ornamental-divider-dark" : "ornamental-divider"}>
      <span className={dark ? "divider-line-dark" : "divider-line"} />
      <span className={dark ? "divider-line-dark" : "divider-gem"}>
        {dark ? "" : "◆"}
      </span>
      <span className={dark ? "divider-line-dark" : "divider-line"} />
    </div>
  );
}

/* ── Hero Section ──────────────────────────────────────────────────────── */

function HeroEmailCapture() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    // TODO: Wire to Beehiiv or Supabase
    console.log("Waitlist signup:", email);
    setSubmitted(true);
  }

  return !submitted ? (
    <form
      onSubmit={handleSubmit}
      className="mt-10 animate-fade-up flex w-full max-w-md flex-col items-center gap-3 sm:flex-row sm:gap-0"
      style={{ animationDelay: "0.55s" }}
    >
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your email address"
        className="w-full border border-gold/40 bg-transparent px-5 py-3.5 font-montserrat text-sm font-light tracking-wide text-noir placeholder:text-warm-gray/50 outline-none transition-colors focus:border-gold sm:flex-1"
      />
      <button
        type="submit"
        className="w-full border border-gold bg-gold px-8 py-3.5 font-montserrat text-xs font-semibold uppercase tracking-widest3 text-noir transition-all duration-300 hover:bg-transparent hover:text-gold sm:w-auto"
      >
        Join
      </button>
    </form>
  ) : (
    <div className="mt-10 animate-fade-up" style={{ animationDelay: "0.55s" }}>
      <p className="font-playfair text-xl italic text-gold">
        Welcome to the maison.
      </p>
      <p className="mt-2 font-montserrat text-sm font-light text-warm-gray">
        We&apos;ll be in touch soon.
      </p>
    </div>
  );
}

function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center">
      {/* Logo */}
      <div className="mb-8 animate-fade-up">
        <Image
          src="/logo.png"
          alt="Maison de la Couture"
          width={280}
          height={210}
          priority
          className="mx-auto"
        />
      </div>

      {/* Tagline */}
      <h1 className="animate-fade-up font-playfair text-3xl leading-tight tracking-wide text-noir sm:text-4xl md:text-5xl"
          style={{ animationDelay: "0.2s" }}>
        Your closet deserves its own address.
      </h1>

      <div className="my-6" style={{ animationDelay: "0.35s" }}>
        <Divider />
      </div>

      {/* Subtitle */}
      <p className="max-w-lg animate-fade-up font-montserrat text-base font-light leading-relaxed tracking-wide text-warm-gray sm:text-lg"
         style={{ animationDelay: "0.4s" }}>
        The digital closet for luxury fashion.<br />
        Catalog your collection. Track its value. Show it off.
      </p>

      {/* Email capture — right in the hero */}
      <HeroEmailCapture />

      <p className="mt-4 animate-fade-up font-montserrat text-[11px] font-light tracking-wide text-warm-gray/50"
         style={{ animationDelay: "0.65s" }}>
        No spam — ever. Founding members get lifetime premium access.
      </p>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 flex flex-col items-center gap-2">
        <span className="font-montserrat text-[10px] uppercase tracking-widest2 text-warm-gray/50">
          Scroll
        </span>
        <div className="h-8 w-px bg-gold/30">
          <div className="scroll-line h-full w-full bg-gold" />
        </div>
      </div>
    </section>
  );
}

/* ── Value Propositions ────────────────────────────────────────────────── */

const valueProps = [
  {
    icon: Gem,
    title: "Catalog",
    desc: "Organize your luxury pieces with stunning detail. Every bag, shoe, and dress — beautifully documented.",
  },
  {
    icon: TrendingUp,
    title: "Track",
    desc: "Watch your collection\u2019s value evolve over time. Know what your closet is truly worth.",
  },
  {
    icon: Share2,
    title: "Share",
    desc: "A beautiful profile your closet deserves. Share your collection or keep it private — your choice.",
  },
];

function ValueProps() {
  const ref = useReveal();

  return (
    <section className="bg-cream px-6 py-28 md:py-36">
      <div ref={ref} className="reveal mx-auto max-w-5xl">
        <h2 className="text-center font-playfair text-2xl tracking-wide text-noir sm:text-3xl md:text-4xl">
          Your Collection, Elevated
        </h2>
        <div className="mt-4 flex justify-center">
          <Divider />
        </div>

        <div className="reveal-stagger mt-16 grid gap-12 md:grid-cols-3 md:gap-8">
          {valueProps.map((p) => (
            <div key={p.title} className="reveal flex flex-col items-center text-center">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-gold/30">
                <p.icon className="h-6 w-6 text-gold" strokeWidth={1.5} />
              </div>
              <h3 className="font-playfair text-xl tracking-wide text-noir">
                {p.title}
              </h3>
              <p className="mt-3 max-w-xs font-montserrat text-sm font-light leading-relaxed text-warm-gray">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── How It Works ──────────────────────────────────────────────────────── */

const steps = [
  {
    icon: Camera,
    num: "01",
    title: "Add Your Pieces",
    desc: "Snap a photo — we handle the rest. Brand recognition, value lookup, condition tracking.",
  },
  {
    icon: Layers,
    num: "02",
    title: "Build Your Profile",
    desc: "Your collection, beautifully organized. Browse by brand, category, or value.",
  },
  {
    icon: Sparkles,
    num: "03",
    title: "Share, Track & Sell",
    desc: "Share your closet with friends, track value over time, or sell with full provenance.",
  },
];

function HowItWorks() {
  const ref = useReveal();

  return (
    <section className="bg-noir px-6 py-28 md:py-36">
      <div ref={ref} className="reveal mx-auto max-w-5xl">
        <h2 className="text-center font-playfair text-2xl tracking-wide text-cream sm:text-3xl md:text-4xl">
          How It Works
        </h2>
        <div className="mt-4 flex justify-center">
          <Divider dark />
        </div>

        <div className="reveal-stagger mt-16 grid gap-14 md:grid-cols-3 md:gap-8">
          {steps.map((s) => (
            <div key={s.num} className="reveal flex flex-col items-center text-center">
              <span className="font-montserrat text-xs font-semibold uppercase tracking-widest3 text-gold/60">
                Step {s.num}
              </span>
              <div className="mb-5 mt-4 flex h-14 w-14 items-center justify-center rounded-full border border-gold/20">
                <s.icon className="h-5 w-5 text-gold" strokeWidth={1.5} />
              </div>
              <h3 className="font-playfair text-lg tracking-wide text-cream">
                {s.title}
              </h3>
              <p className="mt-3 max-w-xs font-montserrat text-sm font-light leading-relaxed text-warm-gray">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Founding Members (Social Proof) ───────────────────────────────────── */

function FoundingMembers() {
  const ref = useReveal();
  const [count] = useState(247);

  return (
    <section className="bg-cream px-6 py-28 md:py-36">
      <div ref={ref} className="reveal mx-auto max-w-2xl text-center">
        <p className="font-montserrat text-xs font-semibold uppercase tracking-widest3 text-gold">
          Spring 2026
        </p>
        <h2 className="mt-6 font-playfair text-2xl leading-snug tracking-wide text-noir sm:text-3xl md:text-4xl">
          Founding members get<br />lifetime premium access.
        </h2>
        <div className="mt-6 flex justify-center">
          <Divider />
        </div>
        <p className="mt-8">
          <span className="counter-number font-playfair text-5xl font-semibold md:text-6xl">
            {count}
          </span>
        </p>
        <p className="mt-2 font-montserrat text-sm font-light tracking-widest2 text-warm-gray">
          founding members and counting
        </p>
      </div>
    </section>
  );
}

/* ── Waitlist / Email Capture ──────────────────────────────────────────── */

function Waitlist() {
  const ref = useReveal();

  return (
    <section id="waitlist" className="bg-noir px-6 py-28 md:py-36">
      <div ref={ref} className="reveal mx-auto max-w-lg text-center">
        <h2 className="font-playfair text-2xl tracking-wide text-cream sm:text-3xl md:text-4xl">
          Don&apos;t Miss Your Invitation
        </h2>
        <div className="mt-4 flex justify-center">
          <Divider dark />
        </div>
        <p className="mt-6 font-montserrat text-sm font-light leading-relaxed text-warm-gray">
          Be among the first to experience Maison de la Couture.<br />
          Early access. Founding member perks. Limited spots.
        </p>
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          className="mt-10 inline-block border border-gold bg-transparent px-10 py-3.5 font-montserrat text-xs font-semibold uppercase tracking-widest3 text-gold transition-all duration-300 hover:bg-gold hover:text-noir"
        >
          Join the Waitlist
        </a>
      </div>
    </section>
  );
}

/* ── Footer ────────────────────────────────────────────────────────────── */

function Footer() {
  return (
    <footer className="bg-cream px-6 py-12">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4">
        <a
          href="https://www.instagram.com/_maison.de.la.couture_/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-montserrat text-xs font-light tracking-widest2 text-warm-gray transition-colors hover:text-gold"
        >
          @_maison.de.la.couture_
        </a>
        <p className="font-montserrat text-[11px] font-light tracking-widest2 text-warm-gray/50">
          &copy; 2026 Maison de la Couture. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

/* ── Page ──────────────────────────────────────────────────────────────── */

export default function Home() {
  return (
    <main>
      <Hero />
      <ValueProps />
      <HowItWorks />
      <FoundingMembers />
      <Waitlist />
      <Footer />
    </main>
  );
}
