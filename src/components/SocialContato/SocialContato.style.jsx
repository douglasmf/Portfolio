import styled from "styled-components";
import {LightTheme} from "../../themes/Themes"

export const SocialContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 28%;
  color: #333;
  margin-top: 2vh;

  h2 {
    font-size: 2em;
    color: ${LightTheme.colors.primaryColor};
    margin-bottom: 2rem;
  }

  a {
    color: #333;
    margin-right: 1rem;
    transition: .5s;
  }

  a#github {
    font-size: 2em;
  }

  a#linkedin {
    font-size: 2.2em;
  }

  a:hover {
    color: ${LightTheme.colors.primaryColor};
  }

  span {
    margin-bottom: 2rem;
  }

  p {
    color: #333;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
  }

  @media screen and (max-width: 768px){
    width: 100%;
    margin-top: 2rem;
    h2 {
      font-size: 1.5em;
    }
    a#github {
    font-size: 1.2em;
    }

    a#linkedin {
      font-size: 1.4em;
    }
  }
`;