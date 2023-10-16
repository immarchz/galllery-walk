import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import ProvidersWrapper from "./ProviderWrapper";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gallery walk",
  description: "FSD Gallery walk",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative bg-black">
        <ProvidersWrapper>
          <Navbar />
          {children}
          {/* <ToastContainer /> */}
        </ProvidersWrapper>
      </body>
    </html>
  );
}
