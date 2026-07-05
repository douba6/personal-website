import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "项目",
  description: "我的开源项目与作品展示。",
};

const projects = [
  {
    title: "Codex Plugins",
    description:
      "构建 AI 编程助手的插件生态，支持技能（Skills）、MCP 服务器和自动化工作流的插件系统。",
    tags: ["TypeScript", "Node.js", "Plugin System"],
    status: "active" as const,
  },
  {
    title: "云原生监控平台",
    description:
      "基于 Prometheus + Thanos + Grafana 的多集群 Kubernetes 监控解决方案，支持自定义告警规则和仪表盘。",
    tags: ["Go", "Kubernetes", "Prometheus", "Grafana"],
    status: "active" as const,
  },
  {
    title: "AI 写作助手",
    description:
      "集成 LLM API 的 Markdown 编辑器，支持智能补全、语法润色和多语言翻译。",
    tags: ["React", "Next.js", "OpenAI API"],
    status: "experimental" as const,
  },
  {
    title: "分布式任务调度系统",
    description:
      "基于 Redis 和 PostgreSQL 的轻量级分布式任务调度框架，支持定时任务、工作流编排和失败重试。",
    tags: ["Python", "Redis", "PostgreSQL", "Celery"],
    status: "archived" as const,
  },
];

function StatusBadge({ status }: { status: string }) {
  const styles = {
    active:
      "bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400",
    experimental:
      "bg-yellow-50 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400",
    archived:
      "bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400",
  };
  const labels = {
    active: "维护中",
    experimental: "实验性",
    archived: "已归档",
  };

  return (
    <span
      className={`px-2.5 py-0.5 text-xs font-medium rounded-full ${
        styles[status as keyof typeof styles]
      }`}
    >
      {labels[status as keyof typeof labels]}
    </span>
  );
}

export default function ProjectsPage() {
  return (
    <>
      <header className="mb-12">
        <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
          项目
        </h1>
        <p className="text-lg text-slate-500 dark:text-slate-400">
          开源项目与个人作品，区分生产级与实验性。
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.title}
            className="p-6 bg-white dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-slate-700/50 hover:shadow-lg transition-all flex flex-col"
          >
            <div className="flex items-start justify-between gap-3 mb-3">
              <h2 className="text-lg font-bold text-slate-800 dark:text-slate-100">
                {project.title}
              </h2>
              <StatusBadge status={project.status} />
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 leading-relaxed flex-grow">
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
    </>
  );
}
