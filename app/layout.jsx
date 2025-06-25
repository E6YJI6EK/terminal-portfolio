import localFont from "next/font/local";
import "./globals.css";

const jetBrainsMono = localFont({
  src: "../public/fonts/JetBrainsMonoRegular.ttf",
});

export const metadata = {
  title: "Nurhzhanov Ai",
  description: "Personal website of Nurhzhanov Ayshat",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru" className={jetBrainsMono.className}>
      <body>{children}</body>
    </html>
  );
}
