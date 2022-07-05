import styled from 'styled-components';

type InputContainerProps = {
  error: any;
};
export const InputContainer = styled.div<InputContainerProps>`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  > label {
    display: block;
    margin-bottom: .3rem;
    font-weight: var(--font-semi-bold);
    color: var(--text-color);
  }
  > input {
    width: 100%;
    min-width: 20rem;
    padding: .7rem .4rem;
    border: 2px solid ${({ error }) => (error ? 'var(--red-color)' : 'var(--gray-color)')};
    border-radius: .4rem;
    transition: .4s;

    &:hover {
      border-color: var(--green-color);
    }
    
  }

  > span {
    color: var(--red-color);
    display: block;
    font-size: var(--smaller-font-size);
  }
   
;
`;
export const InputContent = styled.div<InputContainerProps>`
  width: 100%;
  border: 2px solid ${({ error }) => (error ? 'var(--red-color)' : 'var(--gray-color)')};
  border-radius: .4rem;
  min-width: 20rem;
  display: flex;
  align-items: center;
  transition: .4s;
  &:hover {
      border-color: var(--green-color);
      > i {
        color: var(--green-color);
      }
    }
  > i {
    padding: .7rem 0px .7rem .7rem;
    font-size: 1.2rem;
    color: var(--text-color);
  }
  > input {
    width: 100%;
    padding: .7rem ;
  }
`;
