import React from 'react';
import styled from 'styled-components';

interface TextAreaProps {
  placeholder?: string;
  width?: string;
  height?: string;
  fontSize?: keyof typeof fontSizeMap;
  padding?: string;
  margin?: string;
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

const StyledTextArea = styled.textarea<TextAreaProps>`
  font-family: 'Pretendard-Regular', sans-serif;
  width: ${(props) => props.width || '300px'};
  height: ${(props) => props.height || '100px'};
  border: 1px solid var(--color-grey-2);
  font-size: ${(props) => props.fontSize ? fontSizeMap[props.fontSize] : 'var(--font-size-ft-1)'}; //14
  padding: ${(props) => props.padding || '5px'};
  margin: ${(props) => props.margin || '0'};
  color: ${(props) => props.color || 'var(--color-black)'};
  outline: none;
  resize: none;
`;

const TextArea: React.FC<TextAreaProps> = ({ placeholder, ...rest }) => {
  return <StyledTextArea placeholder={placeholder} maxLength={300} {...rest} />;
};

export default TextArea;
