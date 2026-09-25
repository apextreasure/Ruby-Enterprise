import { ServiceItem } from '../types';

// Distinct illustrative images for each service (NOT repeating any portfolio images)
import solarImg from '../assets/images/solar_clean_malay_1790311516702.jpg';
import svcBinaRumahImg from '../assets/images/svc_bina_rumah_1790320339024.jpg';
import svcRenovasiImg from '../assets/images/svc_renovasi_1790320354558.jpg';
import svcBumbungImg from '../assets/images/svc_bumbung_1790320367831.jpg';
import svcPagarImg from '../assets/images/svc_pagar_wall_1790320384000.jpg';
import ironGrilleImg from '../assets/images/iron_grille_work_1790318918020.jpg';
import drainageImg from '../assets/images/drainage_longkang_1790318934652.jpg';
import electricalImg from '../assets/images/electrical_wiring_1790318947640.jpg';
import plumbingImg from '../assets/images/plumbing_sanitary_1790318960880.jpg';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'cuci-solar',
    title: 'Cuci Panel Solar',
    shortDesc: 'Servis cucian panel solar profesional menggunakan berus khas teleskopik dan air bertekanan terkawal tanpa calar.',
    fullDesc: 'Pembersihan panel solar secara berkala mengeluarkan mendapan habuk, lumut, najis burung, dan debu persekitaran yang menghalang penyerapan cahaya matahari. Kami menggunakan berus mikrofiber/nilon lembut berputar bersama air ditapis bagi memelihara salutan anti-pantulan panel tanpa menyebabkan keretakan mikro (microcracks). Kerja dijalankan mengikut piawaian keselamatan bumbung yang ketat.',
    scope: [
      'Pembersihan permukaan panel solar menggunakan berus teleskopik khas',
      'Penggunaan air bertekanan rendah yang selamat bagi sel photovoltaic',
      'Pemeriksaan visual ke atas keadaan fizikal panel dan kekuda sokongan',
      'Penggunaan tali abah-abah keselamatan (safety harness) di atas bumbung',
      'Pemberian gambar sebelum dan selepas cucian untuk rujukan pelanggan',
    ],
    benefits: [
      'Memastikan penyerapan sinaran matahari pada tahap optimum',
      'Mencegah risiko timbunan kotoran kekal dan bintik panas (hotspots)',
      'Memanjangkan jangka hayat modul solar dan rangka pelekap',
      'Menggunakan kaedah manual yang selamat tanpa bahan kimia menghakis',
    ],
    image: solarImg,
    isSolar: true,
    tag: 'Servis Utama & Istimewa',
    illustrationNote: 'Ilustrasi perkhidmatan cucian panel solar dengan kelengkapan keselamatan bumbung & berus teleskopik.',
  },
  {
    id: 'bina-rumah',
    title: 'Bina Rumah Baharu',
    shortDesc: 'Pembinaan rumah kediaman baharu dari asas tapak, struktur konkrit, dinding bata sehingga bumbung dan kemasan.',
    fullDesc: 'Kami menyediakan perkhidmatan pembinaan rumah persendirian, banglo setingkat, dan rumah teres dengan pengawasan teliti di tapak bina. Menggunakan bahan binaan berkualiti tinggi mengikut spesifikasi pelan yang dipersetujui dan mematuhi standard kejuruteraan.',
    scope: [
      'Pembersihan tapak dan kerja cerucuk / asas pad footings',
      'Pemasangan tetulang besi, kotak bentuk (formwork) dan penuangan konkrit siap campur',
      'Pemasangan dinding bata simen atau bata merah berkualiti',
      'Pemasangan rasuk atas (roof beam) dan struktur kekuda bumbung',
      'Penyediaan lantai lepaan simen dan pemasangan jubin',
    ],
    benefits: [
      'Struktur kukuh berpandukan spesifikasi pelan dan piawaian',
      'Pemantauan kemajuan kerja berperingkat bersama pemilik',
      'Sebut harga jelas mengikut skop yang dipersetujui',
    ],
    image: svcBinaRumahImg,
    tag: 'Binaan Kediaman',
    illustrationNote: 'Ilustrasi perkhidmatan pembinaan struktur rumah baharu dan tiang konkrit.',
  },
  {
    id: 'ubah-suai-rumah',
    title: 'Ubah Suai Rumah (Renovasi)',
    shortDesc: 'Pelanjutan ruang dapur basah, penambahan bilik tidur, ubah suai ruang tamu serta car porch kediaman.',
    fullDesc: 'Menambah ruang dan memperbaharui wajah rumah anda dengan kerja renovasi kemas dan tersusun. Kami menguruskan kerja perobohan bahagian lama dengan selamat, membina sambungan baharu, dan menyiapkan kemasan dinding serta siling.',
    scope: [
      'Sambungan dapur ke bahagian belakang (wet & dry kitchen)',
      'Penambahan bilik tidur, bilik air atau stor tambahan',
      'Ubah suai anjung kereta (car porch) termasuk pemasangan jubin lantai tahan lasak',
      'Pemasangan siling plaster dan kerja plesteran dinding',
      'Penyelarasan paip dan pendawaian tambahan bagi ruang baharu',
    ],
    benefits: [
      'Memaksimumkan keluasan tanah dan keselesaan seisi keluarga',
      'Kemasan rapi dan penyambungan struktur sedia ada yang kukuh',
      'Jadual kerja tersusun bagi mengurangkan gangguan penghuni',
    ],
    image: svcRenovasiImg,
    tag: 'Renovasi Kediaman',
    illustrationNote: 'Ilustrasi perkhidmatan kerja ubah suai, sambungan ruang dan kemasan dalaman.',
  },
  {
    id: 'kerja-bumbung',
    title: 'Kerja Bumbung & Kekuda',
    shortDesc: 'Pemasangan bumbung metal deck, genting konkrit, penggantian kekuda keluli ringan serta membaiki kebocoran.',
    fullDesc: 'Menangani masalah bumbung bocor, kekuda kayu lama yang diserang anai-anai atau memasang bumbung baharu dengan ketahanan cuaca tropika. Kami berpengalaman dalam pemasangan struktur bumbung keluli ringan (C-purlin/truss) dan pelbagai jenis penutup bumbung.',
    scope: [
      'Pemasangan kekuda keluli ringan (galvanised lightweight steel truss)',
      'Pemasangan kepingan bumbung metal deck berlapik penebat haba (foil / PU foam)',
      'Pemasangan atap genting konkrit dan rabung (ridge capping)',
      'Kerja flashing zink dan kalis air bagi mengatasi masalah resapan air hujan',
      'Pembersihan dan penggantian palung air (gutters)',
    ],
    benefits: [
      'Perlindungan maksimum daripada kebocoran hujan lebat',
      'Struktur keluli anti-karat dan bebas masalah anai-anai',
      'Pengudaraan dan penebatan haba yang lebih nyaman',
    ],
    image: svcBumbungImg,
    tag: 'Bumbung & Atap',
    illustrationNote: 'Ilustrasi perkhidmatan penggantian dan pemasangan atap bumbung moden.',
  },
  {
    id: 'kerja-besi',
    title: 'Kerja Besi & Gril Keselamatan',
    shortDesc: 'Fabrikasi dan pemasangan gril pintu/tingkap moden, awning besi, pintu pagar utama, dan struktur keluli bertetulang.',
    fullDesc: 'Menyediakan kerja kimpalan dan fabrikasi besi berkualiti untuk keselamatan dan estetika rumah serta premis. Dari gril moden minimalis, awning polikarbonat / metal deck sehinggalah rangka keluli struktur bertingkat.',
    scope: [
      'Pembuatan gril pintu dan tingkap wrought iron atau mild steel dengan kimpalan kemas',
      'Pemasangan awning bumbung teras dan tepi rumah',
      'Pembuatan pintu pagar lipat / sliding termasuk tapak autogate',
      'Pemasangan struktur keluli bertetulang bagi dewan atau kediaman',
      'Pengecatan cat alas anti-karat dan cat kemasan tahan cuaca',
    ],
    benefits: [
      'Meningkatkan tahap keselamatan premis kediaman dan perniagaan',
      'Rekaan kemas, kukuh dan kimpalan yang teliti',
      'Cat tahan karat untuk ketahanan jangka panjang',
    ],
    image: ironGrilleImg,
    tag: 'Fabrikasi Besi & Gril',
    illustrationNote: 'Ilustrasi perkhidmatan fabrikasi kimpalan gril keselamatan dan pintu pagar besi.',
  },
  {
    id: 'pagar',
    title: 'Pembinaan Pagar & Tembok',
    shortDesc: 'Pemasangan pagar tembok konkrit, pagar bata lepa, chainlink, dan pagar keselamatan keliling kawasan.',
    fullDesc: 'Menentukan sempadan hartanah anda dengan pagar yang kukuh, teguh dan selamat. Kami menyediakan asas konkrit berbaris (strip footing) yang kukuh agar tembok tidak retak atau condong walaupun di atas tanah mendap.',
    scope: [
      'Pengorekan peparit asas dan penuangan konkrit asas tapak pagar',
      'Pemasangan tiang konkrit bertetulang dan ikatan bata',
      'Kerja lepaan simen dan cat luaran kalis cuaca',
      'Pemasangan pagar dawai berangkai (chain-link) atau pagar anti-climb',
      'Penyediaan laluan kabel elektrik untuk lampu tiang dan autogate',
    ],
    benefits: [
      'Memberikan privasi dan keselamatan perimeter kediaman',
      'Asas tapak kukuh mengelakkan mendapan dan retakan dinding pagar',
      'Pilihan kemasan daripada gaya moden sehingga pagar ringkas berpagar dawai',
    ],
    image: svcPagarImg,
    tag: 'Perimeter & Pagar',
    illustrationNote: 'Ilustrasi perkhidmatan pembinaan tembok pagar konkrit dan lepaan simen kemas.',
  },
  {
    id: 'longkang',
    title: 'Sistem Longkang & Perparitan',
    shortDesc: 'Pembinaan longkang perimeter rumah jenis U-drain konkrit bertetulang, longkang monsun dan saliran air larian hujan.',
    fullDesc: 'Sistem saliran yang baik mengelakkan takungan air, hakisan tanah tapak rumah dan pembiakan nyamuk. Kami membina longkang berbentuk U atau longkang bertutup dengan kecerunan tepat agar aliran air lancar ke parit utama.',
    scope: [
      'Penggalian laluan longkang dengan kecondongan (gradient) yang betul',
      'Pemasangan blok longkang konkrit pasang siap (precast U-drain)',
      'Pembinaan perangkap sampah (sump pit) dan sambungan ke saliran utama',
      'Pemasangan penutup longkang konkrit bertetulang atau jeriji besi (grating)',
      'Kerja merapikan tebing dan sambungan lepaan simen',
    ],
    benefits: [
      'Mengelakkan limpahan air ke halaman atau lantai rumah ketika hujan lebat',
      'Menjaga integriti tanah sekeliling asas kediaman daripada hakisan',
      'Aliran air lancar, bersih dan mudah diselenggara',
    ],
    image: drainageImg,
    tag: 'Saliran & U-Drain',
    illustrationNote: 'Ilustrasi perkhidmatan pemasangan sistem saliran longkang konkrit perimeter kediaman.',
  },
  {
    id: 'pendawaian-elektrik',
    title: 'Pendawaian Elektrik (Wiring)',
    shortDesc: 'Pendawaian 1 fasa dan 3 fasa, penggantian kotak agihan (DB box), penambahan soket kuasa, suis lampu, dan kipas.',
    fullDesc: 'Kerja elektrik dijalankan mengikut garis panduan keselamatan Suruhanjaya Tenaga. Kami memasang pendawaian tersembunyi (concealed) atau berpaip PVC (surface conduit) dengan pembahagian litar yang seimbang dan peranti perlindungan arus bocor (ELCB/RCCB).',
    scope: [
      'Pendawaian penuh rumah baharu atau penggantian wayar lama (rewiring)',
      'Pemasangan dan penambahbaikan papan fius agihan (distribution board - DB)',
      'Penambahan mata kuasa soket 13A/15A untuk pendingin hawa dan pemanas air',
      'Pemasangan lampu LED moden, downlight, kipas siling dan lampu pagar',
      'Pemasangan sistem pembumian (earth grounding rod) untuk perlindungan kilat',
    ],
    benefits: [
      'Memastikan bekalan elektrik selamat tanpa risiko litar pintas',
      'Litar seimbang dan perlindungan ke atas perkakas elektrik rumah',
      'Kekemasan laluan paip conduit dan pemasangan aksesori suis',
    ],
    image: electricalImg,
    tag: 'Elektrikal & DB Box',
    illustrationNote: 'Ilustrasi perkhidmatan pendawaian elektrik, pemasangan kotak fius DB dan suis keselamatan.',
  },
  {
    id: 'paip',
    title: 'Kerja Perpaipan & Sanitari',
    shortDesc: 'Pemasangan paip bekalan air bersih (HDPE polypipe / PPR tahan lasak), tangki bumbung, dan sistem pembetungan.',
    fullDesc: 'Menyediakan sistem paip air yang tahan lasak dan bebas karat bagi menjamin bekalan air bersih bertekanan baik. Mengendalikan pemasangan paip baharu, pemindahan meter air, penggantian tangki air bumbung serta pembaikan paip pecah atau tersumbat.',
    scope: [
      'Pemasangan paip air bersih menggunakan polypipe (HDPE) atau paip PPR tahan karat',
      'Pemasangan tangki simpanan air poli berkualiti di ruang bumbung',
      'Pemasangan pam air tekanan tinggi (water pressure booster pump)',
      'Pemasangan kelengkapan bilik mandi: mangkuk tandas, sinki, pancuran dan tab',
      'Penyambungan paip air buangan dan sistem perangkap bau lantai',
    ],
    benefits: [
      'Tekanan air sekata dan lancar ke seluruh bilik air dan dapur',
      'Bahan paip berkualiti tinggi yang tidak berkarat dan tahan tekanan',
      'Kerja sambungan teliti mengelakkan kebocoran tersembunyi di dalam dinding',
    ],
    image: plumbingImg,
    tag: 'Plumbing & Paip Air',
    illustrationNote: 'Ilustrasi perkhidmatan pemasangan paip bekalan air bersih polypipe dan sanitari bilik air.',
  },
];

