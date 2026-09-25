import { PortfolioItem } from '../types';

// Lossless crops of panels 02–08 in the supplied RUBY_ENTERPRISE_Portfolio image.
// Panel 01 is a promotional poster, not a project photograph.
// Separate paths deliberately preserve existing hero and service illustrations.
const proj1RoofFraming = '/portfolio/ruby-source-02.webp';
const proj2Excavator = '/portfolio/ruby-source-03.webp';
const proj3RedRoofing = '/portfolio/ruby-source-04.webp';
const proj4HallSteelTruss = '/portfolio/ruby-source-05.webp';
const proj5CraneLifting = '/portfolio/ruby-source-06.webp';
const proj6BrickworkPlaster = '/portfolio/ruby-source-07.webp';
const proj7ConcreteMixer = '/portfolio/ruby-source-08.webp';

export const PORTFOLIO_DATA: PortfolioItem[] = [
  {
    id: 'projek-1',
    title: 'Pembinaan Dinding Bata & Rangka Kekuda Bumbung Keluli',
    category: 'Rangka Bumbung & Dinding',
    visibleWorkDesc: 'Dinding bata dengan bukaan pintu dan tingkap serta rangka kekuda bumbung keluli biru di atas bangunan yang sedang dibina.',
    image: proj1RoofFraming,
    tag: 'Kekuda Keluli & Bata',
  },
  {
    id: 'projek-2',
    title: 'Jentera Backhoe di Kawasan Pintu Masuk',
    category: 'Kerja Tapak & Tanah',
    visibleWorkDesc: 'Jentera backhoe berada berhampiran pintu pagar dan pondok pengawal, dengan satu komponen konkrit di atas laluan bertar.',
    image: proj2Excavator,
    tag: 'Jentera & Kawasan Tapak',
  },
  {
    id: 'projek-3',
    title: 'Pemasangan Kepingan Bumbung Logam Merah',
    category: 'Pemasangan Bumbung',
    visibleWorkDesc: 'Pekerja memasang dan mengikat kepingan bumbung logam profil gelombang merah di atas struktur rangka bumbung kediaman.',
    image: proj3RedRoofing,
    tag: 'Bumbung Logam Merah',
  },
  {
    id: 'projek-4',
    title: 'Pemasangan Struktur Keluli Bumbung Ruang Luas',
    category: 'Kerja Besi & Struktur',
    visibleWorkDesc: 'Rangka kekuda bumbung keluli merentangi ruang dalaman bangunan, dengan perancah dan peralatan kerja di bawahnya.',
    image: proj4HallSteelTruss,
    tag: 'Struktur Keluli Dalaman',
  },
  {
    id: 'projek-5',
    title: 'Pengangkatan Kekuda Bumbung Menggunakan Kren Bergerak',
    category: 'Kerja Besi & Struktur',
    visibleWorkDesc: 'Kren bergerak mengangkat satu rangka kekuda keluli di sebelah dinding bangunan yang sedang dalam pembinaan.',
    image: proj5CraneLifting,
    tag: 'Kren Bergerak & Kekuda',
  },
  {
    id: 'projek-6',
    title: 'Kerja Ikatan Bata & Lepaan Simen Dinding Luaran',
    category: 'Lepaan Simen & Bata',
    visibleWorkDesc: 'Pekerja menjalankan kerja lepaan pada dinding luar bangunan; sebahagian dinding bata merah masih terdedah, dengan perancah dan pasir di tapak.',
    image: proj6BrickworkPlaster,
    tag: 'Lepaan Simen & Bata',
  },
  {
    id: 'projek-7',
    title: 'Persediaan Penuangan Konkrit Papak Lantai',
    category: 'Kerja Konkrit & Papak',
    visibleWorkDesc: 'Lori pembancuh konkrit berada di tepi tapak papak lantai yang disediakan dengan jejaring tetulang keluli, lapisan plastik dan acuan tepi.',
    image: proj7ConcreteMixer,
    tag: 'Persediaan Papak Konkrit',
  },
];

export const PORTFOLIO_CATEGORIES = [
  'Semua',
  'Rangka Bumbung & Dinding',
  'Kerja Tapak & Tanah',
  'Pemasangan Bumbung',
  'Kerja Besi & Struktur',
  'Lepaan Simen & Bata',
  'Kerja Konkrit & Papak',
];
