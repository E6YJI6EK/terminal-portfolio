"use client";

import { useEffect } from "react";
import {
  NotificationProvider,
  useNotification,
} from "../model/notification.context";
import styles from "./ActionNotification.module.css";

const ActionNotification = () => {
  const { state, dispatch } = useNotification();

  useEffect(() => {
    if (state.isVisible) {
      const timer = setTimeout(() => dispatch({ type: "hide" }), 2000);
      return () => clearTimeout(timer);
    }
  }, [dispatch, state.isVisible]);

  return (
    <div className={styles.wrapper}>
      {state.isVisible && (
        <div className={styles.notification}>{state.message}</div>
      )}
    </div>
  );
};

export const ActionNotificationProvider = ({ children }) => {
  return (
    <NotificationProvider>
      {children}
      <ActionNotification />
    </NotificationProvider>
  );
};
