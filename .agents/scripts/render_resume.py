import fitz
from pathlib import Path

source = Path('attached_assets/OTABEK_Buranov_Growth_Marketing__1787871226291.pdf')
out = Path('.agents/outputs/resume-pages')
out.mkdir(parents=True, exist_ok=True)
doc = fitz.open(source)
print(f'pages={doc.page_count}')
for index, page in enumerate(doc):
    pix = page.get_pixmap(matrix=fitz.Matrix(2, 2), alpha=False)
    target = out / f'page-{index + 1}.png'
    pix.save(target)
    print(target)
