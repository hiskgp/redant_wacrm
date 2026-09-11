export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0B] text-white">
      <nav className="sticky top-0 z-50 border-b border-white/5 bg-[#0A0A0B]/80 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2 font-black text-xl"><img src="../icon.png" alt="RedANT" className="h-12 w-auto" />RedANT</a>
          <div className="flex gap-6 text-sm text-white/60"><a href="/privacy" className="hover:text-white">Privacy</a><a href="/terms" className="hover:text-white">Terms</a><a href="/" className="hover:text-white">← Home</a></div>
        </div>
      </nav>

      <section className="mx-auto max-w-5xl px-6 py-16 md:py-24">
        <div className="inline-flex px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-white/50">About redant.in • Est. 2019</div>
        <h1 className="mt-6 text-4xl md:text-6xl font-black leading-[0.95] tracking-tight">We are RedANT.<br/><span className="bg-gradient-to-r from-[#FF2D2D] to-orange-300 bg-clip-text text-transparent">AI-powered WhatsApp automation for growing businesses</span></h1>

        <p className="mt-8 text-lg leading-relaxed text-zinc-400 max-w-3xl">RedANT is a WhatsApp Business automation platform built for modern businesses that want to sell, support, and engage customers without spending their entire day replying to messages.</p>
        <p className="mt-8 text-lg leading-relaxed text-zinc-400 max-w-3xl">We combine AI, WhatsApp automation, team inboxes, broadcasts, payments, and business integrations into one simple platform.</p>
        <p className="mt-8 text-lg leading-relaxed text-zinc-400 max-w-3xl">Less manual work. More conversations. More conversions.</p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"><div className="text-3xl font-black">2021</div><p className="text-sm text-zinc-500 mt-1">Founded in Tirupur, TN. Bootstrapped to 1000+ customers</p></div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"><div className="text-3xl font-black">10M+</div><p className="text-sm text-zinc-500 mt-1">WhatsApp messages automated every month</p></div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"><div className="text-3xl font-black">Meta Verified</div><p className="text-sm text-zinc-500 mt-1">Official Tech Provider, Green Tick enabled</p></div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold">Our Mission</h2>
          <p className="mt-3 text-zinc-400 leading-relaxed">Make every business conversation count.</p>

          <p className="mt-3 text-zinc-400 leading-relaxed">We want businesses to spend less time managing repetitive messages and more time building products, serving customers, and growing their brands.</p>

          <p className="mt-3 text-zinc-400 leading-relaxed">Every message should have a purpose.</p>

          <p className="mt-3 text-zinc-400 leading-relaxed">Every conversation should have an opportunity.</p>
          
          <p className="mt-3 text-zinc-400 leading-relaxed">And every business should have access to intelligent automation.</p>

        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold">Why redant.in?</h2>
          <ul className="mt-4 space-y-3 text-zinc-400 list-disc pl-5">
            <li><span className="text-white">Official API:</span> Direct Meta approval, green tick, no ban risk like unofficial tools</li>
            <li><span className="text-white">Built for India:</span> UPI, COD NDR, vernacular AI, GST invoices</li>
            <li><span className="text-white">10X faster:</span> 90% chats handled by AI, team inbox for rest</li>
            <li><span className="text-white">Flat pricing:</span> Unlimited agents, unlike Wati/Interakt per-seat charges</li>
          </ul>
        </div>

        {/* <div className="mt-12 rounded-2xl border border-[#FF2D2D]/20 bg-[#FF2D2D]/5 p-6">
          <h3 className="font-bold text-white">Brand Clarification for Google</h3>
          <p className="mt-2 text-sm leading-relaxed text-zinc-400">redant.in operates as RedANT WhatsApp CRM by RedAnt Technologies Pvt Ltd, Bangalore. We are NOT affiliated with RedAnt Staffing (India) - a recruitment & staffing agency, nor RedAnt Media LLP, Anna Nagar, Chennai - an IT services firm. Trademarks belong to respective owners. If you are looking for jobs/recruitment, please visit RedAnt Staffing. If you are looking for WhatsApp Business API, you are at the right place.</p>
        </div> */}

        <div className="mt-12">
          <h2 className="text-2xl font-bold">Contact</h2>
          <p className="mt-3 text-zinc-400">RedAnt Technologies, Avinashi Road, Tirupur, Tamil Nadu 641652, India<br/>srikeerthigp@gmail.com | +91 9500476769</p>
        </div>
      </section>
    </div>
  )
}