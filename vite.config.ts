import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  envDir: "./src/environments",
  envPrefix: "AFX",
  plugins: [react()],
});
