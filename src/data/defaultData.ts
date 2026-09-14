export type SectionStyle = {
  background: string;
  backgroundDark: string;
  text: string;
  textDark: string;
  heading: string;
  headingDark: string;
  accent: string;
  headingFont: string;
  bodyFont: string;
  radius: number;
};

export type Country = {
  id: string;
  name: string;
  slug: string;
  flagUrl: string;
  bannerUrl: string;
  tagline: string;
  description: string;
  highlights: string[];
  featured: boolean;
};

export type CmsData = {
  mode: 'light' | 'dark' | 'system';
  branding: {
    siteName: string;
    subtitle: string;
    logoUrl: string;
    logoLightUrl: string;
    faviconUrl: string;
    logoAlt: string;
    logoWidth: number;
  };
  navigation: { label: string; href: string; visible: boolean }[];
  hero: {
    eyebrow: string;
    title: string;
    emphasis: string;
    description: string;
    imageUrl: string;
    primaryLabel: string;
    primaryHref: string;
    secondaryLabel: string;
    secondaryHref: string;
  };
  stats: { value: string; label: string }[];
  sectionOrder: string[];
  sectionVisibility: Record<string, boolean>;
  sectionStyles: Record<string, SectionStyle>;
  countries: Country[];
  services: { id: string; icon: string; title: string; description: string }[];
  process: { id: string; title: string; description: string }[];
  visa: {
    title: string;
    description: string;
    imageUrl: string;
    bullets: string[];
    pageBannerUrl: string;
  };
  testimonials: {
    id: string;
    name: string;
    destination: string;
    quote: string;
    rating: number;
    visaGranted: boolean;
    avatar: string;
  }[];
  branches: {
    id: string;
    city: string;
    tag: string;
    address: string;
    phone: string;
    whatsapp: string;
    email: string;
    hours: string;
    mapEmbed: string;
  }[];
  contact: {
    pageTitle: string;
    pageSubtitle: string;
    pageBannerUrl: string;
    formTitle: string;
  };
  footer: {
    description: string;
    copyright: string;
    facebook: string;
    instagram: string;
    tiktok: string;
    youtube: string;
  };
  seo: {
    title: string;
    description: string;
    keywords: string;
  };
};

const style = (
  background: string,
  backgroundDark: string,
  heading = '#102a56',
  headingDark = '#f8fafc',
  accent = '#be123c',
): SectionStyle => ({
  background,
  backgroundDark,
  text: '#64748b',
  textDark: '#cbd5e1',
  heading,
  headingDark,
  accent,
  headingFont: 'Cormorant Garamond',
  bodyFont: 'DM Sans',
  radius: 16,
});

