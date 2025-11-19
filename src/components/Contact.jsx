import { Phone, Mail, MapPin, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-16">
      <div className="max-w-5xl mx-auto px-6">
        <div className="rounded-2xl border border-blue-400/20 bg-slate-800/50 p-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">Request a quote</h2>
              <p className="mt-2 text-blue-200/80">Share your requirement and we’ll get back within 1 business day.</p>
              <form onSubmit={(e)=>e.preventDefault()} className="mt-6 grid grid-cols-2 gap-4">
                <input placeholder="Your name" className="col-span-2 md:col-span-1 bg-slate-900/60 border border-blue-400/20 rounded-lg px-4 py-3 text-blue-100 placeholder-blue-300/50 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <input placeholder="Company" className="col-span-2 md:col-span-1 bg-slate-900/60 border border-blue-400/20 rounded-lg px-4 py-3 text-blue-100 placeholder-blue-300/50 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <input placeholder="Email" type="email" className="col-span-2 md:col-span-1 bg-slate-900/60 border border-blue-400/20 rounded-lg px-4 py-3 text-blue-100 placeholder-blue-300/50 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <input placeholder="Phone" className="col-span-2 md:col-span-1 bg-slate-900/60 border border-blue-400/20 rounded-lg px-4 py-3 text-blue-100 placeholder-blue-300/50 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <textarea placeholder="Brief about your requirement" rows={4} className="col-span-2 bg-slate-900/60 border border-blue-400/20 rounded-lg px-4 py-3 text-blue-100 placeholder-blue-300/50 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <button className="col-span-2 inline-flex items-center justify-center gap-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white px-5 py-3 transition">
                  <Send className="w-4 h-4" /> Send Inquiry
                </button>
              </form>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-slate-900/50 border border-blue-400/20 p-4">
                <div className="flex items-center gap-3 text-blue-100"><Phone className="w-5 h-5"/> +91-XXXXXXXXXX</div>
              </div>
              <div className="rounded-lg bg-slate-900/50 border border-blue-400/20 p-4">
                <div className="flex items-center gap-3 text-blue-100"><Mail className="w-5 h-5"/> info@luckyengineering.com</div>
              </div>
              <div className="rounded-lg bg-slate-900/50 border border-blue-400/20 p-4">
                <div className="flex items-center gap-3 text-blue-100"><MapPin className="w-5 h-5"/> Workshop address, City, State</div>
              </div>
              <p className="text-xs text-blue-300/60">Replace contact details with your own and we can wire this form to send emails.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
