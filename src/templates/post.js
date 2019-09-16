import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ color, backgroundColor, linkColor, data }) => {
  const post = data.markdownRemark
  return (
    <Layout
      color={color}
      backgroundColor={backgroundColor}
      linkColor={linkColor}
    >
      <article>
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </article>
    </Layout>
  )
}
export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        category
      }
    }
  }
`
