"use client";
import { createContext, useContext, useReducer } from "react";
import { COMMAND_CONTENTS } from "../config/commands";
import { escapeHTML } from "../lib/utils";

const TerminalContext = createContext();

const terminalReducer = (state, action) => {
  switch (action.type) {
    case "setLoading":
      return {
        ...state,
        isLoading: true,
        executingCommand: {
          ...state,
          command: action.payload,
          output: "Loading...",
        },
      };
    case "execCommand":
      let output;

      if (`${action.payload}` in COMMAND_CONTENTS) {
        output = COMMAND_CONTENTS[`${action.payload}`]();
      } else if (action.payload === "clear") {
        return {
          ...state,
          isLoading: false,
          executingCommand: null,
        };
      } else {
        output = COMMAND_CONTENTS.error(escapeHTML(action.payload));
      }
      return {
        ...state,
        inputCommand: "",
        isLoading: false,
        executingCommand: { command: action.payload, output },
      };
    case "changeInputCommand":
      return { ...state, inputCommand: action.payload };
    case "updateHistory":
      return { ...state, history: [...state.history, action.payload] };
    default:
      throw new Error();
  }
};

export const TerminalProvider = ({
  children,
  showNotification,
  hideNotification,
}) => {
  const [state, dispatch] = useReducer(terminalReducer, {
    executingCommand: { command: "help", output: COMMAND_CONTENTS.help() },
    isLoading: false,
    inputCommand: "",
    history: [],
  });

  return (
    <TerminalContext.Provider
      value={{ state, dispatch, showNotification }}
    >
      {children}
    </TerminalContext.Provider>
  );
};

export const useTerminal = () => {
  const context = useContext(TerminalContext);
  if (!context) {
    throw new Error("useTerminal must be used within a TerminalProvider");
  }
  return context;
};
