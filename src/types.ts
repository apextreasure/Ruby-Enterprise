export type PageRoute = 'utama' | 'servis' | 'portfolio' | 'hubungi';

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  scope: string[];
  benefits: string[];
  image: string;
  isSolar?: boolean;
  tag?: string;
  illustrationNote?: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  visibleWorkDesc: string;
  image: string;
  tag: string;
}

export interface StateCoverage {
  state: string;
  tagline: string;
  districts: string[];
  features: string[];
  isBaseState?: boolean;
}

export interface ContactFormData {
  nama: string;
  telefon: string;
  servis: string;
  negeri: string;
  daerah: string;
  mesej: string;
}
