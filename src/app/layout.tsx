import type { Metadata } from "next";
// import { ThemeProvider } from "next-themes";
import "./globals.css";
export const metadata: Metadata = {
  title: "Sajjad | Web Developer",
  description:
    "I am a full-stack web developer skilled in Tailwind CSS, JavaScript, React, Next.js, TypeScript, Firebase, Node.js, Express.js, MongoDB, Mongoose, and Redux. I build scalable, high-performance, and user-friendly web applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="">
        {/* <ThemeProvider attribute={"class"} enableSystem defaultTheme="system"> */}
          {children}
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}
