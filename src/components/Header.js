import PropTypes from "prop-types"
import React from "react"
import StyledLink from './atoms/StyledLink'
import MainHeader from './atoms/MainHeader'
import UnorderedList from './atoms/UnorderedList'
import ListItem from './atoms/ListItem'
import ImportantListItem from './atoms/ImportantListItem'
import HeaderNav from "./molecules/HeaderNav"
import { useStaticQuery, graphql } from "gatsby"


const Header = ({ siteTitle }) => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(filter: {frontmatter: {type: {eq: "category"}}}) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }
    }
  `)

  return (
    <MainHeader>
      <HeaderNav>
        <UnorderedList>
          <ImportantListItem>
            <StyledLink to="/">
              {siteTitle}
            </StyledLink>
          </ImportantListItem>
          {data.allMarkdownRemark.edges.map(item => (
            <ListItem key={item.node.fields.slug}>
              <StyledLink to={item.node.fields.slug}>
                {item.node.frontmatter.title}
              </StyledLink>
            </ListItem>
          ))}
          <ListItem><a href="#bio">Bio</a></ListItem>
        </UnorderedList>
      </HeaderNav>
    </MainHeader>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
