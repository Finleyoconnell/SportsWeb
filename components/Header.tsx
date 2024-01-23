import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

const Header: React.FC = () => {
  const router = useRouter();
  const isActive: (pathname: string) => boolean = (pathname) =>
    router.pathname === pathname;

  const { data: session, status } = useSession()


  let left = (
    <div className="left">
      <Link href="/" passHref><a><h3>Austin Area Sports</h3></a></Link>
      <style jsx>{`
        a {
          text-decoration: none;
          color: #000;
          display: inline-block;
        }
      `}

      </style>
    </div>
      
  );

  let center = (
    <div className="center">
      <Link href="/games" passHref><a className="bold" data-active={isActive("/games")}>Games</a></Link>
      <Link href="/schools" passHref><a className="bold" data-active={isActive("/schools")}>Schools</a></Link>
      <Link href="/sports" passHref><a className="bold" data-active={isActive("/sports")}>Sports</a></Link>
      <style jsx>{`
        .bold {
          font-weight: bold;
        }

        a {
          text-decoration: none;
          color: #000;
          display: inline-block;
        }

        .center a[data-active="true"] {
          color: gray;
        }

        a + a {
          margin-left: 1rem;
        }

        .center {
          margin-left: 3rem;
        }
      `}</style>
    </div>
  );
let right = null
  if (status === 'loading') {
    
    right = (
      <div className="right">
        <p>Validating session ...</p>
        <style jsx>{`
          .right {
            margin-left: auto;
          }
        `}</style>
      </div>
    );
  }


  return (
    <nav>
      {left}
      {center}
      <style jsx>{`
        nav {
          display: flex;
          padding: 1rem;
          background-color: darkred;
          align-items: center;
        }
      `}</style>
    </nav>
  );
};

export default Header;
