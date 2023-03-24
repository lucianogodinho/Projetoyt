import styled from "styled-components";

export const Container = styled.button`
  min-height: 90%;
  max-height: 90%;
  display: inline-block;
  white-space: nowrap;
  align-items: center;
  padding: 5px;
  box-sizing: border-box;
  border-radius: 8px;
  border: none;
  outline: none;
  font-size: 14px;
  font-weight: 400;
  color: ${({theme}) => theme.colors.primary};
  background-color: ${({theme}) => theme.colors.bgColor};

  &:hover{
    background-color: ${({theme}) => theme.colors.borderColor};
  }
`;