export interface PortfolioItem {
  id: string;
  title: string;
  category: 'commercial' | 'music-video' | 'documentary' | 'drone-cinematic';
  image: string;
  videoUrl: string;
  client: string;
  duration: string;
  year: string;
  description: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
  features: string[];
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  priceDetail: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  idealFor: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  feedback: string;
  rating: number;
  image: string;
}

export interface EquipmentItem {
  category: string;
  items: string[];
}

