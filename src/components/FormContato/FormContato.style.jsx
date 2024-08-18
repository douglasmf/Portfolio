import styled from "styled-components";
import {LightTheme} from "../../themes/Themes"

export const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 58%;
  @media screen and (max-width: 768px){
    width: 96%;
    margin: 0 auto;
  }
`;

export const InputStyle = styled.input`
  margin-bottom: 1.5rem;
  height: 3.5rem;
  width: 100%;
  border-radius: 4px;
  border: none;
  box-shadow: 0px 0px 10px #ddd;
  background-color: transparent;
  font-size: 1.2em;
  color: #333;
  padding: 0 1rem;
  outline: none;
  transition: all 0.5s;
  &:hover{
    box-shadow: 0px 0px 10px ${LightTheme.colors.primaryColor};
  }
  &:focus{
    box-shadow: 0px 0px 10px ${LightTheme.colors.primaryColor};
  }
`;

export const TextareaStyle = styled.textarea`
  margin-bottom: 1.5rem;
  border-radius: 4px;
  border: none;
  box-shadow: 0px 0px 10px #ddd;
  background-color: transparent;
  font-size: 1.2em;
  color: #333;
  padding: 1rem;
  height: 18rem;
  width: 100%;
  resize: none;
  outline: none;
  transition: all 0.5s;
  &:hover{
    box-shadow: 0px 0px 10px ${LightTheme.colors.primaryColor};
  }
  &:focus{
    box-shadow: 0px 0px 10px ${LightTheme.colors.primaryColor};
  }
`;

export const ButtonSubmit = styled.input`
  width: 100%;
  padding:  1rem 0;
  border-radius: 4px;
  border: none;
  box-shadow: 0px 0px 10px #ddd;
  cursor: pointer;
  font-size: 1em;
  font-weight: bold;
  background-color: transparent;
  color: ${LightTheme.colors.primaryColor};
  transition: all 0.5s;
  &:hover{
    background-color: ${LightTheme.colors.primaryColor};
    color: #fff;
  }
  @media (max-width: 769px){
    width: 30%;
    padding: .5rem 0;
  }

`;