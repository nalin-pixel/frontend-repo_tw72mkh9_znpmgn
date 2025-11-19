import { Cog, Flame, Shield, Wrench, Pipe, Factory, Gauge, Hammer } from "lucide-react";

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
    icon: Pipe,
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
    <section id="services" className="py-16 bg-slate-900/60">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-white">Capabilities</h2>
        <p className="text-blue-200/80 mt-2">A quick view of what we deliver</p>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl border border-blue-400/20 bg-slate-800/50 p-5 hover:border-blue-400/40 transition shadow">
              <Icon className="w-6 h-6 text-blue-300" />
              <h3 className="mt-3 font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm text-blue-200/80 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
