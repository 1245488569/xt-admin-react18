import type { RouteObject } from 'react-router-dom'
import useSystemRouter from '@/hooks/useSystemRouter'
import { usePermissionrStore } from '@/stores/permission'
import { useUserStore } from '@/stores/user'

export default async function DemoLoader() {
  console.log('DemoLoader------------------')
  let routes: RouteObject[] = []
  if (useUserStore.getState().token) {
    console.log('DemoLoader+++++++++++')
    const { filterPermissionsRoutes } = useSystemRouter()
    routes = await filterPermissionsRoutes()
    console.log('filterPermissionsRoutes res', routes)
    usePermissionrStore.setState({ routes })
  }

  return {

  }
}
