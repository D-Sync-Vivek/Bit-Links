import "./globals.css";
import Navbar from '@/components/Navbar'


export const metadata = {
  title: "Bitlinks - Your trusted URL Shortener",
  description: "Bitlinks helps you shorten you links smoothly",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
