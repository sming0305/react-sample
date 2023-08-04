import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  // 此處用來加上預設的路徑，也就是"基本路徑"
  // eslint-disable-next-line no-undef
  base: process.env.NODE_ENV === "production" ? "/react-sample/" : "/",
  plugins: [react()],
});
