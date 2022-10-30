import type { ReactNode } from 'react'
import Header from './Header'

interface Props {
  children: ReactNode
  className?: string
}

const Layout: React.FC<Props> = (props) => {
  const { children, className } = props
  return (
    <div className="bg-[#1E78BC]">
      <Header title="Pokedex" />
      <main className={`${className}`}>{children}</main>
      <footer></footer>
    </div>
  )
}

export default Layout
