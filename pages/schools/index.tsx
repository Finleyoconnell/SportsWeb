import React from "react"
import { GetStaticProps } from "next"
import Layout from "../../components/Layout"
import prisma from '../../lib/prisma';
import SchoolCard from "../../components/SchoolCard";
import CardContainer from "../../components/CardContainer";


export const getStaticProps: GetStaticProps = async () => {
  const schools = await prisma.school.findMany()



  return {
    props: {schools},
    revalidate: 10,
  };
};


const Schools: React.FC<any> = ({schools}) => {
  return (
    <Layout>
      <div className="page">
        <h1>Schools</h1>
        <main>
          <CardContainer>
            {schools.map((school) => (
              <SchoolCard key={school.id} name={school.name} primaryColor={school.primaryColor}/>
            ))}
          </CardContainer>
        </main>
      </div>
    </Layout>
  )
}

export default Schools
