import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "@/component/Home/Navbar/ResponsiveNav";
import Footer from "@/component/Home/Footer/Footer";
import Scrollable from "@/component/Helper/Scrollable";

const font = Manrope({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Govathub",
  description:
    "An accessible, high-performance, and adaptable platform for building engaging foreign exchange experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className} antialiased`}>
        <ResponsiveNav />
        {children}
        <Footer />
        <Scrollable />
      </body>
    </html>
  );
}
