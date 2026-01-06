
export type Screen = 
  | 'HOME' 
  | 'GIG_LIST' 
  | 'GIG_DETAIL' 
  | 'SELLER_PROFILE' 
  | 'GIG_CREATE' 
  | 'MICROJOBS' 
  | 'MICROJOB_DETAIL'
  | 'DEPOSIT' 
  | 'ORDER_CONFIRMATION'
  | 'PREMIUM_SUBSCRIBE'
  | 'LOGIN';

export interface PricingTier {
  name: string;
  price: string;
  delivery: string;
  features: string[];
}

export interface Gig {
  id: string;
  title: string;
  description: string;
  category: string;
  subCategory?: string;
  image: string;
  images?: string[];
  videoUrl?: string;
  isPremium?: boolean;
  location?: string;
  seller: {
    id: string;
    name: string;
    rating: number;
    avatar: string;
    reviews: number;
    successRate: number;
    responseTime: string;
    isVerifiedExpert?: boolean;
    completedOrders: number;
    introVideo?: string;
  };
  tiers: {
    basic: PricingTier;
    standard: PricingTier;
    premium: PricingTier;
  };
}

export interface Microjob {
  id: string;
  title: string;
  description?: string;
  category: string;
  price: string;
  duration: string;
  spots: number;
  totalSpots: number;
  instructions?: string[];
  holdFee?: number;
}

export interface EarningData {
  month: string;
  amount: number;
}
