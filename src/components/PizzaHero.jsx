import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Static data outside component to prevent recreation
const pizzaFlavors = [
  {
    id: 1,
    name: "Margherita",
    description: "The Queen. Tomato, mozzarella, basil.",
    image: "images/pizzas/margherita.png",
  },
  {
    id: 2,
    name: "Pepperoni",
    description: "Spicy cups. Mozzarella, honey hot.",
    image: "images/pizzas/pepperoni.png",
  },
  {
    id: 3,
    name: "Vegetarian",
    description: "Garden patch. Peppers, olives, herbs.",
    image: "images/pizzas/vegetarian.png",
  },
  {
    id: 4,
    name: "Quattro Formaggi",
    description: "Cheese bomb. Gorgonzola, fontina, parm.",
    image: "images/pizzas/quattro-formaggi.png",
  },
  {
    id: 5,
    name: "Hawaiian",
    description: "The Controversy. Ham, pineapple.",
    image: "images/pizzas/hawaiian.png",
  },
  {
    id: 6,
    name: "BBQ Chicken",
    description: "Smoky sweet. Red onions, cilantro.",
    image: "images/pizzas/bbq-chicken.png",
  },
];

const PizzaHero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [rotation, setRotation] = useState(0);

  const selectedPizza = useMemo(
    () => pizzaFlavors[currentIndex],
    [currentIndex]
  );

  const handlePizzaChange = (index) => {
    if (index === currentIndex) return;
    setRotation((prev) => prev + 120);
    setCurrentIndex(index);
  };

  return (
    <div className="relative min-h-screen bg-[#283618] flex items-center overflow-hidden pt-20">
      {/* Static Background Text (No Animation) */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full pointer-events-none select-none overflow-hidden">
        <h1 className="text-[12rem] md:text-[20rem] font-rubyring text-[#A1BC98] opacity-5 whitespace-nowrap leading-none pl-10">
          ORIGINALE
        </h1>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full h-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center h-full">
          {/* LEFT: CONTENT */}
          <div className="lg:col-span-5 flex flex-col justify-center h-full relative z-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-block border border-[#DE802B] px-3 py-1 mb-6 -rotate-2 bg-[#1a2310]">
                <span className="font-mono text-[#DE802B] text-xs uppercase tracking-widest">
                  EST. 2024 • No Shortcuts
                </span>
              </div>

              <h1 className="text-6xl md:text-8xl font-rubyring text-[#A1BC98] mb-6 leading-[0.9]">
                <span className="block text-[#DE802B]">SLICE</span> OF HEAVEN
              </h1>

              <div className="h-20 mb-8">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={selectedPizza.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-2xl font-orange text-[#A1BC98]/80 max-w-md"
                  >
                    {selectedPizza.description}
                  </motion.p>
                </AnimatePresence>
              </div>

              {/* Optimized Selectors: Pure CSS Hover */}
              <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                {pizzaFlavors.map((pizza, index) => (
                  <button
                    key={pizza.id}
                    onClick={() => handlePizzaChange(index)}
                    className="group flex items-center gap-3 text-left"
                    aria-label={`Select ${pizza.name}`}
                  >
                    <div
                      className={`w-4 h-4 border border-[#A1BC98] flex items-center justify-center transition-colors duration-200 ${
                        index === currentIndex
                          ? "bg-[#DE802B] border-[#DE802B]"
                          : "group-hover:border-[#DE802B]"
                      }`}
                    >
                      {index === currentIndex && (
                        <div className="w-2 h-2 bg-[#1a2310]" />
                      )}
                    </div>
                    <span
                      className={`font-casko text-lg capitalize transition-colors duration-200 ${
                        index === currentIndex
                          ? "text-[#DE802B]"
                          : "text-[#A1BC98] group-hover:text-white"
                      }`}
                    >
                      {pizza.name}
                    </span>
                  </button>
                ))}
              </div>

              <div className="mt-10">
                <button className="bg-[#A1BC98] text-[#1a2310] font-rubyring text-2xl px-8 py-4 uppercase tracking-wide hover:bg-[#DE802B] hover:text-white transition-all duration-200 shadow-[6px_6px_0px_0px_rgba(0,0,0,0.3)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]">
                  Order This Piece
                </button>
              </div>
            </motion.div>
          </div>

          {/* RIGHT: SPINNING PIZZA */}
          <div className="lg:col-span-7 relative h-[30rem] md:h-[40rem] flex items-center justify-center lg:justify-end">
            {/* BACKGROUND CIRCLE (Also shifted) */}
            <div className="absolute right-0 translate-x-[50%] w-[120%] aspect-square rounded-full border border-[#A1BC98]/10 overflow-hidden bg-[#A1BC98]/5 backdrop-blur-sm z-0" />

            {/* 1. POSITIONING WRAPPER (Static - Handles the shift) */}
            {/* We move this div 50% to the right. It does NOT rotate, so the position stays stable. */}
            <div className="relative overflow-hidden w-[110%] md:w-[130%] aspect-square z-10 translate-x-[50%]">
              {/* 2. ROTATING WRAPPER (Dynamic - Handles the spin) */}
              {/* Added rounded-full and overflow-hidden to clip the white square artifacts */}
              <motion.div
                className="w-full h-full rounded-full overflow-hidden"
                animate={{ rotate: rotation }}
                transition={{ type: "tween", ease: "circOut", duration: 0.8 }}
              >
                <div className="w-full  h-full relative">
                  {/* Shadow - Kept inside rotating div so it matches the shape */}
                  <div className="absolute top-1/2 overflow-hidden left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] h-[95%] bg-black/40 blur-3xl rounded-full -z-10" />

                  {/* The Pizza Image */}
                  <AnimatePresence mode="popLayout">
                    <motion.img
                      key={selectedPizza.id}
                      src={selectedPizza.image}
                      alt={selectedPizza.name}
                      loading="eager"
                      width="800"
                      height="800"
                      initial={{ scale: 0.95, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 1.05, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 w-full h-full object-contain"
                    />
                  </AnimatePresence>
                </div>
              </motion.div>
            </div>

            {/* Static Price Tag (Outside the shifted containers to stay visible on screen) */}
            <div className="absolute top-[20%] right-[10%] z-20 w-28 h-28 bg-[#DE802B] rounded-full flex items-center justify-center text-[#1a2310] font-bold border-4 border-[#283618] border-dashed shadow-xl transform rotate-12 hover:rotate-0 transition-transform duration-300">
              <div className="text-center leading-none">
                <span className="block text-xs uppercase font-mono mb-1">
                  ONLY
                </span>
                <span className="font-briqusion text-4xl">$18</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PizzaHero;
