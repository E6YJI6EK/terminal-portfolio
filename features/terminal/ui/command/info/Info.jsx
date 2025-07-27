import Image from "next/image";
import styles from "./Info.module.css";
import { InfoSpecItem } from "./InfoSpecItem";

export const Info = ({ imageUrl, asciiArt, specs }) => {
  return (
    <div className={styles.wrapper}>
      <LeftSideImage imageUrl={imageUrl} asciiArt={asciiArt} />
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

const LeftSideImage = ({ imageUrl, asciiArt }) => {
  const isImage = !!imageUrl;
  if (isImage) {
    return <Image src={imageUrl} alt="img" width={250} height={350} />;
  } else {
    return <pre>{asciiArt}</pre>;
  }
};
