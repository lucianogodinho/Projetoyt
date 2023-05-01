import styled from "styled-components";

interface ContainerProps {
  openMenu?: boolean;
  hideModal?: boolean
}

interface ValidInput {
  valid: boolean
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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const UserName = styled.h1`
  margin: 0;
`;

export const Modal = styled.div<ContainerProps>`
  visibility: ${({hideModal}) => hideModal? 'hidden' : 'visible'};
  width: 100vw;
  height: 100vh;
  background-color: rgba(0,0,0,0.5);
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ModalContent = styled.div`
  width: 50vw;
  height: 80vh;
  background-color: white;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  padding: 0px 45px;
  box-sizing: border-box;
  row-gap: 20px;
`;

export const ModalTitle = styled.h1`
  margin: 0;
  text-align: center;
`;

export const CloseButton = styled.button`
  position: relative;
  top: -20px;
  left: 630px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  outline: none;
  cursor: pointer;
  background-color: #000;
  color: #fff;
  font-weight: 700;

  &:hover {
    background-color: red;
  }
`;

export const ThumbnailURL = styled.input<ValidInput>`
  width: 100%;
  height: 50px;
  border: ${({valid}) => valid? "1px solid #d3d3d3" : "1px solid red"};
  border-radius: 5px;
  font-size: 17px;
  padding: 0 10px;
  box-sizing: border-box;

  &:focus {
    border-color: ${({valid}) => valid? "#1a75ff" : "red"};
    border-width: 2px;
    outline: none;
  }
`
export const VideoTitle = styled.input<ValidInput>`
  width: 100%;
  height: 50px;
  border: ${({valid}) => valid? "1px solid #d3d3d3" : "1px solid red"};
  border-radius: 5px;
  font-size: 17px;
  padding: 0 10px;
  box-sizing: border-box;

  &:focus {
    border-color: ${({valid}) => valid? "#1a75ff" : "red"};
    border-width: 2px;
    outline: none;
  }
`
export const VideoDescription = styled.input<ValidInput>`
  width: 100%;
  height: 50px;
  border: ${({valid}) => valid? "1px solid #d3d3d3" : "1px solid red"};
  border-radius: 5px;
  font-size: 17px;
  padding: 0 10px;
  box-sizing: border-box;

  &:focus {
    border-color: ${({valid}) => valid? "#1a75ff" : "red"};
    border-width: 2px;
    outline: none;
  }
`
export const AddVideoButton = styled.button`
  width: 130px;
  height: 45px;
  border: none;
  background-color: #1a75ff;
  border-radius: 5px;
  color: #fff;
  font-weight: 600;
  font-size: 0.8rem;
  cursor: pointer;
  transition: .5s;

  &:hover {
    background-color: #005ce6;
  }
`;
export const ClearButton = styled.button`
  width: 130px;
  height: 45px;
  border: none;
  background-color: #1a75ff;
  border-radius: 5px;
  color: #fff;
  font-weight: 600;
  font-size: 0.8rem;
  cursor: pointer;
  transition: .5s;

  &:hover {
    background-color: #005ce6;
  }
`;