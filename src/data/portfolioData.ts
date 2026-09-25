import { PortfolioItem } from '../types';

// The 7 real project photos matching user images 1 through 7
import proj1RoofFraming from '../assets/images/roof_truss_framing_1790311530930.jpg';
import proj2Excavator from '../assets/images/site_excavator_work_1790311588979.jpg';
import proj3RedRoofing from '../assets/images/red_metal_roofing_1790311543152.jpg';
import proj4HallSteelTruss from '../assets/images/hall_roof_truss_1790320327942.jpg';
import proj5CraneLifting from '../assets/images/crane_steel_structure_1790311553995.jpg';
import proj6BrickworkPlaster from '../assets/images/brickwork_plaster_1790311601932.jpg';
import proj7ConcreteMixer from '../assets/images/concrete_mixer_slab_1790311567295.jpg';

export const PORTFOLIO_DATA: PortfolioItem[] = [
  {
    id: 'projek-1',
    title: 'Pembinaan Dinding Bata & Rangka Kekuda Bumbung Keluli',
    category: 'Rangka Bumbung & Dinding',
    visibleWorkDesc: 'Pemasangan struktur kekuda keluli ringan (lightweight steel truss) di atas dinding bata simen rumah setingkat yang sedang dalam pembinaan.',
    image: proj1RoofFraming,
    tag: 'Kekuda Keluli & Bata',
  },
  {
    id: 'projek-2',
    title: 'Kerja Tapak & Pengorekan Tanah Menggunakan Jengkaut',
    category: 'Kerja Tapak & Tanah',
    visibleWorkDesc: 'Pengendalian jentera jengkaut jentolak (backhoe) untuk kerja perataan tanah dan pengorekan laluan saliran berhampiran pagar masuk dan laluan bertar.',
    image: proj2Excavator,
    tag: 'Pengorekan & Tapak',
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
    visibleWorkDesc: 'Pemasangan rangka kekuda keluli struktur (structural steel trusses) bertingkat tinggi dengan bantuan sistem perancah di dalam bangunan.',
    image: proj4HallSteelTruss,
    tag: 'Struktur Keluli Dalaman',
  },
  {
    id: 'projek-5',
    title: 'Pengangkatan Kekuda Bumbung Menggunakan Kren Bergerak',
    category: 'Kerja Besi & Struktur',
    visibleWorkDesc: 'Operasi mengangkat kekuda bumbung keluli pasang siap ke atas dinding bangunan menggunakan kren hidraulik bergerak bersama panduan keselamatan.',
    image: proj5CraneLifting,
    tag: 'Kren Bergerak & Kekuda',
  },
  {
    id: 'projek-6',
    title: 'Kerja Ikatan Bata & Lepaan Simen Dinding Luaran',
    category: 'Lepaan Simen & Bata',
    visibleWorkDesc: 'Aplikasi lepaan mortar simen secara manual pada permukaan dinding bata merah dengan sokongan struktur perancah di tapak bina.',
    image: proj6BrickworkPlaster,
    tag: 'Lepaan Simen & Bata',
  },
  {
    id: 'projek-7',
    title: 'Penuangan Konkrit Papak Lantai Tapak & BRC',
    category: 'Kerja Konkrit & Papak',
    visibleWorkDesc: 'Lori pembancuh konkrit siap campur (ready-mix) menuang adunan konkrit melalui palung ke atas tapak bertetulang jejaring dawai besi (BRC) dan membran plastik.',
    image: proj7ConcreteMixer,
    tag: 'Penuangan Konkrit Ready-Mix',
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
