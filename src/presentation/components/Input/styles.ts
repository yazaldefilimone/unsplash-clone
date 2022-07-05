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
