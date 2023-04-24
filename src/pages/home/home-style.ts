import styled from "styled-components";

interface ContainerProps {
  openMenu: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  max-width: 1600px;
  display: grid;
  grid-template-columns: ${({openMenu}) => openMenu? 'repeat(3, 1fr)' : 'repeat(4, 1fr)'};
  column-gap: 20px;
  row-gap: 50px;
  flex-wrap: wrap;
`;

export const MainContainer = styled.div<ContainerProps>`
  width: 100%;
  max-width: 1600px;
  display: flex;
  flex-direction: column;
  padding: ${({openMenu}) => openMenu? '140px 50px 0 290px' : '140px 10px 0 100px'};
  box-sizing: border-box;
`;
export const HomeContainer = styled.div`
  width: 100%;
`;