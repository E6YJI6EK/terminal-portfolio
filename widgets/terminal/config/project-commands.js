export const PROJECT_COMMANDS = [
  { command: "commercial", description: "Commercial Projects" },
  { command: "personal", description: "My personal projects" },
  { command: "misc", description: "My personal misc projects" },
];

export const COMMERCIAL_PROJECT_COMMANDS = [
  { command: "present-simple", description: "presentsimple.ai" },
  { command: "atamida", description: "atamida.ru" },
  { command: "erp", description: "erp" },
];

export const PERSONAL_PROJECT_COMMANDS = [
  { command: "hunter", description: "Work in progress" },
  { command: "wordai", description: "Work in progress" },
  { command: "frontend-core", description: "Work in progress" },
  { command: "med-card", description: "VKR" },
  { command: "stigmata", description: "My first react app" },
  { command: "kissme", description: "Little game for testing my skills" },
  { command: "chesspair", description: "Summer university practice" },
  { command: "snake", description: "First real steps" },
];

export const MISK_PROJECT_COMMANDS = [
  { command: "lisa", description: "Python-based pc asisstant" },
  { command: "bk-parser", description: "Python parser site of SSTU" },
  { command: "sticky-fingers", description: "Python parser site of SSTU" },
  { command: "calculator", description: "Python parser site of SSTU" },
];

export const PROJECT_COMMAND_CONTENTS = {
  commercial: () => ({
    type: "menu",
    items: COMMERCIAL_PROJECT_COMMANDS,
  }),
  personal: () => ({
    type: "menu",
    items: PERSONAL_PROJECT_COMMANDS,
  }),
  misk: () => ({
    type: "menu",
    items: MISK_PROJECT_COMMANDS,
  }),
};
