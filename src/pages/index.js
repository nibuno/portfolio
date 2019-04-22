import React from "react"
// import { graphql } from "gatsby"
import Layout from "@components/templates/layout"
import SEO from "@components/seo"
import Welcome from "@components/organisms/home/welcome"
import Intro from '../components/intro'

import Skills from '../components/skills'
import Bio from '../components/bio'
import Contact from '../components/contact'



const IndexPage = ( data ) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`, `転職`]} />
    <div className="flex-col">
      <Welcome />
      <Intro />
      <Skills />
      <Bio />
      <Contact />
    </div>
  </Layout>
)
export default IndexPage


// export const query = graphql`
//   query {
//     allMarkdownRemark(
//       sort: { order: DESC, fields: [frontmatter___date]},
//       limit: 4
//     ) {
//       totalCount
//       edges {
//         node {
//           id
//           fields {
//             slug
//           }
//           frontmatter {
//             title
//             description
//             date(formatString: "YYYY.MM.DD"),
//             hero {
//               publicURL
//               childImageSharp {
//                 fluid(maxWidth: 980) {
//                   ...GatsbyImageSharpFluid
//                 }
//               }
//             }
//           }
//           excerpt
//         }
//       }
//     }
//   }
// `