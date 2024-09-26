import styled from "styled-components";
import {LightTheme} from '../../../../themes/Themes'

export const SkillsContainer = styled.div`
  
`;

export const SkillsCircle = styled.div`
  position: relative;
  width: 620px; // 420 - small
  height: 620px; //  420
  border-radius: 50%;
  border: 2px solid ${LightTheme.colors.black100};
  overflow: hidden;
`;



export const SkillItem = styled.div`
  width: 410px; // 210
  height: 410px; // 210
  background-color: #fff;
  border: 1px solid ${LightTheme.colors.black100};
  margin-top: -410px; // -210
  transform: rotate(-30deg) skew(-30deg);
  transform-origin: 0 100%;
  transition: .5s;
  &.item2{
    transform: rotate(30deg) skew(-30deg);
  }
  &.item3{
    transform: rotate(90deg) skew(-30deg);
  }
  &.item4{
    transform: rotate(150deg) skew(-30deg);
  }
  &.item5{
    transform: rotate(210deg) skew(-30deg);
  }
  &.item6{
    transform: rotate(270deg) skew(-30deg);
  }
`;

export const SkillContent = styled.div`
  position: absolute;
    width: 100px;
    height: 60px;
    text-align: center;
    top: calc(50% - 30px);
    left: calc(50% - 50px);
    transform: rotateZ(30deg) 
    translateY(-240px) rotateZ(-30deg);
    font-weight: 500;
    transition: .5s;
    &.item2{
      transform: rotateZ(90deg) 
      translateY(-240px) rotateZ(-90deg);
    }
    &.item3{
      transform: rotateZ(150deg) 
      translateY(-240px) rotateZ(-150deg);
    }
    &.item4{
      transform: rotateZ(210deg) 
      translateY(-240px) rotateZ(-210deg);
    }
    &.item5{
      transform: rotateZ(270deg) 
      translateY(-240px) rotateZ(-270deg);
    }
    &.item6{
      transform: rotateZ(330deg) 
      translateY(-240px) rotateZ(-330deg);
    }
`;
export const Skill = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 0;
  height: 0;

  &:hover ${SkillItem} {
    background-color: ${LightTheme.colors.black50};
  }
`;

export const SkillIcon = styled.div`
  transition: transform 0.3s ease;

  ${Skill}:hover & {
    transform: scale(1.3);
  }
`;

export const SkillName = styled.div`
  font-weight: bold;
  color: ${LightTheme.colors.black800};
  transition: transform 0.3s ease;
  ${Skill}:hover & {
    font-size: 1.1rem;
  }
`;

export const SkillCenter = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 50%;
  height: 50%;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${LightTheme.colors.black100};
  background-color: #ffffff;
  z-index: 333;
  button{
    background-color: transparent;
    border: none;
    cursor: pointer;
    svg{
      font-size: 4rem;
      color: ${LightTheme.colors.primaryColor};
    }
  }
`;

export const  AllSkills = styled.div`
  position: absolute;
  top: 15%;
  left: 50%;
  transform: translateX(-50%);
  height: 70vh;
  width: 40vw;
  padding: 2rem;
  border: 1px solid ${LightTheme.colors.black100};
  border-radius: 40px;
  background-color: #fff;
  z-index: 1000;
  button{
    position: absolute;
    right: 3%;
    top: 3%;
    background-color: transparent;
    border: none;
    font-size: 1.2rem;
    font-weight: bold;
    color: #E44D26;
    cursor: pointer;
  }
  h1{
    width: 100%;
    text-align: center;
  }
`;

export const SkillsList = styled.div`
  margin-top: 2rem;
  ul {
    display: flex;
    flex-direction: column;
    gap: .5rem;
  }
  li {
    display: flex;
    align-items: center;
    gap: 1rem;
    list-style: none;
    width: 100%;
    padding: .5rem 1rem;
    background-color: ${LightTheme.colors.black50};
    border-radius: 1rem;
  }
`;