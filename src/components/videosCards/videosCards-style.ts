import styled from "styled-components";

interface ChannelProps {
  openMenu: boolean;
}

export const Container = styled.div`
  width: 100%;
  cursor: pointer;
`;

export const Banner = styled.img`
  width: 100%;
  height: 210px;
  border-radius: 12px;
`

export const TitleContainer = styled.div`
  width: 100%;
  display: flex;
`;

export const ChannelImage = styled.div<ChannelProps>`
  background-color: beige;
  width: ${({openMenu}) => openMenu? '55px' : '60px'};
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.span`
  font-weight: 600;
  color: #0f0f0f;
`;

export const TextCard = styled.span`
  color: #8c8c8c;
  font-size: 14px;
`;