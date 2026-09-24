import {
  Bath,
  BedDouble,
  Car,
  Maximize,
  Waves,
  Trees,
  Flame,
  Wifi,
  Wind,
  ShieldCheck,
  Dumbbell,
  ChefHat,
  Sun,
  Mountain,
  Sailboat,
  Grape,
  Utensils,
  Sparkles,
} from 'lucide-react';
import type { PropertyConfig } from './property';

export interface ThemeColors {
  ink: string;
  ink800: string;
  ink700: string;
  bone: string;
  sand: string;
  stone400: string;
  stone500: string;
  stone600: string;
  accent: string;
  accentLight: string;
}

export interface Theme {
  id: string;
  baseId?: string;
  label: string;
  vibe: string;
  fonts: { display: string; sans: string };
  colors: ThemeColors;
  property: PropertyConfig;
}

export const themes: Theme[] = [
  {
    id: 'atelier',
    label: 'Maison Solène',
    vibe: 'Luxury Minimal',
    fonts: {
      display: "'Cormorant Garamond', Georgia, serif",
      sans: "'Inter', system-ui, sans-serif",
    },
    colors: {
      ink: '12 12 13',
      ink800: '22 22 24',
      ink700: '31 31 34',
      bone: '246 244 239',
      sand: '233 228 218',
      stone400: '168 161 150',
      stone500: '138 131 120',
      stone600: '107 101 92',
      accent: '154 133 104',
      accentLight: '185 165 133',
    },
    property: {
      brand: 'Maison Solène',
      agency: 'Atelier Estates',
      status: 'Now Leasing',
      name: 'Maison Solène',
      tagline:
        'A sculpted hillside residence where light, glass and stone meet the Pacific horizon.',
      location: 'Trousdale Estates · Beverly Hills, CA',
      fullAddress: '1420 Sierra Alta Way, Beverly Hills, CA 90210',
      price: 42000,
      priceSuffix: '/ month',
      description: [
        'Set behind private gates on a coveted Trousdale promontory, Maison Solène is a study in restraint — floor-to-ceiling glass dissolving the line between interior and the city below.',
        'Designed across a single fluid level, the residence pairs honed travertine, white oak and brushed bronze with disappearing walls that open the great room entirely to the infinity edge and skyline beyond.',
      ],
      hero: {
        image:
          'https://images.pexels.com/photos/1612351/pexels-photo-1612351.jpeg?auto=compress&cs=tinysrgb&w=2400',
      },
      stats: [
        { icon: BedDouble, label: 'Bedrooms', value: '5' },
        { icon: Bath, label: 'Bathrooms', value: '6.5' },
        { icon: Maximize, label: 'Interior', value: '7,800 sqft' },
        { icon: Car, label: 'Garage', value: '4 Cars' },
      ],
      highlights: [
        'Single-level open plan',
        'Infinity-edge pool',
        'Panoramic city-to-ocean views',
        'Smart home automation',
        'Chef-grade kitchen',
        'Private gated entry',
      ],
      gallery: [
        { src: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=1600', alt: 'Glass living room opening to terrace', span: 'wide' },
        { src: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1200', alt: 'Minimal designer kitchen', span: 'normal' },
        { src: 'https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=1200', alt: 'Primary suite with skyline view', span: 'tall' },
        { src: 'https://images.pexels.com/photos/2089698/pexels-photo-2089698.jpeg?auto=compress&cs=tinysrgb&w=1200', alt: 'Infinity pool at dusk', span: 'normal' },
        { src: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200', alt: 'Spa bathroom in stone', span: 'normal' },
        { src: 'https://images.pexels.com/photos/3214064/pexels-photo-3214064.jpeg?auto=compress&cs=tinysrgb&w=1600', alt: 'Terrace lounge over the city', span: 'wide' },
      ],
      amenities: [
        { icon: Waves, title: 'Infinity Pool & Spa', description: 'Heated 70-ft edge pool with sunken lounge and integrated spa.' },
        { icon: ChefHat, title: 'Chef’s Kitchen', description: 'Gaggenau suite, dual islands and a concealed scullery.' },
        { icon: Dumbbell, title: 'Wellness Studio', description: 'Private gym, infrared sauna and cold plunge.' },
        { icon: Trees, title: 'Landscaped Grounds', description: 'Mature olive trees, fire terraces and outdoor kitchen.' },
        { icon: Flame, title: 'Indoor–Outdoor Living', description: 'Twin fireplaces and fully retractable glass walls.' },
        { icon: ShieldCheck, title: 'Gated & Secure', description: '24/7 monitoring, biometric entry and camera coverage.' },
        { icon: Wind, title: 'Climate Comfort', description: 'Zoned HVAC, radiant floors and air purification.' },
        { icon: Wifi, title: 'Smart Automation', description: 'Crestron lighting, shades, audio and access control.' },
      ],
      agent: {
        name: 'Camille Laurent',
        title: 'Director, Luxury Leasing',
        phone: '+1 (310) 555 0182',
        email: 'camille@atelierestates.com',
        photo: 'https://images.pexels.com/photos/3760854/pexels-photo-3760854.jpeg?auto=compress&cs=tinysrgb&w=600',
        license: 'DRE #02041188',
      },
    },
  },

  {
    id: 'azure',
    label: 'Casa Azure',
    vibe: 'Coastal Bright',
    fonts: {
      display: "'Fraunces', Georgia, serif",
      sans: "'Manrope', system-ui, sans-serif",
    },
    colors: {
      ink: '11 31 51',
      ink800: '18 42 66',
      ink700: '24 56 86',
      bone: '244 248 250',
      sand: '219 232 238',
      stone400: '150 176 192',
      stone500: '102 134 154',
      stone600: '69 99 119',
      accent: '32 132 173',
      accentLight: '99 178 212',
    },
    property: {
      brand: 'Casa Azure',
      agency: 'Riviera Collective',
      status: 'Available Summer',
      name: 'Casa Azure',
      tagline:
        'A breezy whitewashed villa perched above the bay, where every room exhales toward the sea.',
      location: 'Point Dume · Malibu, CA',
      fullAddress: '28 Cliffside Drive, Malibu, CA 90265',
      price: 38500,
      priceSuffix: '/ month',
      description: [
        'Casa Azure floats above a private cove, its sun-washed terraces and arched openings framing an unbroken stretch of Pacific blue.',
        'Limewashed walls, natural linen and pale oak keep the palette soft and luminous, while sliding glass walls invite the ocean breeze straight through the heart of the home.',
      ],
      hero: {
        image:
          'https://images.pexels.com/photos/2089698/pexels-photo-2089698.jpeg?auto=compress&cs=tinysrgb&w=2400',
      },
      stats: [
        { icon: BedDouble, label: 'Bedrooms', value: '4' },
        { icon: Bath, label: 'Bathrooms', value: '4.5' },
        { icon: Maximize, label: 'Interior', value: '5,200 sqft' },
        { icon: Sailboat, label: 'Beach Access', value: 'Private' },
      ],
      highlights: [
        'Direct cove access',
        'Wraparound sea terraces',
        'Sunset-facing pool',
        'Open coastal plan',
        'Outdoor shower & cabana',
        'Whitewater views',
      ],
      gallery: [
        { src: 'https://images.pexels.com/photos/3214064/pexels-photo-3214064.jpeg?auto=compress&cs=tinysrgb&w=1600', alt: 'Sun terrace above the bay', span: 'wide' },
        { src: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1200', alt: 'Bright airy kitchen', span: 'normal' },
        { src: 'https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=1200', alt: 'Bedroom opening to the sea', span: 'tall' },
        { src: 'https://images.pexels.com/photos/1612351/pexels-photo-1612351.jpeg?auto=compress&cs=tinysrgb&w=1200', alt: 'Villa exterior at golden hour', span: 'normal' },
        { src: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200', alt: 'Light-filled spa bath', span: 'normal' },
        { src: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=1600', alt: 'Living room with ocean view', span: 'wide' },
      ],
      amenities: [
        { icon: Waves, title: 'Sunset Pool', description: 'Saltwater pool with a horizon edge facing due west.' },
        { icon: Sailboat, title: 'Private Cove', description: 'Stair access to a sheltered, swimmable beach.' },
        { icon: Sun, title: 'Solarium Terraces', description: 'Three tiers of teak decking and shaded loungers.' },
        { icon: ChefHat, title: 'Coastal Kitchen', description: 'Open galley with sea views and a breakfast bar.' },
        { icon: Flame, title: 'Fire Lounge', description: 'Sunken firepit seating above the waterline.' },
        { icon: Wind, title: 'Sea Breeze Design', description: 'Cross-ventilated rooms and retractable screens.' },
        { icon: ShieldCheck, title: 'Private & Gated', description: 'Discreet gated drive with keypad entry.' },
        { icon: Wifi, title: 'Connected Living', description: 'Whole-home audio and fibre throughout.' },
      ],
      agent: {
        name: 'Mateo Rivas',
        title: 'Coastal Specialist',
        phone: '+1 (310) 555 0394',
        email: 'mateo@rivieracollective.com',
        photo: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600',
        license: 'DRE #01997742',
      },
    },
  },

  {
    id: 'noir',
    label: 'The Monolith',
    vibe: 'Architectural Noir',
    fonts: {
      display: "'Syne', system-ui, sans-serif",
      sans: "'Inter', system-ui, sans-serif",
    },
    colors: {
      ink: '10 10 11',
      ink800: '20 20 21',
      ink700: '32 32 34',
      bone: '237 234 228',
      sand: '214 209 199',
      stone400: '150 146 138',
      stone500: '112 108 100',
      stone600: '82 79 72',
      accent: '184 84 52',
      accentLight: '214 122 84',
    },
    property: {
      brand: 'The Monolith',
      agency: 'Form & Field',
      status: 'By Appointment',
      name: 'The Monolith',
      tagline:
        'An uncompromising composition of concrete, shadow and light carved into the desert ridge.',
      location: 'Uplands · Palm Springs, CA',
      fullAddress: '900 Ridgeline Road, Palm Springs, CA 92262',
      price: 31000,
      priceSuffix: '/ month',
      description: [
        'The Monolith is architecture as sculpture — board-formed concrete planes cantilevered over the desert floor, framing the mountains like a series of moving paintings.',
        'Inside, the palette turns elemental: blackened steel, raw plaster and deep walnut, punctuated by a single corten gash of warmth that runs the length of the house.',
      ],
      hero: {
        image:
          'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=2400',
      },
      stats: [
        { icon: BedDouble, label: 'Bedrooms', value: '4' },
        { icon: Bath, label: 'Bathrooms', value: '5' },
        { icon: Maximize, label: 'Interior', value: '6,400 sqft' },
        { icon: Mountain, label: 'Vista', value: 'Ridge' },
      ],
      highlights: [
        'Board-formed concrete',
        'Cantilevered terraces',
        'Desert-mountain views',
        'Gallery-grade lighting',
        'Black-bottom lap pool',
        'Floating staircase',
      ],
      gallery: [
        { src: 'https://images.pexels.com/photos/1612351/pexels-photo-1612351.jpeg?auto=compress&cs=tinysrgb&w=1600', alt: 'Concrete facade at dusk', span: 'wide' },
        { src: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1200', alt: 'Monolithic kitchen island', span: 'normal' },
        { src: 'https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=1200', alt: 'Bedroom framing the ridge', span: 'tall' },
        { src: 'https://images.pexels.com/photos/2089698/pexels-photo-2089698.jpeg?auto=compress&cs=tinysrgb&w=1200', alt: 'Black lap pool', span: 'normal' },
        { src: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200', alt: 'Plaster and steel bath', span: 'normal' },
        { src: 'https://images.pexels.com/photos/3214064/pexels-photo-3214064.jpeg?auto=compress&cs=tinysrgb&w=1600', alt: 'Cantilevered desert terrace', span: 'wide' },
      ],
      amenities: [
        { icon: Waves, title: 'Black Lap Pool', description: 'Forty metres of mirrored water against the ridge.' },
        { icon: Sparkles, title: 'Gallery Lighting', description: 'Museum-grade track and cove lighting throughout.' },
        { icon: Dumbbell, title: 'Concrete Gym', description: 'Double-height training volume with sauna.' },
        { icon: Mountain, title: 'Ridge Terraces', description: 'Cantilevered decks over the desert floor.' },
        { icon: Flame, title: 'Corten Hearth', description: 'A weathered-steel fireplace anchoring the great room.' },
        { icon: ShieldCheck, title: 'Fortress Privacy', description: 'Solid perimeter walls and gated motor court.' },
        { icon: Wind, title: 'Passive Cooling', description: 'Thermal mass and clerestory ventilation.' },
        { icon: Wifi, title: 'Integrated Tech', description: 'Lutron, Sonos and discreet automation.' },
      ],
      agent: {
        name: 'Idris Kane',
        title: 'Architectural Sales',
        phone: '+1 (760) 555 0271',
        email: 'idris@formandfield.com',
        photo: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600',
        license: 'DRE #02110934',
      },
    },
  },

  {
    id: 'terra',
    label: 'Villa Terra',
    vibe: 'Warm Hacienda',
    fonts: {
      display: "'DM Serif Display', Georgia, serif",
      sans: "'DM Sans', system-ui, sans-serif",
    },
    colors: {
      ink: '46 32 24',
      ink800: '60 43 33',
      ink700: '78 57 44',
      bone: '247 240 230',
      sand: '236 223 204',
      stone400: '178 158 134',
      stone500: '142 120 96',
      stone600: '108 88 68',
      accent: '189 106 69',
      accentLight: '214 142 102',
    },
    property: {
      brand: 'Villa Terra',
      agency: 'Tierra & Co.',
      status: 'Seasonal Lease',
      name: 'Villa Terra',
      tagline:
        'A sun-warmed hacienda of clay, timber and bougainvillea wrapped around a tranquil courtyard.',
      location: 'Rancho Mirage · Sonoran Foothills',
      fullAddress: '7 Camino del Sol, Rancho Mirage, CA 92270',
      price: 27500,
      priceSuffix: '/ month',
      description: [
        'Villa Terra gathers around a shaded central courtyard, its hand-troweled clay walls and reclaimed beams glowing amber in the late desert sun.',
        'Terracotta floors, woven textures and arched colonnades create an unhurried rhythm — a home that invites long lunches, siestas and warm evenings under the stars.',
      ],
      hero: {
        image:
          'https://images.pexels.com/photos/3214064/pexels-photo-3214064.jpeg?auto=compress&cs=tinysrgb&w=2400',
      },
      stats: [
        { icon: BedDouble, label: 'Bedrooms', value: '5' },
        { icon: Bath, label: 'Bathrooms', value: '5.5' },
        { icon: Maximize, label: 'Interior', value: '6,900 sqft' },
        { icon: Grape, label: 'Grounds', value: '2 Acres' },
      ],
      highlights: [
        'Central courtyard',
        'Hand-troweled clay walls',
        'Olive & citrus grove',
        'Wood-fired oven',
        'Casita guest house',
        'Star-lit terraces',
      ],
      gallery: [
        { src: 'https://images.pexels.com/photos/1612351/pexels-photo-1612351.jpeg?auto=compress&cs=tinysrgb&w=1600', alt: 'Hacienda facade in warm light', span: 'wide' },
        { src: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1200', alt: 'Rustic warm kitchen', span: 'normal' },
        { src: 'https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=1200', alt: 'Bedroom with timber beams', span: 'tall' },
        { src: 'https://images.pexels.com/photos/2089698/pexels-photo-2089698.jpeg?auto=compress&cs=tinysrgb&w=1200', alt: 'Courtyard pool', span: 'normal' },
        { src: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200', alt: 'Earthen spa bath', span: 'normal' },
        { src: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=1600', alt: 'Living room with arched openings', span: 'wide' },
      ],
      amenities: [
        { icon: Waves, title: 'Courtyard Pool', description: 'A tiled pool and fountain at the heart of the villa.' },
        { icon: Utensils, title: 'Wood-Fired Kitchen', description: 'Talavera-tiled cocina with an outdoor oven.' },
        { icon: Grape, title: 'Citrus Grove', description: 'Olive, lemon and fig trees across the grounds.' },
        { icon: Trees, title: 'Shaded Loggias', description: 'Vine-draped colonnades for long afternoons.' },
        { icon: Flame, title: 'Adobe Fireplaces', description: 'Kiva hearths in the living and primary suites.' },
        { icon: ShieldCheck, title: 'Walled Estate', description: 'Private adobe walls and a timber gate.' },
        { icon: Sun, title: 'Star Terraces', description: 'Rooftop mirador for desert sunsets.' },
        { icon: Wifi, title: 'Modern Comforts', description: 'Hidden climate control and full connectivity.' },
      ],
      agent: {
        name: 'Lucia Moreno',
        title: 'Estate Curator',
        phone: '+1 (760) 555 0158',
        email: 'lucia@tierraco.com',
        photo: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=600',
        license: 'DRE #02077451',
      },
    },
  },
];
