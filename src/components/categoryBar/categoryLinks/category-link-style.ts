import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled(NavLink)`
  min-height: 100%;
  max-height: 100%;
  display: inline-block;
  white-space: nowrap;
  align-items: center;
  padding: 5px;
  box-sizing: border-box;
  border-radius: 8px;
  font-size: 16px;
  color: ${({theme}) => theme.colors.primary};
  background-color: ${({theme}) => theme.colors.bgColor};

  &:hover{
    background-color: ${({theme}) => theme.colors.borderColor};
  }

  &.active{
    color: ${({theme}) => theme.colors.secondary};
    background-color: ${({theme}) => theme.colors.primary};
  }
`;