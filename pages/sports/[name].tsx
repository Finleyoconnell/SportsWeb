import React from "react"
import { GetStaticProps } from "next"
import Layout from "../../components/Layout"
import prisma from '../../lib/prisma';
import GameCard from "../../components/GameCard";
import { useRouter } from "next/router";


export async function getStaticPaths(){
  const sports = await prisma.sport.findMany()
  const paths = sports.map((sport) => ({
    params:{
      name: sport.name
    }
  }))
  return{
    paths, fallback: false
  }
}


export const getStaticProps: GetStaticProps = async (context) => {
  const sport = context.params.name
  const games = await prisma.game.findMany({
    include: {
      teams: {
        select: { name: true}, 
      },
    },
    where:{
        sport:{
            name:sport.toString()
        },
    },
  })
  const formattedGames = games.map((game) => {
    // @ts-expect-error
      game.date = game.date.toString();
    return game
  });
  return {
    props: { games: formattedGames },
    revalidate: 10,
  };
};


const GamesForSport: React.FC<any> = (props) => {
  const router = useRouter()
  const sport = router.query.name
  return (
    <Layout>
      <div className="page">
        <h1>{`Upcoming ${sport} Games`}</h1>
        <main>
          {props.games.map((game) => (
            <GameCard key={game.id} team1={game.teams[0].name} team2={game.teams[1].name}/>
          ))}
        </main>
      </div>
      <style jsx>{`
        .game {
          background: white;
          transition: box-shadow 0.1s ease-in;
        }

        .game:hover {
          box-shadow: 1px 1px 3px #aaa;
        }

        .game + .game {
          margin-top: 2rem;
        }
      `}</style>
    </Layout>
  )
}

export default GamesForSport
