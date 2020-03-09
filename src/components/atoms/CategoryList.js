import styled from 'styled-components'
import UnorderedList from './UnorderedList'

const CategoryList = styled(UnorderedList)`
  width: 100%;

  @media screen and (min-width: 600px) {
    display: flex;
    flex-wrap: wrap;
    margin: 10px -10px;
  }
`

export default CategoryList
