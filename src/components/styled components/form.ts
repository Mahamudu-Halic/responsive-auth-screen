import styled from "styled-components";

export const AuthForm = styled.form<{
  radius?: number;
  background?: string;
  padding?: number;
  border?: string;
  width?: string;
}>`
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 1rem;
  padding: 1rem;
  height: fit-content;
  min-width: 350px;
  width: ${({ width }) => width || "fit-content"};
  border-radius: ${({ radius }) => radius || 8}px;
  background: ${({ background }) => background || "#fff"};
  border: ${({ border }) => border || "1px solid #ccc"};
`;

export const Label = styled.label<{ color?: string; size?: number }>`
  display: block;
  color: ${({ color }) => color || "inherit"};
  font-size: ${({ size }) => size || 1}rem;
  margin-bottom: 5px;
`;

export const Input = styled.input<{
  color?: string;
  background?: string;
  padding?: string;
  border?: string;
  width?: string;
  radius?: number;
  size?: number;
}>`
  padding: ${({ padding }) => padding || "15px 10px"};
  width: ${({ width }) => width || "auto"};
  border-radius: ${({ radius }) => radius || 5}px;
  background: ${({ background }) => background || "white"};
  border: ${({ border }) => border || "1px solid #ccc"};
  color: ${({ color }) => color || "inherit"};
  font-size: ${({ size }) => size || 1}rem;
`;

export const TextArea = styled.textarea``;

export const FormGroup = styled.div``;
