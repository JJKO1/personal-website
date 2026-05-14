import os
import sys

try:
    import pdfkit
except Exception:
    print("pdfkit 未安装。请先运行: python3 -m pip install pdfkit")
    sys.exit(1)

HTML_FILE = 'onepager.html'
OUT_PDF = 'onepager.pdf'

if not os.path.exists(HTML_FILE):
    print(f"找不到 {HTML_FILE}，请确保文件存在于当前目录。")
    sys.exit(1)

# 检查 wkhtmltopdf
config = None
try:
    # 常见系统路径
    for path in [
        '/usr/local/bin/wkhtmltopdf',
        '/usr/bin/wkhtmltopdf',
        '/opt/homebrew/bin/wkhtmltopdf',
    ]:
        if os.path.exists(path):
            config = pdfkit.configuration(wkhtmltopdf=path)
            break
    if config is None:
        # 尝试让 pdfkit 自行查找
        config = pdfkit.configuration()
except Exception:
    config = None

if config is None:
    print('未检测到 wkhtmltopdf 可执行文件。请按 README 安装 wkhtmltopdf（mac 建议使用 Homebrew）。')
    print('安装命令示例（macOS + Homebrew）:')
    print('  brew install wkhtmltopdf')
    sys.exit(1)

options = {
    'enable-local-file-access': None,
    'quiet': ''
}

try:
    pdfkit.from_file(HTML_FILE, OUT_PDF, configuration=config, options=options)
    print(f'已生成 {OUT_PDF}')
except Exception as e:
    print('生成 PDF 失败:', e)
    sys.exit(1)
