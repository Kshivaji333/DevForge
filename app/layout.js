import {ThemeProvider} from "next-themes";
import "./globals.css";
import Header from "@/components/layout/Header";

export const metadata = {
  title: "DevForge",
  description: "a platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body suppressHydrationWarning={true}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <main>
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
