import { NavLink } from "react-router-dom";
import styled from "styled-components";

interface ContainerProps {
  openMenu: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: ${({openMenu}) => openMenu? '260px' : '100px'};
  height: calc(100vh - 55px);
  box-sizing: border-box;
  padding: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: fixed;
  top: 50px;
  overflow-y: auto;

  @media(max-width: 414px) {
    left: ${({openMenu}) => openMenu? '0' : '-100px'};
    z-index: 5;
    background-color: #fff;
  }

  @media(max-width: 834px) {
    z-index: 5;
    background-color: #fff;
  }
`;

export const MenuContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Divider = styled.hr`
  border: none;
  border-top: 1px solid #ccc;
  margin: 1rem 0;
`;

export const MenuTitles = styled.div`
  width: 90%;
  padding: 0 10px;
  margin-bottom: 10px;
  
  span{
    font-weight: 400;
    font-size: 1.1rem;
  }
`;

export const MenuItem = styled.div<ContainerProps>`
  width: 100%;
  min-height: ${({openMenu}) => openMenu? '40px' : '80px'};
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  flex-direction: ${({openMenu}) => openMenu? 'row' : 'column'};
  align-items: center;
  justify-content: ${({openMenu}) => openMenu? 'left' : 'center'};
  padding: 0 10px;
  box-sizing: border-box;
  column-gap: 15px;

  &:hover{
    background-color: ${({theme}) => theme.colors.bgColor};
  }
`;

export const ButtonIcon = styled.img`
  width: 22px;
`;

export const MenuItemDescription = styled.span<ContainerProps>`
  font-weight: ${({openMenu}) => openMenu? '400' : '300'};
  font-size: ${({openMenu}) => openMenu? '0.9rem' : '0.7rem'};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  width: 90%;
  color: ${({theme}) => theme.colors.primary};

  &.active{
    span{
      font-weight: 700;
    }
    div{
      background-color: ${({theme}) => theme.colors.bgColor};
    }
  }
`;