"use client";

import { useNotification } from "../../../features/notifications";
import { Terminal } from "../../../features/terminal";
import styles from "./Home.module.css";

export const Home = () => {
  const { dispatch } = useNotification();
  return (
    <div className={styles.container}>
      <div className={styles.glass}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            nurzhanovai:${" "}
            <span className={styles.help}>frontend developer</span>
          </h1>
          <Terminal
            showNotification={(message) =>
              dispatch({ type: "show", payload: message })
            }
          />
        </div>
      </div>
    </div>
  );
};
