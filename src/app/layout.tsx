import "./globals.css";
import { Dancing_Script } from "next/font/google";

const inter = Dancing_Script({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-black overflow-hidden w-screen h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
