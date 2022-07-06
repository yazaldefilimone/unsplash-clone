import styled from 'styled-components';

export const ImageContainer = styled.div`
  display: block;
  height: 100%;
  width: 100%;
  position: relative;
  overflow: hidden;
  border-radius: .5rem;
  > img {
    /* max-width: -webkit-fill-available;
    height: -webkit-fill-available !important;
    width: -webkit-fill-available !important;
    object-fit: cover; */
    height: inherit;
    object-fit: cover

  }
  &:hover {
    div {
      div {
        bottom: 0px;
        background-color: rgba(0,0,0,.4);

      }
    }
  }
`;
export const ImageStyle = styled.div`
  position: absolute;
  bottom: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
 
  > div {
    transition: .4s;
    position: relative;
    bottom: -100%;
    width: 100%;
    height: 100%;
    > span {
      width: 100%;
      position: absolute;
      bottom: 0px;
      left: 0px;
      padding: .2rem .5rem;
      color: #fff;
      font-weight: 600;
      font-size: var(--h1-font-size);
    }
    > button {
      transition: .4s;
      position: absolute;
      top: .5rem;
      right: 1rem;
      padding: .2rem .2rem;
      border-radius: .4rem;
      border: 1px solid var(--red-color);
      color: #fff;
      &:hover {
        background-color: var(--red-color);
      }
    }
  }
`;
