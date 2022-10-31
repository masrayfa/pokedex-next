import type { NextPage, GetStaticProps, InferGetStaticPropsType } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Layout'
import PokemonCard from '../components/PokemonCard'

interface PokeProps {
  name: string
  id: number
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
