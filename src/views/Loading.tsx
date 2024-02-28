const Loading: React.FC = () => {
  console.log('Loading tsx')
  const { pathname } = useLocation()

  console.log('Loading tsx pathname', pathname)

  useEffect(() => {
    return () => {
      console.log('Loading tsx unmount')
    }
  }, [])
  return <div>Loading</div>
}

export default Loading
