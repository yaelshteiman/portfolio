import "./globals.css";

export const metadata = {
    title: "Yael Shteiman Portfolio",
    icons: {
        icon: '/favicon.ico',
    },
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
