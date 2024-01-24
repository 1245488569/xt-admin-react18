import { vitePluginFakeServer } from 'vite-plugin-fake-server'

export default function setupMock(isBuild: boolean) {
  return vitePluginFakeServer({
    logger: !isBuild,
    include: 'src/mock',
    infixName: false,
    enableProd: isBuild,
  })
}
