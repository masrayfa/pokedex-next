import type { NextPage, GetStaticProps, InferGetStaticPropsType } from 'next'
import Header from '../components/Header'
import Layout from '../components/Layout'
import PokemonCard from '../components/PokemonCard'
import { PokemonDetailProps } from '../typings'

interface PokeProps {
  name: string
  id: number
}

const Home: NextPage<PokeProps[]> = ({
  arrayOfPokemons,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  console.log('array of pokemons', arrayOfPokemons)
  return (
    <Layout className="md:grid md:grid-cols-3 gap-3 space-y-3 p-7">
      {arrayOfPokemons.map((poke: any, index: number) => {
        return (
          <div key={index}>
            <PokemonCard
              id={index + 1}
              name={poke.name}
              sprites={poke.sprites.other['official-artwork'].front_default}
              types={poke.types}
            />
          </div>
        )
      })}
    </Layout>
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

  for (let i: number = 1; i <= 20; i++) {
    let data = await getPokeApi(i)
    arrayOfPokemons.push(data)
  }
  return {
    props: {
      arrayOfPokemons,
    },
  }
}
