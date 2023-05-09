import styled from "styled-components";

interface ContainerProps {
  openMenu: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: ${({openMenu}) => openMenu? '82%' : '93%'};
  height: 56px;
  position: fixed;
  top: 55px;
  right: 0;
  display: flex;
  align-items: center;
  background-color: ${({theme}) => theme.colors.secondary};
  z-index: 1;

  @media(max-width: 1024px) {
    width: ${({openMenu}) => openMenu? '73%' : '92%'};
  }

  @media(max-width: 834px) {
    width: 88%;
  }

  @media(max-width: 688px) {
    width: 80%;
  }

  @media(max-width: 414px) {
    width: 100%;
  }
`;

export const Button = styled.button`
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

  &:focus {
    outline: none;
    background-color: black;
    color: white;
  }
`;

export const Slider = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: flex-start;
  column-gap: 20px;
  height: 70%;
  overflow-x: hidden;
`;

export const SliderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  column-gap: 20px;
  height: 100%;
`;

export const SliderButtons = styled.div`
  min-width: 40px;
  max-width: 40px;
  min-height: 40px;
  max-height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover{
    background-color: ${({theme}) => theme.colors.bgColor};
  }
`;

export const ButtonIcon = styled.img`
  width: 25px;
  height: 25px;
  border-radius: 50%;
`;