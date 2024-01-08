import React from "react"
import { GetStaticProps } from "next"
import Layout from "../../components/Layout"
import Post, { PostProps } from "../../components/Post"
import prisma from '../../lib/prisma';


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
            <div key={school.id} className="school">
              <span>{`${school.name}`}</span>
            </div>
          ))}
        </main>
      </div>
      <style jsx>{`
        .school {
          background: white;
          transition: box-shadow 0.1s ease-in;
        }

        .school:hover {
          box-shadow: 1px 1px 3px #aaa;
        }

        .school + .school {
          margin-top: 2rem;
        }
      `}</style>
    </Layout>
  )
}

export default Schools
