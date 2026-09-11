export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0B] text-white">
      <nav className="sticky top-0 z-50 border-b border-white/5 bg-[#0A0A0B]/80 backdrop-blur-xl"><div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between"><a href="/" className="font-black text-xl flex gap-2 items-center"><img src="../icon.png" alt="RedANT" className="h-12 w-auto" />RedANT</a><a href="/" className="text-sm text-white/60">← Home</a></div></nav>
      <section className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-black">Terms & Conditions</h1><p className="text-zinc-500 text-sm mt-2">Effective: 10 Sep 2026 • redant.in</p>
        <div className="mt-10 space-y-8 text- leading-relaxed text-zinc-400">
          <h2 className="text-xl font-bold text-white">1. Service</h2><p>RedANT provides Official WhatsApp Business API, team inbox, broadcast, AI agent, payments. Requires your own WhatsApp number and Meta verification.</p>
          <h2 className="text-xl font-bold text-white">2. Acceptable Use</h2><ul className="list-disc pl-5 space-y-2"><li>No spam, illegal, non-opt-in broadcasts — violates Meta policy and will lead to ban by Meta (not us)</li><li>No adult, gambling, loan harassment templates</li><li>You are responsible for opt-in proof</li></ul>
          <h2 className="text-xl font-bold text-white">3. Pricing & Billing</h2><p>Plans: Starter ₹999/mo, Growth ₹2999/mo + GST. Meta conversation charges extra per Meta pricing. No per-agent fee. 7-day refund if not used. No refund after broadcast sent.</p>
          <h2 className="text-xl font-bold text-white">4. Uptime & Liability</h2><p>99.5% uptime target. Not liable for Meta downtime, number ban due to spam, lost sales. Max liability = last month fee paid.</p>
          <h2 className="text-xl font-bold text-white">5. Termination</h2><p>We may suspend for spam, non-payment, legal request. You can export and delete anytime from dashboard.</p>
          <h2 className="text-xl font-bold text-white">6. Law</h2><p>Governed by Indian law, jurisdiction Tirupur, Tamil Nadu. Disputes via arbitration in Tirupur.</p>
          <h2 className="text-xl font-bold text-white">7. Contact</h2><p>srikeerthigp@gmail.com • RedAnt Technologies Pvt Ltd, Tirupur 641652</p>
        </div>
      </section>
    </div>
  )
}