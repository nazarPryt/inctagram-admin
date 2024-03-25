import { styled } from 'styled-components'

export const ProfileFilesSkeletonStyled = styled.div`
  margin-top: 30px;

  .skeletonContainerFlex {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 5px;
  }
`
