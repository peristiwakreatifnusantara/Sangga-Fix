'use client';

import styled from 'styled-components';
import Image, { ImageProps } from 'next/image';

interface WrapperProps {
    $width?: string;
    $height?: string;
    $borderRadius?: string;
}

const Wrapper = styled.div<WrapperProps>`
  position: relative;
  width: ${(props) => props.$width || '100%'};
  height: ${(props) => props.$height || 'auto'};
  
  img {
    border-radius: ${(props) => props.$borderRadius || '0'};
    width: 100%;
    height: 100%;
  }
`;

interface ImageWrapperProps extends ImageProps {
    widthCSS?: string;
    heightCSS?: string;
    borderRadius?: string;
}

const ImageWrapper = ({ widthCSS, heightCSS, borderRadius, style, ...props }: ImageWrapperProps) => {
    return (
        <Wrapper $width={widthCSS} $height={heightCSS} $borderRadius={borderRadius} style={style}>
            <Image {...props} />
        </Wrapper>
    );
};

export default ImageWrapper;
