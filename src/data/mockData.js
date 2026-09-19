// Mock Database for ROADEEZ Two-Wheeler Parts & Accessories

export const CATEGORIES = [
  { id: 'headlight', name: 'Headlight', description: 'Ultra-bright LED & OEM halogen headlight assemblies', icon: 'zap' },
  { id: 'indicator', name: 'Indicator', description: 'Flowing LED turn signals & clear lens indicator sets', icon: 'eye' },
  { id: 'mud-guard', name: 'Mud Guard', description: 'Heavy-duty front & rear mudguards with UV protection', icon: 'shield' },
  { id: 'side-panel', name: 'Side Panel', description: 'OEM fit body side panels with high gloss finish', icon: 'layers' },
  { id: 'tail-guard', name: 'Tail Guard', description: 'Rear tail light assemblies, guards & tail tidy kits', icon: 'disc' }
];

export const BRANDS = [
  { id: 'hero', name: 'Hero', logo: '🏍️', models: ['Splendor Plus', 'HF Deluxe', 'Passion Pro', 'Glamour', 'Xtreme 160R'] },
  { id: 'honda', name: 'Honda', logo: '🚀', models: ['Activa 6G', 'Shine 125', 'Unicorn 160', 'Hornet 2.0', 'Dio 125'] },
  { id: 'tvs', name: 'TVS', logo: '⚡', models: ['Apache RTR 160 4V', 'Jupiter 125', 'Ntorq 125', 'Raider 125', 'XL 100'] },
  { id: 'bajaj', name: 'Bajaj', logo: '🔥', models: ['Pulsar 150', 'Pulsar NS200', 'Platina 110 ES', 'Avenger 220', 'Dominar 400'] },
  { id: 'yamaha', name: 'Yamaha', logo: '🏁', models: ['FZ-S V4', 'R15 V4', 'MT-15 V2', 'RayZR 125', 'Fascino 125'] }
];

