import { defineConfig } from 'vite';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [react(), tsconfigPaths(), ViteImageOptimizer({
    svg: {
      multipass: true,
      plugins: [
        {
          name: 'preset-default',
          params: {
            overrides: {
              cleanupNumericValues: false,
              removeViewBox: false, // https://github.com/svg/svgo/issues/1128
            },
            cleanupIDs: {
              minify: false,
              remove: false,
            },
            convertPathData: false,
          },
        },
        'sortAttrs',
        {
          name: 'addAttributesToSVGElement',
          params: {
            attributes: [{ xmlns: 'http://www.w3.org/2000/svg' }],
          },
        },
      ],
    },
    png: {
      // https://sharp.pixelplumbing.com/api-output#png
      quality: 100,
    },
    jpeg: {
      // https://sharp.pixelplumbing.com/api-output#jpeg
      quality: 100,
    },
    jpg: {
      // https://sharp.pixelplumbing.com/api-output#jpeg
      quality: 100,
    },
  })],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './vitest.setup.mjs',
  },
});