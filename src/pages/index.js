import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Intro from '../components/intro'

import Skills from '../Components/skills'
import Bio from '../Components/bio'
import Contact from '../Components/Contact'
import Product from '../Components/product'



const IndexPage = () => (
  <Layout>
    {/* <Image /> */}
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`, `転職`]} />
    <Intro />
    <Skills />
    <Bio />
    <Contact />
  </Layout>
)


export default IndexPage
