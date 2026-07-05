import Link from "next/link";
import Hero from "@/components/Hero";

const featuredPosts = [
  {
    title: "构建高可用微服务架构",
    slug: "microservices-101",
    category: "架构设计",
    excerpt: "从单体到微服务，聊聊服务拆分、服务发现、熔断降级那些事。",
  },
  {
    title: "深入理解 React Server Components",
    slug: "rsc-deep-dive",
    category: "前端深度",
    excerpt: "RSC 是如何改变 React 应用的数据获取模式的？一文读懂。",
  },
  {
    title: "云原生时代的基础设施即代码",
    slug: "iac-cloud-native",
    category: "运维实战",
    excerpt: "Terraform、Pulumi、Crossplane，基础设施管理工具的进化之路。",
  },
];

const featuredProjects = [
  {
    title: "Codex Plugins",
    description: "构建 AI 编程助手的插件生态，支持技能、MCP 服务器和自动化工作流。",
    tags: ["TypeScript", "Node.js", "Plugin System"],
  },
  {
    title: "云原生监控平台",
    description: "基于 Prometheus + Grafana 的 Kubernetes 集群监控解决方案。",
    tags: ["Go", "Kubernetes", "Prometheus"],
  },
];

export default function Home() {
  return (
    <>
      <Hero />

      {/* 最新文章 */}
      <section className="mt-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            最新文章
          </h2>
          <Link
            href="/blog"
            className="text-sm font-medium text-brand-600 dark:text-brand-400 hover:underline"
          >
            查看全部 &rarr;
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block p-6 bg-white dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-slate-700/50 hover:border-brand-200 dark:hover:border-brand-700/50 hover:shadow-lg transition-all"
            >
              <span className="text-xs font-semibold text-brand-600 dark:text-brand-400 mb-3 block uppercase tracking-wider">
                {post.category}
              </span>
              <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors mb-2">
                {post.title}
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed">
                {post.excerpt}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* 精选项目 */}
      <section className="mt-16 mb-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            精选项目
          </h2>
          <Link
            href="/projects"
            className="text-sm font-medium text-brand-600 dark:text-brand-400 hover:underline"
          >
            查看全部 &rarr;
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <div
              key={project.title}
              className="p-6 bg-white dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-slate-700/50 hover:border-brand-200 dark:hover:border-brand-700/50 hover:shadow-lg transition-all"
            >
              <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 text-xs font-medium bg-slate-100 dark:bg-slate-700/50 text-slate-600 dark:text-slate-300 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
