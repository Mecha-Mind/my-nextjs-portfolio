// fonts
import { Sora } from "next/font/google";

// fonts settings
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

import "../../styles/globals.css";
// components
import Layout from "../components/Layout";
import ClientLayout from "../components/ClientLayout";


// meta data
export const metadata = {
  title: "Hani Abdallah - Home",
  description:
    "Welcome To 'my personal portfolio' Discover best techs in the whole world!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      className={`page bg-site bg-cover bg-no-repeat ${sora.variable} font-sora text-white relative antialiased`}
    >

        <Layout>
          <ClientLayout>
              {children}
          </ClientLayout>
        </Layout>
      </body>
    </html>
  );
}
