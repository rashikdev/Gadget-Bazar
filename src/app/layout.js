import { Libertinus_Math } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";
import NextAuthProvider from "@/Providers/NextAuthProvider";

const libertinus = Libertinus_Math({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "Gadget Bazar",
  description: "Discover the Latest Gadgets at Gadget Bazar",
  icon: "/favicon.png",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={libertinus.className}>
        <NextAuthProvider>
          <Navbar />
          {children}
          <Footer />
          <Toaster />
        </NextAuthProvider>
      </body>
    </html>
  );
}
