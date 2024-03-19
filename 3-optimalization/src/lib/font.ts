import { Roboto, Roboto_Mono, Roboto_Serif } from "next/font/google";

export const fontMono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
});

export const fontSerif = Roboto_Serif({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-serif",
});

export const fontSans = Roboto({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-sans",
});
