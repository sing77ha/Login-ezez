import { IBM_Plex_Sans_Thai } from "next/font/google";
import "./globals.css";

const font = IBM_Plex_Sans_Thai({
  subsets: ["thai", "latin"],
  weight: ["400", "600"],
});

export const metadata = { title: "เข้าสู่ระบบ" };

export default function RootLayout({ children }) {
  return (
    <html lang="th">
      <body className={font.className}>{children}</body>
    </html>
  );
}
