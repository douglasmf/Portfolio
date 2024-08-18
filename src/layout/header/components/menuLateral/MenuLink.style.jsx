import styled from "styled-components";
import { Link } from 'react-scroll';
import {LightTheme} from '../../../../themes/Themes'

export const LinkContainer = styled(Link)`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1vh;
    font-size: 1.2rem;
    font-weight: bold;
    color: ${LightTheme.colors.black700};
    cursor: pointer;
    transform: ${({ isVisible }) => (isVisible ? 'translateX(0)' : 'translateX(-300%)')};
    transition: transform .7s ease;
    svg {
        color: #ffffff;
        transition: 0.5s;
        font-size: 5.2rem;
        background-color: ${LightTheme.colors.primaryColor};
        padding: 1rem;
        border-radius: 50%;
        transition: .5s;
    }
    &:hover {
        svg {
            background-color: ${LightTheme.colors.backColor};
        }
    }
`;
