import styled from "styled-components";

interface ContainerProps {
  openMenu: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  max-width: 1600px;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  padding: ${({openMenu}) => openMenu? '100px 50px 0 330px' : '100px 10px 0 100px'};
  box-sizing: border-box;
`;