import styled from "styled-components";
import {LightTheme} from '../../themes/Themes.js'

export const HeaderStyle = styled.header`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  background: linear-gradient(30deg, #000000 15%, ${LightTheme.colors.backColor} 60%);
  padding-right: 25%;
  img{
    height: 78vh;
    margin-top: 10rem;
    transform: scale(1.5);
    margin-left: 6%;
  }
  @media (max-width: 1455px) {
    padding-right: 10%;
    img{
      margin-right: -20%;
    }
  }
  
  @media (max-width: 875px) {
    padding-right: 4%;
  }
  @media (max-width: 769px) {
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    img{
      height: 30vh;
      margin: 6rem 0 2rem 6%;
      transform: scale(1);
      box-shadow: 0px 0px 10px #25252589;
      border-radius: 2.5rem;
    }
  }
`;

export const PerfilName = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 70vh;
  h1{
    font-size: 3rem;
    font-weight: bold;
    color: #ffffff;
  }
  p{
    font-size: 1.7rem;
    color: ${LightTheme.colors.primaryColor};
    font-weight: bold;
  }
  @media (max-width: 1048px) {
    h1{
      font-size: 2.5rem;
    }
    p{
      font-size: 1.2rem;
    }
  }
  @media (max-width: 769px){
    height: auto;
  }
  @media (max-width: 599px){
    h1 {
      font-size: 2rem;
    }
  }
`;