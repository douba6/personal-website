import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Stillsky | 全栈开发者与技术创作者",
    template: "%s | Stillsky",
  },
  description:
    "探索代码的边界。一名专注于后端架构与云原生技术的全栈开发者，分享技术背后的逻辑与美学。",
  keywords: ["全栈开发", "前端", "后端", "云原生", "技术博客"],
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('theme');
                if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark');
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className="antialiased min-h-screen flex flex-col selection:bg-brand-500/20">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-16 max-w-5xl">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
