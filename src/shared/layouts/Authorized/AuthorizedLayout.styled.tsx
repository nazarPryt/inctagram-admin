import { styled } from 'styled-components'

export const AuthorizedLayoutStyled = styled.div`
  display: grid;
  grid-template-columns: 220px 1fr;
  grid-template-areas: 'header header header' 'aside section section' 'aside section section';

  header {
    grid-area: header;
  }

  aside {
    grid-area: aside;
  }

  section {
    grid-area: section;
  }
`