export const STATE_COVERAGE_DATA = [
  {
    state: 'Perak',
    tagline: 'Pangkalan Operasi & Liputan Penuh Seluruh Daerah',
    isBaseState: true,
    baseArea: 'Batu Gajah & Ipoh (Pangkalan Utama)',
    districts: [
      'Batu Gajah',
      'Ipoh',
      'Kampar',
      'Gopeng',
      'Taiping',
      'Kuala Kangsar',
      'Teluk Intan',
      'Sitiawan & Seri Manjung',
      'Lumut',
      'Tapah & Bidor',
      'Parit Buntar & Bagan Serai',
      'Tanjung Malim',
    ],
    features: [
      'Masa tindak balas pantas untuk tinjauan tapak',
      'Pangkalan jentera dan pasukan kerja setempat di Perak',
      'Sebut harga percuma terus ke lokasi anda',
    ],
  },
  {
    state: 'Kedah',
    tagline: 'Liputan Kawasan Perbandaran & Pinggir Bandar Kedah',
    isBaseState: false,
    baseArea: 'Koridor Selatan & Tengah Kedah',
    districts: [
      'Sungai Petani',
      'Kulim & Kulim Hi-Tech',
      'Alor Setar',
      'Bandar Baharu',
      'Baling',
      'Kuala Ketil',
      'Jitra & Kubang Pasu',
      'Yan & Gurun',
      'Pendang',
    ],
    features: [
      'Servis cuci solar kediaman taman & premis perniagaan',
      'Projek pembinaan rumah atas tanah lot sendiri',
      'Ubah suai dan kerja bumbung kediaman',
    ],
  },
  {
    state: 'Pulau Pinang',
    tagline: 'Kawasan Seberang Perai & Bahagian Pulau',
    isBaseState: false,
    baseArea: 'Seberang Perai & Kawasan Pulau',
    districts: [
      'Seberang Jaya',
      'Butterworth',
      'Bukit Mertajam',
      'Nibong Tebal & Simpang Ampat',
      'Batu Kawan',
      'Kepala Batas',
      'Georgetown',
      'Bayan Lepas',
      'Balik Pulau',
    ],
    features: [
      'Servis cuci panel solar bumbung kediaman & kilang kecil',
      'Kerja besi gril moden, awning dan pagar keselamatan',
      'Renovasi dan pendawaian elektrik kediaman',
    ],
  },
];

