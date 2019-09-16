import React from "react"
import { graphql } from 'gatsby'
import SEO from "../components/seo"
import Layout from "../components/layout"
import UnorderedList from "../components/atoms/UnorderedList"
import ListItem from "../components/atoms/ListItem"
import StyledLink from "../components/atoms/StyledLink"
import Img from "gatsby-image"

const IndexPage = ({ data }) => {
  const items = data.allMarkdownRemark && data.allMarkdownRemark.edges
  ? data.allMarkdownRemark.edges.map(item => (
    <ListItem key={item.node.fields.slug}>
      <article>
        <StyledLink to={item.node.fields.slug}>
          {item.node.frontmatter && item.node.frontmatter.featuredImage ? (
            <Img
              fluid={item.node.frontmatter.featuredImage.childImageSharp.fluid}
              alt={item.alt}
            />
          ) : null}
          <h3>{item.node.frontmatter.title}</h3>
        </StyledLink> <span class="date">{item.node.frontmatter.date}</span>
      </article>
    </ListItem>
  ))
  : null

  return (
    <Layout>
      <SEO title="Inicio" />

      <section>

        <h2>Últimos artículos</h2>
        <UnorderedList>{items}</UnorderedList>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: {frontmatter: {category: {ne: null}}},
      sort: { fields: [frontmatter___date], order: DESC },
      limit: 10
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 1000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            date(formatString: "DD/MM/YYYY")
          }
        }
      }
    }
  }
`

export default IndexPage
