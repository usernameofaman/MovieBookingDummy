import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/home/Navbar/navbar";
import styles from "./styles/Home.module.css";


const inter = Inter({ subsets: ["latin"] });

const metadata: Metadata = {
  title: "BookMyTicket",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className={styles.container}>
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
