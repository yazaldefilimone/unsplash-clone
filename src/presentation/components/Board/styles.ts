import styled from 'styled-components';

export const BoardContainer = styled.section`
  max-width: 1300px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;

  @media screen and (max-width: 990px) {
    gap: 1.5rem;
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 790px) {
    gap: .5rem;
    margin:0px .5rem ;
  }
  /* grid-template-rows: repeat(6, 300px); */
  > div {
    display: grid;
    grid-gap:2rem;
    &:first-child{
      > *:nth-child(2n){
      height: 580px;
      @media screen and (max-width: 790px) {
        height: 300px;

  }
      }
    }
    &:nth-child(2){
      > *:nth-child(2n+3){
      height: 580px;
      @media screen and (max-width: 790px) {
        height: 300px;

  }
    }
    }
    &:nth-child(3){
      > *:nth-child(2n+1){
      height: 580px;
      @media screen and (max-width: 790px) {
        height: 300px;

  }
    }
    }
  }
 
`;

export const Loading = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  
`;
export const Spinner = styled.span`
  display: 'inline-block';
  width: 40px;
  height: 40px;
  border: 5px solid rgba(0,0,0, .5);
  border-radius: 50%;
  border-left-color: #fff;
  animation: spinner .3s linear infinite;

  @keyframes spinner {
    to{
      transform: rotate(360deg);
    };
  }
`;
