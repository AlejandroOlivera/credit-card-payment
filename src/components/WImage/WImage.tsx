import React from 'react';

interface ImageProps {
  src: string;
  alt: string;
}

export const WImage: React.FC<ImageProps> = ({ src, alt }) => (
  <img width={50} src={src} alt={alt} />
);
