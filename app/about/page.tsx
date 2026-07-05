import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "关于",
  description: "关于我和这个网站。",
};

const timeline = [
  { year: "2026", event: "探索 AI 编程助手生态，开始构建 Codex 插件系统" },
  { year: "2025", event: "深入云原生技术栈，主导 Kubernetes 集群迁移与监控体系建设" },
  { year: "2024", event: "从单体架构转向微服务，实践 DDD 与事件驱动架构" },
  { year: "2023", event: "开始写技术博客，记录架构决策与踩坑经验" },
  { year: "2022", event: "正式进入软件开发领域，从 Web 前端开始" },
];

const skills = [
  { name: "TypeScript / JavaScript", level: 90 },
  { name: "React / Next.js", level: 85 },
  { name: "Node.js / Python", level: 80 },
  { name: "Docker / Kubernetes", level: 75 },
  { name: "云服务 (AWS / GCP)", level: 70 },
  { name: "数据库 (PostgreSQL / Redis)", level: 75 },
];

export default function AboutPage() {
  return (
    <>
      <header className="mb-12">
        <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
          关于
        </h1>
      </header>

      {/* 简介 */}
      <section className="mb-16">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="w-32 h-32 rounded-xl bg-gradient-to-br from-brand-500 to-purple-500 flex-shrink-0 flex items-center justify-center text-5xl font-bold text-white">
            S
          </div>
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              Stillsky
            </h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
              一名热爱技术的全栈开发者。相信好的代码不仅解决问题，还传达了设计意图。
              这里是我记录技术思考、分享项目经验的地方。
            </p>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              工作之余，我喜欢研究编程语言特性、架构模式和云原生基础设施。
              偶尔也会写一些生活随笔，记录编程之外的世界。
            </p>
          </div>
        </div>
      </section>

      {/* 技能 */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          技能
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          {skills.map((skill) => (
            <div key={skill.name}>
              <div className="flex justify-between text-sm mb-1.5">
                <span className="font-medium text-slate-700 dark:text-slate-300">
                  {skill.name}
                </span>
                <span className="text-slate-400">{skill.level}%</span>
              </div>
              <div className="h-2 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-brand-500 to-brand-400 rounded-full transition-all"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 时间线 */}
      <section>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          经历
        </h2>
        <div className="space-y-0">
          {timeline.map((item, idx) => (
            <div key={idx} className="flex gap-4 pb-6 relative pl-8">
              {/* Timeline line */}
              {idx < timeline.length - 1 && (
                <div className="absolute left-3.5 top-3 bottom-0 w-px bg-slate-200 dark:bg-slate-700" />
              )}
              {/* Timeline dot */}
              <div className="absolute left-0 top-1.5 w-3 h-3 rounded-full bg-brand-500 border-2 border-white dark:border-slate-900" />
              <div>
                <span className="text-sm font-bold text-brand-600 dark:text-brand-400">
                  {item.year}
                </span>
                <p className="text-slate-600 dark:text-slate-400 mt-1">
                  {item.event}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
