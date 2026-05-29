from pathlib import Path

from PIL import Image, ImageDraw

root = Path(__file__).resolve().parents[1] / "public"
src = root / "logo-edb.png"
img = Image.open(src).convert("RGBA")
w, h = img.size
size = min(w, h)

left = (w - size) // 2
top = (h - size) // 2
img = img.crop((left, top, left + size, top + size))


def make_round(im, out_size):
    resized = im.resize((out_size, out_size), Image.Resampling.LANCZOS)
    mask = Image.new("L", (out_size, out_size), 0)
    draw = ImageDraw.Draw(mask)
    draw.ellipse((0, 0, out_size - 1, out_size - 1), fill=255)
    rounded = Image.new("RGBA", (out_size, out_size), (0, 0, 0, 0))
    rounded.paste(resized, (0, 0), mask)
    return rounded


sizes = [16, 32, 48, 64, 128, 192, 512]
icons = [make_round(img, s) for s in sizes]

icons[1].save(root / "favicon.png", format="PNG")
icons[-1].save(root / "logo-edb.png", format="PNG")
icons[0].save(
    root / "favicon.ico",
    format="ICO",
    sizes=[(s, s) for s in sizes[:5]],
)

print("Favicon circular gerado com sucesso.")
