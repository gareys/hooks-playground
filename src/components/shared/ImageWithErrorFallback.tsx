import { DetailedHTMLProps, ImgHTMLAttributes } from 'react';

export const ImageWithErrorFallback = (
  props: DetailedHTMLProps<
    ImgHTMLAttributes<HTMLImageElement>,
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
