import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./Header"
import GlobalStyles from "./GlobalStyles"
import Main from "./atoms/Main"
import Bio from "./Bio"

const Layout = ({ children, backgroundColor, color, linkColor }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <GlobalStyles backgroundColor={backgroundColor} color={color} linkColor={linkColor} />
      <Header siteTitle={data.site.siteMetadata.title} />
      <Main>{children}</Main>
      <Bio />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
