import React from "react"
import { GetStaticProps } from "next"
import Layout from "../components/Layout"
import prisma from '../lib/prisma';
import { useRouter } from "next/router";
import { getRouteMatcher } from "next/dist/shared/lib/router/utils";


// export const getStaticProps: GetStaticProps = async () => {
//   const games = await prisma.game.findMany({
//     include: {
//       teams: {
//         select: { name: true}, 
//       },
//     },
//   })
//   const formattedGames = games.map((game) => {
//       game.date = game.date.toString();
//     return game
//   });
//   return {
//     props: { games: formattedGames },
//     revalidate: 10,
//   };
// };


const Home: React.FC<any> = () => {
    const router = useRouter()
  return (
    <Layout>
      <div className="page">
        <h1>Home</h1>
        <main>
            <button onClick={()=>router.push("/games")}>Go to Games</button>
            <button onClick={()=>router.push("/schools")}>Go to Schools</button>
        </main>
      </div>
    </Layout>
  )
}

export default Home
