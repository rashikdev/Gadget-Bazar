import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";
import NextAuthProvider from "@/Providers/NextAuthProvider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
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
      <body className={poppins.className}>
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
