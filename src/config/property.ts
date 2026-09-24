import { type LucideIcon } from 'lucide-react';

export interface Stat {
  icon: LucideIcon;
  label: string;
  value: string;
}

export interface Amenity {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
  span?: 'wide' | 'tall' | 'normal';
}

export interface PropertyConfig {
  brand: string;
  agency: string;
  status: string;
  name: string;
  tagline: string;
  location: string;
  fullAddress: string;
  price: number;
  priceSuffix: string;
  description: string[];
  hero: { image: string };
  stats: Stat[];
  highlights: string[];
  gallery: GalleryImage[];
  amenities: Amenity[];
  agent: {
    name: string;
    title: string;
    phone: string;
    email: string;
    photo: string;
    license: string;
  };
}
