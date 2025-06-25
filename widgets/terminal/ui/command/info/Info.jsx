import Image from "next/image";
import styles from "./Info.module.css";
import { InfoSpecItem } from "./InfoSpecItem";

export const Info = ({ imageUrl, specs }) => {
  return (
    <div className={styles.wrapper}>
      <pre>
        {`
███╗   ██╗███████╗██╗  ██╗████████╗
████╗  ██║██╔════╝╚██╗██╔╝╚══██╔══╝
██╔██╗ ██║█████╗   ╚███╔╝    ██║   
██║╚██╗██║██╔══╝   ██╔██╗    ██║   
██║ ╚████║███████╗██╔╝ ██╗   ██║   
╚═╝  ╚═══╝╚══════╝╚═╝  ╚═╝   ╚═╝.js
      `}
      </pre>
      {/* <Image src={imageUrl} alt="img" width={250} height={350} /> */}
      <div className={styles.specs}>
        {specs.map((spec) => (
          <InfoSpecItem
            key={spec}
            name={spec.name}
            value={spec.value}
            copyOnClick={!!spec.copyOnClick}
          />
        ))}
      </div>
    </div>
  );
};
