import type { Metadata } from "next";
import "./globals.scss";


export const metadata: Metadata = {
  title: "DevHawk",
  description: 'Comprehensive developer tools, tutorials, and resources for modern web development. Stay sharp with DevHawk\'s curated content for developers.',
  keywords: [
    'developer tools',
    'web development',
    'programming',
    'coding tutorials',
    'JavaScript',
    'React',
    'Next.js',
    'developer resources',
    'programming guides',
    'software development'
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">
        {children}
      </body>
    </html>
  );
}
