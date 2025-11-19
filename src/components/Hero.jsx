import { Factory, Wrench, Flame } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(ellipse_at_top,theme(colors.blue.500/20),transparent_60%)]" />
      <div className="max-w-6xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-400/10 px-3 py-1 text-xs text-blue-200 mb-6">
            <Flame className="w-4 h-4" />
            Since 1970s • Family-run engineering workshop
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
            Lucky Engineering
          </h1>
          <p className="mt-4 text-blue-100/90 leading-relaxed">
            Precision fabrication and industrial solutions: chimneys, boilers, storage tanks,
            SS & Argon welding, pipe bending, custom fabrication and hydraulic works. Built on
            three generations of craftsmanship and trust.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="inline-flex items-center justify-center rounded-lg bg-blue-500 hover:bg-blue-600 text-white px-5 py-3 transition">
              Get a project quote
            </a>
            <a href="#services" className="inline-flex items-center justify-center rounded-lg border border-blue-300/30 text-blue-100 hover:text-white hover:border-blue-400/60 px-5 py-3 transition">
              Explore our capabilities
            </a>
          </div>
          <div className="mt-8 flex items-center gap-6 text-blue-200/80 text-sm">
            <div className="flex items-center gap-2"><Factory className="w-4 h-4"/>In-house workshop</div>
            <div className="flex items-center gap-2"><Wrench className="w-4 h-4"/>On-site execution</div>
          </div>
        </div>
        <div className="relative">
          <div className="rounded-2xl border border-blue-400/20 bg-slate-800/40 p-6 backdrop-blur-sm shadow-2xl">
            <div className="grid grid-cols-2 gap-4">
              {[
                { title: "Industrial Chimneys", img: "https://images.unsplash.com/photo-1509395176047-4a66953fd231?q=80&w=1200&auto=format&fit=crop" },
                { title: "Pressure Vessels", img: "https://images.unsplash.com/photo-1581093588401-16ec9f9c0f14?q=80&w=1200&auto=format&fit=crop" },
                { title: "Pipe Bending", img: "https://images.unsplash.com/photo-1564659907532-6c8aaedef2fe?q=80&w=1200&auto=format&fit=crop" },
                { title: "SS & Argon Welding", img: "https://images.unsplash.com/photo-1610465299996-31d8f7cf3a4f?q=80&w=1200&auto=format&fit=crop" },
              ].map((card) => (
                <div key={card.title} className="group relative h-36 sm:h-40 overflow-hidden rounded-xl">
                  <img src={card.img} alt={card.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-slate-900/30 group-hover:bg-slate-900/20 transition" />
                  <div className="absolute bottom-0 left-0 right-0 p-3 text-white text-sm font-medium bg-gradient-to-t from-slate-900/70 to-transparent">
                    {card.title}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
