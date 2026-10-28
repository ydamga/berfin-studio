// Sitede okunan her metin, fiyat ve iletişim bilgisi bu dosyadadır.
// Düzen, Downloads/PORTFOLYO WEBSİTESİ.fig tasarımının birebir karşılığıdır.

export const brand = {
  // Menüdeki yazım tasarımdaki gibi: "Berfin AYAR"
  logo: 'Berfin AYAR',
  name: 'Berfin Ayar',
};

export const contact = {
  // Tasarımda yazdığı biçimiyle gösterilir; bağlantılar rakamlardan kurulur.
  phoneLabel: '+90 0543 166 10 72',
  phone: '+905431661072',
  // WhatsApp için ülke koduyla, sadece rakam. null yaparsanız "Bu paketi seç" e-postaya yönlenir.
  whatsapp: '905431661072' as string | null,
  email: 'elifberfinayar@gmail.com',
  behance: 'https://www.behance.net/berfinayar_scout',
};

export const nav = [
  { label: 'İşler', href: '#portfolyo' },
  { label: 'Nasıl Çalışıyorum', href: '#surec' },
  { label: 'Paketler', href: '#paketler' },
  { label: 'Hakkımda', href: '#hakkimda' },
];

export const hero = {
  // Mavi ve kalın gösterilecek kelime `accent` ile işaretlenir.
  before: 'Markanı sosyal medyada ',
  accent: 'farklı',
  after: ' hale getirelim.',
  text: 'Reels, TikTok ve ürün videoları, sosyal medya tasarımları. Fikirden yayına hazır teslimata kadar tek elden, aylık sabit fiyatla.',
};

export const about = {
  heading: 'Berfin.',
  photo: { src: '/img/berfin-900.webp', small: '/img/berfin-450.webp', alt: 'Berfin Ayar’ın portresi' },
  // Son paragraf kalın gösterilir (tasarımdaki gibi).
  bio: [
    'Merhaba! Ben Berfin; 6 yıllık deneyime ve bir yıllık sanat yönetmenliği geçmişine sahip bir grafik tasarımcıyım. Güçlü görsel kimlikler kurmak, markaları şekillendirmek ve görsel hikâye anlatımının peşine düşmek benim tutkum.',
    'Marka kimliğinden sosyal medyaya, basılı tasarımdan UI/UX’e kadar fikirleri özenli, kendine özgü ve görsel olarak etkileyici deneyimlere dönüştürmeyi seviyorum.',
    'Fikirlerini sıradanın ötesinde bir yaratıcılıkla hayata geçirelim.',
  ],
  skillsTitle: 'Yetenekler',
  skills: ['Video Kurgu', 'Sosyal Medya', 'Marka Kimliği', 'Sanat Yönetmenliği', 'İllüstrasyon', 'UI/UX'],
  experienceTitle: 'Deneyim',
  // Kaynak: Downloads/Elif Berfin AYAR Resume.pdf; GoJob satırı Figma tasarımından, açıklaması Berfin'den.
  // `dates` boş bırakılırsa gösterilmez. Sıra: en yeni en üstte.
  experience: [
    {
      role: 'GOJOB AGENCY - SANAT YÖNETMENİ',
      dates: 'Nisan 2026 – Günümüz',
      text: 'Marka fotoğraf çekimlerinde sanat yönetmenliğini üstleniyor, birden fazla projede marka kimliklerini yönetiyorum. Tutarlı ve etkili bir görsel iletişim için marka kimliği, sosyal medya tasarımları, basılı materyaller ve UI/UX tasarımları üretiyorum.',
    },
    {
      role: 'KURGU MEDYA - GRAFİK TASARIM UZMANI',
      dates: 'Ağustos 2025 – Nisan 2026',
      text: 'UI/UX, web, sosyal medya ve basılı işler tasarladım. Ercan Burger, Nevada ve Köşkeroğlu Ocakbaşı gibi müşteriler için marka kimlikleri ve görsel diller geliştirdim.',
    },
    {
      role: 'MIRFARMA - GRAFİK TASARIM UZMANI',
      dates: 'Ağustos 2024 – Ağustos 2025',
      text: 'Markanın dijital, basılı, ambalaj ve UI/UX tasarımlarında kreatif yönetimi üstlendim. İçerik tasarımıyla sosyal medyada 8.000’in üzerinde organik büyüme, ambalaj yenilemesiyle ürün satışlarında %75⁠–⁠80 artış sağladım.',
    },
    {
      role: 'SERBEST (FIVERR, BIONLUK) - GRAFİK TASARIMCI, DİJİTAL SANATÇI',
      dates: '2020 – Günümüz',
      text: 'Farklı sektörlerden müşteriler için görsel kimlik, UI/UX, sosyal medya ve afiş tasarımı, illüstrasyon, storyboard ve konsept sanatı üretiyorum.',
    },
  ],
  more: { before: 'Detaylı portfolyoyu incelemek için ', link: 'buraya tıklayın.' },
};

