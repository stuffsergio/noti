import RegisterSW from "@/components/RegisterSW";
import "./globals.css";

export const metadata = {
  title: "NoTi",
  description: "Your second brain app for remembers",
  manifest: "/manifest.json",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <RegisterSW />
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
