import React from "react"
import { GetStaticProps } from "next"
import Layout from "../../components/Layout"
import Post, { PostProps } from "../../components/Post"
import prisma from '../../lib/prisma';
import SchoolCard from "../../components/SchoolCard";


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
          {schools.map((school) => (
            <SchoolCard id={school.id} name={school.name}/>
          ))}
        </main>
      </div>
    </Layout>
  )
}

export default Schools
