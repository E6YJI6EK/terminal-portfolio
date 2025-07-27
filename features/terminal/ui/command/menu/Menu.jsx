import { MenuItem } from "./MenuItem";

export const Menu = ({ items }) => {
  return (
    <>
      {items.map(({ command, description }) => (
        <MenuItem key={command} description={description} command={command} />
      ))}
    </>
  );
};
