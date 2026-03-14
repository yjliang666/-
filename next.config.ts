// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 核心：开启静态导出，替代原来的 next export 命令
  output: "export",
  // 可选：解决静态部署的路径/图片兼容问题
  trailingSlash: true, // 生成带 / 的静态页面（如 /reserve/index.html），避免404
  images: {
    unoptimized: true, // 禁用 Next.js 图片优化（静态导出必须加，否则图片会报错）
  },
};

export default nextConfig;