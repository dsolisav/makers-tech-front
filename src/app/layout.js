import { Inter } from "next/font/google";
import "./globals.css";
import CustomNavbar from "@/components/CustomNavbar";
import { NextUIProvider } from "@nextui-org/react";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Makers Tech",
  description: "Makers Tech website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextUIProvider >
          <CustomNavbar />
          {children}
        </NextUIProvider>
      </body>
    </html>
  );
}
