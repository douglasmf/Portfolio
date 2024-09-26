import styled from "styled-components";
import { Link } from 'react-scroll';

export const LinkStyle = styled(Link)`
  display: flex;
  align-items: center;
  color: #ffffff;
  gap: 6%;
  margin-bottom: 15%;
  font-size: 1.1rem;
  cursor: pointer;
  &:nth-of-type(4){
    margin-bottom: 0;
  }
  svg{
    font-size: 1.2rem;
  }
  &.skillIcon{
    svg{
      font-size: 1.7rem;
    }
  }
`;