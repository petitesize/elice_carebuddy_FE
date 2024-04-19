import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  shape?: 'round' | 'square';
  fontSize?: keyof typeof fontSizeMap;
  margin?: string;
  padding?: string;
  height?: string;
  onClick?: () => void; 
  preventClick?: boolean; // preventClick 속성 추가
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

const ButtonElement = styled.button<ButtonProps>`
  width: auto;
  background-color: ${(props) =>
    props.variant === 'primary'
      ? 'var(--color-green-main)'
      : 'var(--color-white)'};
  color: ${(props) =>
    props.variant === 'primary'
      ? 'var(--color-white)'
      : 'var(--color-black-main)'};
  font-size: ${(props) =>
    props.fontSize
      ? fontSizeMap[props.fontSize]
      : 'var(--font-size-md-1)'}; // Default font size: var(--font-size-md-1)
  border: ${(props) =>
    props.variant === 'secondary' ? '1px solid var(--color-grey-2)' : '1px solid var(--color-grey-2)'};
  border-radius: ${(props) => (props.shape === 'round' ? '20px' : '0')};
  cursor: ${(props) => (props.preventClick ? 'default' : 'pointer')}; // 클릭 비활성화 시 커서 변경
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin: ${(props) =>
    props.margin || '0'}; // margin prop 값 또는 기본값 '0' 사용
  padding: ${(props) => props.padding || '0'};
  transition: all 0.5s;
  height: ${(props) => props.height || '36px'};

  &:hover {
    ${(props) =>
      !props.preventClick && // preventClick가 true이면 hover 스타일 적용하지 않음
      `
      background-color: ${
        props.variant === 'primary' ? '#567760' : '#d4d4d4'
      };
      color: ${
        props.variant === 'primary'
          ? 'var(--color-white)'
          : 'var(--color-grey-1)'
      };
    `}
  }
`;


const Text = styled.div`
  font-family: 'Pretendard-Regular', sans-serif;
`;

const UIButton: React.FC<ButtonProps> = ({
  onClick,
  children,
  variant,
  shape,
  fontSize,
  margin,
  padding,
  height,
  preventClick
}) => {
  const actualVariant = variant || 'secondary'; // variant가 없는 경우에는 'secondary'로 설정
  const actualShape = shape || 'square'; // shape가 없는 경우에는 'square'로 설정

  return (
    <ButtonElement
      onClick={onClick}
      variant={actualVariant}
      shape={actualShape}
      fontSize={fontSize}
      margin={margin}
      padding={padding}
      height={height}
      preventClick={preventClick}
    >
      <Text>{children}</Text>
    </ButtonElement>
  );
};

export default UIButton;
