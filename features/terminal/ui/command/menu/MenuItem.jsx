import { useTerminal } from "../../../model/terminal.context";
import styles from "./Menu.module.css";

export const MenuItem = ({ command, description }) => {
  const { dispatch } = useTerminal();
  const onClick = () => {
    dispatch({ type: "execCommand", payload: command });
  };
  return (
    <div className={styles.item} onClick={onClick}>
      <p
        style={{
          fontSize: 15,
        }}
      >
        {command}
      </p>
      <p>{description}</p>
    </div>
  );
};
