import { Info } from "../info/Info";
import { Menu } from "../menu/Menu";

export const Output = ({ output }) => {
  switch (output?.type) {
    case "menu":
      return <Menu items={output.items} />;
    case "info":
      return <Info specs={output.specs} imageUrl={output.imageUrl} />;
    case "service":
      return output.texts.map((text) => <p key={text}>{text}</p>);
    default:
      return null;
  }
};
