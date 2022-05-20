import * as React from "react";
import { data } from "./utils/data";
import { WordType } from "./utils/types";
import { WordCloudContainer, WordFlexWrapper } from "./styles";
import { weightedWordPercent, mountainSortWords } from "./utils";
import WordInput from "./word-input/word-input";
import WeightedWord from "./weighted-word/weighted-word";

const WordCloud = () => {
  const [words, setWords] = React.useState<WordType[]>(data);

  const sorted = React.useMemo(() => {
    return mountainSortWords(weightedWordPercent(words));
  }, [words]);

  const handleSubmit = React.useCallback(
    (word: string) => {
      if (!word) return;
      const match = words.filter(
        (w) => w?.word.trim().toLowerCase() === word.trim().toLowerCase()
      );
      if (match.length) {
        const update = words.map((w) => {
          if (w?.word.trim().toLowerCase() === word.trim().toLowerCase()) {
            return { ...w, weight: w.weight + 1 };
          }
          return w;
        });
        setWords(update);
        return;
      }
      setWords((state) => [
        ...state,
        { id: words.length + 1, word: word.toLowerCase(), weight: 1 },
      ]);
    },
    [words]
  );

  return (
    <>
      <WordCloudContainer>
        <WordFlexWrapper paddingX={8}>
          {sorted.map((word, i) => (
            <WeightedWord key={`word-${i}`} size={word?.weight}>
              {word?.word}
            </WeightedWord>
          ))}
        </WordFlexWrapper>
      </WordCloudContainer>
      <WordInput handleSubmit={handleSubmit} />
    </>
  );
};

export default WordCloud;
