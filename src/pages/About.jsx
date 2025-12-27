import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="pt-20 bg-oregano-900 text-oregano-50">
      {/* Hero */}
      <section className="py-32 bg-gradient-to-b from-[#283618] to-[#283618]/60">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-6xl md:text-7xl font-rubyring uppercase text-[#A1BC98] mb-6"
          >
            Our Story
          </motion.h1>
          <p className="text-xl font-orange text-[#A1BC98]">
            Built on fire, patience, and respect for the craft
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-32 bg-gradient-to-b from-[#283618]/60 to-[#DE802B]">
        <div className="max-w-6xl mx-auto px-4 py-20 relative">
          {/* Optional: Central connecting line for a "timeline" feel */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-oregano-600/20 to-transparent" />

          {[
            {
              number: "01",
              title: "From Italy",
              desc: "ONNI PIZZA began with a deep respect for Italian tradition — slow dough, honest ingredients, and fire that demands attention.",
            },
            {
              number: "02",
              title: "The Craft",
              desc: "Every pizza follows techniques refined over generations. Fermentation, temperature, and timing are never rushed.",
            },
            {
              number: "03",
              title: "Our Promise",
              desc: "No shortcuts. No compromise. Just pizza made the way it was meant to be.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 mb-32 last:mb-0 ${
                i % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Number Branding */}
              <div className="flex-1 w-full text-center md:text-right">
                <div
                  className={`text-8xl md:text-[12rem] font-extralight opacity-20 leading-none select-none text-[#9CC6DB] ${
                    i % 2 !== 0 ? "md:text-left" : "md:text-right"
                  }`}
                ></div>
              </div>

              {/* Content Card */}
              <div className="flex-1 w-full relative">
                {/* Subtle accent line for mobile/desktop */}
                <div className="absolute -top-4 left-0 w-12 h-1 bg-[#9CC6DB]/40" />

                <h3 className="text-5xl font-rubyring  text-[#9CC6DB] mb-6 tracking-tight">
                  {item.title}
                </h3>
                <p className="font-orange text-chilli-200 text-lg md:text-xl max-w-md leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="py-32 bg-gradient-to-b from-[#DE802B] to-[#283618]">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-6xl font-rubyring uppercase text-center text-white mb-20"
          >
            What We Believe
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              "Fresh ingredients, always seasonal",
              "Respect for tradition over trends",
              "Fire-driven flavor, every single time",
            ].map((text, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="text-center bg-gradient-to-br pt-3 rounded-full px-5 from-white/10 from-10% via-transparent to-transparent"
              >
                <p className="text-xl font-orange text-white">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-32 bg-gradient-to-b from-[#283618] from-40% to-[#DE802B] relative overflow-hidden">
        {/* Optional: Subtle background texture or grain could go here */}

        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <span className="text-[#9CC6DB] font-orange tracking-widest text-sm uppercase mb-4 block">
              The Hands Behind the Dough
            </span>
            <h2 className="text-6xl md:text-7xl font-rubyring uppercase text-[#A1BC98]">
              The People
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Marco Rossi",
                role: "Head Chef",
                origin: "Naples, Italy",
                quote: "Flour is alive.",
              },
              {
                name: "Sofia Bianchi",
                role: "Pizza Master",
                origin: "Rome, Italy",
                quote: "Fire has a flavor.",
              },
              {
                name: "Luca Verdi",
                role: "Sous Chef",
                origin: "Sicily, Italy",
                quote: "Simplicity is hard.",
              },
            ].map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="group relative"
              >
                {/* Card Container */}
                <div className="h-full border border-[#A1BC98]/20 bg-oregano-900/50 p-8 flex flex-col items-center text-center transition-all duration-500 group-hover:border-[#9CC6DB]/50 group-hover:-translate-y-2">
                  {/* Role Badge */}
                  <div className="mb-8">
                    <span className="px-3 py-1 border border-[#9CC6DB]/30 rounded-full text-xs font-orange tracking-widest text-[#9CC6DB] uppercase">
                      {m.role}
                    </span>
                  </div>

                  {/* Image Placeholder (or Photo) */}
                  <div className="w-full aspect-[4/5] bg-gradient-to-b from-[#A1BC98]/10 to-transparent mb-8 relative overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                    {/* Add <img src="..." /> here later. 
                    For now, this div acts as a stylish abstract silhouette. */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-80">
                      <img src="/images/image.png" alt="" />
                    </div>
                  </div>

                  {/* Name & Details */}
                  <h3 className="text-4xl font-briqusion font-extralight text-[#A1BC98] group-hover:text-[#9CC6DB] transition-colors duration-300 mb-2">
                    {m.name}
                  </h3>

                  <p className="font-orange text-chilli-200/60 text-sm tracking-wide uppercase mb-4">
                    {m.origin}
                  </p>

                  {/* Divider */}
                  <div className="w-8 h-px bg-oregano-600/50 my-4 group-hover:w-16 transition-all duration-500" />

                  {/* Quote/Detail */}
                  <p className="font-orange text-chilli-200 italic text-lg opacity-80">
                    "{m.quote}"
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
