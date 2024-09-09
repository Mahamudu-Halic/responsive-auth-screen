import Link from "next/link";
import styled from "styled-components";

type Align = "center" | "left" | "right";

export const Text = styled.p<{ align?: Align; color?: string; size?: number }>`
  color: ${({ color }) => color || "inherit"};
  font-size: ${({ size }) => size || 1}rem;
  line-height: 24px;
  display: block;

  ${({ align }) => {
    switch (align) {
      case "center":
        return `
            text-align: center;
                `;
      case "left":
        return `
            text-align: left;
                `;
      case "right":
        return `
            text-align: right;
                `;
      default:
        return ``;
    }
  }}
`;

export const Span = styled.span<{ color?: string; size?: number }>`
  color: ${({ color }) => color || "inherit"};
  font-size: ${({ size }) => size || 1}rem;
`;

export const UrlLink = styled(Link)<{ color?: string; decoration?: string; align?: string;}>`
  color: ${({ color }) => color || "inherit"};
  text-decoration: ${({ decoration }) => decoration || "inherit"};
  text-align: ${({ align }) => align || "inherit"};
`;

export const Divider = styled.hr`
  width: 80px;
`