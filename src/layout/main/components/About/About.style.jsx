import styled from "styled-components";
import {LightTheme} from '../../../../themes/Themes'

export const AboutContainer = styled.div`
    padding: 5%;
    background-color: #fff;
    height: 100%;
    @media (min-width: 1200px) {
        padding: 4%;
    }
`;

export const AboutContain = styled.div`
    display: flex;
    align-items: center;  
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: #fff;
    @media (max-width: 769px) {
        flex-direction: column;
        height: auto;
    }
    @media (min-width: 770px) {
        flex-direction: row;
    }
`;

export const AboutImage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 90%;
    margin-top: 2rem;
    order: 1;
    a.curriculo{
        align-self: center;
        background-color: ${LightTheme.colors.primaryColor};
        color: #fff;
        font-weight: bold;
        padding: .5rem 1rem;
        border-radius: .8rem;
        margin-top: 1rem;
    }
    .socialLinks{
        display: flex;
        justify-content: center;
        width: 100%;
        margin-top: 3rem;
        gap: 1rem;
    }
    a{
        display: flex;
        align-items: center;
        align-self: flex-start;
        font-weight: bold;
        color: ${LightTheme.colors.black800};
        svg{
            font-size: 1.5em;
            margin-right: .5rem;
        }
        svg#github{
            color: #181717;
        }
        svg#linkedin{
            color: #0A66C2;
        }
        
    }
    @media (max-width: 769px) {
        order: 2;
        a.curriculo{
            margin-top: 2rem;
        }
    }
    @media (min-width: 770px) {
        width: 40%;
        height: 90%;
        margin-top: 4%;
        margin-bottom: 0;
        padding-right: 2%;
    }
`;

export const AboutId = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    img{
        width: 35%;
        box-shadow: 0px 0px 10px ${LightTheme.colors.black100};
        border-radius: 2.5rem;
        margin: 1rem 0;
    }
    h2{
        margin-top: 2%;
        font-size: 1.5rem;
    }
    h3{
        color: ${LightTheme.colors.primaryColor};
        margin-bottom: 2%;
        font-size: 1rem;
    }
    @media (max-width: 769px){
        display: none;
    }
`;

export const AboutText = styled.div`
    width: 100%;
    height: 100%;
    order: 2;
  p {
    line-height: 1.5rem;
    font-family: "Poppins", sans-serif;
    color: ${LightTheme.colors.black700};
  }
  p:first-letter{
    margin-left: 1.5rem;
  }
  @media(max-width: 500px){
    width: 90%;
  }
  @media(max-width: 769px){
    margin-top: 2rem;
    order: 1;
  }
  @media (min-width: 770px) {
        width: 60%;
        height: 70%;
        
        p {
            font-size: 1.2rem;
            line-height: 2rem;
        }
    }

    @media (min-width: 1200px) {
        width: 60%;
        p {
            font-size: 1.5rem;
            line-height: 2.5rem;
        }
    }
`;