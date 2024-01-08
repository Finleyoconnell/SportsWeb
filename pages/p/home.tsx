import React from "react"
import { GetServerSideProps } from "next"
import ReactMarkdown from "react-markdown"
import Layout from "../../components/Layout"
import { PostProps } from "../../components/Post"

<>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Simple Website</title>
  <link rel="stylesheet" type="text/css" href="styles.css" />
  <header>
    <h1>Austin Area Sports</h1>
  </header>
  <nav>
    <a href="index.html" id="home-link">
      Home
    </a>
    <a href="schools.html" id="schools-link">
      Schools
    </a>
    <a href="sports.html" id="sports-link">
      Sports
    </a>
    <a href="profile.html" id="profile-link">
      Profile
    </a>
  </nav>
  <div className="container">{/* Page content goes here */}</div>
</>