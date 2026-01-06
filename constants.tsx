
import { Gig, Microjob, EarningData, BlogPost } from './types';

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

export const MOCK_BLOG_POSTS: BlogPost[] = [
  {
    id: 'b1',
    title: 'How to File VAT & Tax Returns in Bangladesh 2026 – Full Guide',
    excerpt: 'Step-by-step instructions on navigating the latest NBR portals and ensuring compliance for your business.',
    category: 'Tax & Legal',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=600',
    date: 'Oct 12, 2026',
    readTime: '12 min'
  },
  {
    id: 'b2',
    title: 'Fastest Ways to Collect Verified Real Estate Leads in Dhaka & Chittagong',
    excerpt: 'Targeted strategies for real estate agencies looking for high-intent buyers in the BD market.',
    category: 'Lead Generation',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=600',
    date: 'Oct 10, 2026',
    readTime: '8 min'
  },
  {
    id: 'b3',
    title: 'How to Write Professional Business Plans & Proposals (Free Templates)',
    excerpt: 'Impress investors and clients with structured proposals that follow global standards with a local touch.',
    category: 'Writing & Legal',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=600',
    date: 'Oct 08, 2026',
    readTime: '15 min'
  },
  {
    id: 'b4',
    title: 'Earn 5K–15K/Month as a Local Micro-Influencer – Step by Step',
    excerpt: 'Turn your social media presence into a consistent side income by partnering with rising local brands.',
    category: 'Influencer Marketing',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=600',
    date: 'Oct 05, 2026',
    readTime: '10 min'
  },
  {
    id: 'b5',
    title: 'Best Payment Gateways for Freelancers in Bangladesh 2026',
    excerpt: 'Comparing bKash, Nagad, and international options for speed, safety, and fee efficiency.',
    category: 'Payments & Tips',
    image: 'https://images.unsplash.com/photo-1556742049-02e49f606211?auto=format&fit=crop&q=80&w=600',
    date: 'Oct 01, 2026',
    readTime: '7 min'
  },
  {
    id: 'b6',
    title: 'Create High-Converting Gigs on EasyTaskBD Like a Pro',
    excerpt: 'Optimizing your titles, thumbnails, and descriptions to attract high-paying clients.',
    category: 'Freelancing',
    image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&q=80&w=600',
    date: 'Sep 28, 2026',
    readTime: '9 min'
  },
  {
    id: 'b7',
    title: 'Legal Contract Writing Tips for Small Businesses & Startups',
    excerpt: 'Protecting your interests with simple but effective legal documentation tailored for BD law.',
    category: 'Writing & Legal',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=600',
    date: 'Sep 25, 2026',
    readTime: '11 min'
  },
  {
    id: 'b8',
    title: '2026 Tax Season Checklist Every BD Entrepreneur Needs',
    excerpt: 'Don’t wait for the deadline. Prepare your documents early with this comprehensive checklist.',
    category: 'Tax & Legal',
    image: 'https://images.unsplash.com/photo-1454165833767-027ff39c1372?auto=format&fit=crop&q=80&w=600',
    date: 'Sep 20, 2026',
    readTime: '6 min'
  },
  {
    id: 'b9',
    title: 'How to Get 100+ Verified Leads for Real Estate Fast & Cheap',
    excerpt: 'Using micro-tasks and social funnels to build a powerful prospect list overnight.',
    category: 'Lead Generation',
    image: 'https://images.unsplash.com/photo-1460472178825-e5240623abe5?auto=format&fit=crop&q=80&w=600',
    date: 'Sep 15, 2026',
    readTime: '14 min'
  },
  {
    id: 'b10',
    title: 'From University Student to Full-Time Freelancer: My EasyTaskBD Journey',
    excerpt: 'A success story of balancing studies and building a professional career on our platform.',
    category: 'Freelancing',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=600',
    date: 'Sep 10, 2026',
    readTime: '8 min'
  }
];

export const FAQ_ITEMS = [
  { q: "How do payments work?", a: "Payments are held in our secure Escrow system. Funds are only released to the seller after the buyer approves the delivered work. You can deposit via bKash, Nagad, or Cards." },
  { q: "How to report a seller?", a: "If a seller fails to deliver or behaves unprofessionally, use the 'Report' button on the order page or contact our 24/7 support via the help center." },
  { q: "What are microjobs?", a: "Microjobs are small tasks that can be completed in minutes (like following a page or testing an app). They pay instantly once the proof is verified." },
  { q: "Is there a limit on withdrawals?", a: "Sellers can withdraw earnings once they reach 500 BDT. Withdrawals are processed within 24 hours to your linked mobile wallet." },
  { q: "How to become a Verified Expert?", a: "Sellers with 200+ completed orders and a 4.8+ rating can apply for verification. Our team manually reviews skills and identity." }
];
