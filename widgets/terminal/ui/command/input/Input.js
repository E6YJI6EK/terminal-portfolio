"use client";

import { useInput } from "../../../model/use-input";
import styles from "./Input.module.css";

export default function Input({ command, onSubmit }) {
  const { _command, setCommand, handleSubmit } = useInput(command, onSubmit);
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <label htmlFor="command">
        <span style={{ color: "#ff9e64" }}>λ</span> ::{" "}
        <span style={{ color: "var(--primary)" }}>~</span>{" "}
        <span style={{ color: "var(--secondary)" }}>&gt;&gt;</span>
      </label>

      <input
        type="text"
        className={styles.input}
        value={command ? command : _command}
        onChange={(e) => setCommand(e.target.value)}
        disabled={command ? true : false}
        ref={(input) => input && !command && input.focus()}
        autoFocus={command === ""}
      />
    </form>
  );
}
