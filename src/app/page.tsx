// import { redirect } from 'next/navigation'

// export default function RootPage() {
//   redirect('/dashboard')
// }

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

// ─── i18n strings ─────────────────────────────────────────────────────────────
const T = {
  ta: {
    navFeatures: "அம்சங்கள்", navPricing: "விலை", navCta: "தொடங்குங்கள்",
    heroTag: "WhatsApp CRM உங்கள் டீமுக்காக",
    h1a: "உங்கள் டீமின்", h1b: "WhatsApp இன்பாக்ஸை,", h1c: "ஒழுங்கமைக்கலாம்",
    heroSub: "ஒரே WhatsApp நம்பருக்கு பல ஏஜெண்ட்கள், கான்டாக்ட் மேனேஜ்மென்ட், சேல்ஸ் பைப்லைன், ப்ராட்காஸ்ட் மற்றும் கோடிங் தேவையில்லாத ஆட்டோமேஷன். 5 நிமிடத்தில் செட்அப் ஆகும்.",
    heroCta1: "இலவச கணக்கை உருவாக்கு", heroCta2: "டெமோ பார்", trust: "200+ வணிகங்கள் நம்புகின்றன",
    online: "தொடர்புக்கு இங்கே தட்டவும்", today: "இன்று", message: "செய்தி",
    statMessages: "இன்றைய செய்திகள்", statReply: "சராசரி பதில்",
    featTag: "எல்லாமே சேர்த்து",
    featTitle: "வெறும் chat widget இல்ல, முழு CRM", featSub: "Shared inbox, contacts, pipeline, broadcasts, automation — எல்லாம் ஒரே இடத்தில்.",
    f1t: "Shared Inbox", f1d: "பல ஏஜெண்ட், ஒரே நம்பர். Assign பண்ணு, status வை, internal notes எழுது.",
    f2t: "Contacts & Tags", f2d: "CSV import, deduplication, custom fields. யாரோட பேசுறோம்னு தெரியும்.",
    f3t: "Sales Pipeline", f3d: "Kanban board, conversation-உடன் நேரடியா இணைக்கப்பட்டது.",
    f4t: "Broadcasts", f4d: "Meta-approved templates segment-வாரியா அனுப்பு. Delivery, read tracking.",
    f5t: "No-code Automation", f5d: "Trigger, condition, wait, action — விஷுவல் பில்டர்-ல் கோடிங் இல்லாம.",
    f6t: "Live Dashboard", f6d: "Response time, volume, pipeline value — ரியல் டைம்-ல்.",
    waitTag: "Early access",
    waitTitle: "உன் வாடிக்கையாளர் உரையாடல்களை ஒழுங்குபடுத்து", waitSub: "இன்றே RedAnt-ஐ முயற்சி செய். கிரெடிட் கார்டு தேவையில்லை.",
    ctaPrimary: "இலவசமாக தொடங்கு →", ctaSecondary: "விலை பார்",
    footer: "All rights reserved.", login: "Login", signup: "Sign up",
    inStock: "Free size • Stock-ல் உள்ளது",
  },
  en: {
    navFeatures: "Features", navPricing: "Pricing", navCta: "Get Started",
    heroTag: "WhatsApp CRM for growing teams",
    h1a: "Your team's", h1b: "WhatsApp inbox,", h1c: "finally organised",
    heroSub: "Shared inbox, contacts, sales pipeline, broadcasts and no-code automation — all on one WhatsApp number. Set up in 5 minutes.",
    heroCta1: "Create free account", heroCta2: "Watch demo", trust: "Trusted by 200+ businesses",
    online: "tap here for contact info", today: "TODAY", message: "Message",
    statMessages: "Messages today", statReply: "Avg response",
    featTag: "Everything included",
    featTitle: "A full CRM, not just a chat widget", featSub: "Shared inbox, contacts, pipeline, broadcasts, automation — all in one place.",
    f1t: "Shared Inbox", f1d: "Multiple agents, one number. Assign, set status, leave internal notes.",
    f2t: "Contacts & Tags", f2d: "CSV import, deduplication, custom fields. Know who you're talking to.",
    f3t: "Sales Pipeline", f3d: "Kanban boards linked directly to conversations.",
    f4t: "Broadcasts", f4d: "Send Meta-approved templates to segments. Track delivery and reads.",
    f5t: "No-code Automation", f5d: "Trigger, condition, wait, action — in a visual builder, no code required.",
    f6t: "Live Dashboard", f6d: "Response times, volume, pipeline value — updated in real time.",
    waitTag: "Early access",
    waitTitle: "Get organised with your customer conversations", waitSub: "Try RedAnt today. No credit card required.",
    ctaPrimary: "Get started free →", ctaSecondary: "See pricing",
    footer: "All rights reserved.", login: "Login", signup: "Sign up",
    inStock: "Free size • In stock",
  },
};

