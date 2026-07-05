import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "博客",
  description: "技术文章、架构思考、源码解析与运维实战。",
};

const posts = [
  {
    title: "构建高可用微服务架构",
    slug: "microservices-101",
    date: "2026-06-15",
    category: "架构设计",
    excerpt: "从单体到微服务，聊聊服务拆分、服务发现、熔断降级那些事。",
    readingTime: "15 min",
  },
  {
    title: "深入理解 React Server Components",
    slug: "rsc-deep-dive",
    date: "2026-06-01",
    category: "前端深度",
    excerpt: "RSC 是如何改变 React 应用的数据获取模式的？一文带你深入理解 RSC 的工作原理。",
    readingTime: "12 min",
  },
  {
    title: "云原生时代的基础设施即代码",
    slug: "iac-cloud-native",
    date: "2026-05-15",
    category: "运维实战",
    excerpt: "Terraform、Pulumi、Crossplane，基础设施管理工具的进化之路。",
    readingTime: "10 min",
  },
  {
    title: "TypeScript 类型体操实战",
    slug: "typescript-type-gymnastics",
    date: "2026-04-28",
    category: "源码解析",
    excerpt: "从条件类型到模板字面量类型，用实际案例掌握 TypeScript 高级类型。",
    readingTime: "20 min",
  },
  {
    title: "设计一个轻量级前端状态管理库",
    slug: "lightweight-state-management",
    date: "2026-04-10",
    category: "架构设计",
    excerpt: "从 useState 到 Zustand，理解状态管理的本质，并动手实现一个最小版本。",
    readingTime: "18 min",
  },
];

export default function BlogPage() {
  return (
    <>
      <header className="mb-12">
        <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
          博客
        </h1>
        <p className="text-lg text-slate-500 dark:text-slate-400">
          技术文章、架构思考与源码解析。
        </p>
      </header>

      <div className="space-y-8">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group block p-6 bg-white dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-slate-700/50 hover:border-brand-200 dark:hover:border-brand-700/50 hover:shadow-lg transition-all"
          >
            <div className="flex items-center gap-3 text-sm text-slate-500 dark:text-slate-400 mb-3">
              <span className="px-2.5 py-0.5 text-xs font-medium bg-brand-50 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400 rounded-full">
                {post.category}
              </span>
              <span>{post.date}</span>
              <span className="text-slate-300 dark:text-slate-600">·</span>
              <span>{post.readingTime} 阅读</span>
            </div>
            <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors mb-2">
              {post.title}
            </h2>
            <p className="text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-2">
              {post.excerpt}
            </p>
          </Link>
        ))}
      </div>
    </>
  );
}
