import styled from "styled-components";
import {LightTheme} from '../../../../themes/Themes'

export const SkillsContainer = styled.div`
  
`;

export const SkillsCircle = styled.div`
  width: 420px;
  height: 420px;
  position: relative;
  border-radius: 50%;
  border: 2px solid #ddd;
  overflow: hidden;
`;

export const SkillItem = styled.div`
  width: 210px;
  height: 210px;
  background-color: #fff;
  border: 1px solid ${LightTheme.colors.primaryColor};
  margin-top: -210px;
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
    translateY(-140px) rotateZ(-30deg);
    font-weight: 500;
    transition: .5s;
    &.item2{
      transform: rotateZ(90deg) 
      translateY(-140px) rotateZ(-90deg);
    }
    &.item3{
      transform: rotateZ(150deg) 
      translateY(-140px) rotateZ(-150deg);
    }
    &.item4{
      transform: rotateZ(210deg) 
      translateY(-140px) rotateZ(-210deg);
    }
    &.item5{
      transform: rotateZ(270deg) 
      translateY(-140px) rotateZ(-270deg);
    }
    &.item6{
      transform: rotateZ(330deg) 
      translateY(-140px) rotateZ(-330deg);
    }
`;

export const SkillIcon = styled.div`
  
`;

export const SkillName = styled.div`
  font-weight: bold;
  color: ${LightTheme.colors.textColor};
`;

export const Skill = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 0;
  height: 0;

  &:hover ${SkillItem} {
    background-color: #f8f8f8;
  }
`;