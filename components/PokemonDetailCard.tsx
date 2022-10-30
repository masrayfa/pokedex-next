import type { ReactNode } from 'react'
import { Pokemon } from '../typings'
import Image from 'next/image'

interface Props extends Pokemon {
  spritesImage: string
  pokeType: string[]
}

const PokemonDetailCard = ({
  id,
  name,
  height,
  weight,
  spritesImage,
  pokeType,
}: Props) => {
  return (
    <div className="p-5 bg-[#8A464B] rounded-lg flex">
      <div className="mx-auto">
        <h1 className="text-3xl font-bold text-white">{name}</h1>
        <h2 className="text-xl text-white">#{id}</h2>
        <Image src={spritesImage} alt={name} width="300" height="300" />
        <li className="bg-white/50 grid grid-cols-3 p-3 gap-4 rounded-lg">
          <ul>
            <p>
              {pokeType.map((type, index) => {
                return (
                  <span key={index} className="mr-2 font-medium">
                    {type}
                  </span>
                )
              })}
            </p>
            <p className="text-black/70 text-sm">Type</p>
          </ul>
          <ul>
            <p className="font-medium">{height} m</p>
            <p className="text-black/70 text-sm">Height</p>
          </ul>
          <ul>
            <p className="font-medium">{weight} g</p>
            <p className="text-black/70 text-sm">Weight</p>
          </ul>
        </li>
      </div>
    </div>
  )
}

export default PokemonDetailCard
