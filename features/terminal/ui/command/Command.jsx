import Input from "./input/Input.js";
import { Output } from "./output/Output.jsx";

export const Command = ({ command, output, onSubmit }) => {
  return (
    <div>
      <Input command={command} onSubmit={(command) => onSubmit(command)} />
      {output && <Output output={output} />}
    </div>
  );
};


