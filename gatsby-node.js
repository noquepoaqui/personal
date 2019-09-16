const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  if (node.internal.type === `MarkdownRemark`) {

    const { createNodeField } = actions
    const basePath = node.frontmatter && node.frontmatter.type === 'category'
      ? `content/categories`
      : `content`
    const slug = createFilePath({ node, getNode, basePath })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              type
              id
            }
          }
        }
      }
    }
  `)

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    const component = node.frontmatter && node.frontmatter.type === 'category'
      ? path.resolve(`./src/templates/category.js`)
      : path.resolve(`./src/templates/post.js`)

    createPage({
      path: node.fields.slug,
      component,
      context: {
        slug: node.fields.slug,
        id: node.frontmatter.id
      },
    })
  })
}
