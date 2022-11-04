import type { NextPage, GetStaticProps, InferGetStaticPropsType } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Layout'
import PokemonCard from '../components/PokemonCard'
import { Pokemon } from '../typings'

interface PokeProps {
  name: string
  id: number
}

export interface PokemonDataProps {
  id: number
  name: string
  types: [
    {
      type: {
        name: string
      }
    }
  ]
  sprites: string
  stats?: [
    {
      base_stat: number
      stat: {
        name: string
      }
    }
  ]
}

const Home: NextPage<PokeProps[]> = ({
  arrayOfPokemons,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Head>
        <title>Pokedex</title>
      </Head>
      <Layout className="md:grid md:grid-cols-3 md:gap-3 p-7">
        {arrayOfPokemons.map((poke: any) => {
          return (
            <div key={poke.id} className="mb-4 md:mb-0">
              <Link href={`/pokemon/${poke.name}`}>
                <PokemonCard
                  id={poke.id}
                  name={poke.name}
                  sprites={poke.sprites.other['official-artwork'].front_default}
                  types={poke.types[0].type.name}
                  intent={poke.types[0].type.name}
                />
              </Link>
            </div>
          )
        })}
      </Layout>
    </>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async () => {
  let arrayOfPokemons = []
  const getPokeApi = async (i: number) => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
    const data = await res.json()
    return data
  }
  // const getAllPokeApi = async () => {
  //   const res = await fetch(
  //     `https://pokeapi.co/api/v2/pokemon?limit=100&offset=0`
  //   )
  //   const data = await res.json()
  //   const pokemonData: PokemonDataProps = data.results.forEach(
  //     (obj: PokemonDataProps) => {
  //       Object.entries(obj).forEach(async ([key, value]) => {
  //         console.log(value)
  //         /* const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${value.name}`) */
  //       })
  //     }
  //   )
  // }
  // getAllPokeApi()

  // const fetchPokemon = async (pokemon: string) => {
  //   const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
  //
  //   try {
  //     const res = await fetch(url)
  //     const data: PokemonDataProps = await res.json()
  //     return data
  //   } catch (e) {
  //     console.error(e)
  //   }
  // }
  //
  // const fetchListOfPokemon = async (page: number) => {
  //   const url = `https://pokeapi.co/api/v2/pokemon?limit=${page}offset=9`
  //
  //   const res = await fetch(url)
  //   const data = await res.json()
  //
  //   const promises = data.results.map(
  //     async (poke: { name: string }) => await fetchPokemon(poke.name)
  //   ).data
  //
  //   const pokemonList = Promise.all(promises)
  //   return pokemonList
  // }

  for (let i: number = 1; i <= 50; i++) {
    let data = await getPokeApi(i)
    arrayOfPokemons.push(data)
  }
  return {
    props: {
      arrayOfPokemons,
    },
  }
}
