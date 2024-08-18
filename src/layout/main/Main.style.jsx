import styled from "styled-components";
import {LightTheme} from '../../themes/Themes'

export const MainContainer = styled.main`
  background-color: #ddd;
  padding: 3% 0;
  .sectionContainer{
    height: 100vh;
    width: 70%;
    margin: 0 auto;
  }
  .sectionContent{
    position: relative;
    padding: 5%;
    display: flex;
    align-items: center;  
    justify-content: center;
    background-color: #fff;
    width: 100%;
    height: 100%;
  }
`;

