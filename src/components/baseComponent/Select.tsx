import React from 'react';
import styled from 'styled-components';

interface BasedSelectProps {
  width?: string;
  borderRadius?: string;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

interface SelectProps extends BasedSelectProps {
  options: { value: string; label: string }[];
}

const StyledSelect = styled.select<BasedSelectProps>`
  border: 1px solid var(--color-grey-2);
  padding: 8px 12px;
  color: var(--color-grey-1);
  line-height: 1.2;

  /* Props로 전달된 width와 borderRadius를 적용 */
  ${({ width }) => width && `width: ${width};`}
  ${({ borderRadius }) => borderRadius && `border-radius: ${borderRadius};`}
`;

const BasedSelect: React.FC<SelectProps> = ({
  width,
  borderRadius,
  options,
  onChange,
}) => (
  <StyledSelect width={width} borderRadius={borderRadius} onChange={onChange}>
    {options.map((option) => (
      <option key={option.value} value={option.value}>
        {option.label}
      </option>
    ))}
  </StyledSelect>
);

export default BasedSelect;
