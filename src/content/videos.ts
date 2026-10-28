// Video Portfolyosu: tasarımdaki sekiz dikey kart, sırasıyla.
// Bir karta video eklediğinizde kart oynatılabilir hale gelir ve büyük pencerede açılır.
//
//   src:    public/video/ içine koyduğunuz dosya, ör. '/video/kafe-reels.mp4' (9:16, 1080×1920, H.264)
//   embed:  YouTube ya da Vimeo bağlantısı, ör. 'https://www.youtube-nocookie.com/embed/VIDEO_ID'
//   poster: kapak görseli, ör. '/img/kafe-reels.webp' (9:16; boşsa kart tasarımdaki düz renkte kalır)
//   Şu anki kapaklar Berfin'in videos/ klasöründeki thumbnail'lerinden 540 px WebP olarak üretildi.
//
// Videosu olmayan kart tasarımdaki gibi düz bir kart olarak görünür ve tıklanmaz.

export type VideoSlot = {
  title: string;
  src?: string;
  embed?: string;
  poster?: string;
};

export const videoSlots: VideoSlot[] = [
  { title: 'SunBerg Supplements · Protein tozu kullanmalı mıyım?', src: '/video/sunberg-protein-tozu.mp4', poster: '/img/video/sunberg-protein-tozu.webp' },
  { title: 'SunBerg Supplements · Ramazanda işlenmiş gıdalar', src: '/video/sunberg-ramazan-islenmis-gidalar.mp4', poster: '/img/video/sunberg-ramazan-islenmis-gidalar.webp' },
  { title: 'SunBerg Supplements · Mass gainer', src: '/video/sunberg-kilo-almak.mp4', poster: '/img/video/sunberg-kilo-almak.webp' },
  { title: 'SunBerg Supplements · Maden suyu', src: '/video/sunberg-maden-suyu.mp4', poster: '/img/video/sunberg-maden-suyu.webp' },
  { title: 'SunBerg Supplements · Doğal takviyeler', src: '/video/sunberg-natural-supplements.mp4', poster: '/img/video/sunberg-natural-supplements.webp' },
  { title: 'SunBerg Supplements · Güvenli takviye', src: '/video/sunberg-icindekiler.mp4', poster: '/img/video/sunberg-icindekiler.webp' },
  { title: 'SunBerg Supplements · Kreatin kullanmalı mıyım?', src: '/video/sunberg-kreatin.mp4', poster: '/img/video/sunberg-kreatin.webp' },
  { title: 'SunBerg Supplements · Amino asitler', src: '/video/sunberg-prof-gunkara.mp4', poster: '/img/video/sunberg-prof-gunkara.webp' },
];
