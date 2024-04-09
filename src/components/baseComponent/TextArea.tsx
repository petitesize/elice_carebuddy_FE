import React from 'react';
import styled from 'styled-components';

interface TextAreaProps {
  placeholder?: string;
  width?: string;
  height?: string;
  fontSize?: string;
  padding?: string;
  margin?: string;
}

const StyledTextArea = styled.textarea<TextAreaProps>`
  width: ${(props) => props.width || '300px'};
  height: ${(props) => props.height || '100px'};
  border: 1px solid #cecece;
  font-size: ${(props) => props.fontSize || '16px'};
  padding: ${(props) => props.padding || '5px'};
  margin: ${(props) => props.margin || '10px'};
  outline: none;
  resize: none;
`;

const TextArea: React.FC<TextAreaProps> = ({ placeholder, ...rest }) => {
  return <StyledTextArea placeholder={placeholder} maxLength={300} {...rest} />;
};

export default TextArea;
