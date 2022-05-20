import { WordType } from "./types";

export const weightedWordPercent = (words: WordType[]): WordType[] => {
  let sorted = words?.sort((a, b) => (a.weight > b.weight ? -1 : 1));
  let max = sorted?.[0]?.weight;
  console.log(max);
  return words?.map((word) => {
    return {
      ...word,
      weight: (word?.weight / max) * 10,
    };
  });
};

// sort words small -> large -> small
export const mountainSortWords = (words: WordType[]): WordType[] => {
  let ordered: WordType[] = [];
  words.reverse().forEach((word, i) => {
    if (i % 2 === 0) ordered.push(word);
  });
  const arrayIsOdd = words.length % 2 !== 0;
  words.reverse().forEach((word, i) => {
    if ((arrayIsOdd && i % 2 !== 0) || (!arrayIsOdd && i % 2 === 0)) {
      ordered.push(word);
    }
  });
  return ordered;
};

export const randomNegative = (number: number): number => {
  const random = Math.random();
  if (random < 0.5) return -Math.abs(number);
  return number;
};

export const randomFontWeight = (weights = [300, 400, 500, 600, 700, 900]) => {
  return weights[Math.floor(Math.random() * weights.length)];
};

export const randomBrandColor = (brandColors: string[]): string => {
  const random = Math.floor(Math.random() * brandColors.length);
  return brandColors[random];
};
