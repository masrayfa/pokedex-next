import Head from 'next/head'
import type { ReactNode } from 'react'
import Header from './Header'
import PokemonCard from './PokemonCard'

interface Props {
  children: ReactNode
  className: string
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
