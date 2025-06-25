import fs from "fs";
import path from "path";
import simpleIcons from "simple-icons";

const tech = [
  "react",
  "typescript",
  "nextdotjs",
  "tailwindcss",
  "redux",
  "vue.js",
  "mobx",
  "zustand",
  "nestjs",
  "python",
  "laravel",
];

const out = path.resolve(process.cwd(), "public", "tech");
if (!fs.existsSync(out)) fs.mkdirSync(out, { recursive: true });

tech.forEach((name) => {
  const icon = simpleIcons.Get(name);
  if (icon) {
    fs.writeFileSync(path.join(out, `${name}.svg`), icon.svg);
  } else {
    console.warn(`Icon not found: ${name}`);
  }
});
