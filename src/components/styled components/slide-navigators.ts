import styled from "styled-components";

export const SlideNavigator = styled.button<{
  radius?: number;
  background?: string;
  active?: boolean;
  width?: number;
  height?: number;
}>`
  border: none;
  border-radius: ${({ radius }) => radius || 50}px;
  background: ${({ background }) => background || "#CEEAD6"};
  width: ${({ width }) => width || 18}px;
  height: ${({ height }) => height || 18}px;
`;

