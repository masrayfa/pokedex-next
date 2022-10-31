import React from 'react'
import { PokemonCardProps } from '../typings'
import Image from 'next/image'
import { cardStyles } from './PokemonDetailCard'
import { VariantProps } from 'class-variance-authority'

interface Props extends PokemonCardProps, VariantProps<typeof cardStyles> {}

const PokemonCard = ({ id, name, sprites, types, intent }: Props) => {
  return (
    <div className={cardStyles({ intent })}>
      <div className="py-5 grid grid-cols-2 text-white mx-auto">
        <div className="space-y-3">
          <h3 className="font-bold">
            {name[0].toUpperCase() + name.substring(1)}
          </h3>
          <span>{types[0].toUpperCase() + types.substring(1)}</span>
          <div className="py-1 w-10 bg-white/50 rounded-xl text-center">
            <p className="text-black">#{id}</p>
          </div>
        </div>
        <Image src={sprites} alt="img.." height={150} width={150} />
      </div>
    </div>
  )
}

export default PokemonCard
