import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Jana Eldesouky - Full-Stack Developer & Cybersecurity Student',
  description: 'Portfolio of Jana Eldesouky, a passionate full-stack web developer and cybersecurity student building secure, scalable systems and innovative web applications.',
  keywords: 'Jana Eldesouky, Full-Stack Developer, Cybersecurity, Web Development, Portfolio',
  authors: [{ name: 'Jana Eldesouky' }],
  openGraph: {
    title: 'Jana Eldesouky - Full-Stack Developer & Cybersecurity Student',
    description: 'Portfolio showcasing projects, skills, and experience in web development and cybersecurity.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}