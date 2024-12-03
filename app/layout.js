import "./globals.css";

export const metadata = {
  title: "Yael Shteiman Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
