import { useState } from "react";
import { Phone, Mail, MapPin, Send, CheckCircle2, Loader2 } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await new Promise(r=>setTimeout(r, 800)); // demo feel; will wire to backend later
    setLoading(false);
    setSent(true);
  };

  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="rounded-2xl border border-blue-400/20 bg-slate-800/50 p-6">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <motion.h2 initial={{opacity:0, y:10}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.5}} className="text-2xl font-bold text-white sm:text-3xl">Request a quote</motion.h2>
              <p className="mt-2 text-blue-200/80">Share your requirement and we’ll get back within 1 business day.</p>

              <form onSubmit={handleSubmit} className="mt-6 grid grid-cols-2 gap-4">
                <input required placeholder="Your name" className="col-span-2 md:col-span-1 rounded-lg border border-blue-400/20 bg-slate-900/60 px-4 py-3 text-blue-100 placeholder-blue-300/50 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <input placeholder="Company" className="col-span-2 md:col-span-1 rounded-lg border border-blue-400/20 bg-slate-900/60 px-4 py-3 text-blue-100 placeholder-blue-300/50 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <input required placeholder="Email" type="email" className="col-span-2 md:col-span-1 rounded-lg border border-blue-400/20 bg-slate-900/60 px-4 py-3 text-blue-100 placeholder-blue-300/50 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <input placeholder="Phone" className="col-span-2 md:col-span-1 rounded-lg border border-blue-400/20 bg-slate-900/60 px-4 py-3 text-blue-100 placeholder-blue-300/50 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <textarea required placeholder="Brief about your requirement" rows={4} className="col-span-2 rounded-lg border border-blue-400/20 bg-slate-900/60 px-4 py-3 text-blue-100 placeholder-blue-300/50 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <button disabled={loading} className="col-span-2 inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-3 text-white transition hover:brightness-110 disabled:opacity-60">
                  {loading ? <Loader2 className="h-4 w-4 animate-spin"/> : <Send className="h-4 w-4" />} {loading ? 'Sending...' : 'Send Inquiry'}
                </button>
                {sent && (
                  <div className="col-span-2 inline-flex items-center gap-2 rounded-lg border border-emerald-400/20 bg-emerald-500/10 p-3 text-sm text-emerald-200"><CheckCircle2 className="h-4 w-4"/> Thanks! We\'ll be in touch shortly.</div>
                )}
              </form>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg border border-blue-400/20 bg-slate-900/50 p-4">
                <div className="flex items-center gap-3 text-blue-100"><Phone className="h-5 w-5"/> +91-XXXXXXXXXX</div>
              </div>
              <div className="rounded-lg border border-blue-400/20 bg-slate-900/50 p-4">
                <div className="flex items-center gap-3 text-blue-100"><Mail className="h-5 w-5"/> info@luckyengineering.com</div>
              </div>
              <div className="rounded-lg border border-blue-400/20 bg-slate-900/50 p-4">
                <div className="flex items-center gap-3 text-blue-100"><MapPin className="h-5 w-5"/> Workshop address, City, State</div>
              </div>
              <p className="text-xs text-blue-300/60">Replace contact details with your own and we can wire this form to send emails.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
