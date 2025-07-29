import { Libertinus_Math } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const libertinus = Libertinus_Math({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "Gadget Bazar",
  description: "Discover the Latest Gadgets at Gadget Bazar",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={libertinus.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
