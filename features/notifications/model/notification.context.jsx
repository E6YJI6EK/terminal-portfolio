"use client";
import { createContext, useContext, useReducer } from "react";

const NotificationContext = createContext();

const notificationReducer = (state, action) => {
  switch (action.type) {
    case "show":
      return {
        isVisible: true,
        message: action.payload,
      };
    case "hide":
      return {
        isVisible: false,
        message: "",
      };
    default:
      throw new Error();
  }
};

export const NotificationProvider = ({ children }) => {
  const [state, dispatch] = useReducer(notificationReducer, {
    isVisible: false,
    message: "",
  });

  return (
    <NotificationContext.Provider value={{ state, dispatch }}>
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotification = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error("useNotification must be used within a TerminalProvider");
  }
  return context;
};
