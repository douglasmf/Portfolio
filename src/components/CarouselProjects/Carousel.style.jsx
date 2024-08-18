import styled from "styled-components";
import {LightTheme} from '../../themes/Themes'

export const Carouselcontainer = styled.div`
  position: relative;
  height: 78vh;
  width: 96%;
  overflow: hidden;
  background-color: rgb(242, 242, 242);
  box-shadow: 0px 0px 10px #00000039;
  border-radius: 20px;
`;

export const CarouselList = styled.div`
  height: 100%;
  width: ${(props) => props.totalItems * 100}%;
  display: flex;
  transition: 1.8s;
`;

export const CarouselItem = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  padding: 2rem;
  img {
    width: 100%;
    height: 100%;
  }
`;

export const ButtonPrev = styled.button`
  position: absolute;
  top: 50%;
  left: 1%;
  height: 70px;
  width: 70px;
  transform: translateY(-50%);
  z-index: 333;
  background-color: transparent;
  border: none;
  font-size: 3rem;
  color: #fff;
  background-color: ${LightTheme.colors.backColor};
  padding: .5rem;
  border-radius: 50%;
  transition: .5s;
  &:hover{
    background-color: ${LightTheme.colors.primaryColor};
  }
`;

export const ButtonNext = styled.button`
  position: absolute;
  top: 50%;
  right: 1%;
  height: 70px;
  width: 70px;
  transform: translateY(-50%);
  z-index: 333;
  background-color: transparent;
  border: none;
  font-size: 3rem;
  color: #ffffff;
  background-color: ${LightTheme.colors.backColor};
  border-radius: 50%;
  transition: .5s;
  &:hover{
    background-color: ${LightTheme.colors.primaryColor};
  }
`;


export const ProjectInfo = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 24%;
  padding: 1rem;
  font-size: 1.2em;
  background-color: #0d3e51e1;
  color: #ffffff;
  text-align: center;
  h1{ 
    font-weight: bold;
    color: #fff;
  }
  @media (max-width: 500px){
    height: 35%;
    h1{
      font-size: 1.1em;
    }
    p{
      font-size: .9em;
    }
  }
`;

export const CarouselButtons = styled.div`
display: flex;
gap: 1.5rem;
a{
  padding: .5rem 2rem;
  border: 1px solid #ffffff;
  border-radius: 6px;
  background-color: #16161600;
  font-weight: bold;
  color: #ffffff;
  transition: .5s;
}
a:hover{
  background-color: ${LightTheme.colors.primaryColor};
}
@media (max-width: 500px){
  a{
    padding: .4rem .5rem;
    font-size: .9em;
  }
  
}
`;
