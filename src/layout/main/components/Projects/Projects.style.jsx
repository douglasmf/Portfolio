import styled from "styled-components";

export const ProjectsContainer = styled.div`
    position: relative;
    padding: 5%;
    display: flex;
    flex-direction: column;
    align-items: center;  
    justify-content: center;
    gap: 2rem;
    background-color: #fff;
    width: 100%;
    height: 100%;
    @media (max-width: 769px){
      padding: 2%;
    }
`;