import React from 'react';
import styled from 'styled-components';

interface InputProps {
  fontSize?: keyof typeof fontSizeMap;
  margin?: string;
  padding?: string;
  width?: string;
  height?: string;
  color?: string;
  placeholder?: string;
  type?: string;
}

const fontSizeMap = {
  'sm-1': 'var(--font-size-sm-1)', // 12
  'ft-1': 'var(--font-size-ft-1)', // 14
  'md-1': 'var(--font-size-md-1)', // 16
  'md-2': 'var(--font-size-md-2)', // 18
  'hd-1': 'var(--font-size-hd-1)', // 20
  'hd-2': 'var(--font-size-hd-2)', // 22
  'lg-1': 'var(--font-size-lg-1)', // 26
  'lg-2': 'var(--font-size-lg-2)', // 32
};

const InputBoxElement = styled.input<InputProps>`
  font-family: 'Pretendard-Regular', sans-serif;
  font-size: ${(props) => props.fontSize ? fontSizeMap[props.fontSize] : 'var(--font-size-ft-1)'}; //14
  border: 1px solid var(--color-grey-2); // 항상
  margin: ${(props) => props.margin || '0'};
  padding: ${(props) => props.padding || '5px'};
  width: ${(props) => props.width || '300px'};
  height: ${(props) => props.height || '30px'};
  color: ${(props) => props.color || 'var(--color-black)'};
  outline: none;
`;

const InputBox: React.FC<InputProps> = ({ fontSize, margin, padding, width, height, color, placeholder, type }) => {
  return (
    <InputBoxElement
      fontSize={fontSize}
      margin={margin}
      padding={padding}
      width={width}
      height={height}
      color={color}
      placeholder={placeholder}
      type={type}
    />
  );
};

export default InputBox;
