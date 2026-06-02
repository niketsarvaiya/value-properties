// ─── Types ────────────────────────────────────────────────────────────────────

export type Configuration = "2bhk" | "3bhk" | "4bhk" | "duplex" | "penthouse" | "villa";
export type ViewType = "sea" | "city" | "garden" | "pool" | "skyline" | "mixed" | "na";
export type PossessionStatus = "ready" | "under_construction" | "resale";
export type PropertyStatus = "active" | "archived" | "hidden";

export interface Property {
  id: string;
  slug: string;
  title: string;
  buildingName: string;
  location: string;
  microLocation: string;
  address: string;
  configuration: Configuration;
  propertyType: string;
  possessionStatus: PossessionStatus;
  status: PropertyStatus;
  reraNumber: string;
  priceDisplay: string;
  priceValue: number | null;
  pricePerSqFt: string;
  maintenance: string;
  carpetArea: string;
  builtUpArea: string;
  superBuiltUpArea: string;
  deckArea: string;
  balconyArea: string;
  floorNumber: string;
  totalFloors: number;
  viewType: ViewType;
  facing: string;
  vastuStatus: "yes" | "no" | "unknown";
  bedrooms: number;
  bathrooms: number;
  powderRoom: boolean;
  servantRoom: boolean;
  studyRoom: boolean;
  familyLounge: boolean;
  utilityArea: boolean;
  parking: string;
  amenities: string[];
  images: PropertyImage[];
  floorPlans: FloorPlan[];
  nearbyLandmarks: NearbyLandmark[];
  shortHighlight: string;
  description: string;
  lifestyleDescription: string;
  investmentNote: string;
  neighbourhoodNote: string;
  showOnHomepage: boolean;
  showInListings: boolean;
  featured: boolean;
  hotProperty: boolean;
  hidePrice: boolean;
  seoTitle: string;
  seoDescription: string;
  createdAt: string;
}

export interface PropertyImage {
  id: string;
  url: string;
  caption: string;
  type: "exterior" | "interior" | "view" | "amenity" | "layout";
  isCover: boolean;
}

export interface FloorPlan {
  id: string;
  title: string;
  type: string;
  imageUrl: string;
  notes: string;
  carpetArea: string;
  roomCount: string;
}

export interface NearbyLandmark {
  category: string;
  name: string;
  distance: string;
}

// ─── Properties ───────────────────────────────────────────────────────────────

