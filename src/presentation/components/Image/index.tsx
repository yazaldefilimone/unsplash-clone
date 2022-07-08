import React, { FunctionComponent } from 'react';

import { ImageContainer, ImageStyle } from './styles';

type ImageProps = {
  id?: string;
  src: string;
  description: string;
  userName: string;
  SetActive: Function;
  className?: string;
};

export const Image: FunctionComponent<ImageProps> = ({ id, src, userName, className, SetActive }) => {
  function handlerDelete() {
    SetActive(id, false);
  }
  return (
    <ImageContainer className={className}>
      <img src={src} alt="unsplash-clone image" />
      <ImageStyle>
        <div>
          <button onClick={handlerDelete}>Delete</button>
          <span>{userName}</span>
        </div>
      </ImageStyle>
    </ImageContainer>
  );
};
