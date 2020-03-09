import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import ListPost from "../components/atoms/ListPost"
import StyledLink from "../components/atoms/StyledLink"
import CategoryList from "../components/atoms/CategoryList"

export default ({ data }) => {
  const category = data.markdownRemark
  const items = data.allMarkdownRemark && data.allMarkdownRemark.edges
    ? data.allMarkdownRemark.edges.map(item => (
      <ListPost key={item.node.fields.slug}>
        <article>
          <StyledLink to={item.node.fields.slug}>
            {item.node.frontmatter.featuredImage ? (
              <Img
                fluid={item.node.frontmatter.featuredImage.childImageSharp.fluid}
                alt={item.alt}
              />
            ) : null}
            <h2>{item.node.frontmatter.title}</h2>
          </StyledLink>
        </article>
      </ListPost>
    ))
    : null

  return (
    <Layout
      color={category.frontmatter.color}
      backgroundColor={category.frontmatter.backgroundColor}
      linkColor={category.frontmatter.linkColor}
    >
      <h1>{category.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: category.html }} />
      <CategoryList>{items}</CategoryList>
    </Layout>
  )
}
export const query = graphql`
  query($slug: String!, $id: String!) {
    allMarkdownRemark(
      filter: {frontmatter: {category: {eq: $id}}},
      sort: { fields: [frontmatter___date], order: DESC }
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
          }
        }
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        color
        backgroundColor
        linkColor
      }
    }
  }
`
