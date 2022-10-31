import type { ReactNode } from 'react'
import { Pokemon } from '../typings'
import Image from 'next/image'
import { cva, VariantProps } from 'class-variance-authority'

interface Props extends Pokemon, VariantProps<typeof cardStyles> {
  spritesImage: string
  pokeType: string[]
}

export const cardStyles = cva('flex p-5 rounded-lg', {
  variants: {
    intent: {
      grass: 'bg-[#3A6F46]',
      fire: 'bg-[#8A464B]',
      poison: 'bg-[#3C6392]',
      normal: 'bg-[#595F66]',
      electric: 'bg-[#837B34]',
      ground: 'bg-[#78533F]',
      fairy: 'bg-[#845C88]',
      bug: 'bg-[#5B712D]',
      water: 'bg-[#3C6392]',
      physic: 'bg-[#883C59]',
      fighting: 'bg-[#938E82]',
      rock: 'bg-[#73715B]',
      flying: 'bg-[#C7B993]',
      ghost: 'bg-[#484A7F]',
    },
  },
  defaultVariants: {
    intent: 'normal',
  },
})

const PokemonDetailCard = ({
  id,
  name,
  height,
  weight,
  spritesImage,
  pokeType,
  intent,
}: Props) => {
  return (
    <div className={cardStyles({ intent })}>
      <div className="mx-auto">
        <h1 className="text-3xl font-bold text-white">
          {name[0].toUpperCase() + name.substring(1)}
        </h1>
        <h2 className="text-xl text-white">#{id}</h2>
        <Image src={spritesImage} alt={name} width="300" height="300" />
        <li className="bg-white/50 grid grid-cols-3 p-3 gap-4 rounded-lg justify-items-center">
          <ul>
            <p>
              {pokeType.map((type, index) => {
                return (
                  <span key={index} className="mr-2 font-medium">
                    {type[0].toUpperCase() + type.substring(1)}
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
