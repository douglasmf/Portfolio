import styled from "styled-components";
import { LightTheme } from "../../themes/Themes";

export const Title = styled.h1`
  width: 100%;
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  color: ${LightTheme.colors.black700};
  .tag {
    color: ${LightTheme.colors.primaryColor};
  }
  @media (max-width: 769px){
    font-size: 1.5rem;
  }
`;