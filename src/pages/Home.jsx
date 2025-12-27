import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PizzaHero from "../components/PizzaHero";

const Home = () => {
  return (
    <div className="bg-[#283618]">
      <PizzaHero />

      {/* CSS-Only Marquee (Much lower CPU usage than Framer Motion loop) */}
      <div className="bg-[#DE802B] py-4 overflow-hidden border-y-2 border-[#1a2310] relative z-20">
        <div className="whitespace-nowrap font-rubyring text-3xl text-[#1a2310] uppercase tracking-wider font-bold animate-marquee inline-block">
          • Wood Fired • Hand Kneaded • No Shortcuts • Fresh Basil • San Marzano
          • Wood Fired • Hand Kneaded • No Shortcuts • Fresh Basil • San Marzano
          &nbsp;
        </div>
        <div className="whitespace-nowrap font-rubyring text-3xl text-[#1a2310] uppercase tracking-wider font-bold animate-marquee inline-block absolute top-4 left-0">
          • Wood Fired • Hand Kneaded • No Shortcuts • Fresh Basil • San Marzano
          • Wood Fired • Hand Kneaded • No Shortcuts • Fresh Basil • San Marzano
          &nbsp;
        </div>
        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-100%); }
          }
          .animate-marquee {
            animation: marquee 30s linear infinite;
          }
        `}</style>
      </div>

      {/* Features Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Simple Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#283618] to-[#1a2310]" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Simple Fade In */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-24 text-center"
          >
            <h2 className="text-5xl md:text-8xl font-rubyring uppercase text-[#A1BC98] mb-6">
              Baked the ONNI Way
            </h2>
            <div className="flex justify-center items-center gap-6 font-rubyring text-xl text-[#DE802B]">
              <span>Simple ingredients</span>
              <span className="text-xs">✦</span>
              <span>Serious pizza</span>
            </div>
          </motion.div>

          {/* Static Grid Layout (Removed Complex Scroll Animations per Item) */}
          <div className="space-y-24">
            {[
              {
                num: "01",
                title: "The Dough",
                desc: "Made fresh every day, fermented slow for a light, airy crust.",
              },
              {
                num: "02",
                title: "The Toppings",
                desc: "Simple, honest ingredients that let every flavor speak for itself.",
              },
              {
                num: "03",
                title: "The Fire",
                desc: "High heat, perfect bake — crisp edges, soft center, and smoky goodness.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-center gap-12 ${
                  index % 2 !== 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Number Visual */}
                <div className="flex-1 w-full relative h-[200px] flex items-center justify-center">
                  <span className="text-[12rem] font-orange text-[#A1BC98] opacity-10 absolute select-none leading-none">
                    {item.num}
                  </span>
                  <div className="relative z-10 w-24 h-24 border-4 border-[#DE802B] rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-[#DE802B] rounded-full" />
                  </div>
                </div>

                {/* Text Content - No Animation for instant load feeling */}
                <div className="flex-1 w-full text-center md:text-left">
                  <h3 className="text-4xl md:text-5xl font-rooster text-[#A1BC98] mb-4">
                    {item.title}
                  </h3>
                  <p className="text-[#A1BC98]/70 font-orange text-xl leading-relaxed max-w-md mx-auto md:mx-0">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - CSS Hover Buttons */}
      <section className="py-24 bg-[#DE802B] relative">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-5xl md:text-7xl font-rubyring text-[#1a2310] mb-12">
            Ready to Taste Perfection?
          </h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/book-table">
              <button className="px-10 py-5 bg-[#1a2310] text-[#DE802B] font-rubyring text-2xl uppercase tracking-wider shadow-[8px_8px_0px_0px_rgba(255,255,255,0.2)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all duration-200">
                Book a Table
              </button>
            </Link>
            <Link to="/menu">
              <button className="px-10 py-5 bg-transparent border-4 border-[#1a2310] text-[#1a2310] font-rubyring text-2xl uppercase tracking-wider hover:bg-[#1a2310] hover:text-[#DE802B] transition-colors duration-200">
                View Menu
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
