export function Component() {
  const navigate = useNavigate()

  useEffect(() => {
    navigate(-1)
  }, [navigate])

  return <></>
}
