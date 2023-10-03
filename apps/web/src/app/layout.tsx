import "~/styles/globals.css";
import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import type { ReactNode } from "react";

const quicksand = Quicksand({
    subsets: ["latin"],
    variable: "--font-quicksand",
});

export const metadata: Metadata = {
    title: "ptat",
    description: "bootstrapped with pentible/typescript-app-template",
};

interface Props {
    children: ReactNode;
}

export default function Layout({ children }: Props) {
    return (
        <html lang="en">
            <body
                className={`${quicksand.variable} h-screen bg-indigo-900 font-sans text-indigo-50`}
            >
                {children}
            </body>
        </html>
    );
}
