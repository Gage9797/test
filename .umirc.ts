import { defineConfig } from "umi";
const packageName = require('./package.json').name;
export default defineConfig({
  plugins: ['@umijs/plugins/dist/qiankun'],
  base: '/',
  qiankun: {
    master: {
      // 注册子应用信息
      apps: [
        {
          name: 'app1',
          entry: 'http://a.yijunda.top',
        },
      ],
      // 配置微应用关联的路由
      routes: [
        {
          path: '/app1/*',
          microApp: 'app1',
        },
      ],
    },
  },
  routes: [
    { path: "/", component: "index" },
    { path: "/docs", component: "docs" },
    {
      path: '/app1',
      // component: '@/layouts/app-layout.tsx',
      routes: [
        // 配置微应用 app1 关联的路由
        {
          // 带上 * 通配符意味着将 /app1/project 下所有子路由都关联给微应用 app1
          path: '*',
          microApp: 'app1',
        },
      ],
    },
  ],
  alias: {
    "@": require("path").resolve(__dirname, "src"),
  },
  npmClient: 'pnpm',
});
