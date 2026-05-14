# One‑Pager (橙色 + 深色主题)

包含文件：

- `onepager.html` — 橙色+深色主题的 One‑Pager HTML 模板（适合直接在浏览器中打开预览并打印为 PDF）。
- `convert_to_pdf.py` — 使用 `pdfkit` + `wkhtmltopdf` 将 `onepager.html` 转为 `onepager.pdf` 的脚本。

建议流程（macOS）：

1. 在终端安装依赖：

```bash
python3 -m pip install --user pdfkit
brew install wkhtmltopdf
```

2. 运行脚本生成 PDF：

```bash
python3 convert_to_pdf.py
```

3. 若不想安装额外软件，可直接在浏览器中打开 `onepager.html`，按 `Cmd+P` -> 选择“保存为 PDF”。

定制提示：

- 将 Power BI 的导出图（PNG/SVG）替换页面中 `chart-placeholder` 区域的占位即可保留真实图表样式。
- 如果需要我可以：
  - 用你提供的 KPI/数据填充模板；
  - 生成高分辨率的 PDF 并直接上传给你（需你授权运行转换并允许我在当前环境执行）。
