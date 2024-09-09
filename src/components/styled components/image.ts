import Image from "next/image";
import styled from "styled-components";

export const ImageComponent = styled(Image).attrs({
  fill: true,
  quality: 100,
  size: "100vw",
})`
  object-position: center;
`;