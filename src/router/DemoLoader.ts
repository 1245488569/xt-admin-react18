import useSystemRouter from '@/hooks/useSystemRouter'

export default async function DemoLoader() {
  console.log('DemoLoader------------------')
  const { filterPermissionsRoutes } = useSystemRouter()
  const res = await filterPermissionsRoutes()
  console.log('filterPermissionsRoutes res', res)

  return {}
}
