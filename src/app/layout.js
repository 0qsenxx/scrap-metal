import { Raleway, Geologica } from "next/font/google";
import "./reset.css";
import "./common.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });
const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["cyrillic", "latin"],
});

const geologica = Geologica({
  variable: "--font-geologica",
  subsets: ["cyrillic", "latin"],
});

export const metadata = {
  title: "МетАльянс",
  description: "Офіційний сайт МетАльянс",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${raleway.variable} ${geologica.variable}`}>
        {children}
      </body>
    </html>
  );
}
