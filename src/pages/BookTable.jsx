import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const BookTable = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: 2, // Changed to number for math
    specialRequests: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const updateGuests = (change) => {
    setFormData((prev) => ({
      ...prev,
      guests: Math.max(1, Math.min(20, prev.guests + change)),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Simulate API call
    setTimeout(() => {
      // Reset Logic can go here if needed
    }, 5000);
  };

  return (
    <div className="bg-oregano-900 min-h-screen pt-20 relative overflow-hidden">
      {/* 1. GIANT BACKGROUND TEXT (Quirky Element) */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-full text-center opacity-5 pointer-events-none select-none">
        <h1 className="text-[15rem] md:text-[25rem] font-orange text-[#A1BC98] leading-none whitespace-nowrap">
          PRENOTA
        </h1>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-6xl md:text-7xl font-orange text-[#A1BC98] mb-4"
          >
            Secure Your Spot
          </motion.h1>
          <p className="font-orange text-[#DE802B] text-xl tracking-widest uppercase">
            Limited Seating • Infinite Flavor
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* 2. THE TICKET FORM */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 bg-[#1a2310] border-2 border-[#A1BC98]/20 p-8 md:p-12 relative"
          >
            {/* Decorative "Ticket" Notches */}
            <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-12 bg-oregano-900 rounded-r-full border-r border-[#A1BC98]/20" />
            <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-12 bg-oregano-900 rounded-l-full border-l border-[#A1BC98]/20" />

            {/* Corner Accent */}
            <div className="absolute top-0 right-0 w-0 h-0 border-t-[60px] border-t-[#DE802B] border-l-[60px] border-l-transparent opacity-80" />

            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="min-h-[400px] flex flex-col items-center justify-center text-center border-2 border-dashed border-[#A1BC98]/30 p-8"
                >
                  <motion.div
                    initial={{ scale: 2, opacity: 0, rotate: -10 }}
                    animate={{ scale: 1, opacity: 1, rotate: -5 }}
                    transition={{ type: "spring", stiffness: 200, damping: 10 }}
                    className="border-4 border-[#DE802B] text-[#DE802B] px-10 py-4 text-5xl font-orange uppercase tracking-widest mb-6 opacity-80 mix-blend-screen"
                  >
                    Confirmed
                  </motion.div>
                  <h3 className="text-3xl font-rooster text-[#A1BC98] mb-2">
                    See you soon, {formData.name.split(" ")[0]}!
                  </h3>
                  <p className="font-orange text-[#A1BC98]/60">
                    A confirmation has been sent to your email.
                  </p>

                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-8 text-sm uppercase tracking-widest text-[#A1BC98] underline decoration-dashed hover:text-white"
                  >
                    Book another table
                  </button>
                </motion.div>
              ) : (
                <form key="form" onSubmit={handleSubmit} className="space-y-12">
                  {/* Section 1: Who */}
                  <div>
                    <h3 className="text-[#DE802B] font-rooster text-2xl mb-6 flex items-center gap-2">
                      <span className="w-8 h-px bg-[#DE802B]/50"></span> 01. The
                      Guest
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="group">
                        <label className="block text-[#A1BC98]/50 text-xs uppercase tracking-widest mb-2 group-focus-within:text-[#DE802B] transition-colors">
                          Full Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          placeholder="Marco Polo"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full bg-transparent border-b border-[#A1BC98]/30 py-2 text-2xl font-briqusion text-[#A1BC98] placeholder-[#A1BC98]/20 focus:outline-none focus:border-[#DE802B] transition-colors"
                        />
                      </div>
                      <div className="group">
                        <label className="block text-[#A1BC98]/50 text-xs uppercase tracking-widest mb-2 group-focus-within:text-[#DE802B] transition-colors">
                          Contact Phone
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          placeholder="(555) 000-0000"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full bg-transparent border-b border-[#A1BC98]/30 py-2 text-2xl font-briqusion text-[#A1BC98] placeholder-[#A1BC98]/20 focus:outline-none focus:border-[#DE802B] transition-colors"
                        />
                      </div>
                      <div className="group md:col-span-2">
                        <label className="block text-[#A1BC98]/50 text-xs uppercase tracking-widest mb-2 group-focus-within:text-[#DE802B] transition-colors">
                          Email Address
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          placeholder="marco@explore.com"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full bg-transparent border-b border-[#A1BC98]/30 py-2 text-2xl font-briqusion text-[#A1BC98] placeholder-[#A1BC98]/20 focus:outline-none focus:border-[#DE802B] transition-colors"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Section 2: When & How Many (Interactive) */}
                  <div>
                    <h3 className="text-[#DE802B] font-rooster text-2xl mb-6 flex items-center gap-2">
                      <span className="w-8 h-px bg-[#DE802B]/50"></span> 02. The
                      Details
                    </h3>

                    <div className="flex flex-col md:flex-row gap-8 items-end">
                      {/* Date */}
                      <div className="flex-1 w-full">
                        <label className="block text-[#A1BC98]/50 text-xs uppercase tracking-widest mb-2">
                          Date
                        </label>
                        <input
                          type="date"
                          name="date"
                          required
                          value={formData.date}
                          onChange={handleChange}
                          className="w-full bg-[#283618]/50 border border-[#A1BC98]/20 rounded-none px-4 py-3 text-xl font-orange text-[#A1BC98] focus:outline-none focus:border-[#DE802B] uppercase"
                        />
                      </div>
                      {/* Time */}
                      <div className="flex-1 w-full">
                        <label className="block text-[#A1BC98]/50 text-xs uppercase tracking-widest mb-2">
                          Time
                        </label>
                        <input
                          type="time"
                          name="time"
                          required
                          value={formData.time}
                          onChange={handleChange}
                          className="w-full bg-[#283618]/50 border border-[#A1BC98]/20 rounded-none px-4 py-3 text-xl font-orange text-[#A1BC98] focus:outline-none focus:border-[#DE802B]"
                        />
                      </div>

                      {/* Custom Guest Counter */}
                      <div className="w-full md:w-auto">
                        <label className="block text-[#A1BC98]/50 text-xs uppercase tracking-widest mb-2 text-center md:text-left">
                          Party Size
                        </label>
                        <div className="flex items-center justify-between md:justify-start gap-4 border border-[#A1BC98]/20 bg-[#283618]/50 px-4 py-2">
                          <button
                            type="button"
                            onClick={() => updateGuests(-1)}
                            className="w-8 h-8 flex items-center justify-center text-[#DE802B] text-2xl hover:bg-[#DE802B] hover:text-[#283618] transition-colors rounded-full"
                          >
                            -
                          </button>
                          <span className="font-orange text-3xl text-[#A1BC98] w-8 text-center">
                            {formData.guests}
                          </span>
                          <button
                            type="button"
                            onClick={() => updateGuests(1)}
                            className="w-8 h-8 flex items-center justify-center text-[#DE802B] text-2xl hover:bg-[#DE802B] hover:text-[#283618] transition-colors rounded-full"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-6">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="w-full bg-[#DE802B] text-[#283618] py-5 text-2xl font-orange uppercase tracking-widest hover:bg-white transition-colors relative group"
                    >
                      <span className="relative z-10">Confirm Reservation</span>
                      {/* Hover Effect line */}
                      <div className="absolute inset-0 border-2 border-[#DE802B] translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform -z-0 pointer-events-none" />
                    </motion.button>
                  </div>
                </form>
              )}
            </AnimatePresence>
          </motion.div>

          {/* 3. INFO "CARDS" SIDEBAR */}
          <div className="lg:col-span-5 space-y-8 mt-8 lg:mt-0">
            {/* Map / Location Card */}
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="bg-[#DE802B] p-8 text-[#283618] relative transform -rotate-1 hover:rotate-0 transition-transform duration-300"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-8 bg-[#A1BC98]/20 backdrop-blur-sm transform rotate-2"></div>
              <h3 className="font-orange text-4xl mb-4">Finding Us</h3>
              <p className="font-orange text-lg leading-relaxed border-b border-[#283618]/20 pb-4 mb-4">
                123 Via Roma,
                <br />
                Little Italy District,
                <br />
                New York, NY 10013
              </p>
              <div className="flex items-center gap-4 font-bold uppercase tracking-widest text-sm">
                <span>Valet Available</span>
                <span>•</span>
                <span>No Dress Code</span>
              </div>
            </motion.div>

            {/* Hours Card */}
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="bg-[#283618] border border-[#A1BC98]/30 p-8 relative transform rotate-1 hover:rotate-0 transition-transform duration-300"
            >
              <h3 className="font-rooster text-[#9CC6DB] text-3xl mb-6">
                Opening Hours
              </h3>
              <ul className="space-y-4 font-orange text-[#A1BC98]/80">
                <li className="flex justify-between border-b border-[#A1BC98]/10 pb-2">
                  <span>Mon - Thu</span>
                  <span>5:00 PM - 10:00 PM</span>
                </li>
                <li className="flex justify-between border-b border-[#A1BC98]/10 pb-2 text-[#DE802B]">
                  <span>Fri - Sat</span>
                  <span>5:00 PM - 12:00 AM</span>
                </li>
                <li className="flex justify-between border-b border-[#A1BC98]/10 pb-2">
                  <span>Sunday</span>
                  <span>4:00 PM - 10:00 PM</span>
                </li>
              </ul>
            </motion.div>

            {/* Contact Link */}
            <div className="text-center">
              <a
                href="tel:+15550000000"
                className="text-[#A1BC98] font-orange text-2xl hover:text-[#DE802B] transition-colors underline decoration-[#DE802B]"
              >
                (555) 123-4567
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookTable;
