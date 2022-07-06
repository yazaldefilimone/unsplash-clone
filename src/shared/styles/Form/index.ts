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
  background: var(--body-color);
  /* display: flex;
  flex-direction:column;
  gap:.8rem; */
  > div {
    > img {
      margin-left: .2rem;
      width: 15rem;
      margin-bottom: .9rem;
    }
  }
  > h2 {
    font-size: var(--h2-font-size);
    color: var(--title-color);
    margin-bottom: 1rem;
  }
  > p {
    margin-top: 1rem;
    a {
      color: var(--red-color);
    }
  }
`;
