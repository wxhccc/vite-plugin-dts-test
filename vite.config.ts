import { defineConfig } from "vite";
import { resolve } from "path";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";

const external = [
  "vue",
  "ant-design-vue",
  /ant-design-vue/,
  "@ant-design/icons-vue"
];

// https://vitejs.dev/config/
export default defineConfig({
  reslve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  plugins: [
    vue(),
    dts({
      rollupTypes: true,
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "AntdVueTest",
      fileName: (format) => (format === "es" ? "index.js" : "index.umd.js"),
    },
    rollupOptions: {
      external,
      output: {
        exports: "named",
      }
    },
  },
});
