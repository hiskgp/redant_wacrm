export default function ContactPage(){
 return (
  <div className="min-h-screen bg-[#0A0A0B] text-white">
    <nav className="sticky top-0 border-b border-white/5 bg-[#0A0A0B]/80 backdrop-blur-xl"><div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between"><a href="/" className="font-black text-xl flex gap-2 items-center"><span className="h-7 w-7 rounded-lg bg-[#FF2D2D] grid place-items-center">R</span>RedANT</a><a href="/" className="text-sm text-white/60">← Home</a></div></nav>
    <section className="mx-auto max-w-4xl px-6 py-16 md:py-24">
      <h1 className="text-5xl font-black">Contact Us</h1><p className="mt-3 text-zinc-500">We reply in 4 minutes on WhatsApp.</p>
      <div className="mt-10 grid md:grid-cols-2 gap-6">
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"><h3 className="font-bold">Support</h3><p className="text-zinc-400 mt-2 text-sm leading-relaxed">srikeerthigp@gmail.com<br/>+91 90039 12345<br/>Mon-Sat 10AM-7PM IST<br/>Tek Tower, Avinashi Road, Tirupur 641652</p></div>
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"><h3 className="font-bold">Sales & Demo</h3><p className="text-zinc-400 mt-2 text-sm leading-relaxed">srikeerthigp@gmail.com<br/>Book demo at redant.in/demo<br/>Grievance: srikeerthigp@gmail.com<br/>DPO: srikeerthigp@gmail.com</p></div>
      </div>
      <div className="mt-10 rounded-2xl border border-[#FF2D2D]/20 bg-[#FF2D2D]/5 p-6"><p className="text-sm text-zinc-400"><b className="text-white">redant.in is RedANT WhatsApp API, not RedAnt Staffing.</b> For jobs, please contact respective staffing agencies. For WhatsApp CRM, you are in right place.</p></div>
    </section>
  </div>
 )
}