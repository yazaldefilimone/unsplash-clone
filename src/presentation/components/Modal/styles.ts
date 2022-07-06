import styled from 'styled-components';

type ModalContainerProps = {
  active: boolean;
};
export const ModalContainer = styled.div<ModalContainerProps>`
  position: fixed;
  z-index: 999;
  top:0px;
  left: 0px;
  height: 100vh;
  width: 100vw;
  display: ${({ active }) => (active ? 'none' : 'flex')};
  align-items: center;
  justify-content: center;
  background-color: rgba(0,0,0,.3);
`;
