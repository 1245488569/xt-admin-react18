import Logo from '../logo'

const Top: React.FC = () => {
  return (
    <div className="top-nav-container h-[var(--xt-top-nav-height)] flex flex-shrink-0 items-center px-4">
      <Logo className="mr-4 text-xl" />
    </div>
  )
}

export default Top
