
import localFont from "next/font/local";
import "./globals.css";
import ReduxProvider from "@/redux/reduxProvider";

const avenirMedium = localFont({
  src: "./fonts/Avenir-Roman.ttf",
  variable: "--font-avenir-light",
  weight: "500", // Medium weight
});
const avenirHeavy = localFont({
  src: "./fonts/Avenir-Heavy.ttf",
  variable: "--font-avenir-heavy",
  weight: "500", // Medium weight
});
const lorettaLight = localFont({
  src: "./fonts/fonnts.com-Loretta-Display.otf",
  variable: "--fonnts-com-Loretta-Light",
  weight: "500", // Medium weight
});
const newTimesRomanBold = localFont({
  src: "./fonts/times new roman bold.ttf",
  variable: "--fonts-new-times-roman-bold",
  weight: "500", // Medium weight
});
const newTimesRomanLight = localFont({
  src: "./fonts/times new roman.ttf",
  variable: "--fonts-new-times-roman-light",
  weight: "500", // Medium weight
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const theme = useSelector((state: RootState) => state.theme.theme);

  // useEffect(() => {
  //   document.documentElement.setAttribute("data-theme", theme);
  // }, [theme]);

  return (
    <html lang="en">
      <head>
        {/* PWA Metadata */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#312e81" />
        <link rel="icon" href="/icons/icon-192x192.png" />
        <meta name="description" content="Your PWA Description" />
      </head>
      <body
        className={`${avenirMedium.variable} ${lorettaLight.variable} ${avenirHeavy.variable} ${newTimesRomanLight.variable} ${newTimesRomanBold.variable} antialiased`}
      >
        <ReduxProvider>
          <main> {children}</main>
        </ReduxProvider>
      </body>
    </html>
  );
}
