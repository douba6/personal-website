# Stillsky 个人网站

探索代码的边界与美学。一名全栈开发者的个人网站与技术博客。

设计方案由 `ollama run deckard:9b-q4` 生成，代码由 Codex 实现。

构建工具: BEPMRTD 工作流

## 技术栈

| 类别 | 选择 |
|------|------|
| 框架 | Next.js 14 (App Router) |
| 样式 | Tailwind CSS 3 |
| 语言 | TypeScript 5 |
| 部署 | Vercel (推荐) |

## 页面结构

```
/           -> 首页（Hero + 精选文章 + 精选项目）
/blog       -> 博客文章列表
/blog/:slug -> 文章详情页（待完善）
/projects   -> 项目作品集
/about      -> 个人经历时间轴 + 技能展示
```

## 开发

```bash
npm install
npm run dev
npm run build
```

## 许可

MIT (c) 2026 Stillsky
# skill-sky
