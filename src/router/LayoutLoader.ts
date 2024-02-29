import { useUserStore } from '@/stores/user'
import { useSysConfigStore } from '@/stores/config'
import { permissionApi } from '@/api/test'

// import { rootRoutes } from '@/router'

export default async function LayoutLoader() {
  let permissions: string[] = []
  const menus: any = []
  if (useUserStore.getState().token && useSysConfigStore.getState().app.enablePermission) {
    permissions = await permissionApi()

    console.log('res', permissions)
  }
  else if (!useUserStore.getState().token) {
    // ...
  }

  return {
    permissions,
    menus,
  }
}
