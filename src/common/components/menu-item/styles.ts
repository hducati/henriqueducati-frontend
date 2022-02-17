import styled from "@emotion/styled"

export const MenuLink = styled.a`
  position: relative;
  font-size: 1.1rem;
  text-decoration: none;
  text-align: center;
  cursor: pointer;

  &:hover {
    text-decoration: none;

    &::after {
      content: "";
      position: absolute;
      display: block;
      height: 0.3rem;
      background-color: #805ad5;
      animation: hoverAnimation 0.2s forwards;
    }

    @keyframes hoverAnimation {
      from {
        width: 0;
        left: 50%;
      }
      to {
        width: 100%;
        left: 0;
      }
    }
  }
`
