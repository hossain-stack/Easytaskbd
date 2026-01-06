
import { Gig, Microjob, EarningData } from './types';

export const CATEGORIES = [
  'Tax Consulting', 'Lead Generation', 'Writing & Legal', 'Influencer Marketing',
  'Logo Design', 'SEO Audit', 'Video Editing', 'Mobile App Dev', 
  'Virtual Assistant', 'Data Analysis', 'Voiceover', 'Social Media Management', 
  'Translation', 'Product Photography'
];

export const SUB_CATEGORIES = {
  'Video Editing': ['YouTube Shorts', 'Wedding', 'Corporate', 'Social Media Ads'],
  'Writing & Legal': ['Business Plans', 'Legal Docs', 'Content Writing', 'Grant Writing'],
  'Influencer Marketing': ['YouTube Influencers', 'TikTok Stars', 'Instagram Micro-Influencers'],
};

export const MOCK_EARNINGS: EarningData[] = [
  { month: 'Jan', amount: 12000 },
  { month: 'Feb', amount: 18000 },
  { month: 'Mar', amount: 15000 },
  { month: 'Apr', amount: 24000 },
  { month: 'May', amount: 21000 },
  { month: 'Jun', amount: 32000 },
];

export const MOCK_GIGS: Gig[] = [
  {
    id: '1',
    title: 'Expert Tax Form Fillup & VAT Consulting',
    description: 'File your tax returns, VAT forms, or get advice – accurate & compliant. I specialize in the Bangladeshi tax system and have worked with over 50 local startups to ensure they meet their annual compliance requirements without stress.',
    category: 'Tax Consulting',
    location: 'Dhaka',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=600',
    images: [
      'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=600',
      'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=600'
    ],
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    isPremium: true,
    seller: {
      id: 's1',
      name: 'Rahim Ahmed',
      rating: 4.9,
      avatar: 'https://picsum.photos/seed/rahim/100/100',
      reviews: 124,
      successRate: 98,
      responseTime: '1 Hour',
      completedOrders: 250,
      isVerifiedExpert: true,
      introVideo: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    tiers: {
      basic: { name: 'Basic', price: '500 BDT', delivery: '1 Day', features: ['Simple form fillup', 'Email support'] },
      standard: { name: 'Standard', price: '1500 BDT', delivery: '3 Days', features: ['Full consulting', 'VAT registration'] },
      premium: { name: 'Premium', price: '3000 BDT', delivery: '5 Days', features: ['Audit prep', 'Multi-year planning'] }
    }
  },
  {
    id: '6',
    title: 'YouTube Shorts Editor for Viral Content',
    description: 'Specialized in high-energy, high-retention editing for YouTube Shorts. I use professional transitions, trending subtitles, and sound design to make your content pop. Based in Mirpur 12, I can also collaborate on local shoots.',
    category: 'Video Editing',
    subCategory: 'YouTube Shorts',
    location: 'Mirpur 12',
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=600',
    images: [
      'https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&q=80&w=600',
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=600'
    ],
    seller: {
      id: 's6',
      name: 'Siam Islam',
      rating: 4.8,
      avatar: 'https://picsum.photos/seed/siam/100/100',
      reviews: 89,
      successRate: 95,
      responseTime: '3 Hours',
      completedOrders: 110,
      isVerifiedExpert: false
    },
    tiers: {
      basic: { name: 'Basic', price: '1500 BDT', delivery: '2 Days', features: ['1 Video (60s)', 'Basic cuts'] },
      standard: { name: 'Standard', price: '4000 BDT', delivery: '4 Days', features: ['3 Videos', 'Dynamic subtitles'] },
      premium: { name: 'Premium', price: '8000 BDT', delivery: '7 Days', features: ['10 Videos', 'Full motion graphics'] }
    }
  }
];

export const MOCK_MICROJOBS: Microjob[] = [
  { 
    id: 'm1', 
    title: 'Like & Share Facebook Page', 
    category: 'Social Media', 
    price: '10 BDT', 
    duration: '5 min', 
    spots: 45, 
    totalSpots: 100,
    holdFee: 2,
    description: 'Help our local e-commerce brand grow by liking and sharing our main page with your network.',
    instructions: [
      'Go to the link provided.',
      'Like the page.',
      'Share the latest post to your timeline (public).',
      'Take a screenshot of your shared post.'
    ]
  },
  { 
    id: 'm2', 
    title: 'Download & Review Mobile App', 
    category: 'Apps', 
    price: '25 BDT', 
    duration: '10 min', 
    spots: 12, 
    totalSpots: 50,
    holdFee: 5,
    description: 'Test our new budget tracking app for the Bangladeshi market and leave an honest 5-star review.',
    instructions: [
      'Download the app from Play Store.',
      'Use it for at least 2 minutes.',
      'Rate 5 stars and write a short helpful review.',
      'Submit your Play Store username.'
    ]
  }
];
