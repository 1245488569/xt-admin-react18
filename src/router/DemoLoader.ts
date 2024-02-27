import useSystemRouter from '@/hooks/useSystemRouter'
import { useUserStore } from '@/stores/user'

export default async function DemoLoader() {
  if (useUserStore.getState().token) {
    console.log('DemoLoader------------------')
    const { filterPermissionsRoutes } = useSystemRouter()
    const res = await filterPermissionsRoutes()
    console.log('filterPermissionsRoutes res', res)
  }

  return {}
}
