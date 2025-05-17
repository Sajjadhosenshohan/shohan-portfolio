import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
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
         <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
      </body>
    </html>
  );
}
