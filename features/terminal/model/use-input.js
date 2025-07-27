import { useState } from "react";

export const useInput = (command, onSubmit) => {
  const [_command, setCommand] = useState(command ? command : "");

  const handleSubmit = (e) => {
    e.preventDefault();
    setCommand("");
    return onSubmit(_command);
  };
  return { _command, setCommand, handleSubmit };
};
