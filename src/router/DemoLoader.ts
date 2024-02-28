import { useUserStore } from '@/stores/user'
import { useSysConfigStore } from '@/stores/config'
import { permissionApi } from '@/api/test'

export default async function DemoLoader() {
  let permissions: string[] = []
  if (useUserStore.getState().token && useSysConfigStore.getState().app.enablePermission) {
    permissions = await permissionApi()

    console.log('res', permissions)
  }

  return permissions
}
