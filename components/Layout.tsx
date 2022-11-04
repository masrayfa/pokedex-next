import type { ReactNode } from 'react'
import Header from './Header'

interface Props {
  children: ReactNode
  className?: string
}

const Layout: React.FC<Props> = (props) => {
  const { children, className } = props
  return (
    <div className="bg-[#19202A] ">
      <Header title="Pokedex" />
      <main className={`${className}`}>{children}</main>
      <footer></footer>
    </div>
  )
}

export default Layout
