import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

const menuCategories = [
  "All",
  "Classic",
  "Specialty",
  "Vegetarian",
  "Desserts",
];

// Static data moved outside to prevent re-creation on render
const menuItems = [
  {
    id: 1,
    name: "Margherita",
    category: "Classic",
    price: 12.99,
    description: "Classic tomato sauce, fresh mozzarella, and basil",
    ingredients: ["Tomato", "Mozzarella", "Basil"],
    tag: "The Original",
  },
  {
    id: 2,
    name: "Pepperoni",
    category: "Classic",
    price: 14.99,
    description: "Spicy pepperoni with mozzarella cheese",
    ingredients: ["Pepperoni", "Mozzarella", "Tomato Sauce"],
    tag: null,
  },
  {
    id: 3,
    name: "Quattro Formaggi",
    category: "Specialty",
    price: 16.99,
    description:
      "Four cheese blend: mozzarella, gorgonzola, parmesan, and fontina",
    ingredients: ["Mozzarella", "Gorgonzola", "Parmesan", "Fontina"],
    tag: "Cheesy",
  },
  {
    id: 4,
    name: "Hawaiian",
    category: "Specialty",
    price: 15.99,
    description: "Ham, pineapple, and mozzarella",
    ingredients: ["Ham", "Pineapple", "Mozzarella"],
    tag: "Controversial",
  },
  {
    id: 5,
    name: "BBQ Chicken",
    category: "Specialty",
    price: 17.99,
    description: "Grilled chicken, BBQ sauce, red onions, and mozzarella",
    ingredients: ["Chicken", "BBQ Sauce", "Red Onions", "Mozzarella"],
    tag: null,
  },
  {
    id: 6,
    name: "Vegetarian Delight",
    category: "Vegetarian",
    price: 14.99,
    description: "Bell peppers, mushrooms, olives, and fresh herbs",
    ingredients: ["Bell Peppers", "Mushrooms", "Olives", "Herbs"],
    tag: "Fresh",
  },
  {
    id: 7,
    name: "Mediterranean",
    category: "Vegetarian",
    price: 15.99,
    description: "Artichokes, sun-dried tomatoes, feta, and olives",
    ingredients: ["Artichokes", "Sun-dried Tomatoes", "Feta", "Olives"],
    tag: null,
  },
  {
    id: 8,
    name: "Truffle Mushroom",
    category: "Specialty",
    price: 19.99,
    description: "Truffle oil, mixed mushrooms, and parmesan",
    ingredients: ["Truffle Oil", "Mixed Mushrooms", "Parmesan"],
    tag: "Best Seller",
  },
  {
    id: 9,
    name: "Meat Lovers",
    category: "Specialty",
    price: 18.99,
    description: "Pepperoni, sausage, ham, and bacon",
    ingredients: ["Pepperoni", "Sausage", "Ham", "Bacon"],
    tag: "Hearty",
  },
  {
    id: 10,
    name: "Tiramisu",
    category: "Desserts",
    price: 8.99,
    description: "Classic Italian dessert with coffee and mascarpone",
    ingredients: ["Coffee", "Mascarpone", "Cocoa"],
    tag: "Sweet",
  },
  {
    id: 11,
    name: "Cannoli",
    category: "Desserts",
    price: 7.99,
    description: "Crispy shell filled with sweet ricotta",
    ingredients: ["Ricotta", "Chocolate Chips"],
    tag: null,
  },
  {
    id: 12,
    name: "Gelato",
    category: "Desserts",
    price: 6.99,
    description: "Authentic Italian ice cream",
    ingredients: ["Vanilla", "Chocolate", "Strawberry"],
    tag: null,
  },
];

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Memoize filtered items to prevent recalculation on every render
  const filteredItems = useMemo(() => {
    return selectedCategory === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="bg-[#1a2310] min-h-screen pt-20">
      {/* HERO SECTION */}
      <section className="relative py-32 bg-gradient-to-b from-[#283618] to-[#1a2310] overflow-hidden">
        {/* Static Background Text (No Animation) */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full text-center opacity-5 pointer-events-none select-none">
          <h1 className="text-[12rem] md:text-[20rem] font-rubyring text-[#A1BC98] leading-none">
            GUSTO
          </h1>
        </div>

        <div className="max-w-6xl mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-block border-2 border-[#DE802B] px-6 py-2 rounded-full mb-6 rotate-[-3deg]">
              <span className="text-[#DE802B] font-bold tracking-widest uppercase">
                Est. 2024
              </span>
            </div>
            <h1 className="text-7xl md:text-8xl font-rubyring text-[#A1BC98] mb-4">
              The Menu
            </h1>
            <p className="text-xl font-orange text-[#A1BC98]/70 max-w-xl mx-auto">
              Curated for the hungry, the curious, and the bold.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FILTER SECTION */}
      <section className="pb-10 bg-[#1a2310] sticky top-20 z-40 backdrop-blur-md bg-[#1a2310]/95 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 overflow-x-auto no-scrollbar pt-4">
          <div className="flex md:justify-center gap-4 min-w-max px-4">
            {menuCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`relative px-6 py-3 rounded-xl border-2 transition-all duration-200 font-bold tracking-wide uppercase ${
                  selectedCategory === category
                    ? "bg-[#A1BC98] border-[#A1BC98] text-[#1a2310] -translate-y-1 shadow-[4px_4px_0px_0px_#DE802B]"
                    : "border-[#A1BC98]/30 text-[#A1BC98]/60 hover:border-[#A1BC98] hover:text-[#A1BC98]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ITEMS GRID */}
      <section className="pb-32 px-4 max-w-7xl mx-auto pt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          <AnimatePresence mode="wait">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }} // Fast transition
                className="group relative flex flex-col h-full transform transition-transform duration-300 hover:-translate-y-2 hover:rotate-1"
              >
                {/* THE CARD */}
                <div className="relative h-full bg-[#1a2310] border border-[#A1BC98]/20 p-8 rounded-2xl overflow-hidden shadow-2xl transition-colors duration-300 group-hover:border-[#9CC6DB]/50">
                  {/* Tag */}
                  {item.tag && (
                    <div className="absolute top-0 left-0 bg-[#DE802B] text-[#1a2310] text-xs font-bold uppercase px-4 py-1 rounded-br-xl z-20 shadow-md">
                      {item.tag}
                    </div>
                  )}

                  {/* Price Circle - CSS Hover */}
                  <div className="absolute -right-4 -top-4 w-20 h-20 bg-[#283618] rounded-full border border-[#A1BC98]/30 flex items-center justify-center z-10 transition-all duration-300 group-hover:bg-[#9CC6DB] group-hover:text-[#1a2310] group-hover:scale-110">
                    <span className="font-rubyring text-xl group-hover:font-bold">
                      ${Math.floor(item.price)}
                      <sup className="text-xs">
                        {item.price.toString().split(".")[1]}
                      </sup>
                    </span>
                  </div>

                  {/* Content */}
                  <div className="mt-4 mb-auto">
                    <h3 className="text-4xl font-rubyring text-[#A1BC98] leading-none mb-4 group-hover:text-white transition-colors">
                      {item.name}
                    </h3>
                    <p className="font-orange text-[#A1BC98]/60 text-lg leading-relaxed mb-6">
                      {item.description}
                    </p>

                    {/* Ingredients */}
                    <div className="flex flex-wrap gap-2">
                      {item.ingredients.map((ing, i) => (
                        <span
                          key={i}
                          className="text-[10px] uppercase tracking-wider border border-[#A1BC98]/20 text-[#A1BC98]/50 px-2 py-1 rounded-md"
                        >
                          {ing}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Hover Action */}
                  <div className="mt-8 pt-6 border-t border-dashed border-[#A1BC98]/20 flex justify-between items-center opacity-60 group-hover:opacity-100 transition-opacity">
                    <span className="font-rooster text-[#DE802B] text-xl -rotate-2">
                      Chef's Choice
                    </span>
                    <button
                      className="bg-[#A1BC98] text-[#1a2310] w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#DE802B] hover:text-white transition-colors"
                      aria-label="Add to cart"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 4.5v15m7.5-7.5h-15"
                        />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Decorative Shadow Box */}
                <div className="absolute inset-0 bg-[#A1BC98]/5 rounded-2xl transform translate-x-2 translate-y-2 -z-10 transition-transform duration-300 group-hover:translate-x-3 group-hover:translate-y-3" />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* CTA FOOTER */}
      <section className="py-20 bg-[#DE802B]">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-6xl md:text-8xl font-rubyring text-[#283618] mb-8 leading-[0.8]">
            HUNGRY YET?
          </h2>
          <button className="bg-[#283618] text-[#DE802B] text-xl font-bold uppercase tracking-widest px-10 py-4 rounded-full transition-all duration-200 hover:scale-105 hover:bg-white hover:text-[#DE802B] shadow-xl">
            Start Your Order
          </button>
        </div>
      </section>
    </div>
  );
};

export default Menu;
