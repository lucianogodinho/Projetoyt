import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const CardVideo = styled(NavLink)`
  width: 180px;
  height: 380px;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  justify-content: flex-start;
`;

export const ThumbnailShortVideo = styled.img`
  width: 100%;
  min-height: 350px;
  border-radius: 10px;
`;

export const TitleShortVideo = styled.span`
  color: ${({theme}) => theme.colors.primary};
  font-weight: 600;
`;

export const DetailsShortVideo = styled.span`
  color: #8c8c8c;
  font-size: 14px;
`;