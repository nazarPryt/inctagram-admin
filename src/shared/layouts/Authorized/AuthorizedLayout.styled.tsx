import { styled } from 'styled-components'

export const AuthorizedLayoutStyled = styled.div`
  display: grid;
  grid-template-areas: 'header header header' 'aside section section' 'aside section section';

  header {
    grid-area: header;
  }

  aside {
    width: 100%;
    max-width: 220px;
    min-width: 145px;
    grid-area: aside;
  }

  section {
    grid-area: section;
  }
`