export const defaultData: CmsData = {
  mode: 'system',
  branding: {
    siteName: 'Kathford',
    subtitle: 'Education Consultancy',
    logoUrl: '/assets/images/logo.png',
    logoLightUrl: '/assets/images/logo.png',
    faviconUrl: '/assets/images/logo.png',
    logoAlt: 'Kathford Education Consultancy',
    logoWidth: 48,
  },
  navigation: [
    { label: 'Destinations', href: '/destinations', visible: true },
    { label: 'Services', href: '/services', visible: true },
    { label: 'Process', href: '/process', visible: true },
    { label: 'Visa', href: '/visa', visible: true },
    { label: 'Contact', href: '/contact', visible: true },
  ],
  hero: {
    eyebrow: 'Butwal & Devdaha · Rupandehi, Nepal',
    title: 'Your Gateway to',
    emphasis: 'Global Education',
    description:
      'Expert study-abroad counseling for UK, Japan, Australia, Canada & Europe. Trusted by 1,500+ students with a 98% visa success rate.',
    imageUrl: '/assets/images/hero.jpg',
    primaryLabel: 'Apply Now',
    primaryHref: '/contact',
    secondaryLabel: 'Free Counseling',
    secondaryHref: 'tel:9857075475',
  },
  stats: [
    { value: '1500+', label: 'Students Placed' },
    { value: '98%', label: 'Visa Success Rate' },
    { value: '50+', label: 'Partner Universities' },
    { value: '10+', label: 'Years of Excellence' },
  ],
  sectionOrder: [
    'destinations',
    'services',
    'process',
    'visa',
    'testimonials',
    'branches',
  ],
  sectionVisibility: {
    destinations: true,
    services: true,
    process: true,
    visa: true,
    testimonials: true,
    branches: true,
  },
  sectionStyles: {
    hero: style('#102a56', '#07111f', '#ffffff', '#ffffff', '#fb7185'),
    stats: style('#102a56', '#0b1d39', '#ffffff', '#ffffff', '#fb7185'),
    destinations: style('#ffffff', '#0f172a'),
    services: style('#f8fafc', '#111827'),
    process: style('#ffffff', '#0f172a'),
    visa: style('#f8fafc', '#111827'),
    testimonials: style('#ffffff', '#0f172a'),
    branches: style('#f8fafc', '#111827'),
    footer: style('#111827', '#030712', '#ffffff', '#ffffff', '#fb7185'),
  },
  countries: [
    {
      id: 'uk',
      name: 'United Kingdom',
      slug: 'uk',
      flagUrl: 'https://flagcdn.com/w160/gb.png',
      bannerUrl:
        'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1600&q=80',
      tagline: 'Post-Study Visa · Scholarships · Top Universities',
      description:
        'Study in the United Kingdom with guidance on universities, courses, scholarships, documentation and student visa preparation.',
      highlights: [
        'Globally ranked universities',
        'Graduate Route opportunities',
        'Wide range of scholarships',
        'Strong international student community',
      ],
      featured: true,
    },
    {
      id: 'jp',
      name: 'Japan',
      slug: 'japan',
      flagUrl: 'https://flagcdn.com/w160/jp.png',
      bannerUrl:
        'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1600&q=80',
      tagline: 'Part-time Work · JLPT · Low Tuition',
      description:
        'Explore language schools, vocational options and university pathways in Japan with complete application and visa support.',
      highlights: [
        'Affordable study pathways',
        'Part-time work opportunities',
        'Safe and modern cities',
        'Japanese language support',
      ],
      featured: true,
    },
    {
      id: 'au',
      name: 'Australia',
      slug: 'australia',
      flagUrl: 'https://flagcdn.com/w160/au.png',
      bannerUrl:
        'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&w=1600&q=80',
      tagline: 'Work Rights · Top Universities · Diverse Programs',
      description:
        'Plan your Australian education journey with course selection, application, financial guidance and visa preparation.',
      highlights: [
        'Globally recognised qualifications',
        'Post-study work options',
        'Excellent student lifestyle',
        'Multiple intake options',
      ],
      featured: true,
    },
    {
      id: 'ca',
      name: 'Canada',
      slug: 'canada',
      flagUrl: 'https://flagcdn.com/w160/ca.png',
      bannerUrl:
        'https://images.unsplash.com/photo-1517935706615-2717063c2225?auto=format&fit=crop&w=1600&q=80',
      tagline: 'PGWP · Career Pathways · Quality Education',
      description:
        'Get support for Canadian colleges and universities, study permits and course planning tailored to your goals.',
      highlights: [
        'Quality public institutions',
        'Career-focused programs',
        'Multicultural environment',
        'Strong student support',
      ],
      featured: true,
    },
    {
      id: 'us',
      name: 'USA',
      slug: 'usa',
      flagUrl: 'https://flagcdn.com/w160/us.png',
      bannerUrl:
        'https://images.unsplash.com/photo-1485738422979-f5c462d49f74?auto=format&fit=crop&w=1600&q=80',
      tagline: 'F-1 Visa · OPT/CPT · Leading Universities',
      description:
        'Build your US study plan with admissions strategy, application documents, scholarship guidance and F-1 visa preparation.',
      highlights: [
        'World-leading institutions',
        'Flexible academic pathways',
        'Research opportunities',
        'OPT and CPT options',
      ],
      featured: true,
    },
    {
      id: 'eu',
      name: 'Europe',
      slug: 'europe',
      flagUrl: 'https://flagcdn.com/w160/eu.png',
      bannerUrl:
        'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=1600&q=80',
      tagline: 'Scholarships · Schengen · Diverse Destinations',
      description:
        'Explore selected European destinations with affordable tuition, scholarship opportunities and international programs.',
      highlights: [
        'English-taught programs',
        'Affordable options',
        'Rich cultural experience',
        'Scholarship opportunities',
      ],
      featured: true,
    },
  ],
  services: [
    {
      id: 'counseling',
      icon: '🎯',
      title: 'Education Counseling',
      description:
        'Personalized guidance matching your profile, budget, and goals to the right destination.',
    },
    {
      id: 'application',
      icon: '🏛️',
      title: 'University Application',
      description:
        'SOP writing, document preparation, and submission tracking for your selected institutions.',
    },
    {
      id: 'visa',
      icon: '📋',
      title: 'Visa Guidance',
      description:
        'Documentation review, interview coaching, and step-by-step visa application support.',
    },
    {
      id: 'scholarship',
      icon: '💰',
      title: 'Scholarship Assistance',
      description:
        'Identify and apply for merit-based, government, and university scholarship opportunities.',
    },
    {
      id: 'test',
      icon: '📝',
      title: 'Test Preparation',
      description:
        'IELTS, PTE, Duolingo, and Japanese language preparation support.',
    },
    {
      id: 'interview',
      icon: '🎤',
      title: 'Interview Preparation',
      description:
        'Mock visa and university interviews with practical feedback and confidence building.',
    },
    {
      id: 'document',
      icon: '📄',
      title: 'Document Verification',
      description:
        'Support with academic, financial and personal documentation required for applications.',
    },
    {
      id: 'departure',
      icon: '✈️',
      title: 'Pre-Departure Briefing',
      description:
        'Accommodation, travel, cultural orientation and practical arrival guidance.',
    },
  ],
  process: [
    {
      id: '1',
      title: 'Free Counseling',
      description:
        'Meet our advisors and map your academic, career and destination goals.',
    },
    {
      id: '2',
      title: 'Documentation',
      description:
        'Gather, review and prepare the documents needed for your application.',
    },
    {
      id: '3',
      title: 'University Apply',
      description:
        'Submit applications and manage communication until you receive an offer.',
    },
    {
      id: '4',
      title: 'Visa Application',
      description:
        'Prepare your financials, application file and interview with expert guidance.',
    },
    {
      id: '5',
      title: 'Departure',
      description:
        'Complete pre-departure preparation and get ready for your new study destination.',
    },
  ],
  visa: {
    title: 'Visa Guidance You Can Rely On',
    description:
      'Our team supports students from document preparation to interview readiness, helping every application stay clear, complete and well-organized.',
    imageUrl: '/assets/images/visa.jpg',
    pageBannerUrl: '/assets/images/visa.jpg',
    bullets: [
      'Profile and visa document review',
      'Financial document checklist and guidance',
      'Mock visa interview preparation',
      'Application and appointment support',
      'Pre-departure orientation after approval',
    ],
  },
  testimonials: [
    {
      id: 't1',
      name: 'Aarav Sharma',
      destination: 'United Kingdom',
      quote:
        'Kathford guided me from course selection to my visa interview. The process felt clear and well planned.',
      rating: 5,
      visaGranted: true,
      avatar: 'AS',
    },
    {
      id: 't2',
      name: 'Sujata Thapa',
      destination: 'Japan',
      quote:
        'The team helped with language preparation, documentation and every step of my application.',
      rating: 5,
      visaGranted: true,
      avatar: 'ST',
    },
    {
      id: 't3',
      name: 'Nishan KC',
      destination: 'Australia',
      quote:
        'I appreciated the practical counseling and regular follow-up throughout my admission process.',
      rating: 5,
      visaGranted: true,
      avatar: 'NK',
    },
  ],
  branches: [
    {
      id: 'butwal',
      city: 'Butwal',
      tag: 'Main Branch',
      address: 'Butwal, Rupandehi, Nepal',
      phone: '9857075475',
      whatsapp: '9857075475',
      email: 'info@kathford.com.np',
      hours: 'Sun–Fri · 9:00 AM–5:30 PM',
      mapEmbed: 'https://www.google.com/maps?q=Butwal,Nepal&output=embed',
    },
    {
      id: 'devdaha',
      city: 'Devdaha',
      tag: 'Branch Office',
      address: 'Devdaha, Rupandehi, Nepal',
      phone: '9857075475',
      whatsapp: '9857075475',
      email: 'info@kathford.com.np',
      hours: 'Sun–Fri · 9:00 AM–5:30 PM',
      mapEmbed: 'https://www.google.com/maps?q=Devdaha,Nepal&output=embed',
    },
  ],
  contact: {
    pageTitle: 'Talk to Our Education Counselors',
    pageSubtitle:
      'Tell us where you want to study and our team will help you understand the next steps.',
    pageBannerUrl: '/assets/images/hero.jpg',
    formTitle: 'Request Free Counseling',
  },
  footer: {
    description:
      'Your trusted study-abroad partner in Rupandehi, Nepal. Guidance from counseling to departure.',
    copyright: '© 2026 Kathford Education Consultancy. All rights reserved.',
    facebook: '#',
    instagram: '#',
    tiktok: '#',
    youtube: '#',
  },
  seo: {
    title: 'Kathford Education Consultancy | Your Gateway to Global Education',
    description:
      'Kathford Education Consultancy — trusted study abroad guidance in Butwal and Devdaha, Nepal.',
    keywords:
      'study abroad Nepal, education consultancy Butwal, student visa Nepal, Kathford consultancy',
  },
};
