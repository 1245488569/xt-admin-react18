import { defineConfig, loadEnv } from 'vite'

import alias from './vite/alias'
import setupVitePlugins from './vite/plugins'

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd())

  return {
    plugins: setupVitePlugins(env, command === 'build'),
    resolve: {
      alias,
    },
    base: './',
    server: {
      port: 8088,
    },
  }
})
