import styled from "styled-components";
import { LightTheme } from "../../themes/Themes";

export const Title = styled.h1`
  position: absolute;
  top: 3vh;
  left: 50%;
  transform: translateX(-50%);
  font-size: 2rem;
  font-weight: bold;
  color: ${LightTheme.colors.black700};
  .tag {
    color: ${LightTheme.colors.primaryColor};
  }
`;