import react from '@vitejs/plugin-react'
import UnoCSS from 'unocss/vite'
import type { PluginOption } from 'vite'
import setupMock from './mock'
import setupAutoImport from './auto-import'

export default function setupVitePlugins(viteEnv: Record<string, string>, isBuild: boolean) {
  const { VITE_USE_MOCK, VITE_BUILD_COMPRESS } = viteEnv
  console.log('VITE_USE_MOCK', VITE_USE_MOCK, VITE_BUILD_COMPRESS, isBuild)

  const plugins: PluginOption[] = [react(), UnoCSS()]
  plugins.push(setupAutoImport())

  VITE_USE_MOCK === 'true' && plugins.push(setupMock(isBuild))
  return plugins
}
