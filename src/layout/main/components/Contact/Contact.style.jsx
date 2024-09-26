import styled from "styled-components";
import { LightTheme } from "../../../../themes/Themes";

export const ContactContainer = styled.div`
  position: relative;
  padding: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;  
  justify-content: center;
  gap: 2rem;
  background-color: #fff;
  width: 100%;
  height: 100vh;
`;

export const ContactsContain = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 5rem;
  width: 100%;
  padding: 6vh 3vw;
  margin-top: 2rem;
  margin-bottom: 2rem;
  background-color: #ffffff;
  box-shadow: 0px 0px 10px ${LightTheme.colors.black100};
  border-radius: 20px;
  
  @media (max-width: 1400px){
    gap: 3rem;
  }
  
  @media (min-width: 770px ) and (max-width: 969px){
    padding: 4% 6% 4% 4%;
  }

  @media (max-width: 769px){
    flex-direction: column;
    box-shadow: none;
    padding: 0 4%;
    margin-top: 12vh;
  }
`;