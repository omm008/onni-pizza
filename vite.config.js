import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/onni-pizza/", // 👈 CHANGE THIS to your actual repo name!
});
