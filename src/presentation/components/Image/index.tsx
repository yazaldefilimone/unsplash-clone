import React, { FunctionComponent } from 'react';

import { ImageContainer, ImageStyle } from './styles';

type ImageProps = {
  id?: string;
  src: string;
  description: string;
  userName: string;
  className?: string;
};

export const Image: FunctionComponent<ImageProps> = ({ src, userName, className }) => {
  return (
    <ImageContainer className={className}>
      <img src={src} alt="unsplash-clone image" />
      <ImageStyle>
        <div>
          <button>Delete</button>
          <span>{userName}</span>
        </div>
      </ImageStyle>
    </ImageContainer>
  );
};
