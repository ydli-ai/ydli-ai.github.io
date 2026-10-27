# 李煜东 · Yudong Li

个人学术主页，使用静态 HTML、CSS 和 JavaScript，可直接部署到 GitHub Pages。

## 页面

- `index.html`：About，原主页内容，包括个人简介、研究概览、开源项目、代表性论文及当前研究。
- `publications.html`：按 Google Scholar 年份整理的论文。论文内容直接写在 HTML 中，新增或修改条目时编辑相应年份的 `article.pub`。论文配图位于 `assets/images/` 和 `assets/images/publications/`；部分使用论文图示，其余为主题插画。
- `assets/css/style.css`：两个页面共用的样式。

## 本地预览

无需构建。在项目目录运行：

```bash
python3 -m http.server 8000
```

访问 <http://localhost:8000/>。

## 部署

将更改提交并推送到 GitHub Pages 配置的分支，网站将发布至 <https://ydli-ai.github.io/>。
