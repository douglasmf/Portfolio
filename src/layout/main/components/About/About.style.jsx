import styled from "styled-components";
import {LightTheme} from '../../../../themes/Themes'

export const AboutContainer = styled.div`
  
`;

export const AboutImage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 30%;
    height: 90%;
    margin-top: 4%;
    border-right: 2px solid ${LightTheme.colors.black100};
    padding-right: 2%;
    img{
        width: 100%;
    }
    h2{
        margin-top: 2%;
        text-align: center;
    }
    h3{
        color: ${LightTheme.colors.primaryColor};
        margin-bottom: 10%;
        text-align: center;
    }
    button{
        background-color: ${LightTheme.colors.primaryColor};
        color: #fff;
        font-weight: bold;
        padding: .5rem 1rem;
        border-radius: .8rem;
        margin-bottom: 1rem;
    }
    a{
        display: flex;
        align-items: center;
        align-self: flex-start;
        font-weight: bold;
        color: #333;
        margin-top: 1rem;
        margin-left: 1rem;
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
`;

export const AboutText = styled.div`
    width: 70%;
    height: 70%;
    padding-left: 4%;
  p {
    font-size: 1.5rem;
    line-height: 2.5rem;
    color: ${LightTheme.colors.black700};
  }
`;