import * as React from "react";
import { randomBrandColor, randomFontWeight } from "../utils";
import { brandColors } from "../utils/data";
import { WeightedWordContainer } from "./styles";

type Props = {
  size: number;
  children?: React.ReactNode;
};

const WeightedWord = ({ children, ...props }: Props) => {
  const ref = React.useRef<HTMLDivElement | null>(null);

  React.useLayoutEffect(() => {
    if (!ref || !ref.current) return;
    const styles = ref.current.style;

    if (styles.fontWeight) return;
    styles.fontWeight = `${randomFontWeight()}`;

    if (styles.color) return;
    styles.color = randomBrandColor(brandColors);
  }, []);

  return (
    <WeightedWordContainer ref={ref} size={props?.size}>
      {children}
    </WeightedWordContainer>
  );
};

export default WeightedWord;
