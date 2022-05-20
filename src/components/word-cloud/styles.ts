import styled from "styled-components";
import { randomNegative } from "./utils";

export const WordCloudContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 80vh;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  border: 3px solid black;
`;

export const WordFlexWrapper = styled.div<{ paddingX: number }>`
  max-width: 800px;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  padding: ${(p) => `0 ${p.paddingX * 0.25}rem`};
`;
