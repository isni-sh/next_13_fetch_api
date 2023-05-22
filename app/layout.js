import "./globals.css";
import { Inter } from "next/font/google";
import Header from "./partials/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next 13 app",
  description: "Create a simple next 13 app",
  keywords:
    "web development, web designm, javascript, rectjs, nextjs, javscript, tailwindCSS, CSS, html",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="container">{children}</main>
      </body>
    </html>
  );
}
