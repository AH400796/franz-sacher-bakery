import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #44443d8d;
  backdrop-filter: blur(2px);
`;

export const ModalWindow = styled.div`
  max-width: calc(100vw - 50px);
  max-height: calc(100vh - 50px);
  padding: 10px;
  background-color: #feffe1;
  box-shadow: 3px 3px 9px 5px #453432;
  border-radius: 2px;
  overflow: hidden;
`;
