import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    open: true,
  },
  preview: {
    port: 4173,
  },
  build: {
    outDir: "dist",
    sourcemap: false,
    target: "es2022",
    cssCodeSplit: true,
    reportCompressedSize: false,
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        manualChunks: {
          "vendor-react": ["react", "react-dom"],
          "vendor-motion": ["framer-motion"],
          "vendor-icons": ["lucide-react"],
        },
        assetFileNames: (assetInfo) => {
          const name = assetInfo.names?.[0] ?? "asset";
          if (/\.(woff2?|ttf|otf)$/i.test(name)) return "assets/fonts/[name]-[hash][extname]";
          if (/\.(png|jpe?g|webp|avif|svg|gif)$/i.test(name)) return "assets/img/[name]-[hash][extname]";
          if (/\.css$/i.test(name)) return "assets/css/[name]-[hash][extname]";
          return "assets/[name]-[hash][extname]";
        },
      },
    },
  },
});