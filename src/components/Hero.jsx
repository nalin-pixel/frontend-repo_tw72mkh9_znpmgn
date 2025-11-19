import { Factory, Wrench, Flame } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* background grid */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-20 [background:radial-gradient(600px_200px_at_10%_10%,theme(colors.blue.600/.15),transparent_60%),radial-gradient(400px_160px_at_90%_20%,theme(colors.indigo.600/.12),transparent_60%)]" />

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 lg:grid-cols-2">
        <div>
          <motion.div initial={{opacity:0, y:10}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.5}} className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-400/10 px-3 py-1 text-xs text-blue-200 mb-6">
            <Flame className="h-4 w-4" />
            Since 1970s • Family-run engineering workshop
          </motion.div>

          <motion.h1 initial={{opacity:0, y:10}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.6, delay:0.05}} className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Precision fabrication for heavy industry
          </motion.h1>
          <motion.p initial={{opacity:0, y:10}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.6, delay:0.1}} className="mt-4 leading-relaxed text-blue-100/90">
            Chimneys, boilers, storage tanks, SS & Argon welding, pipe bending, custom fabrication and hydraulic works. Built on three generations of craftsmanship and trust.
          </motion.p>

          <motion.div initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}} transition={{delay:0.15}} className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-3 text-white shadow-lg shadow-blue-900/30 transition hover:brightness-110">
              Get a project quote
            </a>
            <a href="#services" className="inline-flex items-center justify-center rounded-lg border border-blue-300/20 px-5 py-3 text-blue-100 transition hover:border-blue-400/50 hover:text-white">
              Explore our capabilities
            </a>
          </motion.div>

          <motion.div initial={{opacity:0, y:10}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.6, delay:0.2}} className="mt-8 flex items-center gap-6 text-sm text-blue-200/80">
            <div className="flex items-center gap-2"><Factory className="h-4 w-4"/>In-house workshop</div>
            <div className="flex items-center gap-2"><Wrench className="h-4 w-4"/>On-site execution</div>
          </motion.div>
        </div>

        <motion.div initial={{opacity:0, scale:0.98}} whileInView={{opacity:1, scale:1}} viewport={{once:true}} transition={{duration:0.6}} className="relative">
          <div className="rounded-2xl border border-blue-400/20 bg-slate-800/40 p-6 backdrop-blur-sm shadow-2xl">
            <div className="grid grid-cols-2 gap-4">
              {[
                { title: "Industrial Chimneys", img: "https://images.unsplash.com/photo-1509395176047-4a66953fd231?q=80&w=1200&auto=format&fit=crop" },
                { title: "Pressure Vessels", img: "https://images.unsplash.com/photo-1581093588401-16ec9f9c0f14?q=80&w=1200&auto=format&fit=crop" },
                { title: "Pipe Bending", img: "https://images.unsplash.com/photo-1564659907532-6c8aaedef2fe?q=80&w=1200&auto=format&fit=crop" },
                { title: "SS & Argon Welding", img: "https://images.unsplash.com/photo-1610465299996-31d8f7cf3a4f?q=80&w=1200&auto=format&fit=crop" },
              ].map((card) => (
                <div key={card.title} className="group relative h-36 overflow-hidden rounded-xl sm:h-40">
                  <img src={card.img} alt={card.title} className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-slate-900/30 transition group-hover:bg-slate-900/20" />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/70 to-transparent p-3 text-sm font-medium text-white">
                    {card.title}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
