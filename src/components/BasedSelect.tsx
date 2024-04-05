import React from 'react';
import styled from 'styled-components';

interface BasedSelectProps {
  width?: string;
  borderRadius?: string;
  className?: string;
}

interface SelectProps extends BasedSelectProps {
  options: { value: string; label: string }[];
}

const StyledSelect = styled.select<BasedSelectProps>`
  border: 1px solid #cecece;
  height: 36px;
  padding: 10px;
  color: #7d7d7d;

  /* Props로 전달된 width와 borderRadius를 적용 */
  ${({ width }) => width && `width: ${width};`}
  ${({ borderRadius }) => borderRadius && `border-radius: ${borderRadius};`}
`;

const BasedSelect: React.FC<SelectProps> = ({
  width,
  borderRadius,
  className,
  options,
  ...rest
}) => (
  <StyledSelect {...rest} style={{ width, borderRadius }} className={className}>
    {options.map((option) => (
      <option key={option.value} value={option.value}>
        {option.label}
      </option>
    ))}
  </StyledSelect>
);

export default BasedSelect;
