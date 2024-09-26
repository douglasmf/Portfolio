import styled from "styled-components";
import {LightTheme} from "../../themes/Themes"

export const SocialContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 42%;
  color: ${LightTheme.colors.black800};
  margin-top: 2vh;

  @media (max-width: 768px){
    width: 100%;
    margin-top: 0;
  }
`;

export const Email = styled.div`
  h2 {
    font-size: 1.8em;
    color: ${LightTheme.colors.primaryColor};
    margin-bottom: 2rem;
  }
  .emailContainer {
    display: flex;
    margin-bottom: 2rem;
  }

  @media (max-width: 1400px){
    h2 {
      font-size: 1.5em;
    }
  }
  @media (max-width: 1200px){
    h2 {
      font-size: 1.3em;
    }
    .emailContainer{
      flex-direction: column;
    }
  }
  @media (max-width: 769px){
    .emailContainer {
      flex-direction: row;
      margin-bottom: 1rem;
    }
    h2{
      font-size: 1.3em;
      margin-bottom: .5rem;
    }
  }
`;

export const SocialLinks = styled.div`
  h2 {
    font-size: 1.8em;
    color: ${LightTheme.colors.primaryColor};
    margin-bottom: 2rem;
  }
  .linksSociais{
    display: flex;
    flex-direction: column;
  }
  a {
    display: flex;
    align-items: center;
    gap: .5rem;
    width: 100%;
    color: ${LightTheme.colors.black800};
    margin-bottom: .8rem;
    transition: .5s;
  }
  a:hover {
    color: ${LightTheme.colors.primaryColor};
  }
  a#github > svg{
    font-size: 2em;
  }

  a#linkedin > svg{
    font-size: 2.2em;
  }

  @media (max-width: 1400px){
    h2 {
      font-size: 1.5em;
    }
  }
  @media (max-width: 1200px){
    h2 {
      font-size: 1.3em;
    }
  }
  @media (max-width: 999px){
    a#github > svg{
      font-size: 1.8em;
    }

    a#linkedin > svg{
        font-size: 2.0em;
      }
    }
  @media (max-width: 769px){
    h2 {
      font-size: 1.3rem;
      margin-bottom: .5rem;
    }
    .linksSociais{
      flex-direction: row;
    }
    a{
      font-size: 1rem;
    }
    a#github {
    font-size: 1rem;
    }

    a#linkedin {
      font-size: 1rem;
    }
  }
`;