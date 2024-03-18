// vite.config.ts
import { defineConfig } from "file:///home/user/credit-card-payment/node_modules/.pnpm/vite@5.1.6/node_modules/vite/dist/node/index.js";
import { ViteImageOptimizer } from "file:///home/user/credit-card-payment/node_modules/.pnpm/vite-plugin-image-optimizer@1.1.7_vite@5.1.6/node_modules/vite-plugin-image-optimizer/dist/index.mjs";
import react from "file:///home/user/credit-card-payment/node_modules/.pnpm/@vitejs+plugin-react@4.2.1_vite@5.1.6/node_modules/@vitejs/plugin-react/dist/index.mjs";
import tsconfigPaths from "file:///home/user/credit-card-payment/node_modules/.pnpm/vite-tsconfig-paths@4.3.2_typescript@5.4.2_vite@5.1.6/node_modules/vite-tsconfig-paths/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    ViteImageOptimizer({
      png: {
        // https://sharp.pixelplumbing.com/api-output#png
        quality: 100
      },
      jpeg: {
        // https://sharp.pixelplumbing.com/api-output#jpeg
        quality: 100
      },
      jpg: {
        // https://sharp.pixelplumbing.com/api-output#jpeg
        quality: 100
      }
    })
  ],
  test: {
    coverage: {
      reporter: ["text", "json", "html"]
    },
    globals: true,
    environment: "jsdom",
    setupFiles: "./vitest.setup.mjs",
    exclude: ["**/*.story.*", "**/node_modules/**"]
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS91c2VyL2NyZWRpdC1jYXJkLXBheW1lbnRcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9ob21lL3VzZXIvY3JlZGl0LWNhcmQtcGF5bWVudC92aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vaG9tZS91c2VyL2NyZWRpdC1jYXJkLXBheW1lbnQvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcbmltcG9ydCB7IFZpdGVJbWFnZU9wdGltaXplciB9IGZyb20gJ3ZpdGUtcGx1Z2luLWltYWdlLW9wdGltaXplcic7XG5pbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3QnO1xuaW1wb3J0IHRzY29uZmlnUGF0aHMgZnJvbSAndml0ZS10c2NvbmZpZy1wYXRocyc7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtcbiAgICByZWFjdCgpLFxuICAgIHRzY29uZmlnUGF0aHMoKSxcbiAgICBWaXRlSW1hZ2VPcHRpbWl6ZXIoe1xuICAgICAgcG5nOiB7XG4gICAgICAgIC8vIGh0dHBzOi8vc2hhcnAucGl4ZWxwbHVtYmluZy5jb20vYXBpLW91dHB1dCNwbmdcbiAgICAgICAgcXVhbGl0eTogMTAwLFxuICAgICAgfSxcbiAgICAgIGpwZWc6IHtcbiAgICAgICAgLy8gaHR0cHM6Ly9zaGFycC5waXhlbHBsdW1iaW5nLmNvbS9hcGktb3V0cHV0I2pwZWdcbiAgICAgICAgcXVhbGl0eTogMTAwLFxuICAgICAgfSxcbiAgICAgIGpwZzoge1xuICAgICAgICAvLyBodHRwczovL3NoYXJwLnBpeGVscGx1bWJpbmcuY29tL2FwaS1vdXRwdXQjanBlZ1xuICAgICAgICBxdWFsaXR5OiAxMDAsXG4gICAgICB9LFxuICAgIH0pLFxuICBdLFxuICB0ZXN0OiB7XG4gICAgY292ZXJhZ2U6IHtcbiAgICAgIHJlcG9ydGVyOiBbJ3RleHQnLCAnanNvbicsICdodG1sJ10sXG4gICAgfSxcbiAgICBnbG9iYWxzOiB0cnVlLFxuICAgIGVudmlyb25tZW50OiAnanNkb20nLFxuICAgIHNldHVwRmlsZXM6ICcuL3ZpdGVzdC5zZXR1cC5tanMnLFxuICAgIGV4Y2x1ZGU6IFsnKiovKi5zdG9yeS4qJywgJyoqL25vZGVfbW9kdWxlcy8qKiddLFxuICB9LFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQTRRLFNBQVMsb0JBQW9CO0FBQ3pTLFNBQVMsMEJBQTBCO0FBQ25DLE9BQU8sV0FBVztBQUNsQixPQUFPLG1CQUFtQjtBQUUxQixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxNQUFNO0FBQUEsSUFDTixjQUFjO0FBQUEsSUFDZCxtQkFBbUI7QUFBQSxNQUNqQixLQUFLO0FBQUE7QUFBQSxRQUVILFNBQVM7QUFBQSxNQUNYO0FBQUEsTUFDQSxNQUFNO0FBQUE7QUFBQSxRQUVKLFNBQVM7QUFBQSxNQUNYO0FBQUEsTUFDQSxLQUFLO0FBQUE7QUFBQSxRQUVILFNBQVM7QUFBQSxNQUNYO0FBQUEsSUFDRixDQUFDO0FBQUEsRUFDSDtBQUFBLEVBQ0EsTUFBTTtBQUFBLElBQ0osVUFBVTtBQUFBLE1BQ1IsVUFBVSxDQUFDLFFBQVEsUUFBUSxNQUFNO0FBQUEsSUFDbkM7QUFBQSxJQUNBLFNBQVM7QUFBQSxJQUNULGFBQWE7QUFBQSxJQUNiLFlBQVk7QUFBQSxJQUNaLFNBQVMsQ0FBQyxnQkFBZ0Isb0JBQW9CO0FBQUEsRUFDaEQ7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
