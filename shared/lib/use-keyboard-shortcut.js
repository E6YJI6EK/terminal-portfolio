"use client";
import { useEffect } from "react";

export function useKeyboardShortcut({ key, handler, isDisabled }) {
  useEffect(() => {
    function keyDownHandler(e) {
      if (e.key === key && !isDisabled) {
        e.preventDefault();
        handler(e);
      }
    }

    document.addEventListener("keydown", keyDownHandler);
    return () => document.removeEventListener("keydown", keyDownHandler);
  }, [isDisabled, key, handler]);
}
