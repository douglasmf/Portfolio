import styled from "styled-components";
import {LightTheme} from '../../../../themes/Themes' 

export const SkillsContainer = styled.div`
  position: relative;
  padding: 5%;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
`;

export const Cards = styled.div`
  width: 100%;
  display: flex;
  padding: 2% 8%;
  flex-wrap: wrap;
  justify-content: space-around;
  align-content: center;
  margin-top: 2rem;
  gap: 2rem;
  @media (max-width: 769px){
    padding: 0 4%;
    gap: 1.5rem;
  }
  @media (max-width: 599px){
    padding: 0 8%;
    gap: 1rem;
  }
`;

export const Card = styled.div`
  width: 24%;
  padding: 6vh 0;
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  border: 1px solid ${LightTheme.colors.black100};
  border-radius: 10px;
  transition: transform 0.3s ease;
  &:hover{
    background-color: ${LightTheme.colors.black50};
    transform: scale(1.05);
  }
  @media (max-width: 769px) {
    width: 45%; 
    padding: 5vh 0;
  }
  @media (max-width: 599px){
    width: 100%;
    padding: 4vh 0;
    margin-bottom: 2rem;
  }
`;

export const CardContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  svg{
    font-size: 50px;
    transition: 0.5s;
  }
  p{
    color: ${LightTheme.colors.black800};
    font-weight: 500;
    font-size: 1.2rem;
    text-align: center;
    margin-top: .5rem;
    transition: .5s;
  }
  &:hover{
    svg{
        transform: scale(1.2);
    }
    p{
        transform: scale(1.1);
    }
  }
  @media (max-width: 599px){
    svg {
      font-size: 40px;
    }
    p {
      font-size: 1.1rem;
    }
  }
`;