export const videos = {
  headingAccent: 'Video',
  heading: ' Portfolyosu',
  text: 'Reels, TikTok ve ürün videoları. Bir videoya dokunun, büyük ekranda oynasın.',
};

// "Nasıl Çalışıyoruz?" adımları. Numaralar sıradan gelir.
export const process = {
  heading: 'Nasıl Çalışıyoruz?',
  steps: [
    'Keşif: markanı, hedef kitleni ve ihtiyaçlarını dinliyorum; neyi neden anlatacağımızı birlikte netleştiriyoruz.',
    'Planlama: aylık içerik fikirleri, senaryo ve çekim planı. Her içeriğin amacı ve yayın tarihi baştan belli.',
    'Üretim: çekim, tasarım ve kurgu. Renk, ses ve altyazı dahil her detay elden geçiyor.',
    'Revizyon: geri bildirimlerini tek listede alıyorum, paketindeki revizyon hakkı kadar düzeltme yapıyorum.',
    'Teslim: platform ölçülerinde, yayına hazır video ve görsel dosyaları.',
  ],
};

export type Package = {
  id: string;
  name: string;
  price: number; // aylık, KDV hariç, TL
  text: string;
  features: string[]; // kartta büyük yazılan satırlar
  /** true: mavi kart (tasarımda ilk kart) */
  highlight?: boolean;
};

export const packages = {
  heading: 'Paketler',
  text: 'Aylık sabit fiyat, KDV hariç. Reklam bütçesi, stüdyo, oyuncu ve seyahat giderleri pakete dahil değildir; gerekirse önceden yazılı olarak belirtilir.',
  cta: 'BU PAKETİ SEÇ',
  items: [
    {
      id: 'starter',
      name: 'Giriş Paketi',
      price: 8900,
      text: 'Aylık, KDV hariç. İçerik başına 1 revizyon.',
      features: ['4 video + kurgu', '8 sosyal medya tasarımı', '8 hikâye'],
      highlight: true,
    },
    {
      id: 'growth',
      name: 'Büyüme Paketi',
      price: 14900,
      text: 'KDV hariç. İçerik başına 2 revizyon.',
      features: ['8 video + kurgu', '12 sosyal medya tasarımı', '16 hikâye', 'Branding çalışması'],
    },
    {
      id: 'scale',
      name: 'Profesyonel Paket',
      price: 22900,
      text: 'KDV hariç. İçerik başına 2 revizyon, aylık değerlendirme görüşmesi.',
      features: ['12 video + kurgu', '16 sosyal medya tasarımı', '20 hikâye', 'Branding çalışması'],
    },
  ] as Package[],
};

export const faq = {
  heading: 'Sıkça sorulan sorular',
  // Tasarımda beş soru var; sırası buradaki sıradır.
  items: [
    {
      q: 'Çekim hizmeti paketlere dahil mi?',
      a: 'Her pakette videolar kurgusuyla birlikte hazırlanır ve çekim sizin mekânınızda yapılabilir. Stüdyo, oyuncu ve seyahat giderleri pakete dahil değildir; gerekirse önceden yazılı olarak belirtilir.',
    },
    {
      q: 'Kaç revizyon hakkımız var?',
      a: 'Giriş Paketi’nde içerik başına 1, Büyüme ve Profesyonel paketlerde 2 revizyon turu. Bir tur, tek seferde iletilen düzeltme listesidir. Paketin üzerine ek video, görsel ya da çekim günü ayrıca tekliflendirilir.',
    },
    {
      q: 'Teslim süresi nedir?',
      a: 'Her içeriğin teslim tarihi, ay başında birlikte onayladığımız içerik planında yazılıdır.',
    },
    {
      q: 'Hesap yönetimi, reklam ve KDV fiyata dahil mi?',
      a: 'Hayır. Paketler video, kurgu, sosyal medya tasarımı ve hikâye üretimini kapsar; Büyüme ve Profesyonel paketlerde branding çalışması da vardır. Hesap yönetimi, paylaşım ve reklam yönetimi dahil değildir. Reklam bütçesi, stüdyo, oyuncu ve seyahat giderleri ayrıca karşılanır. Tüm fiyatlar aylık ve KDV hariçtir.',
    },
    {
      q: 'Projeye nasıl başlayabiliriz?',
      a: 'Telefon, WhatsApp ya da e-postayla yazın. Kısa bir görüşmede ihtiyacınızı dinler, size uygun paketi yazılı olarak iletirim.',
    },
  ],
};

export const contactSection = {
  heading: 'Bir sonraki projenizi konuşalım!',
  text: 'Ne istediğinizi kısaca yazın ya da arayın; kapsamı ve fiyatı birlikte netleştirelim.',
};
