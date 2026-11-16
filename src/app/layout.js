import { Poppins } from "next/font/google";
import Navbar from "./components/Navbar";
import "./globals.css";
import { ScrollToProvider } from "./context/ScrollTO";

const poppinsSans = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins-sans",
  weight: ["300", "400", "500"],
  display: "swap"
})

export const metadata = {
  title: "HARSH KOSHTA",
  description: "Harsh Koshta is a Video Editor and UI/UX Designer based in Jabalpur, Madhya Pradesh, India. He specializes in creating visually appealing and user-friendly edits using modern editing technologies.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${poppinsSans.variable} h-full antialiased`}
    >
      <body className="">
          <ScrollToProvider>
            <Navbar />
            {children}
          </ScrollToProvider>
        </body>
    </html>
  );
}
