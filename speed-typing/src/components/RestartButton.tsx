import * as React from "react";
import { MdRefresh } from "react-icons/md";

const RestartButton = ({
  onRestart: handleRestart,
  className = "",
}: {
  onRestart: () => void;
  className?: string;
}) => {
   
const buttonRef = React.useRef<HTMLButtonElement>(null);

const handleClick = () => {
    buttonRef.current?.blur();
    handleRestart();
}


  return (
    <button
      ref={buttonRef}
      onClick={handleClick}
      className={`bg-black rounded px-8 py-2 hover:bg-slate-700/50 ${className}`}
    >
      {
        MdRefresh({
          className: "w-6 h-6 text-slate-500",
        }) as React.ReactElement
      }
    </button>
  );
};

export default RestartButton;
