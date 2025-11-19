import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="mx-auto grid max-w-6xl items-start gap-10 px-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <motion.h2 initial={{opacity:0, y:10}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.5}} className="text-2xl font-bold text-white sm:text-3xl">Three generations of trust</motion.h2>
          <motion.p initial={{opacity:0, y:10}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.5, delay:0.05}} className="mt-4 leading-relaxed text-blue-100/90">
            Lucky Engineering was founded by our grandfather with a simple promise: deliver quality industrial fabrication with honesty and reliability. Today, it is led by the second generation — our father and uncle — who continue the same commitment, expanding our capabilities and scale.
          </motion.p>
          <motion.p initial={{opacity:0, y:10}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.5, delay:0.1}} className="mt-3 leading-relaxed text-blue-100/90">
            We specialize in on-site and in-house fabrication for process industries, food & beverage, pharma, cement, power and infrastructure. We work to drawings and standards, with proper QA and documentation as required by your organization.
          </motion.p>
        </div>
        <motion.div initial={{opacity:0, y:10}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.5, delay:0.1}} className="rounded-xl border border-blue-400/20 bg-slate-800/50 p-6">
          <h3 className="font-semibold text-white">At a glance</h3>
          <ul className="mt-3 space-y-2 text-sm text-blue-200/90">
            <li>• 40+ years of fabrication experience</li>
            <li>• Skilled team for SS and MS work</li>
            <li>• In-house bending, rolling and welding</li>
            <li>• On-time delivery and site execution</li>
            <li>• Safety-first culture</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
