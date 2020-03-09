import styled from 'styled-components'

const ListPost = styled.li`
  width: 100%;

  @media screen and (min-width: 600px) {
    width: calc(100% / 3 - 20px);
    margin: 0 10px;
  }
`

export default ListPost
