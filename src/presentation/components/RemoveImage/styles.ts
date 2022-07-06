import styled from 'styled-components';

export const RemoveImageHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
  > h2 {
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
