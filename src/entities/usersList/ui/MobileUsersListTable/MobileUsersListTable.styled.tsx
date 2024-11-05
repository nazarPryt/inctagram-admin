import { keyframes, styled } from 'styled-components'
const pulse = keyframes`
    0% {
        background-color: #598ff8;
    }
    33% {
        background-color: #4242c1;
    }
    66% {
        background-color: #139fea;
    }
    100% {
        background-color: #7ea7f8;
    }
`

export const MobileUsersListTableStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 90%;

  table {
    background-color: ${props => props.theme.bodyColor['500']};
    border: 1px solid ${props => props.theme.bodyColor['100']};
    display: flex;
    justify-content: space-between;
    padding: 15px 15px;
  }

  tbody,
  thead {
    display: flex;
    flex-direction: column;
    gap: 12px;
    justify-content: space-between;
  }

  tr {
    display: flex;
    justify-content: end;

    a {
      padding: 0;
    }

    button {
      animation: ${pulse} 1s ease-in-out infinite;
      //background: ${props => props.theme.palette.primary[500]};
      border-radius: 50%;
    }
  }

  thead {
    align-items: flex-start;
  }

  svg {
    fill: red;
  }
`
