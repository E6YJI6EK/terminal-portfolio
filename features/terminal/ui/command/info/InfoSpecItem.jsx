import { useTerminal } from "../../../model/terminal.context";

export const InfoSpecItem = ({ name, value, copyOnClick }) => {
  const { showNotification } = useTerminal();
  const onClick = () => {
    if (!copyOnClick) return;
    navigator.clipboard.writeText(value);
    showNotification(`${name} copied to clipboard!`);
  };
  return (
    <p
      style={{
        cursor: copyOnClick ? "pointer" : "default",
      }}
      onClick={onClick}
    >
      {name}: {value}
    </p>
  );
};
