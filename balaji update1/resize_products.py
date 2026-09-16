from pathlib import Path
from PIL import Image

root = Path(r"c:\Users\averm\Downloads\balaji_namkeen_updated1\balaji update1\assets\img\product\balaji")
TARGET_SIZE = (800, 698)

count = 0
for image_path in sorted(root.glob('*')):
    if not image_path.is_file():
        continue
    if image_path.suffix.lower() not in {'.webp', '.jpg', '.jpeg', '.png'}:
        continue

    with Image.open(image_path) as image:
        rgb = image.convert('RGBA')
        w, h = rgb.size
        scale = min(TARGET_SIZE[0] / w, TARGET_SIZE[1] / h)
        new_w = max(1, int(round(w * scale)))
        new_h = max(1, int(round(h * scale)))

        resized = rgb.resize((new_w, new_h), Image.Resampling.LANCZOS)
        canvas = Image.new('RGBA', TARGET_SIZE, (255, 255, 255, 255))
        x = (TARGET_SIZE[0] - new_w) // 2
        y = (TARGET_SIZE[1] - new_h) // 2
        canvas.paste(resized, (x, y), resized)

        output = canvas.convert('RGB')
        output.save(image_path, 'WEBP', quality=95, method=6)
        count += 1
        print(f"{image_path.name}: {Image.open(image_path).size}")

print(f"Processed {count} images to 800x698 WebP")
