import * as React from "react";

interface Props {
  handleSubmit: (word: string) => void;
}

const WordInput = ({ handleSubmit }: Props) => {
  const [value, setValue] = React.useState("");

  return (
    <div>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <button onClick={() => handleSubmit(value)}>Submit Word</button>
    </div>
  );
};

export default WordInput;
