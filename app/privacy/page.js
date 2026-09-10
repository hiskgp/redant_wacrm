export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0B] text-white">
      <nav className="sticky top-0 z-50 border-b border-white/5 bg-[#0A0A0B]/80 backdrop-blur-xl"><div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between"><a href="/" className="font-black text-xl flex gap-2 items-center"><span className="h-7 w-7 rounded-lg bg-[#FF2D2D] grid place-items-center">R</span>RedANT</a><a href="/" className="text-sm text-white/60">← Home</a></div></nav>
      <section className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-black">Privacy Policy</h1><p className="text-zinc-500 text-sm mt-2">Effective: 10 Sep 2026 • redant.in • DPDP Act 2023 Compliant</p>
        <div className="mt-10 space-y-8 text- leading-relaxed text-zinc-400">
          <p>RedAnt Technologies Pvt Ltd ("RedANT", "we", "redant.in") respects your privacy. This policy covers redant.in platform, WhatsApp CRM, API.</p>

          <h2 className="text-xl font-bold text-white">1. Data We Collect</h2>
          <ul className="list-disc pl-5 space-y-2"><li><b className="text-white">Account:</b> Name, email, phone, company, GSTIN</li><li><b className="text-white">WhatsApp Business Data:</b> Phone numbers, messages, media, templates you submit via API. We act as Data Processor.</li><li><b className="text-white">Technical:</b> IP, device, logs, cookies for login, security</li></ul>

          <h2 className="text-xl font-bold text-white">2. How We Use</h2>
          <p>To provide inbox, broadcast (opt-in only), AI bot, payments, support, billing, prevent abuse, comply with Meta WhatsApp Business Policy and Indian law.</p>

          <h2 className="text-xl font-bold text-white">3. WhatsApp & Meta</h2>
          <p>We are Official WhatsApp Business API provider. Messages flow via Meta infrastructure. We do NOT read personal chats, do NOT sell contacts. Broadcasts require explicit user opt-in. Opt-out via STOP.</p>

          <h2 className="text-xl font-bold text-white">4. Storage & Security</h2>
          <p>Data stored in AWS Mumbai (ap-south-1), encrypted AES-256 at rest, TLS 1.3 transit. Retention: Account data until deletion, logs 90 days, backups 30 days.</p>

          <h2 className="text-xl font-bold text-white">5. Sharing</h2>
          <p>Shared only with: Meta (for WhatsApp delivery), AWS (hosting), Razorpay (billing), Shopify (if you connect). No sale to third parties.</p>

          <h2 className="text-xl font-bold text-white">6. Your Rights (DPDP Act 2023)</h2>
          <p>Right to access, correct, delete, nominate, grievance. Email srikeerthigp@gmail.com. Response in 30 days. Grievance Officer: Keerthi Raja.</p>

          <h2 className="text-xl font-bold text-white">7. Cookies</h2>
          <p>Essential cookies only. No third-party ad trackers.</p>

          <h2 className="text-xl font-bold text-white">8. Contact</h2>
          <p>Privacy Officer: srikeerthigp@gmail.com, RedAnt Technologies, Tek Tower, Tirupur 641652. DPO: dpo@redant.in</p>
        </div>
      </section>
    </div>
  )
}