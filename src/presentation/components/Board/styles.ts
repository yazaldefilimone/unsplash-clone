import styled from 'styled-components';

export const BoardContainer = styled.section`
  max-width: 1300px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
  /* grid-template-rows: repeat(6, 300px); */
  > div {
    display: grid;
    grid-gap:2rem;
    &:first-child{
      > *:nth-child(2n){
      height: 580px;
      }
    }
    &:nth-child(2){
      > *:nth-child(2n+3){
      height: 580px;
    }
    }
    &:nth-child(3){
      > *:nth-child(2n+1){
      height: 580px;
    }
    }
  }
 
`;
