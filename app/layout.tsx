import Footer from "../components/Footer";
import Header from "../components/Header";
import "./global.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
        <title>Concessionaria</title>
      </head>
      <body>
      <Header />
        <main>
          {children}
        </main>
      <Footer />
      </body>
    </html>
  );
}