export const WORK_PROCESS_STEPS = [
  {
    step: '01',
    title: 'Hubungi',
    desc: 'Hantar mesej melalui WhatsApp atau panggilan telefon di talian 011-6834 7638 untuk memulakan pertanyaan.',
  },
  {
    step: '02',
    title: 'Kongsi Keperluan & Lokasi',
    desc: 'Nyatakan jenis servis yang diperlukan (cuci solar, bina rumah, bumbung, dll.) bersama lokasi dan gambar/pelan tapak.',
  },
  {
    step: '03',
    title: 'Semakan / Sebut Harga',
    desc: 'Kami menjalankan semakan keperluan, tinjauan tapak sekiranya perlu, dan membekalkan sebut harga percuma yang telus.',
  },
  {
    step: '04',
    title: 'Jadual Kerja',
    desc: 'Setelah persetujuan dicapai, tarikh pelaksanaan ditetapkan dan kerja dimulakan mengikut piawaian kualiti dan keselamatan.',
  },
];

export const FAQ_DATA = [
  {
    q: 'Adakah sebut harga yang diberikan adalah percuma?',
    a: 'Ya, sebut harga bagi semua perkhidmatan pembinaan, ubah suai dan cuci panel solar adalah percuma tanpa sebarang caj tersembunyi.',
  },
  {
    q: 'Kawasan manakah yang diliputi oleh Ruby Enterprise?',
    a: 'Kami beroperasi dengan pangkalan utama di Batu Gajah dan Ipoh, serta menyediakan perkhidmatan merangkumi seluruh negeri Perak, Kedah dan Pulau Pinang.',
  },
  {
    q: 'Berapa kerapkah panel solar perlu dicuci?',
    a: 'Secara amnya, panel solar disyorkan dicuci setiap 6 hingga 12 bulan bergantung kepada tahap persekitaran (seperti habuk lalulintas, debu pembinaan atau kawasan berpokok yang terdedah kepada daun dan najis burung). Pembersihan berkala menyingkirkan lapisan kotoran supaya sel suria dapat menyerap cahaya matahari dengan optimum.',
  },
  {
    q: 'Adakah cucian solar menggunakan bahan kimia berbahaya?',
    a: 'Tidak. Kami menggunakan air bersih bertekanan terkawal bersama berus berbulu lembut khas untuk photovoltaic. Kami tidak menggunakan sabun kasar atau bahan kimia asid yang boleh merosakkan salutan anti-pantulan panel atau membatalkan jaminan pengeluar.',
  },
  {
    q: 'Adakah Ruby Enterprise berdaftar dengan CIDB?',
    a: 'Ya, Ruby Enterprise merupakan kontraktor berdaftar CIDB Malaysia (Gred G1–G4 Bumiputera) untuk kerja-kerja pembinaan berkaitan.',
  },
  {
    q: 'Bagaimana cara untuk menetapkan temujanji lawatan tapak?',
    a: 'Anda boleh klik butang WhatsApp di laman ini atau hubungi terus 011-6834 7638. Pasukan kami akan mengatur masa yang bersesuaian dengan anda.',
  },
];

export function buildWhatsAppLink(serviceName?: string, location?: string, customerName?: string): string {
  const phone = '601168347638';
  let message = 'Salam Ruby Enterprise, saya ingin bertanyakan tentang perkhidmatan anda:';
  
  if (serviceName) {
    message += `\n• Pilihan Servis: ${serviceName}`;
  }
  if (customerName) {
    message += `\n• Nama: ${customerName}`;
  }
  if (location) {
    message += `\n• Lokasi / Negeri: ${location}`;
  }
  message += '\n\nBolehkah saya dapatkan sebut harga percuma dan maklumat lanjut? Terima kasih.';

  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
