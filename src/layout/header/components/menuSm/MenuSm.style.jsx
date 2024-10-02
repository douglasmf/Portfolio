import styled from "styled-components";
import { LightTheme } from "../../../../themes/Themes";

export const MenuStyle = styled.nav`
  position: fixed;
  background-color: ${LightTheme.colors.black800};
  top: calc(3% + 50px);
  left: 4%;
  padding: 4%;
  opacity: ${(props) => props.visible? 1 : 0};
  display: 'flex';
  flex-direction: column;
  align-content: center;
  z-index: 999;
  transform: translateX(${props => (props.openMenu ? '0' : '-130%')});
  transition: opacity 0.8s ease-in-out, transform 0.8s ease-in-out;
  border-radius: 10px;
  @media (min-width: 770px){
    display: none;
  }
`;