"use client";

import { useTerminal, TerminalProvider } from "../model/terminal.context";
import { Command } from "./command/Command";
import styles from "./Terminal.module.css";

const _Terminal = () => {
  const { dispatch, state } = useTerminal();

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
          <a href="https://n.kavin.me" target="_blank" rel="noreferrer">
            Normal website
          </a>
        </p>
      </div>
      <div className={styles.terminal}>
        <Command
          command={state.executingCommand.command}
          output={state.executingCommand.output}
        />
        {!state.isLoading && (
          <Command
            onSubmit={(command) =>
              dispatch({ type: "execCommand", payload: command })
            }
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
