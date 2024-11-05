import { breakpoints } from '@/shared/styles/ViewPort'
import { styled } from 'styled-components'

export const AuthorizedLayoutStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr;
  grid-template-rows: 80px 1fr;
  grid-template-areas:
    'header header'
    'aside main';
  column-gap: 1rem;
  header {
    grid-area: header;
  }

  main {
    grid-area: main;
  }

  aside {
    grid-area: aside;
  }

  @media (max-width: ${breakpoints.tablet}) {
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

    main {
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
