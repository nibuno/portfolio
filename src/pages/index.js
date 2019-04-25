import React from "react"
// import { graphql } from "gatsby"
import Layout from "@components/templates/layout"
import SEO from "@components/seo"
import Welcome from "@components/organisms/home/welcome"
import About from "@components/organisms/home/about"
import Works from "@components/organisms/home/works"




const IndexPage = ( data ) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`, `転職`]} />
    <div className="flex-col">
      <Welcome />
      <About />
      <Works />
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