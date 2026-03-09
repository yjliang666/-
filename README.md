# 雨姐咖啡 · 官网

汕头大学东海岸校区精品咖啡馆官网，含菜单展示与在线预约。

## 快速开始

### 1. 安装依赖

```bash
npm install
```

### 2. 配置 Supabase

1. 在 [Supabase](https://supabase.com) 创建项目
2. 复制 `supabase/001_create_reservations.sql` 内容，在 Dashboard → SQL Editor 中执行，创建预约表
3. 复制 `.env.example` 为 `.env.local`，填入：
   - `NEXT_PUBLIC_SUPABASE_URL`：项目 URL
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`：anon public key
   - `SUPABASE_SERVICE_ROLE_KEY`：service_role key（用于店员后台）
   - `ADMIN_SECRET`：店员后台登录密码（自定义，如 `rain123456`）

### 3. 图片（可选）

将门店/咖啡/蛋糕图片放入 `public/photos/`，首页主视觉使用 `hero-coffee.jpg`。若未放置，首页该区域会显示占位。

### 4. 运行

```bash
npm run dev
```

访问 http://localhost:3000。店员后台：http://localhost:3000/admin/reservations
