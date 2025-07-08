import { Inter } from "next/font/google";
import "./globals.css";
import ClientWrapper from "@/components/ClientWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title:
    "Artem Naumenko – Fullstack Developer & Entrepreneur | 4+ Years of Experience in Building Scalable Web & Mobile Applications",
  description:
    "I'm Artem Naumenko, a passionate fullstack developer and entrepreneur with over 4 years of experience in crafting high-performance web and mobile applications. Focused on innovation, performance, and user-centric design to help startups and businesses grow through technology.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" translate="no">
      <head>
        <meta property="og:locale" content="en_US" />

        <meta property="og:image" content="/banner.jpg" />
        <meta property="og:image:width" content="1600" />
        <meta property="og:image:height" content="800" />
        <meta property="og:image:alt" content="11Gen™ Banner" />
        <meta
          property="og:site_name"
          content="Artem Naumenko – Fullstack Developer & Entrepreneur | 4+ Years of Experience in Building Scalable Web & Mobile Applications"
        />
        <meta
          content="I'm Artem Naumenko, a passionate fullstack developer and entrepreneur with over 4 years of experience in crafting high-performance web and mobile applications. Focused on innovation, performance, and user-centric design to help startups and businesses grow through technology."
          property="og:description"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Artem Naumenko – Fullstack Developer & Entrepreneur | 4+ Years of Experience in Building Scalable Web & Mobile Applications"
        />
        <meta property="og:url" content="https://artem-naumenko.com" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="https://artem-naumenko.com" />
        <meta name="twitter:creator" content="@artixx18" />
        <meta
          name="twitter:title"
          content="Artem Naumenko – Fullstack Developer & Entrepreneur | 4+ Years of Experience in Building Scalable Web & Mobile Applications"
        />
        <meta
          name="twitter:description"
          content="I'm Artem Naumenko, a passionate fullstack developer and entrepreneur with over 4 years of experience in crafting high-performance web and mobile applications. Focused on innovation, performance, and user-centric design to help startups and businesses grow through technology."
        />
        <meta name="twitter:image" content="/banner.jpg" />
        <meta name="twitter:image:width" content="1600" />
        <meta name="twitter:image:height" content="800" />
        <meta
          name="twitter:image:alt"
          content="Artem Naumenko | Артём Науменко"
        />

        <meta name="author" content="Artem Naumenko" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />

        <link rel="canonical" href="https://artem-naumenko.com" />
        <meta httpEquiv="x-dns-prefetch-control" content="on" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />

        <link
          href="https://fonts.googleapis.com/css2?family=Zen+Dots&display=swap"
          rel="stylesheet"
          key="zen-dots"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
          key="montserrat"
        />
      </head>
      <body className={inter.className} suppressHydrationWarning={true}>
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  );
}
