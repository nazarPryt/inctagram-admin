import { styled } from 'styled-components'

export const AuthorizedLayoutStyled = styled.div`
  display: grid;
  grid-template-areas:
    'header header header'
    'aside section section';
  grid-template-rows: auto 1fr;
  grid-template-columns: auto 1fr 1fr;

  header {
    grid-area: header;
  }

  section {
    grid-area: section;
  }

  aside {
    grid-area: aside;
  }

  @media (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    min-height: 100%;

    header {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 60px;
      z-index: 10;
    }

    section {
      flex: 1;
      overflow-y: auto;
    }

    aside {
      position: fixed;
      bottom: 0;
      right: 0;
      left: 0;
      top: initial;
      width: 100%;
      height: 60px;
      z-index: 10;
    }
  }
`
