import styled from 'styled-components';

export const ToastContainer = styled.div<{ value: boolean }>`
  position: fixed;
  top: 2rem;
  right: ${({ value }) => (value ? '1rem' : '-60%')};
  transition: .4s all ease;
`;
export const ToastContent = styled.div<{ status: string }>` 
  display: flex;
  align-items: center;
  gap: 1rem;
  background-color: #fff;
  box-shadow: 0px 0px 2px 1px rgb(0, 0, 0, .3);
  padding: 1rem;
  border-left: 5px solid ${({ status }) =>
    status === 'Error' ? 'var(--red-color)' : 'var(--green-color)'};
  border-radius:.4rem;
  > i {
    padding: .5rem;
    color: #fff;
    background-color: ${({ status }) =>
      status === 'Error' ? 'var(--red-color)' : 'var(--green-color)'};
    font-size: 1.4rem;
    border-radius:.3rem;
  }
`;
export const ToastMessage = styled.div`
  > span {
    color: var(--title-color);
  }
 > p {
    color: var(--text-color);
    font-size: var(--small-font-size);
  }
`;
export const ToastButton = styled.button<{ status: string }>`
  border: none;
  background: none;
  &:hover {
    > i {
      color: ${({ status }) => (status === 'Error' ? 'var(--red-color)' : 'var(--green-color)')};
    }
  }
  > i {
    color: var(--text-color);
    font-size: 1.3rem;

  }
`;
