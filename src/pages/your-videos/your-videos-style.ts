import styled from "styled-components";

interface ContainerProps {
  openMenu: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  max-width: 1600px;
  display: flex;
  flex-wrap: wrap;
  column-gap: 25px;
  row-gap: 20px;
  padding: ${({openMenu}) => openMenu? '70px 50px 0 330px' : '70px 10px 0 100px'};
  box-sizing: border-box;
`;
export const YourVideosContainer = styled.div`
  width: 100%;
`;

export const UserContainer = styled.div`
  width: 100%;
  height: 100px;
`;