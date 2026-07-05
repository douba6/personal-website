# Stillsky 个人网站 — 操作文档

**项目路径**: `/Users/stillsky/Documents/个人网站/`
**技术栈**: Next.js 14 (App Router) + Tailwind CSS 3 + TypeScript 5
**页面总数**: 4（首页 / 博客 / 项目 / 关于）

---

## 一、启动 (Start)

### 首次运行

```bash
cd /Users/stillsky/Documents/个人网站
npm install          # 安装依赖（已有 node_modules 可跳过）
npm run dev          # 启动开发服务器
```

启动后终端会显示：

```
  ▲ Next.js 14.2.x
  - Local:  http://localhost:3000
```

打开浏览器访问 `http://localhost:3000` 即可。

### 生产构建

```bash
npm run build        # 构建静态产出
npm run start        # 启动生产服务器（默认 3000 端口）
```

构建产物在 `.next/` 目录下，可直接部署到 Vercel / Cloudflare Pages / 任意 Node.js 主机。

### 构建检查

```bash
npm run lint          # ESLint 代码检查
```

---

## 二、更新 (Update)

### 2.1 修改网站标题 / 描述 / SEO

编辑 `app/layout.tsx` 中的 `metadata` 对象：

- `title.default` — 浏览器标签标题
- `title.template` — 子页面标题模板（`%s | Stillsky`）
- `description` — 首页描述
- `keywords` — SEO 关键词

每个子页面也有独立的 `metadata`（`app/blog/page.tsx`、`app/about/page.tsx` 等文件顶部）。

### 2.2 修改导航菜单

编辑 `components/Header.tsx` 中的 `navLinks` 数组：

```ts
const navLinks = [
  { href: "/", label: "首页" },
  { href: "/blog", label: "博客" },
  { href: "/projects", label: "项目" },
  { href: "/about", label: "关于" },
];
```

增删改此项即可同步桌面导航和移动端汉堡菜单。

### 2.3 修改首页内容

编辑 `app/page.tsx`：

- **Hero 区** — 由 `components/Hero.tsx` 控制（头像、标语、CTA 按钮、社交链接）
- **精选文章** — `featuredPosts` 数组，格式：`{ title, slug, category, excerpt }`
- **精选项目** — `featuredProjects` 数组，格式：`{ title, description, tags[] }`

### 2.4 修改博客文章

编辑 `app/blog/page.tsx` 中的 `posts` 数组：

```ts
{
  title: "文章标题",
  slug: "url-slug",       // 用于生成 /blog/:slug 链接
  date: "2026-07-06",
  category: "分类名称",
  excerpt: "文章摘要，一行",
  readingTime: "15 min",
}
```

> 当前博客页仅展示文章列表。如需文章详情页（`/blog/:slug`），需新建 `app/blog/[slug]/page.tsx`。

### 2.5 修改项目展示

编辑 `app/projects/page.tsx` 中的 `projects` 数组：

```ts
{
  title: "项目名称",
  description: "项目描述",
  tags: ["TypeScript", "React"],
  status: "active" | "experimental" | "archived",
}
```

`status` 自动渲染对应颜色标签：绿色（维护中）/ 黄色（实验性）/ 灰色（已归档）。

### 2.6 修改关于页

编辑 `app/about/page.tsx`：

- **个人简介** — 页面中段的介绍文字
- **skills** 数组 — 技能项与熟练度百分比
- **timeline** 数组 — 经历时间线，`{ year, event }`

### 2.7 全局样式

编辑 `app/globals.css`：

- CSS 变量 `--foreground-rgb` / `--background-start` / `--background-end` 控制亮/暗模式颜色
- 滚动条、选中色等细节样式

### 2.8 品牌色系

编辑 `tailwind.config.js` 中的 `colors.brand` 对象。修改后全站引用 `brand-*` 色值的组件自动生效。

### 2.9 Footer / 深色模式 / 社交链接

编辑 `components/Footer.tsx`，包含：

- 深色模式切换按钮（localStorage 持久化）
- GitHub 图标链接
- 版权年份自动获取当前年份

编辑 `components/Hero.tsx`，底部社交链接区域可替换为真实 URL。

---

## 三、接口与功能 (Features)

### 3.1 路由表

| 路径 | 文件 | 类型 | 说明 |
|------|------|------|------|
| `/` | `app/page.tsx` | 服务端组件 | 首页：Hero + 精选文章 + 精选项目 |
| `/blog` | `app/blog/page.tsx` | 服务端组件 | 博客列表页 |
| `/blog/:slug` | — | — | 文章详情（尚未实现，需新建） |
| `/projects` | `app/projects/page.tsx` | 服务端组件 | 项目作品集，含状态标签过滤 |
| `/about` | `app/about/page.tsx` | 服务端组件 | 个人简介 + 技能条 + 时间线 |