export const PRODUCTS = [
  // HEADLIGHTS
  {
    id: 'prod-hl-01',
    name: 'ROADEEZ HyperBeam Pro LED Headlight Assembly',
    category: 'headlight',
    brand: 'hero',
    compatibleModel: 'Splendor Plus / HF Deluxe',
    price: 1499,
    mrp: 2299,
    discount: '35% OFF',
    rating: 4.8,
    reviewsCount: 142,
    inStock: true,
    isFeatured: true,
    isBestseller: true,
    badge: 'OEM Fit',
    image: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'High-intensity dual-focus LED headlight assembly custom-designed for Hero Splendor with plug-and-play connector.',
    description: 'Upgrade your nighttime visibility with the ROADEEZ HyperBeam Pro. Crafted with heavy-duty polycarbonate lens and high-efficiency Cree LED chips, this assembly delivers 6000K daylight illumination while reducing power consumption by 40%. Direct bolt-on fit for Hero Splendor and HF Deluxe series.',
    specs: {
      'Part Number': 'RDZ-HL-HERO-001',
      'Operating Voltage': '12V DC',
      'Wattage': '45W High / 30W Low',
      'Color Temp': '6000K Pure White',
      'Lens Material': 'Optical Polycarbonate',
      'Housing': 'Cast Aluminum Heat Sink',
      'Waterproof Rating': 'IP67 Dust & Water Resistant',
      'Warranty': '1 Year Full Replacement'
    },
    features: [
      'Pure White 6000K daylight brightness for maximum night visibility',
      'Direct OEM plug-and-play wiring - zero wire slicing required',
      'Die-cast aluminum heat-dissipating body for extended LED life',
      'Shatterproof scratch-resistant optical lens'
    ]
  },
  {
    id: 'prod-hl-02',
    name: 'ROADEEZ Matrix LED Projector Headlight',
    category: 'headlight',
    brand: 'honda',
    compatibleModel: 'Activa 6G / Shine 125',
    price: 1850,
    mrp: 2699,
    discount: '31% OFF',
    rating: 4.9,
    reviewsCount: 98,
    inStock: true,
    isFeatured: true,
    isBestseller: false,
    badge: 'Projector Lens',
    image: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'Precision projector lens headlight with integrated DRL ring for Honda Activa and Shine bikes.',
    description: 'Drive safely through fog and pitch-dark highways with the ROADEEZ Matrix LED Projector Headlight. Featuring a sharp cutoff line that avoids blinding oncoming traffic, coupled with a stylish halo DRL ring.',
    specs: {
      'Part Number': 'RDZ-HL-HOND-002',
      'Operating Voltage': '12V DC',
      'Wattage': '50W',
      'Color Temp': '6500K Cool White',
      'Lens Material': 'Clear Convex Glass',
      'Housing': 'Heavy ABS Shell',
      'Waterproof Rating': 'IP68 certified',
      'Warranty': '1 Year Warranty'
    },
    features: [
      'Focused spot-beam pattern with anti-glare cutoff line',
      'Integrated neon-white Daytime Running Light (DRL) ring',
      'UV-coated anti-yellowing front lens',
      'Weather-sealed gasket prevents moisture fogging'
    ]
  },
  {
    id: 'prod-hl-03',
    name: 'ROADEEZ Stealth Black Halogen Headlight Dome',
    category: 'headlight',
    brand: 'tvs',
    compatibleModel: 'Apache RTR 160 4V',
    price: 1299,
    mrp: 1799,
    discount: '28% OFF',
    rating: 4.6,
    reviewsCount: 64,
    inStock: true,
    isFeatured: false,
    isBestseller: false,
    badge: 'Heavy Duty',
    image: 'https://images.unsplash.com/photo-1609630875171-b1321377ee65?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'Complete OEM style front cowl and headlight housing for TVS Apache RTR series.',
    description: 'Restore your Apache RTR 160 4V to factory glory with this stealth black complete headlight dome. Fits seamlessly into standard mounting brackets.',
    specs: {
      'Part Number': 'RDZ-HL-TVS-003',
      'Operating Voltage': '12V',
      'Wattage': '35/35W Halogen Bulb Included',
      'Color Temp': '3200K Warm Yellow',
      'Lens Material': 'Hard-coated PC',
      'Housing': 'High impact Virgin ABS',
      'Warranty': '6 Months'
    },
    features: [
      '100% original dimensions match TVS factory spec',
      'Vibration-resistant internal reflector mount',
      'Includes pre-wired socket connector'
    ]
  },
  {
    id: 'prod-hl-04',
    name: 'ROADEEZ Predator Twin LED Headlight Unit',
    category: 'headlight',
    brand: 'bajaj',
    compatibleModel: 'Pulsar 150 / Pulsar 220',
    price: 2199,
    mrp: 3199,
    discount: '31% OFF',
    rating: 4.9,
    reviewsCount: 210,
    inStock: true,
    isFeatured: true,
    isBestseller: true,
    badge: 'Top Rated',
    image: 'https://images.unsplash.com/photo-1498887960847-2a5e46312788?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'Aggressive twin-pod LED headlight with projector optic lenses for Bajaj Pulsar 150/220.',
    description: 'Transform your Pulsar with the aggressor style Predator Twin LED headlight unit. Offers double beam illumination with ultra-low thermal dissipation.',
    specs: {
      'Part Number': 'RDZ-HL-BAJ-004',
      'Operating Voltage': '12V DC',
      'Wattage': '60W Dual Beam',
      'Color Temp': '6000K',
      'Housing': 'Reinforced Polymer & Alloy',
      'Warranty': '1 Year Replacement'
    },
    features: [
      'Twin high-intensity LED projection modules',
      'Gloss black inner housing with red eye accent',
      'Plug and play fitting with stock harness'
    ]
  },
  {
    id: 'prod-hl-05',
    name: 'ROADEEZ R-Series Dual Projector Headlight',
    category: 'headlight',
    brand: 'yamaha',
    compatibleModel: 'FZ-S V4 / R15 V4',
    price: 2499,
    mrp: 3499,
    discount: '29% OFF',
    rating: 4.8,
    reviewsCount: 175,
    inStock: true,
    isFeatured: true,
    isBestseller: true,
    badge: 'Premium',
    image: 'https://images.unsplash.com/photo-1547549662-7741206132e6?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'Racing edition LED projector light system with high-speed cooling fan for Yamaha FZ and R15 series.',
    description: 'Designed for track-level illumination. The R-Series projector housing provides crystal clear high-beam spread with zero dark spots.',
    specs: {
      'Part Number': 'RDZ-HL-YAM-005',
      'Voltage': '12V-24V',
      'Wattage': '55W',
      'Fan Cooling': '10,000 RPM Silent Turbine Fan',
      'Warranty': '1 Year'
    },
    features: [
      'Turbine active fan cooling for zero heat fade',
      'High transmittance optical crystal lens',
      'Impact resistant housing withstands rough roads'
    ]
  },

  // INDICATORS
  {
    id: 'prod-ind-01',
    name: 'ROADEEZ Flowing Matrix LED Indicator Set (Set of 4)',
    category: 'indicator',
    brand: 'hero',
    compatibleModel: 'Splendor / Passion / Glamour',
    price: 699,
    mrp: 1199,
    discount: '41% OFF',
    rating: 4.7,
    reviewsCount: 310,
    inStock: true,
    isFeatured: true,
    isBestseller: true,
    badge: 'Sequential',
    image: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'Sequential amber LED turn signals with flexible rubber stalk designed for Hero motorbikes.',
    description: 'Give your Hero motorcycle an Audi-style sequential flowing turn signal indicator look. Made with flexible rubber arms that absorb accidental bumps without breaking.',
    specs: {
      'Part Number': 'RDZ-IND-HERO-01',
      'Quantity': '4 Pieces (2 Front + 2 Rear)',
      'Light Color': 'Amber (Flowing) + Blue DRL Backlight',
      'Material': 'Flexible Rubber + ABS Plastic',
      'Thread Size': '10mm Universal Bolt',
      'Warranty': '6 Months'
    },
    features: [
      'Smooth flowing light sequence when signaling',
      'Bendable rubber stem prevents breakage during parking bumps',
      '100% waterproof rubber seal casing'
    ]
  },
  {
    id: 'prod-ind-02',
    name: 'ROADEEZ Diamond Cut Clear Lens Indicator Set',
    category: 'indicator',
    brand: 'honda',
    compatibleModel: 'Activa / CB Shine / Unicorn',
    price: 499,
    mrp: 899,
    discount: '44% OFF',
    rating: 4.5,
    reviewsCount: 180,
    inStock: true,
    isFeatured: false,
    isBestseller: false,
    badge: 'Clear Glass',
    image: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'Factory spec clear lens indicators with orange high-intensity bulbs for Honda two-wheelers.',
    description: 'Crisp diamond reflector design for maximum reflectivity even in broad daylight. Fits standard mounts for Honda Activa and Shine.',
    specs: {
      'Part Number': 'RDZ-IND-HOND-02',
      'Quantity': '4 Pieces Set',
      'Lens Color': 'Diamond Clear',
      'Bulb Type': '12V 10W Amber Bulb',
      'Warranty': '6 Months'
    },
    features: [
      'High grade acrylic transparent lens',
      'UV treated to prevent yellowing in direct sun',
      'Exact factory bolt placement'
    ]
  },
  {
    id: 'prod-ind-03',
    name: 'ROADEEZ Arrow LED Turn Indicator Set',
    category: 'indicator',
    brand: 'tvs',
    compatibleModel: 'Apache RTR / Raider / Jupiter',
    price: 799,
    mrp: 1299,
    discount: '38% OFF',
    rating: 4.8,
    reviewsCount: 145,
    inStock: true,
    isFeatured: true,
    isBestseller: false,
    badge: 'Sharp Arrow',
    image: 'https://images.unsplash.com/photo-1609630875171-b1321377ee65?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'Aerodynamic arrow-head LED indicators with bright amber flashing pattern for TVS bikes.',
    description: 'Sporty arrow styling that enhances the sharp lines of TVS Apache and Raider. Engineered for high vibration resistance.',
    specs: {
      'Part Number': 'RDZ-IND-TVS-03',
      'Quantity': '4 Pieces',
      'Light Color': 'Vivid Amber',
      'Protection': 'IP67 Waterproof',
      'Warranty': '6 Months Replacement'
    },
    features: [
      'Compact aerodynamic arrow outline',
      'Low power draw does not drain battery',
      'Vibration isolated rubber mounting stud'
    ]
  },
  {
    id: 'prod-ind-04',
    name: 'ROADEEZ Stealth Dark Smoked LED Indicators',
    category: 'indicator',
    brand: 'bajaj',
    compatibleModel: 'Pulsar NS / RS / Dominar',
    price: 849,
    mrp: 1399,
    discount: '39% OFF',
    rating: 4.7,
    reviewsCount: 220,
    inStock: true,
    isFeatured: false,
    isBestseller: true,
    badge: 'Smoked Lens',
    image: 'https://images.unsplash.com/photo-1498887960847-2a5e46312788?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'Smoked dark lens turn signals with high lumen LED output for Bajaj Pulsar series.',
    description: 'Give your Pulsar or Dominar a aggressive stealth aesthetic with dark smoked acrylic covers housing ultra-bright SMD LEDs.',
    specs: {
      'Part Number': 'RDZ-IND-BAJ-04',
      'Quantity': '4 Pieces',
      'Lens Color': 'Smoked Black',
      'LED Count': '12 SMD LEDs per unit',
      'Warranty': '6 Months'
    },
    features: [
      'Dark tinted housing looks covert when off, bright amber when active',
      'Rust-proof brass mounting screws',
      'Direct fit for Pulsar rear fender and front shroud'
    ]
  },
  {
    id: 'prod-ind-05',
    name: 'ROADEEZ Winglet Blade LED Indicators',
    category: 'indicator',
    brand: 'yamaha',
    compatibleModel: 'R15 V4 / MT-15 / FZ',
    price: 949,
    mrp: 1499,
    discount: '36% OFF',
    rating: 4.9,
    reviewsCount: 290,
    inStock: true,
    isFeatured: true,
    isBestseller: true,
    badge: 'Track Spec',
    image: 'https://images.unsplash.com/photo-1547549662-7741206132e6?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'Winglet blade style LED indicators inspired by superbike winglets for Yamaha R15 and MT15.',
    description: 'Slim profile blade indicators designed to reduce drag while giving superior visual signals to other road users.',
    specs: {
      'Part Number': 'RDZ-IND-YAM-05',
      'Quantity': '4 Pieces',
      'Body Material': 'Anodized CNC Aluminum Stem + Polycarbonate',
      'Warranty': '1 Year'
    },
    features: [
      'Ultra-slim winglet aerodynamic profile',
      'CNC machined aluminum mounting base',
      'Dual color option with blue daytime accent'
    ]
  },

  // MUD GUARD
  {
    id: 'prod-mg-01',
    name: 'ROADEEZ Heavy-Duty Front Mudguard',
    category: 'mud-guard',
    brand: 'hero',
    compatibleModel: 'Splendor Plus / HF Deluxe',
    price: 549,
    mrp: 899,
    discount: '38% OFF',
    rating: 4.6,
    reviewsCount: 165,
    inStock: true,
    isFeatured: false,
    isBestseller: true,
    badge: 'Impact Proof',
    image: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'Thick wall virgin PP front fender mudguard for Hero Splendor in factory black finish.',
    description: 'Engineered from unbreakable polypropylene compound, this front mudguard shields your engine and fork sliders from mud, stones, and water splash.',
    specs: {
      'Part Number': 'RDZ-MG-HERO-01',
      'Position': 'Front Wheel',
      'Material': 'Virgin PP (Polypropylene)',
      'Finish': 'Gloss Black UV Paint',
      'Weight': '650g',
      'Warranty': '1 Year Cracking Guarantee'
    },
    features: [
      'Crack-proof flexible plastic compound handles stone chips',
      'Pre-drilled mounting holes align perfectly with stock fork brackets',
      'High gloss weather resistant coat'
    ]
  },
  {
    id: 'prod-mg-02',
    name: 'ROADEEZ SplashGuard Rear Mud Flap & Hugger',
    category: 'mud-guard',
    brand: 'honda',
    compatibleModel: 'Activa 6G / Dio / Shine',
    price: 499,
    mrp: 799,
    discount: '37% OFF',
    rating: 4.5,
    reviewsCount: 88,
    inStock: true,
    isFeatured: false,
    isBestseller: false,
    badge: 'Splash Proof',
    image: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'Rear tyre splash hugger guard for Honda Activa scooters to prevent back spray.',
    description: 'Keep your clothes clean during monsoon rides. Extended rear mudguard prevents muddy water from spraying onto pillion rider.',
    specs: {
      'Part Number': 'RDZ-MG-HOND-02',
      'Position': 'Rear Tyre Hugger',
      'Material': 'Reinforced ABS Plastic',
      'Color': 'Matte Texture Black',
      'Warranty': '6 Months'
    },
    features: [
      'Extended coverage shields rear suspension coil from dirt',
      'Sturdy steel mounting bracket included',
      'Rust-proof hardware kit included'
    ]
  },
  {
    id: 'prod-mg-03',
    name: 'ROADEEZ Carbon Texture Front Mudguard Fender',
    category: 'mud-guard',
    brand: 'tvs',
    compatibleModel: 'Apache RTR 160 / 180 / 200',
    price: 899,
    mrp: 1399,
    discount: '35% OFF',
    rating: 4.7,
    reviewsCount: 112,
    inStock: true,
    isFeatured: true,
    isBestseller: false,
    badge: 'Carbon Finish',
    image: 'https://images.unsplash.com/photo-1609630875171-b1321377ee65?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'Sporty front fender withhydro-dipped carbon fiber texture pattern for TVS Apache RTR.',
    description: 'Upgrade your Apache visual appeal with this sporty hydro-dipped carbon texture mudguard. Built to handle high-speed wind buffeting.',
    specs: {
      'Part Number': 'RDZ-MG-TVS-03',
      'Position': 'Front Fender',
      'Finish': 'Carbon Fiber Weave Pattern',
      'Material': 'Impact ABS',
      'Warranty': '1 Year'
    },
    features: [
      'Premium hydro-graphic carbon fiber print',
      'Reinforced rib structure prevents flutter at 100km/h+',
      'Direct bolt-on setup'
    ]
  },
  {
    id: 'prod-mg-04',
    name: 'ROADEEZ Armor Rear Tyre Hugger with Mud Flap',
    category: 'mud-guard',
    brand: 'bajaj',
    compatibleModel: 'Pulsar NS200 / 220 / Dominar',
    price: 999,
    mrp: 1599,
    discount: '37% OFF',
    rating: 4.8,
    reviewsCount: 205,
    inStock: true,
    isFeatured: true,
    isBestseller: true,
    badge: 'Monsoon Must',
    image: 'https://images.unsplash.com/photo-1498887960847-2a5e46312788?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'Full coverage rear tire hugger with heavy steel arm support for Bajaj Pulsar NS200.',
    description: 'Eliminate monsoon sludge spraying over your tail section. Equipped with thick iron arm bracket for rigid mount.',
    specs: {
      'Part Number': 'RDZ-MG-BAJ-04',
      'Position': 'Rear Swingarm Mount',
      'Bracket Material': '4mm Powder Coated Steel',
      'Shield Material': 'Polypropylene',
      'Warranty': '1 Year'
    },
    features: [
      'Heavy iron clamp ensures zero vibration rattling',
      'Contoured shape matches wide rear tire profile',
      'Keeps monoshock absorber clean'
    ]
  },
  {
    id: 'prod-mg-05',
    name: 'ROADEEZ Aero Front Fender',
    category: 'mud-guard',
    brand: 'yamaha',
    compatibleModel: 'MT-15 / R15 / FZ',
    price: 1099,
    mrp: 1699,
    discount: '35% OFF',
    rating: 4.9,
    reviewsCount: 140,
    inStock: true,
    isFeatured: false,
    isBestseller: false,
    badge: 'Aero Spec',
    image: 'https://images.unsplash.com/photo-1547549662-7741206132e6?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'Aggressively styled front aerodynamic mudguard for Yamaha sport bikes.',
    description: 'Aero dynamic vents redirect airflow towards the radiator while preventing gravel chips from scratching lower fork stanchions.',
    specs: {
      'Part Number': 'RDZ-MG-YAM-05',
      'Position': 'Front Fork Mount',
      'Finish': 'Matte Metallic Black',
      'Material': 'Polycarbonate ABS blend',
      'Warranty': '1 Year'
    },
    features: [
      'Functional cooling air ducting vents',
      'Double coated polyurethane paint finish',
      'Exact factory mount hole alignment'
    ]
  },

  // SIDE PANEL
  {
    id: 'prod-sp-01',
    name: 'ROADEEZ Side Panel Cover Pair (Left + Right)',
    category: 'side-panel',
    brand: 'hero',
    compatibleModel: 'Splendor Plus / Passion Pro',
    price: 899,
    mrp: 1499,
    discount: '40% OFF',
    rating: 4.7,
    reviewsCount: 230,
    inStock: true,
    isFeatured: true,
    isBestseller: true,
    badge: 'Complete Pair',
    image: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'Replacement side battery covers for Hero Splendor with original fit grommets.',
    description: 'Replace worn out or scratched side covers with ROADEEZ precision moulded side panel pair. Painted in original metallic black with factory grade clear topcoat.',
    specs: {
      'Part Number': 'RDZ-SP-HERO-01',
      'Includes': 'Left Side Cover + Right Side Cover',
      'Material': 'Impact Resistant ABS',
      'Grommets Included': 'Yes (Rubber Dampeners)',
      'Warranty': '6 Months'
    },
    features: [
      'Factory color match precision',
      'Includes rubber locking grommets for noise-free fit',
      'Tool box lock cylinder hole pre-cut'
    ]
  },
  {
    id: 'prod-sp-02',
    name: 'ROADEEZ Side Body Cowl Shield',
    category: 'side-panel',
    brand: 'honda',
    compatibleModel: 'Activa 5G / 6G',
    price: 1199,
    mrp: 1899,
    discount: '36% OFF',
    rating: 4.6,
    reviewsCount: 95,
    inStock: true,
    isFeatured: false,
    isBestseller: false,
    badge: 'OEM Spec',
    image: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'Side lower body panel cowl for Honda Activa scooter in gloss white/black.',
    description: 'Restore the sleek side body contour of your Activa. Resistant to scratches, oil, and harsh sunlight.',
    specs: {
      'Part Number': 'RDZ-SP-HOND-02',
      'Material': 'High-density ABS Plastic',
      'Color Options': 'Gloss Black / Pearl White',
      'Warranty': '6 Months'
    },
    features: [
      'Thick wall construction prevents panel flexing',
      'Snap-lock tabs fit existing chassis slots cleanly',
      'Pre-treated against fading'
    ]
  },
  {
    id: 'prod-sp-03',
    name: 'ROADEEZ Racing Side Shroud Panel Set',
    category: 'side-panel',
    brand: 'tvs',
    compatibleModel: 'Apache RTR 160 / 200 4V',
    price: 1399,
    mrp: 2199,
    discount: '36% OFF',
    rating: 4.8,
    reviewsCount: 178,
    inStock: true,
    isFeatured: true,
    isBestseller: false,
    badge: 'Tank Shroud',
    image: 'https://images.unsplash.com/photo-1609630875171-b1321377ee65?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'Aggressive fuel tank side scoops and shrouds for TVS Apache RTR.',
    description: 'Sharp side tank shrouds that give your TVS Apache a muscular streetfighter stance.',
    specs: {
      'Part Number': 'RDZ-SP-TVS-03',
      'Quantity': 'Pair (LH + RH)',
      'Material': 'Virgin ABS',
      'Warranty': '6 Months'
    },
    features: [
      'Sporty air mesh intake look',
      'Resistant to petrol spills around tank cap',
      'Includes stainless bracket mounting kit'
    ]
  },
  {
    id: 'prod-sp-04',
    name: 'ROADEEZ Pulsar Sport Side Cowling Set',
    category: 'side-panel',
    brand: 'bajaj',
    compatibleModel: 'Pulsar 150 / 180 / 220',
    price: 1249,
    mrp: 1999,
    discount: '37% OFF',
    rating: 4.7,
    reviewsCount: 260,
    inStock: true,
    isFeatured: false,
    isBestseller: true,
    badge: 'Bestseller',
    image: 'https://images.unsplash.com/photo-1498887960847-2a5e46312788?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'Durable side body panels with decal slot styling for Bajaj Pulsar.',
    description: 'Perfect replacement panel kit for Pulsar 150/180. Designed to prevent rattle noise at high speeds.',
    specs: {
      'Part Number': 'RDZ-SP-BAJ-04',
      'Quantity': 'Pair',
      'Material': 'Virgin PP-ABS Compound',
      'Warranty': '6 Months'
    },
    features: [
      'Anti-rattle internal rib reinforcement',
      'Matches stock side emblem mount points',
      'Supplied with dampening rubber pads'
    ]
  },
  {
    id: 'prod-sp-05',
    name: 'ROADEEZ Aero Side Winglet Fairing Panel',
    category: 'side-panel',
    brand: 'yamaha',
    compatibleModel: 'R15 V4 / FZ-S',
    price: 1699,
    mrp: 2599,
    discount: '34% OFF',
    rating: 4.9,
    reviewsCount: 195,
    inStock: true,
    isFeatured: true,
    isBestseller: true,
    badge: 'Superbike Look',
    image: 'https://images.unsplash.com/photo-1547549662-7741206132e6?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'Aerodynamic side winglet cowl panel kit for Yamaha R15 V4 and FZ series.',
    description: 'Inject MotoGP aesthetic into your Yamaha with side winglet cowls that clip seamlessly onto fairing panels.',
    specs: {
      'Part Number': 'RDZ-SP-YAM-05',
      'Quantity': 'Pair',
      'Material': 'High-Tensile Polycarbonate Alloy',
      'Warranty': '1 Year'
    },
    features: [
      'Track inspired aerodynamic downforce wing design',
      'High gloss metallic paint finish',
      'Non-destructive clip-on installation'
    ]
  },

  // TAIL GUARD
  {
    id: 'prod-tg-01',
    name: 'ROADEEZ Crystal Clear LED Tail Light Assembly',
    category: 'tail-guard',
    brand: 'hero',
    compatibleModel: 'Splendor Plus / HF Deluxe',
    price: 799,
    mrp: 1299,
    discount: '38% OFF',
    rating: 4.7,
    reviewsCount: 185,
    inStock: true,
    isFeatured: true,
    isBestseller: true,
    badge: 'Ultra Bright',
    image: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'Full LED rear tail lamp unit with brake light matrix for Hero Splendor.',
    description: 'Ensure rear vehicles see you clearly from 300 meters away. High output LED brake lamps illuminate instantly when braking.',
    specs: {
      'Part Number': 'RDZ-TG-HERO-01',
      'Function': 'Running Tail Lamp + Brake Light + License Plate Light',
      'Voltage': '12V DC',
      'Lens Color': 'Red / Clear Combo',
      'Warranty': '1 Year'
    },
    features: [
      'Instant-on LED brake lights give trailing drivers 0.5s faster warning',
      'Sealed water-tight housing prevents moisture intrusion',
      'Standard connector plugs into Hero harness'
    ]
  },
  {
    id: 'prod-tg-02',
    name: 'ROADEEZ Scooter Heavy Steel Tail Guard Rail',
    category: 'tail-guard',
    brand: 'honda',
    compatibleModel: 'Activa 6G / 5G / Dio',
    price: 899,
    mrp: 1399,
    discount: '35% OFF',
    rating: 4.6,
    reviewsCount: 140,
    inStock: true,
    isFeatured: false,
    isBestseller: false,
    badge: 'Heavy Steel',
    image: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'All-around steel perimeter crash guard rail for Honda Activa tail section.',
    description: 'Shield your Activa tail lamp and body from parking scratches and accidental tips with this heavy gauge chrome-plated steel guard.',
    specs: {
      'Part Number': 'RDZ-TG-HOND-02',
      'Material': '19mm Mild Steel Tubing',
      'Finish': 'Triple Layer Chrome Plating',
      'Warranty': '1 Year Rust Warranty'
    },
    features: [
      'High grade chrome plating resists monsoon rust',
      'Protects rear tail light and body panels from scrapes',
      'Includes footrest mounting stays'
    ]
  },
  {
    id: 'prod-tg-03',
    name: 'ROADEEZ Tail Tidy Fender Eliminator Kit',
    category: 'tail-guard',
    brand: 'tvs',
    compatibleModel: 'Apache RTR 160 / 200 4V',
    price: 1199,
    mrp: 1799,
    discount: '33% OFF',
    rating: 4.8,
    reviewsCount: 165,
    inStock: true,
    isFeatured: true,
    isBestseller: false,
    badge: 'Tail Tidy',
    image: 'https://images.unsplash.com/photo-1609630875171-b1321377ee65?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'Sleek metal tail tidy frame with LED number plate light for TVS Apache.',
    description: 'Clean up the rear look of your Apache RTR by replacing the bulky stock mudguard with this lightweight laser-cut tail tidy.',
    specs: {
      'Part Number': 'RDZ-TG-TVS-03',
      'Material': '2mm Laser-Cut Carbon Steel',
      'Finish': 'Matte Black Powder Coat',
      'Included': 'LED License Plate Light',
      'Warranty': '1 Year'
    },
    features: [
      'Precision laser cut steel for razor-sharp finish',
      'Mounting points for stock indicator turn signals',
      'Built-in white LED tag light'
    ]
  },
  {
    id: 'prod-tg-04',
    name: 'ROADEEZ Smoke Lens LED Tail Light Assembly',
    category: 'tail-guard',
    brand: 'bajaj',
    compatibleModel: 'Pulsar 150 / 220 / NS200',
    price: 1099,
    mrp: 1699,
    discount: '35% OFF',
    rating: 4.9,
    reviewsCount: 280,
    inStock: true,
    isFeatured: true,
    isBestseller: true,
    badge: 'Smoked LED',
    image: 'https://images.unsplash.com/photo-1498887960847-2a5e46312788?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'Smoked glass twin LED strip tail lamp for Pulsar bikes with integrated signal option.',
    description: 'Iconic Pulsar twin LED tail light design housed inside a stealth smoked lens body. High output braking flashes.',
    specs: {
      'Part Number': 'RDZ-TG-BAJ-04',
      'Lens Color': 'Dark Smoked',
      'LED Setup': 'Dual vertical light guide strips',
      'Warranty': '1 Year'
    },
    features: [
      'Distinctive dual vertical LED ribbon light',
      'Vibration isolated mount rubbers',
      'OEM wire socket compatibility'
    ]
  },
  {
    id: 'prod-tg-05',
    name: 'ROADEEZ R-Spec LED Tail Light & License Plate Guard',
    category: 'tail-guard',
    brand: 'yamaha',
    compatibleModel: 'R15 V4 / MT-15 / FZ',
    price: 1399,
    mrp: 2199,
    discount: '36% OFF',
    rating: 4.9,
    reviewsCount: 310,
    inStock: true,
    isFeatured: true,
    isBestseller: true,
    badge: 'R-Spec',
    image: 'https://images.unsplash.com/photo-1547549662-7741206132e6?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'Track edition LED tail light unit with heavy-duty metal license plate guard for Yamaha.',
    description: 'High visibility tail section assembly built specifically for Yamaha performance riders.',
    specs: {
      'Part Number': 'RDZ-TG-YAM-05',
      'Material': 'Polycarbonate Lens + Steel Tag Mount',
      'Warranty': '1 Year'
    },
    features: [
      'High lumen LED array visible through heavy rain',
      'Vibration damping mounting kit',
      'Direct plug into Yamaha loom'
    ]
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Rajesh Sharma',
    role: 'Bike Enthusiast & Tourer',
    city: 'New Delhi',
    rating: 5,
    comment: 'Installed the ROADEEZ HyperBeam LED Headlight on my Splendor for night highway commuting. The illumination is unbelievable! Zero vibration and build quality feels genuine OEM.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 2,
    name: 'Vikram Patel',
    role: 'Pulsar Rider Group Leader',
    city: 'Ahmedabad',
    rating: 5,
    comment: 'Ordered the complete side panel set and smoked LED indicators for my Pulsar NS200. Perfectly color matched and bolted on in 10 minutes without any gap issues.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 3,
    name: 'Ananya Roy',
    role: 'Daily Scooter Commuter',
    city: 'Bengaluru',
    rating: 5,
    comment: 'The Activa rear splash mudguard saved my clothes during the Bangalore monsoons! Delivery was super fast and packaging was top notch.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80'
  }
];

export const COMPANY_FAQS = [
  {
    question: 'Are ROADEEZ spare parts compatible with original bike fitment?',
    answer: 'Yes! All ROADEEZ products are engineered strictly according to OEM dimensions and specifications. They feature direct bolt-on fitment with factory mounting points and wiring harnesses.'
  },
  {
    question: 'Do you offer warranty on headlights and LED indicators?',
    answer: 'Absolutely. All our electronic lighting assemblies come with 6 to 12 months full replacement warranty against LED failure, fogging, or circuit defects.'
  },
  {
    question: 'How long does Pan-India delivery take?',
    answer: 'Orders are processed within 24 hours. Express delivery typically takes 2-4 business days for metro cities and 4-6 days for rest of India.'
  },
  {
    question: 'Can I place bulk or wholesale inquiries for my spare parts shop?',
    answer: 'Yes! You can contact us via the Contact Us form or directly email wholesale@roadeez.com for dealer catalog and bulk discount rates.'
  }
];
