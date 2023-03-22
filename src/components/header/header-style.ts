import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 55px;
  background-color: ${({theme}) => theme.colors.secondary};
  padding: 0 16px;
  display: flex;
  align-items: center;
  position: fixed;
  justify-content: space-between;
  box-sizing: border-box;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const ButtonContainer = styled.div<{ margin?: string }>`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin: ${({margin}) => margin? margin : 0};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: .4s;

  &:hover{
    background-color: ${({theme}) => theme.colors.bgColor};
  }
`;

export const ButtonIcon = styled.img`
  width: 20px;
`;

export const Logo = styled.img`
  width: 100px;
  cursor: pointer;
`;

export const SearchContainer = styled.div`
  display: flex;
`;

export const SearchInputContainer = styled.div`
  width: 450px;
  height: 35px;
  border: 1px solid ${({theme}) => theme.colors.borderColor};
  border-radius: 40px 0 0 40px;
  display: flex;
  align-items: center;
  padding: 0 16px;
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 25px;
  outline: none;
  border: none;
`;

export const SearchButton = styled.div`
  border-radius: 0 40px 40px 0;
  height: 35px;
  width: 70px;
  background-color: #f8f8f8;
  border: 1px solid ${({theme}) => theme.colors.borderColor};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const HeaderButtons = styled.div`
  width: 200px;
  display: flex;
`;