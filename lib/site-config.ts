export const siteConfig = {
  name: 'HCN Global',
  tagline: 'Building Tomorrow, Together',
  shortDescription:
    'Ghaziabad-based civil construction firm delivering trusted infrastructure, residential, and commercial projects for government and private clients.',
  proprietor: 'Proprietor, HCN Global',
  gstin: '09BMLPC3281P1ZI',
  email: 'hcnglobal05@gmail.com',
  phone: '+91 78274 24227',
  phoneRaw: '917827424227',
  address: {
    line1: 'D-28, Mahendra Enclave',
    line2: 'Near Silver Shine School, Rajapuri',
    city: 'Ghaziabad',
    state: 'Uttar Pradesh',
    pincode: '201002',
    country: 'India',
  },
  social: {
    linkedin: '#',
    facebook: '#',
    instagram: '#',
  },

  formspreeEndpoint: 'https://formspree.io/f/your-form-id',

  navLinks: [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#why-us', label: 'Why Us' },
    { href: '#projects', label: 'Projects' },
    { href: '#clients', label: 'Clients' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#contact', label: 'Contact' },
  ],

  services: [
    {
      id: 'civil',
      title: 'Civil Construction',
      description:
        'End-to-end civil works — earthworks, roads, drainage, and structural construction executed to government specifications.',
      icon: 'HardHat',
      highlights: ['Roads & Highways', 'Bridges & Culverts', 'Drainage Systems'],
    },
    {
      id: 'residential',
      title: 'Residential',
      description:
        'Modern residential projects — individual homes, apartments, and townships built with quality materials and timely delivery.',
      icon: 'Home',
      highlights: ['Homes & Villas', 'Apartments', 'Interiors & Renovation'],
    },
    {
      id: 'commercial',
      title: 'Commercial',
      description:
        'Commercial spaces designed for productivity — offices, retail complexes, warehouses, and institutional buildings.',
      icon: 'Building2',
      highlights: ['Office Buildings', 'Retail Complexes', 'Warehouses'],
    },
    {
      id: 'infrastructure',
      title: 'Infrastructure',
      description:
        'Large-scale public infrastructure — water supply, sewerage, public utilities, and government facility development.',
      icon: 'Factory',
      highlights: ['Water & Sewerage', 'Public Utilities', 'Govt. Facilities'],
    },
  ],

  whyUs: [
    {
      title: 'Government Registered',
      description:
        'Fully registered and compliant firm with GSTIN and requisite tender qualifications.',
      icon: 'ShieldCheck',
    },
    {
      title: 'GST Compliant',
      description:
        'Transparent billing, GST-compliant invoicing, and complete documentation for every project.',
      icon: 'FileCheck2',
    },
    {
      title: 'Timely Delivery',
      description:
        'Committed to on-schedule project completion backed by detailed planning and execution.',
      icon: 'Clock',
    },
    {
      title: 'Quality Materials',
      description:
        'ISI-grade materials sourced from trusted vendors — no compromises on strength or safety.',
      icon: 'Gem',
    },
    {
      title: 'Experienced Team',
      description:
        'Skilled engineers, supervisors, and craftsmen with proven experience in government contracts.',
      icon: 'Users',
    },
    {
      title: 'Competitive Pricing',
      description:
        'Transparent tender bidding with cost-optimized, high-quality delivery every time.',
      icon: 'BadgeIndianRupee',
    },
  ],

  projects: [
    {
      title: 'Public Road Development',
      category: 'Infrastructure',
      description:
        'Municipal road construction and drainage upgrade for a Ghaziabad government body.',
      image:
        'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&auto=format&fit=crop&q=70',
    },
    {
      title: 'Residential Complex',
      category: 'Residential',
      description: 'Multi-unit residential development with modern amenities.',
      image:
        'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&auto=format&fit=crop&q=70',
    },
    {
      title: 'Commercial Office Block',
      category: 'Commercial',
      description: 'Turnkey construction of a 4-storey commercial office space.',
      image:
        'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=70',
    },
    {
      title: 'Government Facility',
      category: 'Infrastructure',
      description: 'Public utility building constructed under state tender.',
      image:
        'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&auto=format&fit=crop&q=70',
    },
    {
      title: 'Civil Bridge Works',
      category: 'Civil',
      description: 'Reinforced concrete culvert and pedestrian bridge project.',
      image:
        'https://images.unsplash.com/photo-1590069261209-f8e9b8642343?w=800&auto=format&fit=crop&q=70',
    },
    {
      title: 'Warehouse Construction',
      category: 'Commercial',
      description: 'Industrial-grade warehouse with steel structure and PEB roofing.',
      image:
        'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=800&auto=format&fit=crop&q=70',
    },
  ],

  clients: [
    'Municipal Corporation',
    'PWD Uttar Pradesh',
    'Jal Nigam',
    'CPWD',
    'GDA Ghaziabad',
    'UPSIDC',
    'NHAI',
    'Housing Board',
  ],

  testimonials: [
    {
      quote:
        'HCN Global delivered our road development project ahead of schedule and well within budget. Their attention to compliance and quality is exemplary.',
      name: 'Executive Engineer',
      role: 'Municipal Corporation, Ghaziabad',
    },
    {
      quote:
        'Professional team, transparent billing, and top-grade materials. HCN Global has become our go-to contractor for infrastructure works.',
      name: 'Project Manager',
      role: 'State Public Works Department',
    },
    {
      quote:
        'From tender documentation to final handover, every step was handled with precision. Highly recommended for government projects.',
      name: 'Assistant Engineer',
      role: 'Public Utility Board',
    },
  ],
};

export type SiteConfig = typeof siteConfig;
