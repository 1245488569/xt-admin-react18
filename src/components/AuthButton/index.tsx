import { useRouteLoaderData } from 'react-router-dom'
import type { ILayoutLoader } from '@/types/common'

type ButtonProps = {
  auth?: string | string[]
} & React.ComponentProps<typeof Button>

export default function AuthButton(props: ButtonProps) {
  const { permissions } = useRouteLoaderData('layout') as ILayoutLoader || {}
  if (!props.auth || (typeof props.auth === 'string' && permissions.includes(props.auth)) || (Array.isArray(props.auth) && !props.auth.some(v => permissions.includes(v))))
    return <Button {...props}>{props.children}</Button>
  return <></>
}
