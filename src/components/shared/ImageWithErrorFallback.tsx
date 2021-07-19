import React from 'react';

export const ImageWithErrorFallback = (
  props: React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  >
) => (
  <img
    onError={(e) => {
      e.currentTarget.src = '';
    }}
    {...props}
  />
);
