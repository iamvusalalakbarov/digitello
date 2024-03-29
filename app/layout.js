import localFont from "next/font/local";
import "./globals.css";

const cera = localFont({
  src: [
    {
      path: "./cera/CeraRoundPro-Thin.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "./cera/CeraRoundPro-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./cera/CeraRoundPro-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./cera/CeraRoundPro-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./cera/CeraRoundPro-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./cera/CeraRoundPro-Black.otf",
      weight: "900",
      style: "normal",
    },
  ],
});

export const metadata = {
  title: {
    template: "Digitello | %s",
    default: "Digitello Agency",
  },
  description: "The website of Digitello Agency built by Vusal Alakbarov.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cera.className}>{children}</body>
    </html>
  );
}
