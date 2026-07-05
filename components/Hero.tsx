import Link from "next/link";

export default function Hero() {
  return (
    <section className="text-center py-16 lg:py-24">
      <div className="mb-8 inline-block relative">
        <div className="w-28 h-28 mx-auto rounded-full bg-gradient-to-tr from-brand-500 to-purple-500 p-1">
          <div className="w-full h-full rounded-full bg-white dark:bg-slate-900 flex items-center justify-center text-4xl font-bold text-brand-500">
            S
          </div>
        </div>
      </div>

      <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6 leading-tight">
        探索代码的
        <br />
        <span className="bg-gradient-to-r from-brand-600 to-purple-600 dark:from-brand-400 dark:to-purple-400 bg-clip-text text-transparent">
          边界与美学
        </span>
      </h1>

      <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-12 leading-relaxed">
        一名专注于全栈开发与云原生技术的开发者。
        <br />
        喜欢写代码，更喜欢分享技术背后的逻辑与设计。
      </p>

      <div className="flex justify-center gap-4 flex-wrap">
        <Link
          href="/projects"
          className="px-8 py-3 bg-brand-600 hover:bg-brand-700 text-white font-semibold rounded-xl transition-colors shadow-lg shadow-brand-500/25"
        >
          查看项目
        </Link>
        <Link
          href="/blog"
          className="px-8 py-3 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-semibold rounded-xl transition-colors"
        >
          阅读博客
        </Link>
      </div>

      <div className="mt-16 flex justify-center gap-8 text-sm text-slate-500 dark:text-slate-500">
        <span className="hover:text-slate-700 dark:hover:text-slate-300 transition-colors cursor-pointer">
          GitHub
        </span>
        <span className="text-slate-300 dark:text-slate-600">/</span>
        <span className="hover:text-slate-700 dark:hover:text-slate-300 transition-colors cursor-pointer">
          掘金
        </span>
        <span className="text-slate-300 dark:text-slate-600">/</span>
        <span className="hover:text-slate-700 dark:hover:text-slate-300 transition-colors cursor-pointer">
          Twitter / X
        </span>
      </div>
    </section>
  );
}
