import styled from "styled-components";
import { Link } from 'react-scroll';
import {LightTheme} from '../../../../themes/Themes'

export const LinkStyle = styled(Link)`
  width: 25%;
  height: 25vh;
  display: flex;
  flex-direction: column ;
  align-items: center;
  justify-content: center;
  gap: 1vh;
  background-color: ${LightTheme.colors.black700};
  font-size: 1.2rem;
  font-weight: bold;
  color: #ffffff;
  transition: 0.5s;
  cursor:pointer;
  svg{
    color: ${LightTheme.colors.primaryColor};
    transition: 0.5s;
    font-size: 3.2rem;
  }
  &:hover{
    background-color: ${LightTheme.colors.primaryColor};
    color: #fff;
    svg{
      color: #fff;
    }
  }
  @media (max-width: 1048px) {
    font-size: 1rem;
    svg {
      font-size: 2.7rem;
    }
  }
`;