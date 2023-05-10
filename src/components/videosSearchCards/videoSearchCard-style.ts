import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  cursor: pointer;
  display: flex;
  column-gap: 10px;

  @media(max-width: 600px) {
    flex-direction: column;
    width: 98%;
  }
`;

export const Banner = styled.div`
  min-width: 300px;
  max-width: 300px;
  height: 160px;
  border-radius: 12px;
  background-size: cover;
  background-position: 50% 50%;

  @media(max-width: 600px) {
    min-width: 480px;
    max-width: 480px;
    height: 260px;
  }

  @media(max-width: 414px) {
    min-width: 100%;
    max-width: 100%;
    height: 190px;
  }
`

export const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media(max-width: 600px) {
    margin-top: 5px;
  }
`;

export const ChannelImage = styled.div`
  background-color: beige;
  min-width: 25px;
  max-width: 25px;
  min-height: 25px;
  max-height: 25px;
  font-size: 12px;
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

export const ChannelContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

export const Title = styled.span`
  font-weight: 500;
  color: #0f0f0f;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; 
  -webkit-box-orient: vertical;
  text-align: justify;
`;

export const TextCard = styled.span`
  color: #8c8c8c;
  font-size: 11px;
`;
export const DescriptionContainer = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; 
  -webkit-box-orient: vertical;
  margin-top: 20px;
  text-align: justify;

  @media(max-width: 600px) {
    margin-top: 0px;
  }
`;