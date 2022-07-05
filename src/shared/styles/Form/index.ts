import styled from 'styled-components';

export const FormContainer = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FormContent = styled.div`
  display: flex;
  flex-direction:column;
  gap: 1rem;
  width: 100%;
`;
export const Form = styled.div`
  width: 450px;
  border: 2px solid var(--gray-color);
  padding: 2rem 1rem;
  border-radius: .4rem;
  /* display: flex;
  flex-direction:column;
  gap:.8rem; */
  > h2 {
    font-size: var(--h2-font-size);
    margin-bottom: 1rem;
    color: var(--title-color);
  }
  > p {
    margin-top: 1rem;
    a {
      color: var(--red-color);
    }
  }
`;
