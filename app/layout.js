import "./globals.css";

export const metadata = {
  title: "amk.codes"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