所有页面均为 **SSR（服务端渲染）**，SEO 友好。

### 3.2 根布局 (Layout)

`app/layout.tsx` 提供：

- **SEO Meta** — title、description、keywords、robots 指令
- **深色模式初始化** — 内联 script，读取 localStorage，优先用户存储的偏好，回退到系统 `prefers-color-scheme`
- **全局结构** — `<Header />` + `<main>` + `<Footer />`
- **字体** — Tailwind 配置中指定 `Inter` (英文) + `Noto Sans SC` (中文)

### 3.3 导航栏 (Header)

| 功能 | 说明 |
|------|------|
| 桌面导航 | 水平排列的链接，当前页高亮 |
| 移动端菜单 | 汉堡按钮，点击展开全屏菜单 |
| `usePathname()` | 自动识别当前路由，高亮对应菜单项 |
| 毛玻璃效果 | `backdrop-blur-md` + 半透明背景 |

### 3.4 深色模式 (Dark Mode)

- 初始状态：读取 `localStorage.getItem('theme')`，回退到系统偏好
- 切换方式：Footer 右上角月亮/太阳图标按钮
- 持久化：切换后写入 `localStorage.setItem('theme')`
- 全局适配：所有颜色均使用 `dark:` 前缀覆盖

### 3.5 响应式设计

| 断点 | 设备 | 效果 |
|------|------|------|
| 默认 | 手机 | 单列布局，汉堡菜单 |
| `md: (768px)` | 平板 | 网格 2 列，桌面导航 |
| `lg: (1024px)` | 桌面 | 网格 3 列（首页文章），更大的文字 |

### 3.6 组件复用清单

| 组件 | 文件 | 用途 |
|------|------|------|
| `Header` | `components/Header.tsx` | 导航栏，client component |
| `Hero` | `components/Hero.tsx` | 首页 Hero 区，server component |
| `Footer` | `components/Footer.tsx` | 页脚 + 主题切换，client component |
| `StatusBadge` | `app/projects/page.tsx` | 项目状态标签，内联组件 |

### 3.7 数据流

当前无外部数据源。所有内容数据硬编码在各页面的数组/对象中：

- 首页文章/项目 → `app/page.tsx`
- 博客列表 → `app/blog/page.tsx`
- 项目列表 → `app/projects/page.tsx`
- 个人经历/技能 → `app/about/page.tsx`

如需接入 CMS 或 Markdown 文件，数据替换入口即上述文件。

---

## 四、关闭 (Shutdown)

### 停止开发服务器

```bash
# 方式一：在运行 npm run dev 的终端中按
Ctrl + C

# 方式二：查找进程并终止
lsof -i :3000                    # 查找 3000 端口进程
kill -9 <PID>                    # 强制终止

# 方式三：如果使用了后台启动
kill $(lsof -t -i :3000)         # 一行终止
```

### 清理构建产物

```bash
rm -rf .next                      # 删除构建缓存
rm -rf node_modules               # 删除依赖（重新开发时再 npm install）
```

### 全量清理（恢复空白状态）

```bash
rm -rf .next node_modules .next-env.d.ts
git clean -fd                     # 清理未跟踪文件（谨慎使用，会删除所有新增文件）
```

### 端口冲突处理

如果 3000 端口被占用，使用其他端口启动：

```bash
npx next dev -p 3001              # 指定端口 3001
```

---

## 五、常见问题 (FAQ)

| 问题 | 解决 |
|------|------|
| `npm run dev` 启动后页面白屏 | 检查终端是否显示编译错误，查看浏览器控制台 |
| 修改样式不生效 | Tailwind 使用 JIT 模式，确保 class 在 content glob 匹配的路径中 |
| 深色模式切换无效 | 检查 `localStorage.getItem('theme')` 是否被其他脚本覆盖 |
| 新增页面返回 404 | 确认文件命名：App Router 使用 `page.tsx` 而非 `index.tsx` |
| 部署后样式丢失 | 确保 `next.config.js` 中无 `output: 'export'` 等限制 |

---

> 文档版本: v1.0 | 更新日期: 2026-07-06
> 技术栈: Next.js 14 App Router + Tailwind CSS + TypeScript
> 生成依据: ollama deckard:9b-q4 设计方案 + Codex 实现
