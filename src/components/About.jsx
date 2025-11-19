export default function About() {
  return (
    <section id="about" className="py-16">
      <div className="max-w-5xl mx-auto px-6 grid lg:grid-cols-3 gap-10 items-start">
        <div className="lg:col-span-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Three generations of trust</h2>
          <p className="mt-4 text-blue-100/90 leading-relaxed">
            Lucky Engineering was founded by our grandfather with a simple promise: deliver quality
            industrial fabrication with honesty and reliability. Today, it is led by the second generation
            — our father and uncle — who continue the same commitment, expanding our capabilities and scale.
          </p>
          <p className="mt-3 text-blue-100/90 leading-relaxed">
            We specialize in on-site and in-house fabrication for process industries, food & beverage,
            pharma, cement, power and infrastructure. We work to drawings and standards, with proper QA
            and documentation as required by your organization.
          </p>
        </div>
        <div className="rounded-xl border border-blue-400/20 bg-slate-800/50 p-6">
          <h3 className="font-semibold text-white">At a glance</h3>
          <ul className="mt-3 space-y-2 text-sm text-blue-200/90">
            <li>• 40+ years of fabrication experience</li>
            <li>• Skilled team for SS and MS work</li>
            <li>• In-house bending, rolling and welding</li>
            <li>• On-time delivery and site execution</li>
            <li>• Safety-first culture</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
