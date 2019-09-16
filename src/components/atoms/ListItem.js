import styled from "styled-components"

const ListItem = styled.li`
  margin: 0.5em 0;

  &::before {
    content: "—";
  }
`

export default ListItem
