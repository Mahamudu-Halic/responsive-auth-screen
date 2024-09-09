import styled from "styled-components";

export const H1 = styled.h1<{ color?: string; transform?: string }>`
  text-transform: ${({ transform }) => transform || "inherit"};
  color: ${({ color }) => color || "inherit"};
`;

export const H2 = styled.h2<{ color?: string; transform?: string }>`
  text-transform: ${({ transform }) => transform || "inherit"};
  color: ${({ color }) => color || "inherit"};
`;

export const H3 = styled.h3<{ color?: string; transform?: string }>`
  text-transform: ${({ transform }) => transform || "inherit"};
  color: ${({ color }) => color || "inherit"};
`;

export const H4 = styled.h4<{ color?: string; transform?: string }>`
  text-transform: ${({ transform }) => transform || "inherit"};
  color: ${({ color }) => color || "inherit"};
`;

export const H5 = styled.h5<{ color?: string; transform?: string }>`
  text-transform: ${({ transform }) => transform || "inherit"};
  color: ${({ color }) => color || "inherit"};
`;

export const H6 = styled.h6<{ color?: string; transform?: string }>`
  text-transform: ${({ transform }) => transform || "inherit"};
  color: ${({ color }) => color || "inherit"};
`;
