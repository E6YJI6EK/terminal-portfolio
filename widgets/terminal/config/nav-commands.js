import { PROJECT_COMMANDS } from "./project-commands";

PROJECT_COMMANDS;
export const NAV_COMMANDS = [
  {
    command: "about",
    description: "About Me",
  },
  {
    command: "projects",
    description: "My Tech Projects",
  },
  {
    command: "resume",
    description: "My Resume",
  },
  {
    command: "blog",
    description: "My blog",
  },
  {
    command: "themes",
    description: "Switch themes",
  },
  {
    command: "langs",
    description: "Switch languages",
  },
];

export const NAV_COMMANDS_CONTENTS = {
  help: () => ({
    type: "menu",
    items: NAV_COMMANDS,
  }),
  about: () => ({
    type: "info",
    imageUrl:
      "https://sdmntprpolandcentral.oaiusercontent.com/files/00000000-9df8-620a-93c0-6838eaca255e/raw?se=2025-06-23T14%3A42%3A33Z&sp=r&sv=2024-08-04&sr=b&scid=538e2f2c-e073-59ef-b22d-0b1c411bac04&skoid=76024c37-11e2-4c92-aa07-7e519fbe2d0f&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-06-23T06%3A25%3A12Z&ske=2025-06-24T06%3A25%3A12Z&sks=b&skv=2024-08-04&sig=G8V%2BlCspv1npIUCP5ChGIpHGpyXogwvoVtpQhNbjAXQ%3D",
    specs: [
      { name: "Name", value: "Ayshat Nurzhanov" },
      { name: "Expirience", value: "3+ years" },
      { name: "Telegram", value: "@ayshatnurzhanov", copyOnClick: true },
      { name: "WhatsApp", value: "+7 (917) 329 22-03", copyOnClick: true },
      { name: "Email", value: "nurzhanovaishat@yandex.ru", copyOnClick: true },
    ],
  }),
  projects: () => ({
    type: "menu",
    items: PROJECT_COMMANDS,
  }),
  resume: () => {
    window.open("https://kavin.me/resume.pdf", "_blank");
    return {
      type: "menu",
      items: NAV_COMMANDS,
    };
  },
  themes: () => ({
    type: "menu",
    items: [
      { command: "light", description: "light" },
      { command: "dark", description: "dark" },
    ],
  }),
  langs: () => ({
    type: "menu",
    items: [
      { command: "ru", description: "Russian" },
      { command: "en", description: "English" },
    ],
  }),
  error: (input) => ({
    type: "service",
    texts: [`sh: Unknown command: ${input}`, "See `help` for info"],
  }),
};
