import { Plant } from '../types';

export const plants: Plant[] = [
  // Spring Plants
  {
    id: '1',
    name: 'Tomato Plants',
    category: 'Vegetables',
    description: 'Perfect for summer gardens, these tomato plants thrive in warm weather.',
    detailedDescription: 'Our tomato plants are carefully cultivated to provide you with the best possible harvest. These plants produce medium to large fruits with excellent flavor and disease resistance.',
    careInstructions: 'Water deeply and regularly, maintain consistent soil moisture. Provide support as plants grow.',
    plantingInstructions: 'Plant in full sun, space 24-36 inches apart. Add compost to soil before planting.',
    price: 5.99,
    image: 'https://images.unsplash.com/photo-1592841200221-a6898f307baa?auto=format&fit=crop&q=80&w=800',
    season: 'Spring',
    stockStatus: 'In Stock'
  },
  {
    id: '2',
    name: 'Carrot Seeds',
    category: 'Vegetables',
    description: 'Sweet and crunchy carrots, perfect for spring planting.',
    detailedDescription: 'These carrot seeds produce sweet, crisp roots that are perfect for fresh eating or cooking.',
    careInstructions: 'Keep soil consistently moist until germination. Thin seedlings to 2-3 inches apart.',
    plantingInstructions: 'Sow seeds 1/4 inch deep in loose, well-draining soil.',
    price: 3.99,
    image: 'https://images.unsplash.com/photo-1447175008436-054170c2e979?auto=format&fit=crop&q=80&w=800',
    season: 'Spring',
    stockStatus: 'In Stock'
  },
  {
    id: '3',
    name: 'Tulip Bulbs',
    category: 'Flowers',
    description: 'Classic spring flowers in vibrant colors.',
    detailedDescription: 'Beautiful spring-blooming tulips that add vibrant color to any garden.',
    careInstructions: 'Water well after planting. Allow foliage to die back naturally after blooming.',
    plantingInstructions: 'Plant bulbs 4-6 inches deep in fall for spring blooms.',
    price: 8.99,
    image: 'https://images.unsplash.com/photo-1520614233149-f7a2c1ee7f68?auto=format&fit=crop&q=80&w=800',
    season: 'Spring',
    stockStatus: 'In Stock'
  },
  {
    id: '4',
    name: 'Cherry Tree Sapling',
    category: 'Trees',
    description: 'Young cherry tree for spring planting.',
    detailedDescription: 'Sweet cherry variety that produces delicious fruits and beautiful spring blossoms.',
    careInstructions: 'Water deeply and regularly during first growing season.',
    plantingInstructions: 'Plant in well-draining soil with full sun exposure.',
    price: 34.99,
    image: 'https://images.unsplash.com/photo-1522748906645-95d8adfd52c7?auto=format&fit=crop&q=80&w=800',
    season: 'Spring',
    stockStatus: 'Low Stock'
  },

  // Summer Plants
  {
    id: '5',
    name: 'Bell Pepper Plants',
    category: 'Vegetables',
    description: 'Sweet bell peppers in various colors.',
    detailedDescription: 'These pepper plants produce large, sweet bells perfect for salads or cooking.',
    careInstructions: 'Regular watering and fertilizing during fruit development.',
    plantingInstructions: 'Plant in full sun after all danger of frost has passed.',
    price: 4.99,
    image: 'https://images.unsplash.com/photo-1513530176992-0cf39c4cbed4?auto=format&fit=crop&q=80&w=800',
    season: 'Summer',
    stockStatus: 'In Stock'
  },
  {
    id: '6',
    name: 'Basil Plants',
    category: 'Herbs',
    description: 'Fresh, aromatic basil perfect for cooking.',
    detailedDescription: 'Sweet basil variety perfect for culinary use.',
    careInstructions: 'Regular pruning encourages bushier growth. Keep soil consistently moist.',
    plantingInstructions: 'Plant in rich, well-draining soil in full sun.',
    price: 3.99,
    image: 'https://images.unsplash.com/photo-1618375531912-867984bdfd87?auto=format&fit=crop&q=80&w=800',
    season: 'Summer',
    stockStatus: 'In Stock'
  },
  {
    id: '7',
    name: 'Sunflower Seeds',
    category: 'Flowers',
    description: 'Tall, cheerful summer blooms.',
    detailedDescription: 'Giant sunflower variety that reaches impressive heights.',
    careInstructions: 'Support may be needed for tall varieties. Water deeply but infrequently.',
    plantingInstructions: 'Sow directly in garden after last frost.',
    price: 2.99,
    image: 'https://images.unsplash.com/photo-1597848212624-a19eb35e2651?auto=format&fit=crop&q=80&w=800',
    season: 'Summer',
    stockStatus: 'In Stock'
  },

  // Fall Plants
  {
    id: '8',
    name: 'Kale Plants',
    category: 'Vegetables',
    description: 'Cold-hardy kale for fall and winter harvest.',
    detailedDescription: 'Nutritious, cold-tolerant kale perfect for fall gardens.',
    careInstructions: 'Regular watering and harvesting encourages continued production.',
    plantingInstructions: 'Plant 4-6 weeks before first frost.',
    price: 4.49,
    image: 'https://images.unsplash.com/photo-1515872474884-c6cc011b5a1b?auto=format&fit=crop&q=80&w=800',
    season: 'Fall',
    stockStatus: 'In Stock'
  },
  {
    id: '9',
    name: 'Garlic Bulbs',
    category: 'Vegetables',
    description: 'Fall-planted garlic for summer harvest.',
    detailedDescription: 'Hardy garlic variety with excellent flavor.',
    careInstructions: 'Mulch well for winter protection. Remove flower stalks in spring.',
    plantingInstructions: 'Plant cloves 4-6 inches apart in fall.',
    price: 6.99,
    image: 'https://images.unsplash.com/photo-1615477550927-6ec8445fcf2d?auto=format&fit=crop&q=80&w=800',
    season: 'Fall',
    stockStatus: 'Low Stock'
  },
  {
    id: '10',
    name: 'Chrysanthemum Plants',
    category: 'Flowers',
    description: 'Classic fall blooms in various colors.',
    detailedDescription: 'Hardy mums that provide beautiful fall color.',
    careInstructions: 'Pinch back growth until mid-summer for bushier plants.',
    plantingInstructions: 'Plant in spring or early fall for best results.',
    price: 7.99,
    image: 'https://images.unsplash.com/photo-1605048588829-0f6aa8bd2271?auto=format&fit=crop&q=80&w=800',
    season: 'Fall',
    stockStatus: 'In Stock'
  },

  // Additional plants...
  {
    id: '11',
    name: 'Rosemary',
    category: 'Herbs',
    description: 'Evergreen herb with year-round appeal.',
    detailedDescription: 'Fragrant rosemary perfect for cooking and ornamental use.',
    careInstructions: 'Well-draining soil is essential. Avoid overwatering.',
    plantingInstructions: 'Plant in full sun, space 2-3 feet apart.',
    price: 5.99,
    image: 'https://images.unsplash.com/photo-1515586000433-45406d8e6662?auto=format&fit=crop&q=80&w=800',
    season: 'Spring',
    stockStatus: 'In Stock'
  },
  {
    id: '12',
    name: 'Cucumber Plants',
    category: 'Vegetables',
    description: 'Productive vines for summer harvest.',
    detailedDescription: 'High-yielding cucumber variety perfect for fresh eating.',
    careInstructions: 'Consistent moisture is key. Provide support for vines.',
    plantingInstructions: 'Plant in warm soil after all danger of frost.',
    price: 4.49,
    image: 'https://images.unsplash.com/photo-1604977042946-1eecc30f269e?auto=format&fit=crop&q=80&w=800',
    season: 'Summer',
    stockStatus: 'In Stock'
  },
  // Continue with remaining plants...
  {
    id: '35',
    name: 'Winter Pansies',
    category: 'Flowers',
    description: 'Cold-hardy flowers for winter color.',
    detailedDescription: 'These tough little flowers provide color even in cold weather.',
    careInstructions: 'Remove spent blooms to encourage continued flowering.',
    plantingInstructions: 'Plant in fall for winter blooms.',
    price: 3.99,
    image: 'https://images.unsplash.com/photo-1457089328109-e5d9bd499191?auto=format&fit=crop&q=80&w=800',
    season: 'Winter',
    stockStatus: 'In Stock'
  }
];