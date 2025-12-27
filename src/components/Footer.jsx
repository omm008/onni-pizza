import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="relative bg-[#1a2310] overflow-hidden text-[#A1BC98] border-t-2 border-[#A1BC98]/20">
      {/* 1. SCROLLING MARQUEE (The "Quirky" Divider) */}
      <div className="bg-[#DE802B] py-3 overflow-hidden whitespace-nowrap border-b-2 border-[#1a2310]">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="inline-block text-[#1a2310] font-rubyring text-2xl uppercase tracking-widest font-bold"
        >
          Hot & Fresh • Wood Fired • No Pineapple (Just Kidding) • Est. 2024 •
          Buon Appetito • Hot & Fresh • Wood Fired • No Pineapple (Just Kidding)
          • Est. 2024 • Buon Appetito •
        </motion.div>
      </div>

      {/* Background Texture (Subtle Flame) */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none mix-blend-screen">
        <div className="absolute inset-0 bg-[url('/images/flame2.png')] bg-cover bg-center grayscale" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-start">
          {/* BRAND SECTION (Massive) */}
          <div className="md:col-span-5 flex flex-col justify-between h-full">
            <div>
              <h2 className="text-[5rem] md:text-[8rem] font-rubyring leading-[0.8] text-[#A1BC98] mb-4">
                ONNI
                <br />
                <span className="text-[#DE802B]">PIZZA</span>
              </h2>
              <p className="font-orange text-lg text-[#A1BC98]/60 max-w-sm">
                Respecting the dough since day one. Authentic Italian craft,
                brutalist flavor.
              </p>
            </div>
            {/* Socials - stylized as circles */}
            <div className="flex gap-4 mt-8">
              {["IG", "FB", "TK"].map((social, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-12 h-12 rounded-full border border-[#A1BC98]/30 flex items-center justify-center hover:bg-[#DE802B] hover:text-[#1a2310] hover:border-[#DE802B] transition-all duration-300 font-bold"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* NAVIGATION (Vertical Lists) */}
          <div className="md:col-span-3 pt-4">
            <h4 className="font-rooster text-[#DE802B] text-3xl mb-6">
              Explore
            </h4>
            <ul className="space-y-4 font-rubyring text-2xl uppercase tracking-wide">
              {[
                { name: "Our Story", path: "/about" },
                { name: "The Menu", path: "/menu" },
                { name: "Reservations", path: "/book-table" },
                { name: "Contact", path: "/contact" },
              ].map((link, i) => (
                <li key={i}>
                  <Link
                    to={link.path}
                    className="group flex items-center gap-2 hover:text-[#DE802B] transition-colors"
                  >
                    <span className="w-0 overflow-hidden group-hover:w-6 transition-all duration-300 text-[#DE802B]">
                      →
                    </span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT (Ticket Style) */}
          <div className="md:col-span-4 bg-[#A1BC98]/5 border border-[#A1BC98]/10 p-8 rotate-1 hover:rotate-0 transition-transform duration-500 backdrop-blur-sm">
            <h4 className="font-rooster text-[#9CC6DB] text-3xl mb-6">
              Visit Us
            </h4>
            <address className="not-italic font-orange text-[#A1BC98]/80 space-y-4">
              <p className="border-b border-[#A1BC98]/10 pb-2">
                <span className="block text-xs uppercase tracking-widest text-[#DE802B] mb-1">
                  Location
                </span>
                123 Pizza Street, New York, NY
              </p>
              <p className="border-b border-[#A1BC98]/10 pb-2">
                <span className="block text-xs uppercase tracking-widest text-[#DE802B] mb-1">
                  Talk to us
                </span>
                (555) 123-4567
              </p>
              <p>
                <span className="block text-xs uppercase tracking-widest text-[#DE802B] mb-1">
                  Hours
                </span>
                Mon–Sun: 11AM – 11PM
              </p>
            </address>

            {/* Newsletter Input */}
            <div className="mt-8 pt-6 border-t border-dashed border-[#A1BC98]/30">
              <label className="text-xs uppercase tracking-widest mb-2 block">
                Join the Club
              </label>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email..."
                  className="bg-transparent border-b border-[#A1BC98] w-full py-2 outline-none focus:border-[#DE802B] transition-colors placeholder-[#A1BC98]/30"
                />
                <button className="text-[#DE802B] font-bold uppercase text-sm hover:text-white transition-colors">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="mt-20 pt-8 border-t border-[#A1BC98]/10 flex flex-col md:flex-row justify-between items-center text-sm text-[#A1BC98]/40 font-orange">
          <p>© {new Date().getFullYear()} ONNI PIZZA. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-[#DE802B]">
              Privacy
            </a>
            <a href="#" className="hover:text-[#DE802B]">
              Terms
            </a>
            <span className="hidden md:inline">|</span>
            <span className="italic">Don't eat the screen.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
