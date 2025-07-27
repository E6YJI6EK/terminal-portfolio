"use client";

import Link from "next/link";
import { useTerminal, TerminalProvider } from "../model/terminal.context";
import { Command } from "./command/Command";
import styles from "./Terminal.module.css";
import { useKeyboardShortcut } from "../../../shared/lib/use-keyboard-shortcut";

const _Terminal = () => {
  const { dispatch, state } = useTerminal();
  useKeyboardShortcut({
    key: "ArrowUp",
    handler: (e) => {
      e.preventDefault();
      dispatch({
        type: "changeInputCommand",
        payload: state.history[state.history.length - 1],
      });
    },
  });
  return (
    <>
      <div className={styles.textWrapper}>
        <p>
          Click or type{" "}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              dispatch({ type: "execCommand", payload: "help" });
            }}
          >
            &quot;help&quot; to show menu
          </a>
        </p>
        <p>
          Visit{" "}
          <Link href="" target="_blank" rel="noreferrer">
            Normal website
          </Link>
        </p>
      </div>
      <div className={styles.terminal}>
        <Command
          command={state.executingCommand.command}
          output={state.executingCommand.output}
        />
        {!state.isLoading && (
          <Command
            onSubmit={(command) => {
              dispatch({ type: "updateHistory", payload: command });
              dispatch({ type: "execCommand", payload: command });
            }}
          />
        )}
      </div>
    </>
  );
};

export const Terminal = ({ showNotification }) => {
  
  return (
    <TerminalProvider showNotification={showNotification}>
      <_Terminal />
    </TerminalProvider>
  );
};
