import AutoImport from 'unplugin-auto-import/vite'
import AntdResolver from 'unplugin-antd-resolver'
import IconsResolver from 'unplugin-icons/resolver'

export default function setupAutoImport() {
  return AutoImport({
    resolvers: [AntdResolver(), IconsResolver()],
    imports: ['react', 'react-router-dom', {
      'react-i18next': ['initReactI18next', 'useTranslation'],
    }],
    dirs: ['src/components/**'],
    dts: 'types/auto-imports.d.ts',
  })
}
