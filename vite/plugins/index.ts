import react from '@vitejs/plugin-react'
import UnoCSS from 'unocss/vite'
import type { PluginOption } from 'vite'
import setupMock from './mock'
import setupAutoImport from './auto-import'
import setupSvgIcon from './svg-icon'
import setupIcons from './icon'
import setupCompression from './compression'

export default function setupVitePlugins(viteEnv: Record<string, string>, isBuild: boolean) {
  const { VITE_USE_MOCK, VITE_BUILD_COMPRESS } = viteEnv

  const plugins: PluginOption[] = [react(), UnoCSS()]
  plugins.push(setupAutoImport())
  plugins.push(setupIcons())
  plugins.push(setupSvgIcon(isBuild))
  if (isBuild) {
    const compressList = VITE_BUILD_COMPRESS.split(',')
    if (compressList.includes('gzip') || compressList.includes('brotli'))
      plugins.push(...setupCompression(viteEnv))
  }
  VITE_USE_MOCK === 'true' && plugins.push(setupMock(isBuild))
  return plugins
}
