import { Raleway, Geologica } from "next/font/google";
import "../scss/utils/vars.scss";
import "../scss/utils/placeholders.scss";
import "../scss/utils/mixins.scss";
import "../scss/base/reset.scss";
import "../scss/base/common.scss";

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
    <html lang="uk">
      <body className={`${raleway.variable} ${geologica.variable}`}>
        {children}
      </body>
    </html>
  );
}
