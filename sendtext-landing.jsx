"use client";

import { useState, useEffect, useRef } from "react";

/*
  SEO METADATA
  ─────────────────────────────────────────────
  Title Tag (58 chars):
  "SendText.io | SMS Outreach for Real Estate Wholesalers"

  Meta Description (128 chars):
  "Bulk texting, AI lead scoring, drip campaigns & CRM built for wholesalers. Turn skip-traced lists into contracts. Try SendText.io"
*/

const HEADLINES = [
  {
    main: "Skip Trace → Text → Contract.",
    sub: "The entire wholesaling pipeline in one platform.",
  },
  {
    main: "Stop Triaging Texts. Start Closing Deals.",
    sub: "AI classifies every reply so you focus on motivated sellers only.",
  },
  {
    main: "Your Spreadsheet Era Is Over.",
    sub: "Purpose-built SMS outreach and lead management for real estate wholesalers.",
  },
];

const FEATURES = [
  {
    icon: "⚡",
    title: "Bulk SMS Blasts via Telnyx",
    desc: "Import skip-traced lists, organize campaigns by market, and fire off thousands of texts with per-DID rate limiting that keeps your numbers alive.",
  },
  {
    icon: "🧠",
    title: "AI Lead Classification",
    desc: "GPT-4o reads every inbound reply and buckets it — hot lead, warm, not interested, wrong number, asking too much — so you never manually triage again.",
  },
  {
    icon: "🔁",
    title: "8 Drip Sequences",
    desc: "From no-contact-made to listed-with-realtor, automated follow-up sequences keep working leads even when you sleep.",
  },
  {
    icon: "📊",
    title: "Full CRM Pipeline",
    desc: "New → Calling for Info → Offer Made → Under Contract → Closed Deal. Every lead tracked with peak status that never deflates.",
  },
  {
    icon: "📞",
    title: "Browser-Based Calling",
    desc: "Telnyx WebRTC calling with hold, recording, voicemail detection, and automatic call logging — no desk phone, no switching apps.",
  },
  {
    icon: "🛡️",
    title: "Deliverability & Compliance",
    desc: "Carrier tracking, triple-layer DNC management, phone verification before drip enrollment, and negative keyword filtering built in.",
  },
];

const COMPETITORS = [
  "Launch Control",
  "Smarter Contact",
  "Lead Sherpa",
  "BatchLeads",
  "REsimpli",
  "REI Reply",
];

const COMPARISON_FEATURES = [
  { name: "AI Reply Classification", sendtext: true, others: [false, false, false, false, false, false] },
  { name: "8 Drip Sequences", sendtext: true, others: [true, false, true, false, false, false] },
  { name: "Built-in CRM Pipeline", sendtext: true, others: [false, false, false, true, true, false] },
  { name: "Browser Calling (WebRTC)", sendtext: true, others: [false, false, false, false, false, false] },
  { name: "Per-DID Rate Limiting", sendtext: true, others: [true, true, false, false, false, true] },
  { name: "Peak Lead Status Tracking", sendtext: true, others: [false, false, false, false, false, false] },
  { name: "Triple DNC Store", sendtext: true, others: [true, true, true, false, false, true] },
  { name: "Carrier Deliverability Tracking", sendtext: true, others: [false, false, false, false, false, false] },
  { name: "Phone Verification Pre-Drip", sendtext: true, others: [false, false, false, false, false, false] },
  { name: "Negative Keyword Filtering", sendtext: true, others: [true, true, true, false, false, false] },
  { name: "Call Recording & Logging", sendtext: true, others: [false, false, false, false, true, false] },
  { name: "Wholesaler-Native Workflow", sendtext: true, others: [true, true, true, false, false, true] },
];

const PIPELINE_STEPS = [
  { label: "Import Lists", detail: "Skip-traced seller leads, organized by market and campaign." },
  { label: "Blast SMS", detail: "Batch outreach through Telnyx with smart rate limiting per DID." },
  { label: "AI Classifies", detail: "GPT-4o reads every reply and tags it — hot, warm, dead, wrong number." },
  { label: "Drip & Nurture", detail: "8 automated sequences follow up until they convert or opt out." },
  { label: "Work the Pipeline", detail: "CRM stages from first contact to closed deal, nothing falls through." },
  { label: "Close Deals", detail: "Properties under contract. Revenue in the bank. Repeat." },
];

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

