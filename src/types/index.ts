export interface Plant {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  season: Season;
  category: Category;
  stockStatus: 'In Stock' | 'Low Stock' | 'Out of Stock';
  detailedDescription?: string;
  careInstructions?: string;
  plantingInstructions?: string;
}

export type Season = 'Spring' | 'Summer' | 'Fall' | 'Winter';
export type Category = 'Vegetables' | 'Fruits' | 'Herbs' | 'Flowers' | 'Trees';

export interface Message {
  text: string;
  isUser: boolean;
}