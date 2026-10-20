"""Create resized WebP derivatives of the audited originals.

Originals in docs/source-audit/assets/original/ are never modified.
Output goes to public/images/<name>-<width>.webp and a size report to
scripts/derivatives-report.csv. Run: python scripts/make-derivatives.py
"""
import csv
import os
from PIL import Image

Image.MAX_IMAGE_PIXELS = None
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = os.path.join(ROOT, "docs", "source-audit", "assets", "original")
OUT = os.path.join(ROOT, "public", "images")

# name -> (original file, target widths). Widths never exceed the original.
ASSETS = {
    "studio-interior": ("72d608_e4193205eb6a40fba0fdf7821b955780-mv2.jpg", [800, 1400, 1800]),
    "balinese-dancer": ("72d608_29ec017cf5264bb3bcfa514a8ffdd20b-mv2.jpg", [500]),
    "reformer-class": ("72d608_76c7382ce5a4432789316d49fef09f43.jpg", [640, 1200]),
    "joined-hands": ("72d608_04507d0c3aac486aa801b565bd4113f6-mv2.jpg", [640, 1030]),
    "online-reclining": ("72d608_a79a119d5e88470ea7e6b170ddc4ce03.jpg", [640, 1200]),
    "succulent": ("72d608_519b3eaad46546c785dea6f2d3ed8ab6-mv2_d_6000_4000_s_4_2.jpg", [800, 1600]),
    "bw-back-portrait": ("72d608_ae53137c9b414eaba9baeae609066e9e-mv2_d_6048_4032_s_4_2.jpg", [640, 1200]),
    "bw-stretch": ("72d608_7fa37dc51ad8472f9d38c6d7f3e8a300-mv2_d_6000_3376_s_4_2.jpg", [640, 1200]),
    "bw-seated-study": ("72d608_4ee14f1b440e4bb5bcf8ba1789439ff1-mv2.jpg", [640, 884]),
    "bw-dancer-leap": ("72d608_cc721588570a4514899a30ec6c5c0710-mv2.jpg", [640, 1200]),
    "wire-sculpture": ("72d608_eee5095e8bef4055ab67b4b572047d6f-mv2_d_4272_2848_s_4_2.jpg", [640, 1200]),
    "cliff-sea": ("72d608_f06b210b36884b758514365fcf468f68-mv2_d_4826_3217_s_4_2.jpg", [640, 1200]),
    "meditation-mudra": ("72d608_87e45df242d8497a84ce26b3fad75047-mv2.jpg", [800]),
    "stott-chair": ("72d608_7e91dafaf4c44d21b817b84bfbcc8b38-mv2_d_4211_2802_s_4_2.jpg", [640, 1200]),
    "trx-straps": ("72d608_c3c07ecd495b409ebb78633a22f5cceb-mv2.jpg", [640, 1200]),
    "bw-equipment-torso": ("72d608_a8cf6d4c0d184c74aedc4f60cd26df02-mv2.png", [654]),
    "tropical-studio-mat": ("72d608_18311f9997334beb8f10f6e2361ca5a9-mv2.jpeg", [800, 1280]),
    "reformer-tower-duo": ("72d608_5a8b7c8a101b41ea8b848a1540c72b2c-mv2_d_1365_2048_s_2.jpg", [480, 900]),
    "hot-stones": ("72d608_b679f79cb3fc49a2bc8ae5c1c2e9ddbb-mv2_d_2576_1932_s_2.jpg", [640, 1200]),
    "infinity-pool": ("72d608_63ef6db3d8a54532b94494babcbd9248-mv2.jpg", [640, 940]),
    "bw-pike": ("72d608_fd285b544c6a4bd5af270ad6c94dcfe8-mv2.jpg", [800, 1500]),
    "online-lunge": ("72d608_a8bac5f719144ee69b308d55f163ff4f-mv2.jpg", [800, 1500]),
    "hand-on-back": ("72d608_dbdbb9c9d48d40eb823d88665a1468cd-mv2.jpg", [372]),
    "seated-smile-portrait": ("72d608_f4b788a706db40dcbfa3d4f4aeebce53-mv2.jpg", [640, 1164]),
    "bw-cadillac-straps": ("72d608_21a8dd26654846e1b9a50cc9e36f6d1d-mv2.jpg", [480, 1000]),
    "beach-sunset-silhouettes": ("72d608_9b04478af457409bb553576c7b9603db-mv2.jpg", [640, 958]),
    "prenatal-profile": ("72d608_2766a361dcb44c0ea192f25afccc5ebc-mv2_d_5546_3957_s_4_2.jpg", [800, 1600]),
    "arms-raised-sky": ("72d608_b7856016602942ec9e72fc073cdd20d3-mv2_d_6016_4016_s_4_2.jpg", [640, 1200]),
    "coaching-portrait": ("72d608_b5109536500846bea5972ebc1fc1b33a-mv2.jpg", [480, 1000]),
    "chair-v-sit": ("72d608_619ce835e59f462690ba649320ae0b36-mv2_d_2100_2800_s_2.jpg", [480, 900]),
    "logo-teal": ("72d608_5a1893584450440ea218cc63b0dc4c78-mv2_d_2127_2127_s_2.png", [160]),
    "logo-blush": ("72d608_b4e088f16e2f498082da131ec2df7ed4-mv2_d_2127_2127_s_2.png", [160]),
}


def main():
    os.makedirs(OUT, exist_ok=True)
    rows = []
    for name, (filename, widths) in ASSETS.items():
        src_path = os.path.join(SRC, filename)
        original_kb = os.path.getsize(src_path) / 1024
        with Image.open(src_path) as im:
            has_alpha = im.mode in ("RGBA", "LA", "P")
            im = im.convert("RGBA" if has_alpha else "RGB")
            ow, oh = im.size
            for w in widths:
                w = min(w, ow)
                h = round(oh * w / ow)
                out_path = os.path.join(OUT, f"{name}-{w}.webp")
                resized = im if w == ow else im.resize((w, h), Image.LANCZOS)
                resized.save(out_path, "WEBP", quality=80, method=6)
                rows.append([name, filename, f"{ow}x{oh}", round(original_kb), f"{name}-{w}.webp", f"{w}x{h}",
                             round(os.path.getsize(out_path) / 1024)])
    # favicon / apple icon from the solid teal seal
    seal = os.path.join(SRC, "72d608_bba408fe385c4e6e8bfccf9b93c44f61-mv2_d_2127_2127_s_2.png")
    app_dir = os.path.join(ROOT, "src", "app")
    with Image.open(seal) as im:
        im = im.convert("RGBA")
        im.resize((192, 192), Image.LANCZOS).save(os.path.join(app_dir, "icon.png"), optimize=True)
        im.resize((180, 180), Image.LANCZOS).save(os.path.join(app_dir, "apple-icon.png"), optimize=True)
    with open(os.path.join(ROOT, "scripts", "derivatives-report.csv"), "w", newline="", encoding="utf-8") as f:
        writer = csv.writer(f)
        writer.writerow(["name", "original_file", "original_px", "original_kb", "derivative", "derivative_px", "derivative_kb"])
        writer.writerows(rows)
    print(f"{len(rows)} derivatives written to {OUT}")


if __name__ == "__main__":
    main()
