# Berfin Ayar · portfolyo sitesi

`Downloads/PORTFOLYO WEBSİTESİ.fig` tasarımının birebir kodu. React 18 + TypeScript + Vite.
Masaüstünde her ölçü tasarımdaki piksel değeridir (1920 px genişlikte konumlar Figma ile 1 px içinde aynıdır);
daha dar ekranlarda aynı oranla küçülür, 760 px altında tek sütuna iner.
Yazı tipleri (Poppins, Space Mono) projenin içinde gelir.

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # yayın dosyaları dist/ içine
npm run preview   # dist/'i yerelde sunar
```

## İçeriği düzenleme

| Dosya | İçinde ne var |
| --- | --- |
| `src/content/site.ts` | menü, başlık, hakkımda metni, skills, experience, süreç adımları, paketler ve fiyatlar, SSS, telefon, e-posta |
| `src/content/videos.ts` | Video Portfolyosu'ndaki sekiz kart |
| `public/img/berfin-*.webp` | portre (Figma'daki kırpmayla) |

- **Fiyat**: `packages.items[].price` (ör. `9900` → "9.900 TL"). Mavi kart `highlight: true` olan pakettir.
- **BU PAKETİ SEÇ**: WhatsApp'ı paket adıyla hazır bir mesajla açar. `contact.whatsapp` null yapılırsa e-postaya yönlenir.
- **Başlıktaki mavi kelime**: `hero.accent`.
- **Sağ alttaki iletişim ikonu** (`src/components/ContactFab.tsx`): sayfayla birlikte kalır; tıklanınca "Ara" (`contact.phone`) ve "WhatsApp’tan yaz" (`contact.whatsapp`) seçenekleri açılır. WhatsApp mesajının ilk cümlesi dosyanın başındaki `message`.

## Video ekleme

`src/content/videos.ts` içinde bir karta:

```ts
{ title: 'Kafe Reels', src: '/video/kafe-reels.mp4', poster: '/img/kafe-reels.webp' }   // dosyayı public/video/ içine koyun
{ title: 'Ürün videosu', embed: 'https://www.youtube-nocookie.com/embed/VIDEO_ID' }       // YouTube / Vimeo
```

Videosu olan kart tıklanınca büyük pencerede oynar. Videosu olmayan kart tasarımdaki gibi düz renkte görünür ve tıklanmaz.
Dikey videolar için 1080×1920, H.264 MP4 önerilir.

## Yayına alma

Site GitHub Pages'te, `berfinayar.me` alan adıyla yayında. `main` dalına her push'ta
`.github/workflows/deploy.yml` siteyi derleyip yayınlar. Alan adı `public/CNAME` içinde.
Ham video dosyaları (`videos/`) repoya girmez; sitede kullanılanlar `public/video/` içinde.

Önceki sade sürümün kaynak dosyaları `~/berfin-studio-sade-yedek/` klasöründe.
