import styled from "styled-components";
import {LightTheme} from '../../themes/Themes'
import { Link } from 'react-scroll';

export const MainContainer = styled.main`
  position: relative;
  background: linear-gradient(to top, #000000 5%, ${LightTheme.colors.backColor} 40%);
  padding: 3% 0;
  .sectionContainer,.sectionContainerContact{
    height: 100vh;
    width: 70%;
    margin: 0 auto;
  }
  @media (max-width: 769px){
    padding: 0;
    .sectionContainer,.sectionContainerContact{
      width: 100%;
    }
  }
  @media (min-width: 770px) and (max-width: 999px){
    .sectionContainer,.sectionContainerContact{
    width: 84%; 
    margin: 0 auto;
    }
  }
`;

export const ReturnTop = styled(Link)`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.2rem;
  top: 80vh;
  right: ${props => props.visibility ? '5%' : '-12%'};
  transition: .8s ease-in-out;
  border-radius: 50%;
  background-color: #BF1F3E;
  font-size: 1.2rem;
  font-weight: bold;
  color: #fff;
  cursor: pointer;
  svg{
    font-size: 2.2rem;
    margin-bottom: -0.5rem;
  }
  @media (max-width: 999px){
    padding: 0.8rem;
    font-size: 0.8rem;
  }
  @media (max-width: 769px){
    display: none;
  }
`;


