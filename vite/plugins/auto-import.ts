import AutoImport from 'unplugin-auto-import/vite'
import AntdResolver from 'unplugin-auto-import-antd'

export default function setupAutoImport() {
  return AutoImport({
    resolvers: [AntdResolver()],
    imports: ['react', 'react-router-dom'],
    dirs: ['src/components/**'],
    dts: 'types/auto-imports.d.ts',
  })
}
