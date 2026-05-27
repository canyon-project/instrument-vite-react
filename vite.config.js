import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import istanbulPlugin from "vite-plugin-istanbul";
import canyonVitePlugin from "@canyonjs/vite-plugin";
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    istanbulPlugin({
      forceBuildInstrument: true,
    }),
    canyonVitePlugin({
      repoID: "123123",
      sha: "123123",
      provider: "github",
      ci: true,
      keepMap: true,
    }),
  ],
})
