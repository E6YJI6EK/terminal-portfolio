'use client'

const copyToClipboard = (text) => {
  navigator.clipboard
    .writeText(text)
    .then(() => setIsVisible(true))
    .catch((err) => console.error("Ошибка копирования:", err));
};
