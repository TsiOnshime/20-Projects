import Caret from "./Caret";
import classNames from "classnames"
const UserTypings = ({
  userInput,
  className,
  words,
}: {
  userInput: string;
  words: string;
  className?: string;
}) => {
  const typedCharacters = userInput.split("");

  return (
    <div className={className}>
      {typedCharacters.map((char, index) => {
        return (
          <Character
            key={`${char}_${index}`}
            actual={char}
            expected={words[index]}
          />
        );
      })}
      <Caret />
    </div>
  );
};
const Character = ({
  actual,
  expected,
}: {
  actual: string;
  expected: string;
}) => {
    const isCorrect = actual === expected
    const isWhiteSpace = expected === " ";
  
  return <span
  className={classNames({
    "text-red-500": !isCorrect && !isWhiteSpace,
    "text-primary": isCorrect && isWhiteSpace,
    "bg-red-500/50": !isCorrect && isWhiteSpace

  })}
  >{expected}</span>;
};
export default UserTypings;
