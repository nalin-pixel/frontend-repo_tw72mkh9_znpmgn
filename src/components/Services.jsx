import { Cog, Flame, Shield, Wrench, Factory, Gauge, Hammer, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Factory,
    title: "Industrial Chimneys",
    desc: "Design, fabrication and erection of self-supported and guyed chimneys with corrosion-resistant coatings.",
  },
  {
    icon: Flame,
    title: "Boilers & Pressure Vessels",
    desc: "Custom boiler shells, economizers and certified pressure vessels with NDT and hydro testing.",
  },
  {
    icon: Shield,
    title: "Storage Tanks",
    desc: "Mild steel and stainless-steel tanks with internal baffles, manholes and surface treatment.",
  },
  {
    icon: Wrench,
    title: "SS & Argon Welding",
    desc: "Precision TIG/argon welding for food-grade and high-precision assemblies in SS 304/316.",
  },
  {
    icon: Wrench,
    title: "Pipe Bending & Spools",
    desc: "Cold/hot bending, spool fabrication and site fit-ups as per P&ID and isometrics.",
  },
  {
    icon: Hammer,
    title: "Heavy Fabrication",
    desc: "Platforms, ducts, structures, conveyors and custom fabrication to drawing.",
  },
  {
    icon: Cog,
    title: "Hydraulic Works",
    desc: "Hydraulic cylinder repair, hose routing, powerpack skids and onsite troubleshooting.",
  },
  {
    icon: Gauge,
    title: "Testing & QA",
    desc: "Hydro testing, DP/UT testing, WPS/PQR, material traceability and documentation.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-slate-900/60 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl font-bold text-white sm:text-3xl">Capabilities</h2>
            <p className="mt-2 text-blue-200/80">A quick view of what we deliver</p>
          </div>
          <a href="#contact" className="hidden rounded-lg border border-blue-400/20 px-4 py-2 text-sm text-blue-100 transition hover:border-blue-400/40 hover:text-white sm:inline-flex items-center gap-2">Get a quote <ChevronRight className="h-4 w-4"/></a>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, desc }, i) => (
            <motion.div key={title} initial={{opacity:0, y:10}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.4, delay:i*0.03}} className="group rounded-xl border border-blue-400/20 bg-slate-800/50 p-5 shadow transition hover:border-blue-400/40">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10 text-blue-300"><Icon className="h-5 w-5" /></div>
              <h3 className="mt-3 font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-blue-200/80">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