type Lang = "ta" | "en";

export default function HomePage() {
  const [lang, setLang] = useState<Lang>("en");
  const [menuOpen, setMenuOpen] = useState(false);
  const [msgCount, setMsgCount] = useState(0);

  const t = T[lang];

  useEffect(() => {
    const saved = (typeof window !== "undefined" && localStorage.getItem("wacrm-lang")) as Lang | null;
    if (saved === "ta" || saved === "en") setLang(saved);
  }, []);

  useEffect(() => {
    const target = 2847;
    const increment = target / 50;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      setMsgCount(Math.floor(current));
    }, 30);
    return () => clearInterval(timer);
  }, []);

  const toggleLang = () => {
    const next: Lang = lang === "ta" ? "en" : "ta";
    setLang(next);
    if (typeof window !== "undefined") localStorage.setItem("wacrm-lang", next);
  };

  return (
    <div className="bg-white text-[#0f172a] antialiased" lang={lang}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Noto+Sans+Tamil:wght@600;700&display=swap');
        body { font-family: 'Inter', 'Noto Sans Tamil', sans-serif; }
        .font-tamil { font-family: 'Noto Sans Tamil', 'Inter', sans-serif; }
        @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-10px); } }
        @keyframes messageIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes countUp { from { opacity: 0; transform: scale(0.8); } to { opacity: 1; transform: scale(1); } }
        .float-animation { animation: float 6s ease-in-out infinite; }
        .message-animate { animation: messageIn 0.4s ease-out forwards; opacity: 0; }
        .count-animate { animation: countUp 0.6s ease-out forwards; }
        .whatsapp-bg {
          background-color: #e5ddd5;
          background-image: url("data:image/svg+xml,%3Csvg width='400' height='400' viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23d1c7b8' fill-opacity='0.2'%3E%3Cpath d='M100 100c-11 0-20 9-20 20s9 20 20 20 20-9 20-20-9-20-20-20zm0 32c-6.6 0-12-5.4-12-12s5.4-12 12-12 12 5.4 12 12-5.4 12-12 12z'/%3E%3Cpath d='M300 200c-11 0-20 9-20 20s9 20 20 20 20-9 20-20-9-20-20-20zm0 32c-6.6 0-12-5.4-12-12s5.4-12 12-12 12 5.4 12 12-5.4 12-12 12z'/%3E%3Cpath d='M200 50c-5.5 0-10 4.5-10 10v20c0 5.5 4.5 10 10 10h20c5.5 0 10-4.5 10-10V60c0-5.5-4.5-10-10-10h-20zm15 20h-10v-10h10v10z'/%3E%3Cpath d='M50 250c-5.5 0-10 4.5-10 10v20c0 5.5 4.5 10 10 10h20c5.5 0 10-4.5 10-10v-20c0-5.5-4.5-10-10-10H50zm15 20H55v-10h10v10z'/%3E%3C/g%3E%3C/svg%3E");
        }
      `}</style>

      {/* ── Header ─────────────────────────────────────────────────────────── */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-slate-100">
        <nav className="max-w-[1200px] mx-auto px-4 h-[64px] md:h-[72px] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 md:w-8 md:h-8 rounded-lg bg-[#00A651] grid place-items-center">
              <span className="text-white font-bold text-[14px] md:text-[16px]">R</span>
            </div>
            <span className="text-[18px] md:text-[20px] font-bold tracking-tight">RedAnt</span>
          </div>
          <div className="hidden lg:flex items-center gap-7 text-[14px] text-slate-600">
            <a href="#features">{t.navFeatures}</a>
            <a href="#pricing">{t.navPricing}</a>
          </div>
          <div className="flex items-center gap-2 md:gap-3">
            <button onClick={toggleLang} className="text-[11px] md:text-[12px] px-2.5 md:px-3 py-1.5 border rounded-full font-medium hover:bg-slate-50 transition">
              {lang === "ta" ? "EN" : "தமிழ்"}
            </button>
            <Link href="/login" className="hidden sm:grid h-9 md:h-10 px-4 text-slate-600 rounded-lg text-[13px] md:text-[14px] font-semibold place-items-center hover:bg-slate-50 transition">
              {t.login}
            </Link>
            <Link href="/register" className="hidden sm:grid h-9 md:h-10 px-4 md:px-5 bg-[#00A651] text-white rounded-lg text-[13px] md:text-[14px] font-semibold place-items-center hover:bg-[#008f46] transition">
              {t.navCta}
            </Link>
            <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden p-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            </button>
          </div>
        </nav>
        <div className={`fixed top-[64px] right-0 w-64 h-screen bg-white border-l shadow-xl lg:hidden z-50 transition-transform duration-300 ${menuOpen ? "translate-x-0" : "translate-x-full"}`}>
          <div className="p-6 space-y-4">
            <a href="#features" onClick={() => setMenuOpen(false)} className="block py-2">{t.navFeatures}</a>
            <a href="#pricing" onClick={() => setMenuOpen(false)} className="block py-2">{t.navPricing}</a>
            <Link href="/login" onClick={() => setMenuOpen(false)} className="block py-2">{t.login}</Link>
            <Link href="/register" onClick={() => setMenuOpen(false)} className="block mt-4 h-11 bg-[#00A651] text-white rounded-lg font-semibold grid place-items-center">
              {t.navCta}
            </Link>
          </div>
        </div>
      </header>

      {/* ── Hero ───────────────────────────────────────────────────────────── */}
      <section className="max-w-[1200px] mx-auto px-4 pt-8 md:pt-14 pb-12 md:pb-20">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-[11px] md:text-[12px] font-medium mb-4 border border-emerald-100">
              <span className="w-1.5 h-1.5 bg-emerald-600 rounded-full animate-pulse"></span>
              <span>{t.heroTag}</span>
            </div>
            <h1 className="font-tamil font-extrabold text-[32px] sm:text-[38px] md:text-[42px] lg:text-[56px] leading-[1.15] tracking-tight">
              <span>{t.h1a}</span><br />
              <span>{t.h1b}</span><br />
              <span className="text-[#00A651] relative">
                {t.h1c}
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-emerald-200 -z-10" viewBox="0 0 300 12" fill="none"><path d="M2 8c60-6 120-8 180-5 40 2 80 5 116 3" stroke="currentColor" strokeWidth="8" strokeLinecap="round" opacity="0.3" /></svg>
              </span>
            </h1>
            <p className="mt-4 text-[15px] md:text-[18px] text-slate-600 leading-relaxed">{t.heroSub}</p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Link href="/register" className="group h-11 md:h-12 px-6 bg-[#00A651] text-white rounded-xl font-semibold grid place-items-center hover:bg-[#008f46] transition-all hover:shadow-lg hover:shadow-emerald-500/25 relative overflow-hidden">
                <span className="relative z-10 flex items-center gap-2">{t.heroCta1} <span className="group-hover:translate-x-0.5 transition-transform">→</span></span>
              </Link>
              <a href="#features" className="h-11 md:h-12 px-5 border border-slate-300 rounded-xl font-medium grid place-items-center hover:bg-slate-50 hover:border-slate-400 transition-all">
                {t.heroCta2}
              </a>
            </div>
            <div className="mt-5 flex items-center gap-4 text-[12px] md:text-[13px] text-slate-500">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span className="font-medium">{t.trust}</span>
              </div>
            </div>
          </div>

          {/* Right: realistic phone mockup */}
          <div className="relative flex flex-col items-center lg:items-end mt-12 lg:mt-0">
            <div className="absolute top-10 -right-10 w-72 h-72 bg-gradient-to-br from-emerald-400/30 to-cyan-400/30 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 -left-10 w-64 h-64 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"></div>

            <div className="relative float-animation">
              <div className="absolute inset-0 bg-black/20 blur-2xl scale-95 translate-y-8 rounded-[3rem]"></div>

              <div className="relative w-[300px] h-[615px] md:w-[315px] md:h-[645px]">
                <div className="absolute inset-0 bg-gradient-to-b from-[#3a3a3c] via-[#1c1c1e] to-[#3a3a3c] rounded-[3.2rem] shadow-[0_0_0_1px_rgba(255,255,255,0.1)_inset,0_25px_50px_-12px_rgba(0,0,0,0.5)]">
                  <div className="absolute -left-[2px] top-24 w-[3px] h-7 bg-[#2c2c2e] rounded-l-sm"></div>
                  <div className="absolute -left-[2px] top-36 w-[3px] h-12 bg-[#2c2c2e] rounded-l-sm"></div>
                  <div className="absolute -left-[2px] top-52 w-[3px] h-12 bg-[#2c2c2e] rounded-l-sm"></div>
                  <div className="absolute -right-[2px] top-32 w-[3px] h-16 bg-[#2c2c2e] rounded-r-sm"></div>
                </div>

                <div className="absolute inset-[10px] bg-black rounded-[2.7rem] overflow-hidden">
                  <div className="w-full h-full bg-white relative overflow-hidden">
                    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-[90px] h-[28px] bg-black rounded-full z-30 flex items-center justify-center">
                      <div className="w-12 h-4 bg-[#1a1a1a] rounded-full flex items-center justify-end pr-1">
                        <div className="w-2.5 h-2.5 bg-[#0a0a0a] rounded-full"></div>
                      </div>
                    </div>

                    <div className="h-[52px] flex items-end justify-between px-8 pb-2 text-[14px] font-semibold">
                      <span>9:41</span>
                      <div className="flex items-center gap-1.5">
                        <svg width="18" height="12" viewBox="0 0 18 12" fill="none"><path d="M1 6h3M5 3v6M9 2v8M13 4v4M17 6h-3" stroke="black" strokeWidth="1.5" strokeLinecap="round" /></svg>
                        <svg width="24" height="12" viewBox="0 0 24 12" fill="none"><rect x="0.5" y="1" width="20" height="10" rx="3" stroke="black" strokeWidth="1.2" fill="none" /><path d="M22 4v4" stroke="black" strokeWidth="1.2" strokeLinecap="round" /><rect x="2" y="3" width="14" height="6" rx="1.5" fill="black" /></svg>
                      </div>
                    </div>

                    <div className="h-[56px] bg-[#008069] relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent"></div>
                      <div className="relative h-full flex items-center px-3 gap-3 text-white">
                        <button className="p-1.5 -ml-1 hover:bg-white/10 rounded-full transition">
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
                        </button>
                        <div className="relative">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-400 to-purple-600 p-[1.5px]">
                            <div className="w-full h-full rounded-full bg-white grid place-items-center">
                              <span className="text-[15px] font-bold bg-gradient-to-br from-pink-500 to-purple-600 bg-clip-text text-transparent">P</span>
                            </div>
                          </div>
                          <div className="absolute bottom-0 right-0 w-3 h-3 bg-[#25d366] rounded-full border-2 border-[#008069] animate-pulse"></div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-semibold text-[16px] leading-tight truncate">Priya Sarees ✨</div>
                          <div className="text-[12px] opacity-90 leading-tight">{t.online}</div>
                        </div>
                        <div className="flex items-center gap-1">
                          <button className="p-2 hover:bg-white/10 rounded-full transition"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" /></svg></button>
                          <button className="p-2 hover:bg-white/10 rounded-full transition"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" /></svg></button>
                        </div>
                      </div>
                    </div>

                    <div className="h-[calc(100%-164px)] relative overflow-hidden whatsapp-bg">
                      <div className="absolute inset-0 overflow-y-auto px-3 py-3 space-y-2.5">
                        <div className="flex justify-center py-1">
                          <span className="px-2.5 py-1 bg-white/90 backdrop-blur text-[11px] font-medium text-[#54656f] rounded-md shadow-sm">{t.today}</span>
                        </div>

                        <div className="flex message-animate" style={{ animationDelay: "0.1s" }}>
                          <div className="bg-white px-3 py-2 rounded-[8px] rounded-tl-[2px] shadow-[0_1px_0.5px_rgba(0,0,0,0.13)] max-w-[78%] relative">
                            <p className="text-[14px] leading-[19px] text-[#111b21]">{lang === "ta" ? "Akka blue saree price? 🤔" : "Price for blue saree? 🤔"}</p>
                            <p className="text-[11px] text-[#667781] mt-1 text-right leading-none">10:24 am</p>
                          </div>
                        </div>

                        <div className="flex justify-end message-animate" style={{ animationDelay: "0.3s" }}>
                          <div className="bg-[#d9fdd3] px-3 py-2 rounded-[8px] rounded-tr-[2px] shadow-[0_1px_0.5px_rgba(0,0,0,0.13)] max-w-[78%] relative">
                            <p className="text-[14px] leading-[19px] text-[#111b21]">₹1,850 • COD available • Free shipping</p>
                            <div className="flex items-center justify-end gap-1 mt-1">
                              <p className="text-[11px] text-[#667781] leading-none">10:24 am</p>
                              <svg className="w-3.5 h-3.5 text-[#53bdeb]" viewBox="0 0 12 11" fill="currentColor"><path d="M11.1 2.8L5.9 8.4l-3-2.4.8-1 2.2 1.7 4.4-4.7.8.8z" /><path d="M7.1 2.8L1.9 8.4l-1-1.1.8-1 2.2 1.7 4.4-4.7.8.8z" opacity=".6" /></svg>
                            </div>
                          </div>
                        </div>

                        <div className="flex message-animate" style={{ animationDelay: "0.5s" }}>
                          <div className="bg-white px-3 py-2 rounded-[8px] rounded-tl-[2px] shadow-[0_1px_0.5px_rgba(0,0,0,0.13)] max-w-[78%]">
                            <p className="text-[14px] leading-[19px] text-[#111b21]">{lang === "ta" ? "Assign yaru handle pannuvanga?" : "Who's handling this chat?"}</p>
                            <p className="text-[11px] text-[#667781] mt-1 text-right leading-none">10:25 am</p>
                          </div>
                        </div>

                        <div className="flex justify-end message-animate" style={{ animationDelay: "0.7s" }}>
                          <div className="bg-[#d9fdd3] px-2.5 py-2 rounded-[8px] rounded-tr-[2px] shadow-[0_1px_0.5px_rgba(0,0,0,0.13)] max-w-[82%]">
                            <div className="bg-white rounded-[6px] p-2 mb-1.5 shadow-sm border border-black/5">
                              <div className="flex gap-2.5">
                                <div className="w-[58px] h-[58px] rounded-[4px] overflow-hidden bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 relative">
                                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.3),transparent_50%)]"></div>
                                  <div className="absolute bottom-1 right-1 w-5 h-5 bg-white/90 backdrop-blur rounded-full grid place-items-center shadow-sm">
                                    <span className="text-[10px]">👤</span>
                                  </div>
                                </div>
                                <div className="flex-1 min-w-0 py-0.5">
                                  <p className="text-[13px] font-semibold text-[#111b21] leading-tight truncate">Priya · Agent</p>
                                  <p className="text-[11px] text-[#667781] mt-0.5">{lang === "ta" ? "Online • Inbox-ல் assigned" : "Online • Assigned in inbox"}</p>
                                  <div className="flex items-baseline gap-1.5 mt-1">
                                    <span className="text-[10px] px-1 py-0.5 bg-[#e7f8f0] text-[#008069] rounded font-medium">{lang === "ta" ? "புது லீட்" : "New lead"}</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <p className="text-[14px] leading-[19px] text-[#111b21] px-0.5">{lang === "ta" ? "நான் பாக்குறேன், 1 நிமிடம்! 👍" : "On it, give me a minute! 👍"}</p>
                            <div className="flex items-center justify-end gap-1 mt-1 px-0.5">
                              <p className="text-[11px] text-[#667781] leading-none">10:25 am</p>
                              <svg className="w-3.5 h-3.5 text-[#53bdeb]" viewBox="0 0 12 11" fill="currentColor"><path d="M11.1 2.8L5.9 8.4l-3-2.4.8-1 2.2 1.7 4.4-4.7.8.8z" /><path d="M7.1 2.8L1.9 8.4l-1-1.1.8-1 2.2 1.7 4.4-4.7.8.8z" opacity=".6" /></svg>
                            </div>
                          </div>
                        </div>

                        <div className="flex message-animate" style={{ animationDelay: "1s" }}>
                          <div className="bg-white px-3.5 py-2.5 rounded-[8px] rounded-tl-[2px] shadow-[0_1px_0.5px_rgba(0,0,0,0.13)]">
                            <div className="flex gap-1 items-center">
                              <span className="w-1.5 h-1.5 bg-[#8696a0] rounded-full animate-bounce [animation-duration:1s]"></span>
                              <span className="w-1.5 h-1.5 bg-[#8696a0] rounded-full animate-bounce [animation-duration:1s] [animation-delay:0.15s]"></span>
                              <span className="w-1.5 h-1.5 bg-[#8696a0] rounded-full animate-bounce [animation-duration:1s] [animation-delay:0.3s]"></span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="absolute bottom-2 left-3 right-3">
                        <div className="mx-auto w-fit px-2.5 py-1 bg-[#1f2c34]/90 backdrop-blur-md rounded-full flex items-center gap-1.5 shadow-lg">
                          <div className="w-3 h-3 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 animate-pulse"></div>
                          <span className="text-[10px] font-medium text-white tracking-wide">RedAnt • Inbox synced</span>
                        </div>
                      </div>
                    </div>

                    <div className="h-[56px] bg-[#f0f2f5] flex items-center px-2.5 gap-2">
                      <button className="p-2 hover:bg-black/5 rounded-full transition"><svg className="w-6 h-6 text-[#54656f]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></button>
                      <div className="flex-1 h-[38px] bg-white rounded-full px-4 flex items-center shadow-sm border border-black/5">
                        <span className="text-[15px] text-[#8696a0]">{t.message}</span>
                      </div>
                      <button className="w-10 h-10 bg-[#008069] rounded-full grid place-items-center shadow-md hover:bg-[#017561] transition active:scale-95">
                        <svg className="w-5 h-5 text-white translate-x-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" /></svg>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-[8px] left-1/2 -translate-x-1/2 w-[110px] h-[5px] bg-white/80 rounded-full"></div>
              </div>

              <div className="hidden lg:block absolute -left-20 top-16 float-animation" style={{ animationDelay: "0s" }}>
                <div className="bg-white/90 backdrop-blur-xl px-4 py-3 rounded-2xl shadow-xl border border-white/20 count-animate">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-600 grid place-items-center shadow-lg shadow-emerald-500/20">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                    </div>
                    <div>
                      <div className="text-[11px] text-slate-500 font-medium whitespace-nowrap">{t.statMessages}</div>
                      <div className="text-[20px] font-bold leading-none text-slate-900 whitespace-nowrap">{msgCount.toLocaleString("en-IN")}</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="hidden lg:block absolute -right-16 bottom-24 float-animation" style={{ animationDelay: "1s" }}>
                <div className="bg-white/90 backdrop-blur-xl px-4 py-3 rounded-2xl shadow-xl border border-white/20 count-animate" style={{ animationDelay: "0.2s" }}>
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-400 to-purple-600 grid place-items-center shadow-lg shadow-violet-500/20">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                    </div>
                    <div>
                      <div className="text-[11px] text-slate-500 font-medium whitespace-nowrap">{t.statReply}</div>
                      <div className="text-[20px] font-bold leading-none text-slate-900 whitespace-nowrap">1.2<span className="text-[14px] font-semibold text-slate-500 ml-0.5">s</span></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex lg:hidden gap-3 mt-6 w-full max-w-[315px]">
              <div className="flex-1 min-w-0 bg-white/90 backdrop-blur-xl px-3.5 py-3 rounded-2xl shadow-lg border border-slate-200">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-400 to-emerald-600 grid place-items-center shadow-md flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-[10px] text-slate-500 font-medium truncate">{t.statMessages}</div>
                    <div className="text-[17px] font-bold leading-none text-slate-900 truncate">{msgCount.toLocaleString("en-IN")}</div>
                  </div>
                </div>
              </div>
              <div className="flex-1 min-w-0 bg-white/90 backdrop-blur-xl px-3.5 py-3 rounded-2xl shadow-lg border border-slate-200">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-400 to-purple-600 grid place-items-center shadow-md flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-[10px] text-slate-500 font-medium truncate">{t.statReply}</div>
                    <div className="text-[17px] font-bold leading-none text-slate-900 whitespace-nowrap">1.2<span className="text-[11px] ml-0.5">s</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Features ───────────────────────────────────────────────────────── */}
      <section id="features" className="bg-slate-50 border-y py-12 md:py-20">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <p className="text-emerald-600 text-[12px] font-semibold tracking-widest uppercase mb-2">{t.featTag}</p>
            <h2 className="font-tamil text-[28px] md:text-[40px] font-extrabold tracking-tight">{t.featTitle}</h2>
            <p className="mt-3 text-[15px] text-slate-600">{t.featSub}</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="group bg-white p-6 rounded-2xl border border-slate-200 hover:border-emerald-200 hover:shadow-lg hover:shadow-emerald-500/5 transition-all">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-50 to-emerald-100 grid place-items-center mb-4 group-hover:scale-110 transition-transform text-[22px]">📥</div>
              <h3 className="font-semibold text-[16px]">{t.f1t}</h3>
              <p className="text-[14px] text-slate-600 mt-1.5 leading-relaxed">{t.f1d}</p>
            </div>
            <div className="group bg-white p-6 rounded-2xl border border-slate-200 hover:border-emerald-200 hover:shadow-lg hover:shadow-emerald-500/5 transition-all">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-50 to-emerald-100 grid place-items-center mb-4 group-hover:scale-110 transition-transform text-[22px]">👥</div>
              <h3 className="font-semibold text-[16px]">{t.f2t}</h3>
              <p className="text-[14px] text-slate-600 mt-1.5 leading-relaxed">{t.f2d}</p>
            </div>
            <div className="group bg-white p-6 rounded-2xl border border-slate-200 hover:border-emerald-200 hover:shadow-lg hover:shadow-emerald-500/5 transition-all">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-50 to-emerald-100 grid place-items-center mb-4 group-hover:scale-110 transition-transform text-[22px]">📊</div>
              <h3 className="font-semibold text-[16px]">{t.f3t}</h3>
              <p className="text-[14px] text-slate-600 mt-1.5 leading-relaxed">{t.f3d}</p>
            </div>
            <div className="group bg-white p-6 rounded-2xl border border-slate-200 hover:border-emerald-200 hover:shadow-lg hover:shadow-emerald-500/5 transition-all">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-50 to-emerald-100 grid place-items-center mb-4 group-hover:scale-110 transition-transform text-[22px]">📢</div>
              <h3 className="font-semibold text-[16px]">{t.f4t}</h3>
              <p className="text-[14px] text-slate-600 mt-1.5 leading-relaxed">{t.f4d}</p>
            </div>
            <div className="group bg-white p-6 rounded-2xl border border-slate-200 hover:border-emerald-200 hover:shadow-lg hover:shadow-emerald-500/5 transition-all">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-50 to-emerald-100 grid place-items-center mb-4 group-hover:scale-110 transition-transform text-[22px]">⚡</div>
              <h3 className="font-semibold text-[16px]">{t.f5t}</h3>
              <p className="text-[14px] text-slate-600 mt-1.5 leading-relaxed">{t.f5d}</p>
            </div>
            <div className="group bg-white p-6 rounded-2xl border border-slate-200 hover:border-emerald-200 hover:shadow-lg hover:shadow-emerald-500/5 transition-all">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-50 to-emerald-100 grid place-items-center mb-4 group-hover:scale-110 transition-transform text-[22px]">📈</div>
              <h3 className="font-semibold text-[16px]">{t.f6t}</h3>
              <p className="text-[14px] text-slate-600 mt-1.5 leading-relaxed">{t.f6d}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA card ───────────────────────────────────────────────────────── */}
      <section id="pricing" className="max-w-[720px] mx-auto px-4 py-14 md:py-20">
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-[2rem] blur-2xl opacity-20"></div>
          <div className="relative bg-white border border-slate-200 rounded-[2rem] p-7 md:p-10 shadow-xl text-center">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-[12px] font-medium mb-4 border border-emerald-200">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
              <span>{t.waitTag}</span>
            </div>
            <h3 className="font-tamil text-[26px] md:text-[30px] font-extrabold tracking-tight">{t.waitTitle}</h3>
            <p className="text-[15px] text-slate-600 mt-1.5 max-w-md mx-auto">{t.waitSub}</p>
            <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/register" className="group h-12 px-7 bg-[#00A651] text-white rounded-xl font-semibold grid place-items-center hover:bg-[#008f46] transition-all hover:shadow-lg hover:shadow-emerald-500/25 active:scale-[0.98]">
                <span className="flex items-center gap-2">{t.ctaPrimary}</span>
              </Link>
              <Link href="/login" className="h-12 px-7 border border-slate-300 rounded-xl font-medium grid place-items-center hover:bg-slate-50 transition-all">
                {t.ctaSecondary}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ─────────────────────────────────────────────────────────── */}
      <footer className="border-t border-slate-200 py-8">
        <div className="max-w-[1200px] mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-[13px] text-slate-500">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded bg-[#00A651] grid place-items-center">
              <span className="text-white font-bold text-[11px]">R</span>
            </div>
            <span>RedAnt</span>
            <span className="text-slate-300">•</span>
            <span>{t.footer}</span>
          </div>
          <div className="flex items-center gap-5">
            <Link href="/login" className="hover:text-slate-700 transition-colors">{t.login}</Link>
            <Link href="/register" className="hover:text-slate-700 transition-colors">{t.signup}</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
