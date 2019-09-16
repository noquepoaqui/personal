import styled from "styled-components"

const HeaderNav = styled.nav`
  max-width: 960px;
  padding: 0 20px;
  margin: auto;

  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;

    li {
      margin: 0 10px;

      &:first-child {
        margin-left: 0;
      }

      &:last-child {
        margin-right: 0;
      }

      &::before {
        content: "";
      }
    }
  }
`

export default HeaderNav
