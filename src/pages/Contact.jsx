import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }, 4000);
  };

  return (
    <div className="bg-[#1a2310] min-h-screen pt-20 relative overflow-hidden">
      {/* 1. GIANT BACKGROUND TEXT - Static, no JS animation needed */}
      <div className="absolute top-32 left-1/2 -translate-x-1/2 w-full text-center opacity-5 pointer-events-none select-none">
        <h1 className="text-[15rem] md:text-[25rem] font-rubyring text-[#A1BC98] leading-none whitespace-nowrap">
          PARLA
        </h1>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        {/* Header - Simple Fade In */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-6xl md:text-8xl font-rubyring text-[#A1BC98] mb-4">
            Talk to Us
          </h1>
          <p className="font-orange text-[#DE802B] text-xl tracking-widest uppercase">
            Compliments, Complaints, or Secrets.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* LEFT: THE MESSAGE PAD (Form) */}
          <div className="relative">
            {/* Paper Clip Visual */}
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-32 h-12 bg-[#283618] border border-[#A1BC98]/30 rounded-full z-20 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-[#DE802B] mx-1" />
              <div className="w-2 h-2 rounded-full bg-[#DE802B] mx-1" />
            </div>

            <div className="bg-[#1a2310] border-2 border-dashed border-[#A1BC98]/30 p-8 md:p-12 relative pt-16">
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-center py-20 flex flex-col items-center"
                  >
                    <div className="w-24 h-24 rounded-full border-4 border-[#DE802B] flex items-center justify-center mb-6 animate-bounce">
                      <span className="text-4xl">📬</span>
                    </div>
                    <h3 className="text-4xl font-rubyring text-[#A1BC98] mb-4">
                      Message Received
                    </h3>
                    <p className="font-orange text-[#A1BC98]/60 max-w-xs mx-auto">
                      Our pigeons are flying as fast as they can. We'll reply
                      shortly.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="group">
                        <label className="block text-[#A1BC98]/40 text-xs uppercase tracking-widest mb-2 group-focus-within:text-[#DE802B] transition-colors">
                          Who are you?
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Name"
                          className="w-full bg-transparent border-b border-[#A1BC98]/20 py-2 text-xl font-briqusion text-[#A1BC98] placeholder-[#A1BC98]/10 focus:outline-none focus:border-[#DE802B] transition-colors"
                        />
                      </div>
                      <div className="group">
                        <label className="block text-[#A1BC98]/40 text-xs uppercase tracking-widest mb-2 group-focus-within:text-[#DE802B] transition-colors">
                          Where do we reply?
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Email"
                          className="w-full bg-transparent border-b border-[#A1BC98]/20 py-2 text-xl font-briqusion text-[#A1BC98] placeholder-[#A1BC98]/10 focus:outline-none focus:border-[#DE802B] transition-colors"
                        />
                      </div>
                    </div>

                    <div className="group">
                      <label className="block text-[#A1BC98]/40 text-xs uppercase tracking-widest mb-2 group-focus-within:text-[#DE802B] transition-colors">
                        Topic
                      </label>
                      <input
                        type="text"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Reservation? Feedback? Love letter?"
                        className="w-full bg-transparent border-b border-[#A1BC98]/20 py-2 text-xl font-briqusion text-[#A1BC98] placeholder-[#A1BC98]/10 focus:outline-none focus:border-[#DE802B] transition-colors"
                      />
                    </div>

                    <div className="group">
                      <label className="block text-[#A1BC98]/40 text-xs uppercase tracking-widest mb-2 group-focus-within:text-[#DE802B] transition-colors">
                        The Details
                      </label>
                      <textarea
                        name="message"
                        rows="5"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us everything..."
                        className="w-full bg-transparent border-b border-[#A1BC98]/20 py-2 text-xl font-briqusion text-[#A1BC98] placeholder-[#A1BC98]/10 focus:outline-none focus:border-[#DE802B] transition-colors resize-none"
                      />
                    </div>

                    <div className="pt-4 text-right">
                      {/* CSS Hover Button */}
                      <button
                        type="submit"
                        className="inline-block bg-[#DE802B] text-[#1a2310] px-10 py-4 font-rubyring text-2xl uppercase hover:bg-white hover:text-[#DE802B] transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-[4px_4px_0px_0px_rgba(161,188,152,0.2)]"
                      >
                        Send It →
                      </button>
                    </div>
                  </form>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* RIGHT: SCATTERED CARDS - CSS Transitions */}
          <div className="flex flex-col gap-8 relative mt-8 lg:mt-0">
            {/* Card 1: Location (Rotated Left) */}
            <div className="bg-[#283618] p-8 border border-[#A1BC98]/20 -rotate-2 relative group hover:rotate-0 hover:scale-[1.02] transition-all duration-300">
              <div className="absolute top-0 right-0 w-12 h-12 bg-[#DE802B] flex items-center justify-center text-[#1a2310] font-bold text-xl group-hover:scale-110 transition-transform">
                📍
              </div>
              <h3 className="font-rooster text-[#9CC6DB] text-3xl mb-2">
                The Spot
              </h3>
              <p className="font-orange text-[#A1BC98]/80 text-lg">
                123 Pizza Street
                <br />
                Flavor Town, NY 10012
              </p>
              <div className="mt-4 pt-4 border-t border-[#A1BC98]/10">
                <a
                  href="#"
                  className="text-[#DE802B] text-sm uppercase tracking-widest hover:underline"
                >
                  Get Directions
                </a>
              </div>
            </div>

            {/* Card 2: Contact (Rotated Right) */}
            <div className="bg-[#A1BC98]/10 p-8 border border-[#A1BC98]/20 rotate-1 relative group backdrop-blur-sm hover:rotate-0 hover:scale-[1.02] transition-all duration-300">
              <div className="absolute top-0 right-0 w-12 h-12 bg-[#9CC6DB] flex items-center justify-center text-[#1a2310] font-bold text-xl group-hover:scale-110 transition-transform">
                📞
              </div>
              <h3 className="font-rooster text-[#DE802B] text-3xl mb-2">
                The Line
              </h3>
              <p className="font-orange text-[#A1BC98]/80 text-lg">
                (555) 123-4567
                <br />
                info@onnipizza.com
              </p>
              <div className="mt-4 pt-4 border-t border-[#A1BC98]/10">
                <p className="text-[#A1BC98]/50 text-sm uppercase tracking-widest">
                  Mon-Sun: 11AM - 11PM
                </p>
              </div>
            </div>

            {/* Card 3: Social Stamps */}
            <div className="mt-8">
              <h3 className="font-rubyring text-[#A1BC98] text-2xl mb-6 text-center lg:text-left">
                Stalk Us
              </h3>
              <div className="flex justify-center lg:justify-start gap-6">
                {["IG", "FB", "X"].map((social, i) => (
                  <a
                    key={social}
                    href="#"
                    className={`w-20 h-24 bg-[#DE802B] text-[#1a2310] flex flex-col items-center justify-center shadow-lg relative overflow-hidden group border-4 border-[#283618] border-dashed transition-transform duration-300 hover:-translate-y-2 ${
                      i % 2 === 0 ? "hover:rotate-6" : "hover:-rotate-6"
                    }`}
                  >
                    <span className="font-rubyring text-3xl z-10">
                      {social}
                    </span>
                    <span className="text-[0.6rem] font-mono uppercase opacity-60 mt-2">
                      Postage Paid
                    </span>
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
