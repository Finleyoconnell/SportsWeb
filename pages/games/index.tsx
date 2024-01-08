import React from "react"
import { GetStaticProps } from "next"
import Layout from "../../components/Layout"
import Post, { PostProps } from "../../components/Post"
import prisma from '../../lib/prisma';


export const getStaticProps: GetStaticProps = async () => {
  const games = await prisma.game.findMany({
    include: {
      teams: {
        select: { name: true}, 
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


const Games: React.FC<any> = (props) => {
  console.log(props)
  return (
    <Layout>
      <div className="page">
        <h1>Games</h1>
        <main>
          {props.games.map((game) => (
            <div key={game.id} className="game">
              <span>{`${game.teams[0].name} vs ${game.teams[1].name}`}</span>
            </div>
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

export default Games
