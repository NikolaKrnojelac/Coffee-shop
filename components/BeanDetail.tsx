import { Bean } from "@/lib/beans";
import Image from "next/image";

export default function BeanDetail({ bean }: { bean: Bean }) {
  return (
    <section
      id={bean.slug}
      className="border-b-2 border-border bg-dark text-white"
    >
      <div className="flex justify-between items-center px-4 sm:px-12 py-6 border-b border-white/10 w-full">
        <div className="flex gap-4 sm:gap-10">
          <span className="text-xs text-white/40 font-mono">{bean.number}</span>
          <span className="text-xs text-white/40 tracking-wider">
            {bean.country} · {bean.region}
          </span>
        </div>

        <span className="text-xs font-bold font-mono">{bean.price}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.4fr] border-b border-white/10 min-h-[70vh]">
        <div className="border-b lg:border-b-0 lg:border-r border-white/10 px-4 sm:px-12 py-10 flex flex-col justify-between">
          <div className="border border-white p-2 flex-1 mb-4 min-h-62.5 relative overflow-hidden">
            <Image
              src={bean.image}
              alt={bean.name}
              sizes="(max-width: 1024px) 100vw, 40vw"
              fill
              className="object-cover"
            />
          </div>
          <div className="text-center">
            <p className="text-xs mb-2">{bean.farmCity}</p>
            <p className="text-xs text-muted">{bean.coordinates}</p>
          </div>
        </div>

        <div className="px-4 sm:px-12 py-10 flex flex-col justify-between gap-8">
          <div>
            <h2 className="text-2xl sm:text-4xl tracking-widest mb-6">
              {bean.name}
            </h2>
            <p className="text-sm text-white/70 border-l-2 border-white/30 pl-4 mb-6">
              {bean.story}
            </p>

            <div className="flex flex-wrap mb-10 gap-2">
              {bean.flavours.map((item) => (
                <span
                  key={item}
                  className="border border-white/30 px-3 py-1.5 text-xs tracking-wider"
                >
                  {item}
                </span>
              ))}
            </div>

            <p className="text-white/50 text-xs mb-6">
              Preporuka za pripremu - {bean.brewMethod.toUpperCase()}
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {[
                { n: "01", label: "Temperatura", value: bean.temperature },
                { n: "02", label: "Omjer", value: bean.ratio },
                { n: "03", label: "Mljevenje", value: bean.grind },
                { n: "04", label: "Ukupno", value: bean.time },
              ].map((step, i) => (
                <div
                  key={i}
                  className={`pr-2 sm:pr-6 ${i < 3 ? "sm:border-r sm:border-white/15" : ""}`}
                >
                  <p className="text-white/40 mb-1 text-xs font-mono">
                    {step.n}
                  </p>
                  <p className="mb-2 text-sm">{step.label}</p>
                  <p className="font-light text-sm text-white/80">
                    {step.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 border-t border-white/10 pt-6 gap-4 sm:gap-0">
            {[
              {
                label: "Nadmorska visina",
                value: bean.altitude,
                sub: ` ${bean.country}`,
              },
              { label: "Berba", value: bean.harvest, sub: `${bean.process}` },
              {
                label: "Barista preporuka",
                value: bean.brewMethod,
                sub: `${bean.temperature} · ${bean.time}`,
              },
            ].map((stat, i) => (
              <div
                key={i}
                className={`p-4 ${i < 2 ? "border-b sm:border-b-0 sm:border-r border-white/15" : ""}`}
              >
                <p className="text-white/40 mb-2 text-xs">{stat.label}</p>

                <p className="mb-2 text-2xl sm:text-3xl font-playfair italic tracking-wider font-medium">
                  {stat.value}
                </p>
                <p className="text-xs text-white/60">{stat.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0 px-4 sm:px-12 py-6 sm:py-4 border-t border-b border-white/10">
        <span className="text-xs tracking-widest text-white/35 text-center sm:text-left">
          Prženo ove sedmice · Freshness guaranteed
        </span>
        <button className="w-full sm:w-auto font-mono font-bold text-xs tracking-widest px-6 py-2.5 cursor-pointer border border-white hover:bg-white hover:text-dark transition-colors">
          NARUČI
        </button>
      </div>
    </section>
  );
}