function FadeIn({ children, delay = 0, className = "" }) {
  const [ref, visible] = useInView();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(32px)",
        transition: `opacity 0.7s ${delay}s cubic-bezier(.22,1,.36,1), transform 0.7s ${delay}s cubic-bezier(.22,1,.36,1)`,
      }}
    >
      {children}
    </div>
  );
}

export default function SendTextLanding() {
  const [activeHeadline, setActiveHeadline] = useState(0);
  const tableRef = useRef(null);

  useEffect(() => {
    const t = setInterval(() => setActiveHeadline((p) => (p + 1) % HEADLINES.length), 4500);
    return () => clearInterval(t);
  }, []);

  return (
    <div style={styles.page}>
      <style>{globalCSS}</style>

      {/* ── NAV ── */}
      <nav style={styles.nav}>
        <div style={styles.navInner}>
          <div style={styles.logo}>
            <span style={styles.logoIcon}>◈</span> SendText
            <span style={styles.logoDot}>.io</span>
          </div>
          <div style={styles.navLinks}>
            <a href="#features" style={styles.navLink}>Features</a>
            <a href="#how" style={styles.navLink}>How It Works</a>
            <a href="#compare" style={styles.navLink}>Compare</a>
            <button style={styles.navCTA}>Get Early Access</button>
          </div>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section style={styles.hero}>
        <div style={styles.heroGrid} />
        <div style={styles.heroContent}>
          <div style={styles.badge}>Real Estate Wholesaling SMS Platform</div>
          <div style={styles.headlineWrap}>
            {HEADLINES.map((h, i) => (
              <div
                key={i}
                style={{
                  ...styles.headlineGroup,
                  opacity: activeHeadline === i ? 1 : 0,
                  transform: activeHeadline === i ? "translateY(0)" : "translateY(20px)",
                  pointerEvents: activeHeadline === i ? "auto" : "none",
                }}
              >
                <h1 style={styles.h1}>{h.main}</h1>
                <p style={styles.heroSub}>{h.sub}</p>
              </div>
            ))}
          </div>
          <div style={styles.heroCTAs}>
            <button style={styles.primaryBtn}>Start For Free</button>
            <button style={styles.secondaryBtn}>Watch Demo →</button>
          </div>
          <p style={styles.heroMicro}>
            Bulk Texting for Real Estate Investors · Motivated Seller Leads · Skip Trace to Text
          </p>
        </div>
        <div style={styles.heroFade} />
      </section>

      {/* ── PAIN SECTION ── */}
      <section style={styles.painSection}>
        <FadeIn>
          <div style={styles.sectionEyebrow}>The Problem</div>
          <h2 style={styles.h2}>
            You bought the list. Now what?
          </h2>
          <p style={styles.painText}>
            Every wholesaler knows the gap: you've got 5,000 skip-traced records and a dream.
            What follows is spreadsheet chaos — copy-pasting numbers into personal phones,
            manually reading hundreds of replies, losing hot leads in a sea of "wrong numbers,"
            and zero idea which campaigns actually produced results. The tools that exist either
            do texting OR CRM OR calling — never the full pipeline. You end up duct-taping
            five platforms together and still dropping deals.
          </p>
        </FadeIn>
      </section>

      {/* ── FEATURES ── */}
      <section id="features" style={styles.featuresSection}>
        <FadeIn>
          <div style={styles.sectionEyebrow}>Capabilities</div>
          <h2 style={styles.h2}>Everything between the list and the contract</h2>
        </FadeIn>
        <div style={styles.featuresGrid}>
          {FEATURES.map((f, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <div style={styles.featureCard}>
                <div style={styles.featureIcon}>{f.icon}</div>
                <h3 style={styles.featureTitle}>{f.title}</h3>
                <p style={styles.featureDesc}>{f.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section id="how" style={styles.howSection}>
        <FadeIn>
          <div style={styles.sectionEyebrow}>Real Estate Lead Management</div>
          <h2 style={styles.h2}>Six steps. Zero spreadsheets.</h2>
        </FadeIn>
        <div style={styles.pipelineWrap}>
          {PIPELINE_STEPS.map((s, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div style={styles.pipelineStep}>
                <div style={styles.stepNumber}>{String(i + 1).padStart(2, "0")}</div>
                <div>
                  <div style={styles.stepLabel}>{s.label}</div>
                  <div style={styles.stepDetail}>{s.detail}</div>
                </div>
              </div>
              {i < PIPELINE_STEPS.length - 1 && <div style={styles.stepConnector} />}
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ── COMPARISON TABLE ── */}
      <section id="compare" style={styles.compareSection}>
        <FadeIn>
          <div style={styles.sectionEyebrow}>How We Stack Up</div>
          <h2 style={styles.h2}>SendText.io vs. the alternatives</h2>
          <p style={styles.compareIntro}>
            Most platforms solve one piece. SendText.io is the only platform built to cover
            the entire motivated seller outreach pipeline — from skip trace to text to contract.
          </p>
        </FadeIn>
        <FadeIn>
          <div style={styles.tableScroll} ref={tableRef}>
            <table style={styles.table}>
              <thead>
                <tr>
                  <th style={{ ...styles.th, ...styles.thFeature }}>Feature</th>
                  <th style={{ ...styles.th, ...styles.thSendtext }}>SendText.io</th>
                  {COMPETITORS.map((c) => (
                    <th key={c} style={styles.th}>{c}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {COMPARISON_FEATURES.map((row, ri) => (
                  <tr key={ri} style={ri % 2 === 0 ? styles.trEven : {}}>
                    <td style={styles.tdFeature}>{row.name}</td>
                    <td style={styles.tdSendtext}>
                      <span style={styles.checkGreen}>✔</span>
                    </td>
                    {row.others.map((v, ci) => (
                      <td key={ci} style={styles.td}>
                        {v ? <span style={styles.checkMuted}>✔</span> : <span style={styles.cross}>—</span>}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </FadeIn>
      </section>

      {/* ── FINAL CTA ── */}
      <section style={styles.ctaSection}>
        <FadeIn>
          <h2 style={styles.ctaH2}>
            Replace the chaos.<br />Close more deals.
          </h2>
          <p style={styles.ctaSub}>
            SendText.io is the operational backbone between "I bought a skip-traced list"
            and "I have a property under contract."
          </p>
          <button style={styles.ctaButton}>Get Early Access — Free</button>
          <p style={styles.ctaMicro}>No credit card required · Onboarding in under 10 minutes</p>
        </FadeIn>
      </section>

      {/* ── FOOTER ── */}
      <footer style={styles.footer}>
        <div style={styles.footerInner}>
          <div style={styles.logo}>
            <span style={styles.logoIcon}>◈</span> SendText
            <span style={styles.logoDot}>.io</span>
          </div>
          <div style={styles.footerLinks}>
            <a href="#" style={styles.footerLink}>Privacy</a>
            <a href="#" style={styles.footerLink}>Terms</a>
            <a href="#" style={styles.footerLink}>Contact</a>
          </div>
          <div style={styles.footerCopy}>© 2026 SendText.io — Built for wholesalers, by wholesalers.</div>
        </div>
      </footer>
    </div>
  );
}

/* ── STYLES ── */
const C = {
  bg: "#0A0C10",
  surface: "#12151C",
  card: "#171B24",
  border: "#1E2330",
  accent: "#00E599",
  accentDim: "rgba(0,229,153,0.12)",
  accentGlow: "rgba(0,229,153,0.25)",
  text: "#E8ECF4",
  muted: "#8892A8",
  white: "#FFFFFF",
};

const globalCSS = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700&family=Space+Mono:wght@400;700&display=swap');
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }
  body { background: ${C.bg}; }
  ::-webkit-scrollbar { height: 6px; width: 6px; }
  ::-webkit-scrollbar-track { background: ${C.surface}; }
  ::-webkit-scrollbar-thumb { background: ${C.border}; border-radius: 3px; }
`;

const styles = {
  page: {
    fontFamily: "'DM Sans', sans-serif",
    color: C.text,
    background: C.bg,
    minHeight: "100vh",
    overflowX: "hidden",
  },

  /* Nav */
  nav: {
    position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
    background: "rgba(10,12,16,0.82)",
    backdropFilter: "blur(16px)",
    borderBottom: `1px solid ${C.border}`,
  },
  navInner: {
    maxWidth: 1200, margin: "0 auto", padding: "14px 24px",
    display: "flex", justifyContent: "space-between", alignItems: "center",
  },
  logo: {
    fontFamily: "'Space Mono', monospace", fontWeight: 700, fontSize: 20,
    color: C.white, letterSpacing: "-0.5px",
  },
  logoIcon: { color: C.accent, marginRight: 6 },
  logoDot: { color: C.accent },
  navLinks: { display: "flex", alignItems: "center", gap: 28 },
  navLink: {
    color: C.muted, textDecoration: "none", fontSize: 14, fontWeight: 500,
    transition: "color 0.2s",
  },
  navCTA: {
    background: C.accent, color: C.bg, border: "none", borderRadius: 8,
    padding: "9px 20px", fontSize: 14, fontWeight: 700, cursor: "pointer",
    transition: "transform 0.15s, box-shadow 0.15s",
  },

  /* Hero */
  hero: {
    position: "relative", minHeight: "100vh",
    display: "flex", alignItems: "center", justifyContent: "center",
    padding: "120px 24px 80px",
    overflow: "hidden",
  },
  heroGrid: {
    position: "absolute", inset: 0, zIndex: 0,
    backgroundImage: `
      linear-gradient(${C.border} 1px, transparent 1px),
      linear-gradient(90deg, ${C.border} 1px, transparent 1px)
    `,
    backgroundSize: "64px 64px",
    opacity: 0.35,
    maskImage: "radial-gradient(ellipse 70% 60% at 50% 40%, black 20%, transparent 100%)",
    WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 40%, black 20%, transparent 100%)",
  },
  heroContent: {
    position: "relative", zIndex: 1, textAlign: "center", maxWidth: 820,
  },
  badge: {
    display: "inline-block",
    background: C.accentDim,
    color: C.accent,
    fontFamily: "'Space Mono', monospace",
    fontSize: 12, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase",
    padding: "6px 16px", borderRadius: 100, marginBottom: 28,
    border: `1px solid ${C.accentGlow}`,
  },
  headlineWrap: {
    position: "relative", height: 180, marginBottom: 12,
  },
  headlineGroup: {
    position: "absolute", top: 0, left: 0, right: 0,
    transition: "opacity 0.8s ease, transform 0.8s ease",
  },
  h1: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "clamp(36px, 5.5vw, 64px)",
    fontWeight: 700, lineHeight: 1.08, letterSpacing: "-0.03em",
    color: C.white, marginBottom: 16,
  },
  heroSub: {
    fontSize: "clamp(16px, 2vw, 20px)", color: C.muted, lineHeight: 1.5,
    maxWidth: 600, margin: "0 auto",
  },
  heroCTAs: {
    display: "flex", gap: 16, justifyContent: "center",
    flexWrap: "wrap", marginTop: 36,
  },
  primaryBtn: {
    background: C.accent, color: C.bg, border: "none", borderRadius: 10,
    padding: "15px 36px", fontSize: 16, fontWeight: 700, cursor: "pointer",
    boxShadow: `0 0 32px ${C.accentGlow}`,
    transition: "transform 0.15s",
  },
  secondaryBtn: {
    background: "transparent", color: C.text,
    border: `1px solid ${C.border}`, borderRadius: 10,
    padding: "15px 36px", fontSize: 16, fontWeight: 500, cursor: "pointer",
    transition: "border-color 0.2s",
  },
  heroMicro: {
    marginTop: 24, fontSize: 13, color: C.muted,
    fontFamily: "'Space Mono', monospace", letterSpacing: "0.02em",
  },
  heroFade: {
    position: "absolute", bottom: 0, left: 0, right: 0, height: 200,
    background: `linear-gradient(transparent, ${C.bg})`,
    zIndex: 1, pointerEvents: "none",
  },

  /* Pain */
  painSection: {
    maxWidth: 720, margin: "0 auto", padding: "80px 24px 100px",
    textAlign: "center",
  },
  sectionEyebrow: {
    fontFamily: "'Space Mono', monospace",
    fontSize: 12, fontWeight: 700, letterSpacing: "0.12em",
    textTransform: "uppercase", color: C.accent, marginBottom: 16,
  },
  h2: {
    fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 700,
    lineHeight: 1.15, letterSpacing: "-0.02em",
    color: C.white, marginBottom: 24,
  },
  painText: {
    fontSize: 17, lineHeight: 1.7, color: C.muted,
  },

  /* Features */
  featuresSection: {
    maxWidth: 1200, margin: "0 auto", padding: "60px 24px 100px",
    textAlign: "center",
  },
  featuresGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
    gap: 20, marginTop: 48,
  },
  featureCard: {
    background: C.card,
    border: `1px solid ${C.border}`,
    borderRadius: 14, padding: "32px 28px",
    textAlign: "left",
    transition: "border-color 0.3s, box-shadow 0.3s",
  },
  featureIcon: { fontSize: 28, marginBottom: 16 },
  featureTitle: {
    fontSize: 18, fontWeight: 700, color: C.white,
    marginBottom: 10, letterSpacing: "-0.01em",
  },
  featureDesc: { fontSize: 15, lineHeight: 1.65, color: C.muted },

  /* Pipeline */
  howSection: {
    maxWidth: 700, margin: "0 auto", padding: "60px 24px 100px",
    textAlign: "center",
  },
  pipelineWrap: { marginTop: 48, textAlign: "left" },
  pipelineStep: {
    display: "flex", gap: 20, alignItems: "flex-start",
    padding: "20px 24px",
    background: C.card,
    border: `1px solid ${C.border}`,
    borderRadius: 12,
  },
  stepNumber: {
    fontFamily: "'Space Mono', monospace",
    fontSize: 28, fontWeight: 700, color: C.accent,
    minWidth: 48, lineHeight: 1,
  },
  stepLabel: {
    fontSize: 17, fontWeight: 700, color: C.white, marginBottom: 4,
  },
  stepDetail: { fontSize: 14, lineHeight: 1.55, color: C.muted },
  stepConnector: {
    width: 2, height: 20, background: C.border,
    margin: "0 auto",
  },

  /* Comparison */
  compareSection: {
    maxWidth: 1200, margin: "0 auto", padding: "60px 24px 100px",
    textAlign: "center",
  },
  compareIntro: {
    fontSize: 16, lineHeight: 1.65, color: C.muted,
    maxWidth: 640, margin: "0 auto 40px",
  },
  tableScroll: {
    overflowX: "auto", borderRadius: 14,
    border: `1px solid ${C.border}`,
  },
  table: {
    width: "100%", borderCollapse: "collapse",
    minWidth: 900, fontSize: 14,
  },
  th: {
    padding: "14px 16px", textAlign: "center",
    fontFamily: "'Space Mono', monospace",
    fontSize: 12, fontWeight: 700, letterSpacing: "0.04em",
    textTransform: "uppercase", color: C.muted,
    background: C.surface,
    borderBottom: `1px solid ${C.border}`,
    whiteSpace: "nowrap",
  },
  thFeature: { textAlign: "left", minWidth: 220 },
  thSendtext: {
    color: C.accent,
    background: "rgba(0,229,153,0.06)",
  },
  trEven: { background: "rgba(255,255,255,0.015)" },
  td: {
    padding: "12px 16px", textAlign: "center",
    borderBottom: `1px solid ${C.border}`,
    color: C.muted,
  },
  tdFeature: {
    padding: "12px 16px", textAlign: "left",
    borderBottom: `1px solid ${C.border}`,
    color: C.text, fontWeight: 500,
  },
  tdSendtext: {
    padding: "12px 16px", textAlign: "center",
    borderBottom: `1px solid ${C.border}`,
    background: "rgba(0,229,153,0.04)",
  },
  checkGreen: { color: C.accent, fontSize: 18, fontWeight: 700 },
  checkMuted: { color: "#5A6478", fontSize: 16 },
  cross: { color: "#2E3444", fontSize: 16 },

  /* CTA */
  ctaSection: {
    textAlign: "center", padding: "100px 24px 120px",
    background: `radial-gradient(ellipse 60% 50% at 50% 100%, ${C.accentDim} 0%, transparent 70%)`,
  },
  ctaH2: {
    fontSize: "clamp(30px, 4.5vw, 50px)", fontWeight: 700,
    lineHeight: 1.12, letterSpacing: "-0.02em",
    color: C.white, marginBottom: 20,
  },
  ctaSub: {
    fontSize: 17, lineHeight: 1.65, color: C.muted,
    maxWidth: 560, margin: "0 auto 36px",
  },
  ctaButton: {
    background: C.accent, color: C.bg, border: "none", borderRadius: 12,
    padding: "18px 48px", fontSize: 18, fontWeight: 700, cursor: "pointer",
    boxShadow: `0 0 48px ${C.accentGlow}`,
    transition: "transform 0.15s",
  },
  ctaMicro: {
    marginTop: 16, fontSize: 13, color: C.muted,
    fontFamily: "'Space Mono', monospace",
  },

  /* Footer */
  footer: {
    borderTop: `1px solid ${C.border}`,
    padding: "40px 24px",
  },
  footerInner: {
    maxWidth: 1200, margin: "0 auto",
    display: "flex", justifyContent: "space-between", alignItems: "center",
    flexWrap: "wrap", gap: 16,
  },
  footerLinks: { display: "flex", gap: 24 },
  footerLink: {
    color: C.muted, textDecoration: "none", fontSize: 13,
  },
  footerCopy: { fontSize: 12, color: C.muted, width: "100%", textAlign: "center", marginTop: 8 },
};
