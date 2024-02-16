import React from "react"
import { GetStaticProps } from "next"
import Layout from "../../components/Layout"
import prisma from '../../lib/prisma';
import SchoolCard from "../../components/SchoolCard";
import CardContainer from "../../components/CardContainer";
import SportCard from "../../components/SportCard";


export const getStaticProps: GetStaticProps = async () => {
  const sports = await prisma.sport.findMany()



  return {
    props: {sports},
    revalidate: 10,
  };
};


const Sports: React.FC<any> = ({sports, favoriteSports}) => {
  return (
    <Layout>
      <div className="page">
        <h1>Sports</h1>
        <main>
          <CardContainer>
            {sports.map((sport) => (
              <SportCard key={sport.id} name={sport.name} id={sport.id}/>
            ))}
          </CardContainer>
        </main>
      </div>
    </Layout>
  )
}

export default Sports
