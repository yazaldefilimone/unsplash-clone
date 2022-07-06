import styled from 'styled-components';

export const CreateImageHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;

  > h2 {
    font-size: var(--h2-font-size);
    color: var(--title-color);

  }
  > button {
    &:hover {
      > i {
        color: var(--green-color);

      }
    }
    > i {
      color: var(--text-color);
    font-size: 1.5rem;
    }
   
  }
`;
