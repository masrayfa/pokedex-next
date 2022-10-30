import React from 'react'
import { PokemonCardProps } from '../typings'
import Image from 'next/image'

const PokemonCard = ({ id, name, sprites, types }: PokemonCardProps) => {
  return (
    <div className="bg-blue-300 rounded-lg mx-auto pl-5">
      <div className="mx-auto py-5 grid grid-cols-2">
        <div className="space-y-3">
          <h3 className="font-bold">{name}</h3>
          <span>{types}</span>
          <div className="py-1 w-10 bg-white/50 rounded-xl text-center">
            <p>#{id}</p>
          </div>
        </div>
        <Image src={sprites} alt="img.." height={150} width={150} />
      </div>
    </div>
  )
}

export default PokemonCard