export const PROPERTIES: Property[] = [
  {
    id: "prop-1",
    slug: "lodha-malabar-walkeshwar",
    title: "Lodha Malabar — Sea-Facing Residence",
    buildingName: "Lodha Malabar",
    location: "Malabar Hill",
    microLocation: "Walkeshwar",
    address: "B.G. Kher Road, Walkeshwar, Malabar Hill, Mumbai 400006",
    configuration: "4bhk",
    propertyType: "Luxury Apartment",
    possessionStatus: "ready",
    status: "active",
    reraNumber: "P51900012345",
    priceDisplay: "₹28 Cr onwards",
    priceValue: 28,
    pricePerSqFt: "₹87,500 per sq. ft.",
    maintenance: "₹3.5 Lakh per month",
    carpetArea: "3,200 sq. ft.",
    builtUpArea: "3,800 sq. ft.",
    superBuiltUpArea: "4,200 sq. ft.",
    deckArea: "320 sq. ft.",
    balconyArea: "180 sq. ft.",
    floorNumber: "18th",
    totalFloors: 22,
    viewType: "sea",
    facing: "West",
    vastuStatus: "yes",
    bedrooms: 4,
    bathrooms: 4,
    powderRoom: true,
    servantRoom: true,
    studyRoom: true,
    familyLounge: true,
    utilityArea: true,
    parking: "2 designated covered",
    amenities: ["Swimming Pool", "Gymnasium", "Spa", "Concierge", "Valet Parking", "Private Lift Lobby", "24x7 Security", "Clubhouse", "Sea View Deck", "Business Lounge", "Visitor Parking", "Banquet Area"],
    images: [
      { id: "img-1a", url: "https://www.lodhagroup.com/sites/default/files/projects/banner/Desktop_Malabar_1903x800.jpg", caption: "Lodha Malabar — Sea-Facing Residence", type: "exterior", isCover: true },
      { id: "img-1b", url: "https://www.lodhagroup.com/sites/default/files/2026-04/Mobile_USP-Malabar-1_390x347-2026-04.jpg", caption: "Exclusive Amenity Offerings", type: "amenity", isCover: false },
      { id: "img-1c", url: "https://www.lodhagroup.com/sites/default/files/2026-04/Mobile_USP-Malabar-2_390x347-2026-04.jpg", caption: "Private Lift Lobby", type: "interior", isCover: false },
      { id: "img-1d", url: "https://www.lodhagroup.com/sites/default/files/2026-03/Mobile_USP-Malabar-3_390x347.jpg", caption: "Arabian Sea View", type: "view", isCover: false },
    ],
    floorPlans: [
      { id: "fp-1a", title: "4 BHK Layout", type: "primary", imageUrl: "/floorplans/raheja-typical-c.jpg", notes: "Standard 4 BHK with study and servant quarters", carpetArea: "3,200 sq. ft.", roomCount: "4+1" },
      { id: "fp-1b", title: "5 BHK Penthouse Layout", type: "penthouse", imageUrl: "/floorplans/fp-variant-2.webp", notes: "Expansive 5 BHK penthouse with private terrace", carpetArea: "4,800 sq. ft.", roomCount: "5+2" },
    ],
    nearbyLandmarks: [
      { category: "Business", name: "BKC / Bandra-Kurla Complex", distance: "25 min" },
      { category: "School", name: "Walsingham House School", distance: "5 min" },
      { category: "Hospital", name: "Breach Candy Hospital", distance: "8 min" },
      { category: "Club", name: "Willingdon Sports Club", distance: "10 min" },
      { category: "Infrastructure", name: "Bandra-Worli Sea Link", distance: "12 min" },
    ],
    shortHighlight: "Sea-facing luxury residence with private lift lobby and world-class amenities on Malabar Hill.",
    description: "Lodha Malabar presents one of South Mumbai's most coveted addresses — a 4 BHK sea-facing residence on the prestigious B.G. Kher Road in Walkeshwar. This extraordinary home commands sweeping views of the Arabian Sea from the 18th floor, offering a living experience that is rarely available in this rarefied neighbourhood.\n\nThe residence spans 3,200 sq. ft. of carpet area, thoughtfully configured across four bedrooms, a study, a family lounge, and a private lift lobby that opens directly into the home.",
    lifestyleDescription: "Life at Lodha Malabar is defined by quiet luxury and exclusivity. The building's 24-hour concierge, private lift lobbies, and hotel-calibre amenities make every day feel resort-like.",
    investmentNote: "Malabar Hill sea-facing properties are among the rarest in India. With inventory virtually non-existent and prices historically appreciating 8–12% annually, this represents a blue-chip real estate asset.",
    neighbourhoodNote: "Walkeshwar is one of Mumbai's most exclusive micro-markets — minutes from the High Court, diplomatic bungalows, the Hanging Gardens, and Breach Candy Club.",
    showOnHomepage: true,
    showInListings: true,
    featured: true,
    hotProperty: true,
    hidePrice: false,
    seoTitle: "Lodha Malabar 4 BHK Sea-Facing Apartment | Walkeshwar, Mumbai",
    seoDescription: "Rare 4 BHK sea-facing apartment at Lodha Malabar, Walkeshwar. 3,200 sq ft carpet, panoramic Arabian Sea views. ₹28 Cr onwards.",
    createdAt: "2024-01-15T00:00:00Z",
  },
  {
    id: "prop-2",
    slug: "raheja-imperia-worli",
    title: "Raheja Imperia — Skyline Residence",
    buildingName: "Raheja Imperia",
    location: "Worli",
    microLocation: "Worli Seaface",
    address: "Dr. Annie Besant Road, Worli, Mumbai 400018",
    configuration: "3bhk",
    propertyType: "Luxury Apartment",
    possessionStatus: "ready",
    status: "active",
    reraNumber: "P51900023456",
    priceDisplay: "₹11 Cr onwards",
    priceValue: 11,
    pricePerSqFt: "₹64,700 per sq. ft.",
    maintenance: "₹1.8 Lakh per month",
    carpetArea: "1,700–3,000 sq. ft.",
    builtUpArea: "2,200–3,800 sq. ft.",
    superBuiltUpArea: "2,500–4,200 sq. ft.",
    deckArea: "200 sq. ft.",
    balconyArea: "120 sq. ft.",
    floorNumber: "24th–38th",
    totalFloors: 42,
    viewType: "skyline",
    facing: "West / North-West",
    vastuStatus: "yes",
    bedrooms: 3,
    bathrooms: 3,
    powderRoom: true,
    servantRoom: true,
    studyRoom: false,
    familyLounge: false,
    utilityArea: true,
    parking: "1 covered",
    amenities: ["Swimming Pool", "Gymnasium", "24x7 Security", "Clubhouse", "Kids Play Area", "Visitor Parking", "Business Lounge", "Lounge"],
    images: [
      { id: "img-2a", url: "https://rahejaimperia1.com/images/lpbgd07.jpg", caption: "Raheja Imperia — Tower Exterior", type: "exterior", isCover: true },
      { id: "img-2b", url: "https://rahejaimperia1.com/images/lpbgd02.jpg", caption: "Worli Skyline & Sea Views", type: "view", isCover: false },
      { id: "img-2c", url: "https://rahejaimperia1.com/images/lpbgd05.jpg", caption: "Infinity Pool & Amenity Deck", type: "amenity", isCover: false },
    ],
    floorPlans: [
      { id: "fp-2a", title: "Typical Floor Plan (Wing A)", type: "primary", imageUrl: "/floorplans/raheja-typical.jpg", notes: "4 BHK — standard layout", carpetArea: "1,940–2,831 sq. ft.", roomCount: "4–5" },
    ],
    nearbyLandmarks: [
      { category: "Business", name: "Lower Parel", distance: "10 min" },
      { category: "School", name: "Bombay Scottish School", distance: "15 min" },
      { category: "Hospital", name: "Hinduja Hospital", distance: "12 min" },
      { category: "Infrastructure", name: "Sea Link", distance: "8 min" },
    ],
    shortHighlight: "Premium high-rise with iconic Worli skyline and sea views. 3 & 4 BHK residences available.",
    description: "Raheja Imperia stands as one of Worli's most recognisable luxury high-rises, offering panoramic views of the Mumbai skyline and glimpses of the Arabian Sea. With residences available from the 24th floor onwards, every home here enjoys an elevated perspective of the city.",
    lifestyleDescription: "Worli's Dr. Annie Besant Road is South Mumbai's most dynamic luxury corridor — flanked by five-star hotels, fine dining, and premium retail.",
    investmentNote: "Worli has seen consistent demand from NRIs, HNIs, and institutional buyers. The Sea Link connectivity makes this one of the most liquid luxury micro-markets in Mumbai.",
    neighbourhoodNote: "Worli is bordered by the Arabian Sea to the west and Prabhadevi to the east. It houses the city's finest hotels, corporate headquarters, fine dining restaurants, and luxury showrooms.",
    showOnHomepage: true,
    showInListings: true,
    featured: true,
    hotProperty: false,
    hidePrice: false,
    seoTitle: "Raheja Imperia 3 BHK Luxury Apartment | Worli, Mumbai",
    seoDescription: "3 & 4 BHK residences at Raheja Imperia, Worli. 1,700–3,000 sq ft. ₹11 Cr onwards.",
    createdAt: "2024-01-20T00:00:00Z",
  },
  {
    id: "prop-3",
    slug: "oberoi-three-sixty-west-worli",
    title: "Oberoi Three Sixty West — Ultra-Luxury Residence",
    buildingName: "Oberoi Three Sixty West",
    location: "Worli",
    microLocation: "Worli Seaface",
    address: "Worli Seaface, Worli, Mumbai 400018",
    configuration: "4bhk",
    propertyType: "Ultra-Luxury / Branded Residence",
    possessionStatus: "ready",
    status: "active",
    reraNumber: "P51900034567",
    priceDisplay: "Price on Request",
    priceValue: null,
    pricePerSqFt: "On Request",
    maintenance: "₹5 Lakh per month",
    carpetArea: "4,000+ sq. ft.",
    builtUpArea: "5,200 sq. ft.",
    superBuiltUpArea: "6,000 sq. ft.",
    deckArea: "500 sq. ft.",
    balconyArea: "280 sq. ft.",
    floorNumber: "30th+",
    totalFloors: 55,
    viewType: "sea",
    facing: "West",
    vastuStatus: "unknown",
    bedrooms: 4,
    bathrooms: 5,
    powderRoom: true,
    servantRoom: true,
    studyRoom: true,
    familyLounge: true,
    utilityArea: true,
    parking: "3 designated covered",
    amenities: ["Swimming Pool", "Gymnasium", "Spa", "Concierge", "Valet Parking", "Private Lift Lobby", "24x7 Security", "Clubhouse", "Sea View Deck", "Business Lounge", "Visitor Parking", "Banquet Area", "Library", "Lounge"],
    images: [
      { id: "img-3a", url: "https://upload.wikimedia.org/wikipedia/commons/3/39/Oberoi_360W.jpg", caption: "Oberoi Three Sixty West — Worli Seaface", type: "exterior", isCover: true },
      { id: "img-3b", url: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=1200", caption: "Grand living area", type: "interior", isCover: false },
      { id: "img-3c", url: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200", caption: "Infinity pool", type: "amenity", isCover: false },
    ],
    floorPlans: [
      { id: "fp-3a", title: "4 BHK Residence", type: "primary", imageUrl: "https://ik.imagekit.io/sjnshacs8/floorplans/01710394109.webp", notes: "Ultra-luxury 4 BHK — 3,272 sq ft", carpetArea: "4,000 sq. ft.", roomCount: "4+2" },
    ],
    nearbyLandmarks: [
      { category: "Hotel", name: "The St. Regis Mumbai", distance: "3 min" },
      { category: "Business", name: "BKC", distance: "20 min" },
      { category: "Infrastructure", name: "Sea Link", distance: "5 min" },
    ],
    shortHighlight: "The benchmark of Mumbai's ultra-luxury market. Hotel-style amenities, private lift lobby, unobstructed sea views.",
    description: "Oberoi Three Sixty West is the most iconic address in contemporary South Mumbai real estate — a joint venture between the Oberoi Group and Oasis Realty that has redefined what ultra-luxury means in this city. The building towers over the Worli Seaface, offering unobstructed 360-degree views of the Arabian Sea.",
    lifestyleDescription: "Living at Three Sixty West is living within a five-star hotel. The Oberoi's concierge team manages every need — from dinner reservations and private car hires to housekeeping and maintenance.",
    investmentNote: "Oberoi Three Sixty West is the gold standard of Mumbai luxury real estate. Secondary market transactions here are infrequent — and when they occur, they command premium prices.",
    neighbourhoodNote: "The Worli Seaface is Mumbai's most prestigious stretch — lined with India's finest restaurants, luxury hotels, and premium addresses.",
    showOnHomepage: true,
    showInListings: true,
    featured: true,
    hotProperty: true,
    hidePrice: true,
    seoTitle: "Oberoi Three Sixty West 4 BHK | Worli Seaface, Mumbai",
    seoDescription: "Ultra-luxury 4 BHK at Oberoi Three Sixty West, Worli. Sea views, hotel amenities. Price on request.",
    createdAt: "2024-01-25T00:00:00Z",
  },
  {
    id: "prop-4",
    slug: "the-imperial-tardeo",
    title: "The Imperial — Iconic Tardeo Address",
    buildingName: "The Imperial",
    location: "Tardeo",
    microLocation: "Tardeo",
    address: "Tardeo Road, Tardeo, Mumbai 400034",
    configuration: "3bhk",
    propertyType: "Luxury Apartment",
    possessionStatus: "ready",
    status: "active",
    reraNumber: "P51900045678",
    priceDisplay: "₹18 Cr onwards",
    priceValue: 18,
    pricePerSqFt: "₹72,000 per sq. ft.",
    maintenance: "₹2.5 Lakh per month",
    carpetArea: "2,500–4,500 sq. ft.",
    builtUpArea: "3,100–5,600 sq. ft.",
    superBuiltUpArea: "3,500–6,200 sq. ft.",
    deckArea: "300 sq. ft.",
    balconyArea: "200 sq. ft.",
    floorNumber: "20th–55th",
    totalFloors: 60,
    viewType: "skyline",
    facing: "East / West",
    vastuStatus: "yes",
    bedrooms: 3,
    bathrooms: 3,
    powderRoom: true,
    servantRoom: true,
    studyRoom: true,
    familyLounge: true,
    utilityArea: true,
    parking: "2 covered",
    amenities: ["Swimming Pool", "Gymnasium", "Concierge", "Valet Parking", "Private Lift Lobby", "24x7 Security", "Clubhouse", "Business Lounge", "Visitor Parking", "Banquet Area"],
    images: [
      { id: "img-4a", url: "https://upload.wikimedia.org/wikipedia/commons/2/27/The_Imperial_Towers_SP.jpg", caption: "The Imperial Twin Towers, Tardeo", type: "exterior", isCover: true },
      { id: "img-4b", url: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200", caption: "Panoramic city views", type: "view", isCover: false },
    ],
    floorPlans: [
      { id: "fp-4a", title: "3 BHK Mid-Rise", type: "primary", imageUrl: "/floorplans/fp-variant-1.webp", notes: "2,500 sq ft 3 BHK", carpetArea: "2,500 sq. ft.", roomCount: "3+1" },
    ],
    nearbyLandmarks: [
      { category: "Business", name: "Lower Parel", distance: "15 min" },
      { category: "Hospital", name: "Breach Candy Hospital", distance: "5 min" },
      { category: "Club", name: "CCI", distance: "10 min" },
      { category: "Infrastructure", name: "Haji Ali", distance: "8 min" },
    ],
    shortHighlight: "South Mumbai's most iconic twin-tower development with panoramic views and resort-like amenities.",
    description: "The Imperial stands as one of South Mumbai's most iconic silhouettes — twin towers rising majestically over Tardeo, offering one of the city's most extraordinary living experiences. With residences available from the 20th to the 60th floor, The Imperial commands unmatched panoramic views.",
    lifestyleDescription: "Residents of The Imperial enjoy access to a private residents' club, rooftop pool, business centre, and one of South Mumbai's finest banquet facilities.",
    investmentNote: "Tardeo's Central Business District positioning, proximity to South Mumbai courts, embassies, and prime retail makes The Imperial one of the most location-resilient investments.",
    neighbourhoodNote: "Tardeo is at the heart of South Mumbai — steps from Haji Ali, Mahalaxmi, Breach Candy, and the iconic Pedder Road.",
    showOnHomepage: true,
    showInListings: true,
    featured: true,
    hotProperty: false,
    hidePrice: false,
    seoTitle: "The Imperial 3 BHK Apartment | Tardeo, South Mumbai",
    seoDescription: "Luxury 3 & 4 BHK at The Imperial, Tardeo. 2,500–4,500 sq ft. ₹18 Cr onwards.",
    createdAt: "2024-02-01T00:00:00Z",
  },
  {
    id: "prop-5",
    slug: "lodha-sea-face-worli",
    title: "Lodha Sea Face — Signature Sea-Facing Residence",
    buildingName: "Lodha Sea Face",
    location: "Worli",
    microLocation: "Worli Seaface",
    address: "Worli Seaface, Worli, Mumbai 400018",
    configuration: "4bhk",
    propertyType: "Ultra-Luxury Signature Residence",
    possessionStatus: "ready",
    status: "active",
    reraNumber: "P51900056789",
    priceDisplay: "₹40 Cr onwards",
    priceValue: 40,
    pricePerSqFt: "₹88,800 per sq. ft.",
    maintenance: "₹6 Lakh per month",
    carpetArea: "4,500 sq. ft.",
    builtUpArea: "5,800 sq. ft.",
    superBuiltUpArea: "6,500 sq. ft.",
    deckArea: "600 sq. ft.",
    balconyArea: "350 sq. ft.",
    floorNumber: "35th+",
    totalFloors: 50,
    viewType: "sea",
    facing: "West",
    vastuStatus: "yes",
    bedrooms: 4,
    bathrooms: 5,
    powderRoom: true,
    servantRoom: true,
    studyRoom: true,
    familyLounge: true,
    utilityArea: true,
    parking: "3 designated covered",
    amenities: ["Swimming Pool", "Gymnasium", "Spa", "Concierge", "Valet Parking", "Private Lift Lobby", "24x7 Security", "Clubhouse", "Sea View Deck", "Business Lounge", "Kids Play Area", "Visitor Parking", "Library", "Lounge", "Outdoor Garden"],
    images: [
      { id: "img-5a", url: "https://www.lodhagroup.com/sites/default/files/2026-05/Lodha-Sea-Face_Hero1_Mobile.jpg", caption: "Lodha Sea Face — Worli Seaface", type: "exterior", isCover: true },
      { id: "img-5b", url: "https://www.lodhagroup.com/sites/default/files/2026-05/Lodha-Sea-Face_Primary_Mobile.jpg", caption: "Sea-Facing Facade", type: "exterior", isCover: false },
      { id: "img-5c", url: "https://www.lodhagroup.com/sites/default/files/2026-05/Lodha-Sea-Face_Penthouse_Secondary_Mobile_0.jpg", caption: "Penthouse Level Living", type: "interior", isCover: false },
    ],
    floorPlans: [
      { id: "fp-5a", title: "Signature 4 BHK", type: "primary", imageUrl: "/floorplans/fp-oberoi-4bhk.webp", notes: "4,500 sq ft with double-height lobby", carpetArea: "4,500 sq. ft.", roomCount: "4+2" },
    ],
    nearbyLandmarks: [
      { category: "Hotel", name: "Four Seasons Hotel Mumbai", distance: "5 min" },
      { category: "Infrastructure", name: "Sea Link", distance: "3 min" },
    ],
    shortHighlight: "Rare sea-facing luxury address by Lodha Group on the prestigious Worli Seaface.",
    description: "Lodha Sea Face is among the most rarified addresses in all of India — a sea-facing ultra-luxury development positioned at the Worli Seaface with uninterrupted views of the Arabian Sea and the Bandra-Worli Sea Link.",
    lifestyleDescription: "Every residence at Lodha Sea Face feels like a private estate in the sky. The building's bespoke amenities — including a private cinema, rooftop garden, and Lodha's signature concierge service — ensure every moment is attended to.",
    investmentNote: "Sea-facing residences at this location are once-in-a-decade opportunities. The Worli Seaface micro-market commands premium pricing with zero inventory pressure.",
    neighbourhoodNote: "The Worli Seaface is unquestionably Mumbai's most desirable stretch of real estate — a coastal promenade lined with landmark buildings and five-star hotels.",
    showOnHomepage: true,
    showInListings: true,
    featured: true,
    hotProperty: true,
    hidePrice: false,
    seoTitle: "Lodha Sea Face 4 BHK Sea-Facing Residence | Worli, Mumbai",
    seoDescription: "Ultra-luxury 4 BHK at Lodha Sea Face, Worli. 4,500 sq ft carpet. ₹40 Cr onwards.",
    createdAt: "2024-02-10T00:00:00Z",
  },
  {
    id: "prop-6",
    slug: "kalpataru-avana-parel",
    title: "Kalpataru Avana — Premium Gated Community",
    buildingName: "Kalpataru Avana",
    location: "Lower Parel",
    microLocation: "Parel",
    address: "Ganpatrao Kadam Marg, Parel, Mumbai 400012",
    configuration: "3bhk",
    propertyType: "Premium Apartment",
    possessionStatus: "ready",
    status: "active",
    reraNumber: "P51900067890",
    priceDisplay: "₹9 Cr onwards",
    priceValue: 9,
    pricePerSqFt: "₹50,000 per sq. ft.",
    maintenance: "₹1.2 Lakh per month",
    carpetArea: "1,800–3,200 sq. ft.",
    builtUpArea: "2,300–4,100 sq. ft.",
    superBuiltUpArea: "2,600–4,600 sq. ft.",
    deckArea: "180 sq. ft.",
    balconyArea: "140 sq. ft.",
    floorNumber: "10th–35th",
    totalFloors: 40,
    viewType: "city",
    facing: "East / North",
    vastuStatus: "yes",
    bedrooms: 3,
    bathrooms: 3,
    powderRoom: false,
    servantRoom: true,
    studyRoom: false,
    familyLounge: false,
    utilityArea: true,
    parking: "1 covered",
    amenities: ["Swimming Pool", "Gymnasium", "24x7 Security", "Clubhouse", "Kids Play Area", "Outdoor Garden", "Indoor Games", "Visitor Parking"],
    images: [
      { id: "img-6a", url: "https://d2j4tkbto6uvqv.cloudfront.net/kalpataru/5f99366366670.jpg", caption: "Kalpataru Avana — Parel", type: "exterior", isCover: true },
    ],
    floorPlans: [
      { id: "fp-6a", title: "3 BHK Standard", type: "primary", imageUrl: "/floorplans/fp-variant-2.webp", notes: "1,800 sq ft 3 BHK", carpetArea: "1,800 sq. ft.", roomCount: "3+1" },
    ],
    nearbyLandmarks: [
      { category: "Business", name: "Lower Parel Business District", distance: "5 min" },
      { category: "Mall", name: "Palladium Mall", distance: "7 min" },
      { category: "Hospital", name: "KEM Hospital", distance: "10 min" },
    ],
    shortHighlight: "Premium gated development in Parel with lifestyle amenities and excellent connectivity to Lower Parel.",
    description: "Kalpataru Avana offers a premium residential experience in one of Mumbai's most rapidly evolving neighbourhoods. Strategically located in Parel, this gated development provides easy access to the Lower Parel business district, world-class retail at Palladium Mall, and the city's finest dining.",
    lifestyleDescription: "Kalpataru Avana's community-focused design creates a resort-like living environment in the heart of Central Mumbai.",
    investmentNote: "Parel and Lower Parel have emerged as Mumbai's second central business district, driving consistent demand from young HNIs and NRIs.",
    neighbourhoodNote: "Parel connects seamlessly to Lower Parel's financial district, South Mumbai's heritage core, and the northern suburbs.",
    showOnHomepage: false,
    showInListings: true,
    featured: false,
    hotProperty: false,
    hidePrice: false,
    seoTitle: "Kalpataru Avana 3 BHK Apartment | Parel, Mumbai",
    seoDescription: "3 & 4 BHK at Kalpataru Avana, Parel. 1,800–3,200 sq ft. ₹9 Cr onwards.",
    createdAt: "2024-02-15T00:00:00Z",
  },
  {
    id: "prop-7",
    slug: "rustomjee-crown-prabhadevi",
    title: "Rustomjee Crown — Prabhadevi Landmark",
    buildingName: "Rustomjee Crown",
    location: "Prabhadevi",
    microLocation: "Prabhadevi",
    address: "Prabhadevi Road, Prabhadevi, Mumbai 400025",
    configuration: "4bhk",
    propertyType: "Luxury Apartment",
    possessionStatus: "ready",
    status: "active",
    reraNumber: "P51900078901",
    priceDisplay: "₹15 Cr onwards",
    priceValue: 15,
    pricePerSqFt: "₹65,000 per sq. ft.",
    maintenance: "₹2 Lakh per month",
    carpetArea: "2,300–3,800 sq. ft.",
    builtUpArea: "2,900–4,800 sq. ft.",
    superBuiltUpArea: "3,200–5,400 sq. ft.",
    deckArea: "250 sq. ft.",
    balconyArea: "160 sq. ft.",
    floorNumber: "15th–30th",
    totalFloors: 35,
    viewType: "city",
    facing: "North / West",
    vastuStatus: "yes",
    bedrooms: 4,
    bathrooms: 4,
    powderRoom: true,
    servantRoom: true,
    studyRoom: true,
    familyLounge: false,
    utilityArea: true,
    parking: "2 covered",
    amenities: ["Swimming Pool", "Gymnasium", "Spa", "Concierge", "Private Lift Lobby", "24x7 Security", "Clubhouse", "Business Lounge", "Kids Play Area"],
    images: [
      { id: "img-7a", url: "https://d1c8w60cxx92ls.cloudfront.net/publicupload/image_resize_desktop_2_b115ee3e1f.webp", caption: "Rustomjee Crown — Prabhadevi", type: "exterior", isCover: true },
    ],
    floorPlans: [
      { id: "fp-7a", title: "4 BHK Residence", type: "primary", imageUrl: "/floorplans/fp-oberoi-duplex.webp", notes: "2,300 sq ft 4 BHK", carpetArea: "2,300 sq. ft.", roomCount: "4+1" },
    ],
    nearbyLandmarks: [
      { category: "Temple", name: "Siddhivinayak Temple", distance: "2 min" },
      { category: "Business", name: "Lower Parel", distance: "8 min" },
    ],
    shortHighlight: "Landmark Prabhadevi address steps from Siddhivinayak. Spacious 4 BHK residences with premium amenities.",
    description: "Rustomjee Crown occupies one of Prabhadevi's most prestigious positions, steps from the iconic Siddhivinayak Temple. This 35-storey tower offers generously proportioned 4 BHK residences with private lift lobbies.",
    lifestyleDescription: "Prabhadevi's community feel combined with Rustomjee Crown's premium specifications makes this ideal for established families seeking both luxury and a sense of neighbourhood.",
    investmentNote: "Prabhadevi's central location between Worli and Lower Parel ensures consistent demand and strong long-term value.",
    neighbourhoodNote: "Prabhadevi is one of South Mumbai's most character-rich neighbourhoods — blending old-world community living with modern luxury.",
    showOnHomepage: false,
    showInListings: true,
    featured: false,
    hotProperty: false,
    hidePrice: false,
    seoTitle: "Rustomjee Crown 4 BHK Apartment | Prabhadevi, Mumbai",
    seoDescription: "Luxury 4 BHK at Rustomjee Crown, Prabhadevi. 2,300–3,800 sq ft. ₹15 Cr onwards.",
    createdAt: "2024-03-01T00:00:00Z",
  },
  {
    id: "prop-8",
    slug: "palais-royale-worli",
    title: "Palais Royale — Worli's Most Exclusive Tower",
    buildingName: "Palais Royale",
    location: "Worli",
    microLocation: "Worli",
    address: "Elphinstone Road, Worli, Mumbai 400013",
    configuration: "duplex",
    propertyType: "Ultra-Luxury Duplex",
    possessionStatus: "ready",
    status: "active",
    reraNumber: "P51900089012",
    priceDisplay: "₹35 Cr onwards",
    priceValue: 35,
    pricePerSqFt: "₹85,000 per sq. ft.",
    maintenance: "₹5.5 Lakh per month",
    carpetArea: "4,100 sq. ft.",
    builtUpArea: "5,300 sq. ft.",
    superBuiltUpArea: "6,100 sq. ft.",
    deckArea: "450 sq. ft.",
    balconyArea: "300 sq. ft.",
    floorNumber: "40th–42nd",
    totalFloors: 66,
    viewType: "mixed",
    facing: "West / North",
    vastuStatus: "unknown",
    bedrooms: 4,
    bathrooms: 5,
    powderRoom: true,
    servantRoom: true,
    studyRoom: true,
    familyLounge: true,
    utilityArea: true,
    parking: "3 covered",
    amenities: ["Swimming Pool", "Gymnasium", "Spa", "Concierge", "Valet Parking", "Private Lift Lobby", "24x7 Security", "Clubhouse", "Sea View Deck", "Business Lounge", "Banquet Area", "Library", "Lounge"],
    images: [
      { id: "img-8a", url: "https://www.palaisroyaleworli.com/wp-content/uploads/2025/03/1_5_b8c6ca02eb_enhanced.png", caption: "Palais Royale — Worli Tower", type: "exterior", isCover: true },
    ],
    floorPlans: [
      { id: "fp-8a", title: "Duplex — Lower Floor", type: "duplex", imageUrl: "/floorplans/raheja-typical-c.jpg", notes: "Entry level — living, dining, kitchen", carpetArea: "2,000 sq. ft.", roomCount: "2 beds" },
      { id: "fp-8b", title: "Duplex — Upper Floor", type: "duplex", imageUrl: "/floorplans/fp-variant-1.webp", notes: "Upper level — master + 2 beds + family lounge", carpetArea: "2,100 sq. ft.", roomCount: "2 beds + lounge" },
    ],
    nearbyLandmarks: [
      { category: "Infrastructure", name: "Sea Link", distance: "8 min" },
      { category: "Business", name: "Lower Parel", distance: "10 min" },
    ],
    shortHighlight: "Among Mumbai's tallest towers, Palais Royale offers duplex residences with staggering 360° views.",
    description: "Palais Royale is one of Mumbai's most discussed luxury addresses — a 66-storey tower in Worli that offers one of the city's most dramatic residential experiences. The duplex residences spread across two floors, offering an almost palatial sense of scale.",
    lifestyleDescription: "At over 400 feet above sea level, life in Palais Royale feels removed from the city below. The private residents' club, rooftop pool, and unparalleled views create an experience that few addresses in India can match.",
    investmentNote: "Palais Royale's unique positioning — height, scarcity, Worli address, and brand — makes it a compelling portfolio asset.",
    neighbourhoodNote: "Central Worli's transformation into a luxury residential and commercial hub has been one of Mumbai's most significant urban shifts of the past decade.",
    showOnHomepage: false,
    showInListings: true,
    featured: false,
    hotProperty: true,
    hidePrice: false,
    seoTitle: "Palais Royale Duplex | Worli, Mumbai",
    seoDescription: "Ultra-luxury duplex at Palais Royale, Worli. 4,100 sq ft carpet. ₹35 Cr onwards.",
    createdAt: "2024-03-10T00:00:00Z",
  },
  {
    id: "prop-9",
    slug: "lodha-world-one-worli",
    title: "Lodha World One — World's Tallest Residential Tower",
    buildingName: "Lodha World One",
    location: "Worli",
    microLocation: "Lower Parel / Worli",
    address: "World One, Senapati Bapat Marg, Lower Parel, Mumbai 400013",
    configuration: "penthouse",
    propertyType: "Ultra-Luxury Penthouse",
    possessionStatus: "ready",
    status: "active",
    reraNumber: "P51900090123",
    priceDisplay: "₹55 Cr onwards",
    priceValue: 55,
    pricePerSqFt: "₹95,000 per sq. ft.",
    maintenance: "₹8 Lakh per month",
    carpetArea: "5,800 sq. ft.",
    builtUpArea: "7,200 sq. ft.",
    superBuiltUpArea: "8,500 sq. ft.",
    deckArea: "800 sq. ft.",
    balconyArea: "500 sq. ft.",
    floorNumber: "65th+",
    totalFloors: 117,
    viewType: "sea",
    facing: "West",
    vastuStatus: "unknown",
    bedrooms: 4,
    bathrooms: 6,
    powderRoom: true,
    servantRoom: true,
    studyRoom: true,
    familyLounge: true,
    utilityArea: true,
    parking: "4 covered",
    amenities: ["Swimming Pool", "Gymnasium", "Spa", "Concierge", "Valet Parking", "Private Lift Lobby", "24x7 Security", "Clubhouse", "Sea View Deck", "Business Lounge", "Kids Play Area", "Banquet Area", "Library", "Lounge", "Outdoor Garden"],
    images: [
      { id: "img-9a", url: "https://www.lodhagroup.com/sites/default/files/projects/banner/Spotlight_1903X800_0.webp", caption: "Lodha World Towers — Lower Parel", type: "exterior", isCover: true },
      { id: "img-9b", url: "https://www.lodhagroup.com/sites/default/files/2024-04/USP_1_390X347.webp", caption: "Penthouse Interior", type: "interior", isCover: false },
    ],
    floorPlans: [
      { id: "fp-9a", title: "Sky Penthouse", type: "penthouse", imageUrl: "https://ik.imagekit.io/sjnshacs8/floorplans/01773661488.webp", notes: "5,800 sq ft penthouse on 65th floor", carpetArea: "5,800 sq. ft.", roomCount: "4+2+study" },
    ],
    nearbyLandmarks: [
      { category: "Business", name: "Lower Parel / BKC via Expressway", distance: "10 min" },
      { category: "Mall", name: "Palladium Luxury", distance: "5 min" },
    ],
    shortHighlight: "Residences in the world's tallest residential tower. Mumbai's ultimate luxury address.",
    description: "Lodha World One — the world's tallest purely residential tower at 117 storeys — represents the absolute pinnacle of Mumbai luxury living. Penthouse residences on the upper floors command impossible views: the full panorama of the Arabian Sea and the sprawling city.",
    lifestyleDescription: "Life at World One is life at the very apex. The sky club, private cinema, observatory deck, and Lodha's world-class concierge services set a standard that simply does not exist anywhere else in India.",
    investmentNote: "The last of the penthouse units at World One represent a once-in-a-generation opportunity. Future appreciation is expected to significantly outperform the market.",
    neighbourhoodNote: "Positioned at the nexus of Lower Parel and Worli, World One enjoys exceptional access to the Sea Link, the expressway, and the finest commercial destinations in Mumbai.",
    showOnHomepage: false,
    showInListings: true,
    featured: true,
    hotProperty: true,
    hidePrice: false,
    seoTitle: "Lodha World One Penthouse | Lower Parel, Mumbai",
    seoDescription: "Sky penthouse at Lodha World One — the world's tallest residential tower. 5,800 sq ft. ₹55 Cr onwards.",
    createdAt: "2024-03-15T00:00:00Z",
  },
  {
    id: "prop-10",
    slug: "maker-tower-cuffe-parade",
    title: "Maker Tower — Heritage Cuffe Parade Address",
    buildingName: "Maker Tower",
    location: "Cuffe Parade",
    microLocation: "Cuffe Parade",
    address: "Cuffe Parade, Colaba, Mumbai 400005",
    configuration: "3bhk",
    propertyType: "Luxury Apartment",
    possessionStatus: "resale",
    status: "active",
    reraNumber: "Legacy — Pre-RERA",
    priceDisplay: "₹14 Cr onwards",
    priceValue: 14,
    pricePerSqFt: "₹58,000 per sq. ft.",
    maintenance: "₹1.5 Lakh per month",
    carpetArea: "2,400 sq. ft.",
    builtUpArea: "3,100 sq. ft.",
    superBuiltUpArea: "3,500 sq. ft.",
    deckArea: "200 sq. ft.",
    balconyArea: "180 sq. ft.",
    floorNumber: "12th",
    totalFloors: 28,
    viewType: "sea",
    facing: "West",
    vastuStatus: "unknown",
    bedrooms: 3,
    bathrooms: 3,
    powderRoom: false,
    servantRoom: true,
    studyRoom: false,
    familyLounge: false,
    utilityArea: true,
    parking: "1 covered",
    amenities: ["Swimming Pool", "Gymnasium", "24x7 Security", "Visitor Parking", "Clubhouse"],
    images: [
      { id: "img-10a", url: "https://chhabriahousing.in/wp-content/uploads/2025/10/Building.jpg", caption: "Maker Tower — Cuffe Parade", type: "exterior", isCover: true },
      { id: "img-10b", url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200", caption: "Living room with sea view", type: "interior", isCover: false },
    ],
    floorPlans: [
      { id: "fp-10a", title: "3 BHK Standard", type: "primary", imageUrl: "/floorplans/fp-variant-2.webp", notes: "Classic 3 BHK layout", carpetArea: "2,400 sq. ft.", roomCount: "3+1" },
    ],
    nearbyLandmarks: [
      { category: "Heritage", name: "Taj Mahal Palace Hotel", distance: "10 min" },
      { category: "Business", name: "NCPA", distance: "5 min" },
      { category: "Infrastructure", name: "CST Station", distance: "20 min" },
    ],
    shortHighlight: "Coveted heritage address at Cuffe Parade with sea views and old-world character.",
    description: "Maker Tower at Cuffe Parade is one of Mumbai's most enduring luxury addresses — a heritage residential complex that has been home to the city's most distinguished families for decades. The 12th floor 3 BHK apartment offers commanding views of the Arabian Sea.",
    lifestyleDescription: "Cuffe Parade is South Mumbai's southernmost point — a peninsula neighbourhood with a yacht club, the NCPA, and some of the city's most exclusive residential addresses.",
    investmentNote: "Heritage addresses like Maker Tower at Cuffe Parade have limited turnover and consistent demand from NRI families with deep Mumbai roots.",
    neighbourhoodNote: "Cuffe Parade occupies a unique position at the southern tip of Mumbai — flanked by the sea on two sides, with direct views of the harbour.",
    showOnHomepage: false,
    showInListings: true,
    featured: false,
    hotProperty: false,
    hidePrice: false,
    seoTitle: "Maker Tower 3 BHK Resale | Cuffe Parade, Mumbai",
    seoDescription: "Rare resale 3 BHK at Maker Tower, Cuffe Parade. Sea views, 2,400 sq ft. ₹14 Cr onwards.",
    createdAt: "2024-04-01T00:00:00Z",
  },
];

// ─── Helper Functions ─────────────────────────────────────────────────────────

export function getPropertyBySlug(slug: string): Property | undefined {
  return PROPERTIES.find((p) => p.slug === slug);
}

export function getFeaturedProperties(): Property[] {
  return PROPERTIES.filter((p) => p.showOnHomepage && p.status === "active");
}

export function getListingProperties(filters?: {
  location?: string;
  configuration?: string;
  viewType?: string;
}): Property[] {
  let props = PROPERTIES.filter((p) => p.showInListings && p.status === "active");
  if (!filters) return props;
  if (filters.location) props = props.filter((p) => p.location.toLowerCase() === filters.location!.toLowerCase());
  if (filters.configuration) props = props.filter((p) => p.configuration === filters.configuration);
  if (filters.viewType) props = props.filter((p) => p.viewType === filters.viewType);
  return props;
}

export const LOCATIONS = ["Worli", "Tardeo", "Prabhadevi", "Colaba", "Malabar Hill", "Lower Parel", "Cuffe Parade"];

export const LOCATION_DESCRIPTIONS: Record<string, { description: string; count: number }> = {
  Worli: { description: "Mumbai's most dynamic luxury corridor, flanked by the Arabian Sea and the iconic Sea Link.", count: 4 },
  Tardeo: { description: "South Mumbai's central pulse — home to The Imperial towers and Haji Ali's seafront promenade.", count: 1 },
  Prabhadevi: { description: "Serene and central, with the Siddhivinayak Temple at its heart and Worli steps away.", count: 1 },
  Colaba: { description: "Mumbai's most storied neighbourhood — heritage architecture, the Gateway of India, and discreet luxury.", count: 0 },
  "Malabar Hill": { description: "The city's most exclusive hilltop enclave, home to senior judiciary, diplomats, and Mumbai's founding families.", count: 1 },
  "Lower Parel": { description: "Mumbai's new business district — a transformation story with world-class luxury developments.", count: 2 },
  "Cuffe Parade": { description: "Mumbai's southernmost luxury peninsula — quiet, sea-flanked, and deeply prestigious.", count: 1 },
};
