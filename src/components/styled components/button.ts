import styled from "styled-components";

type Variant =
  | "primary"
  | "secondary"
  | "success"
  | "premium"
  | "destructive"
  | "disabled"
  | "outlined"
  | "standard";

export const Button = styled.button<{
  variant?: Variant;
  position?: string;
  color?: string;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.7rem;
  font-size: 1.2rem;
  gap: 10px;
  background: none;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  color: ${({ color }) => color || "inherit"};
  filter: brightness(1);
  position: ${({ position }) => position || "relative"};
  &:active {
    filter: brightness(0.8);
  }

  ${({ variant }) => {
    switch (variant) {
      case "primary":
        return `
              background: #0c73f5;
            `;
      case "outlined":
        return `
              border: none;
            `;
      case "secondary":
        return `
              background: #7828c8;
            `;
      case "success":
        return `
              background: #16c965;
            `;
      case "premium":
        return `
              background: linear-gradient(to right, red, blue);
            `;
      case "destructive":
        return `
              background: #ff0000;
            `;
      case "disabled":
        return `
              background: #263238;
            `;
      case "standard":
        return `
              background: #000;
            `;
      default:
        return `
              background: none;
              border: solid 1px #000;
            `;
    }
  }}
`;
