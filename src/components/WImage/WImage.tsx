import React from 'react';

interface ImageProps {
  src: string;
  alt: string;
}

export const WImage: React.FC<ImageProps> = ({ src, alt }) => {
  return <img src={src} alt={alt} />;
};
