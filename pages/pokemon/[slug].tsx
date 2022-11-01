import type { GetStaticProps, GetStaticPaths } from 'next'
/* import { ParsedUrlQuery } from 'querystring' */
import React from 'react'
import { Pokemon, PokemonProps } from '../../typings'
import Image from 'next/image'
import PokemonDetailCard from '../../components/PokemonDetailCard'
import Layout from '../../components/Layout'

// parameters not type scalable enough
// due to, not passing Pokemon typings
const pokemon = ({
  id,
  name,
  sprites,
  weight,
  height,
  type,
  colorTypes,
}: {
  id: number
  name: string
  sprites: string
  weight: number
  height: number
  type: [
    {
      name: string
    }
  ]
  colorTypes: string
}) => {
  return (
    <div className="mx-auto">
      <Layout className="md:p-20 p-16">
        <PokemonDetailCard
          colorTypes={colorTypes}
          id={id}
          name={name}
          spritesImage={sprites}
          height={height}
          weight={weight}
          pokeType={type.map((t) => {
            return t.name
          })}
        />
      </Layout>
    </div>
  )
}

export default pokemon

// interface IParams extends ParsedUrlQuery {
//   name: string
// }

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=50&offset=0`)
  const { results }: PokemonProps = await res.json()

  return {
    paths: results.map((poke) => {
      return {
        params: {
          slug: poke.name,
        },
      }
    }),
    fallback: false,
  }
}

export const getStaticProps = async ({
  params,
}: {
  params: { slug: string }
}) => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.slug}`)
  const data: Pokemon = await res.json()

  return {
    props: {
      id: data.id,
      name: data.name,
      sprites: data.sprites.other?.['official-artwork'].front_default,
      weight: data.weight,
      height: data.height,
      type: data.types.map((t) => {
        return t.type
      }),
      colorTypes: data.types[0].type.name,
    },
  }
}
