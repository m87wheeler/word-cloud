import styled from "styled-components";
import { randomNegative } from "../utils";

type WeightedWordProps = {
  size: number;
};

export const WeightedWordContainer = styled.p.attrs(
  ({ size }: { size: number }) => ({
    style: {
      fontSize: `clamp(${size / 5}vh, calc(${size} * 1vw), ${size}vh)`,
      transform: `translateY(${randomNegative(Math.random() * 2.5)}px)`,
    },
  })
)<WeightedWordProps>`
  position: relative;
  padding: 0.5rem;
  margin: 0;
  font-family: sans-serif;
  text-align: center;
  line-height: 1;
  text-transform: capitalize;
  transition: font-size 250ms ease-in-out;
`;
