import styled from "styled-components";
import { LightTheme } from "../../../../themes/Themes";

export const ContactContainer = styled.div`
  
`;

export const ContactsContain = styled.div`
  display: flex;
  justify-content: center;
  gap: 6rem;
  width: 100%;
  padding: 6vh 0;
  margin-top: 2rem;
  margin-bottom: 2rem;
  background-color: #ffffff;
  box-shadow: 0px 0px 10px #ddd;
  border-radius: 20px;
  @media screen and (max-width: 768px){
    flex-direction: column;
    gap: 0;
    padding: 0 4%;
  }
  
  @media (min-width: 769px ) and (max-width: 969px){
    padding: 0 6% 0 4%;
  }

  
`;