import type {Metadata} from "next";
import {Mona_Sans} from "next/font/google";
import "./globals.css";
import {Toaster} from "sonner";
import { ThemeProvider } from "@/components/theme-provider";

const monaSans = Mona_Sans({
    variable: "--font-mona-sans",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "PrepWise",
    description: "An AI-powered platform for preparing for mock interviews.",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body
            className={`${monaSans.className} antialiased pattern`}
        >
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
        >
            {children}
            <Toaster/>
        </ThemeProvider>
        </body>
        </html>
    );
}
