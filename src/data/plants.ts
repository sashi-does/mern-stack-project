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
    price: 494.18,
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
    price: 329.92,
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
    price: 741.68,
    image: 'https://images.unsplash.com/photo-1619974612677-5e1ed30d12ff?q=80&w=2946&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
    price: 2887.67,
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
    price: 412.46,
    image: 'https://plus.unsplash.com/premium_photo-1693266635681-aeec6ec5e9a0?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
    price: 329.92,
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
    price: 247.17,
    image: 'https://images.unsplash.com/photo-1708661073403-65a5c1fc001b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
    price: 370.13,
    image: 'https://images.unsplash.com/photo-1661760194787-1f4d523f2eec?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
    price: 576.41,
    image: 'https://images.unsplash.com/photo-1503149779833-1de50ebe5f8a?q=80&w=2448&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
    price: 659.17,
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
    price: 494.18,
    image: 'https://images.unsplash.com/photo-1604977042946-1eecc30f269e?auto=format&fit=crop&q=80&w=800',
    season: 'Summer',
    stockStatus: 'In Stock'
  },
  ,
  {
    id: '13',
    name: 'Apple Tree Sapling',
    category: 'Fruits',
    description: 'Delicious and crisp apples perfect for your orchard.',
    detailedDescription: 'This sapling grows into a full apple tree, producing sweet and juicy apples. Perfect for eating fresh or making pies.',
    careInstructions: 'Water deeply and regularly during the first year. Prune annually for better fruit production.',
    plantingInstructions: 'Plant in full sun with well-drained soil. Space trees 15-20 feet apart.',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1503040421714-b569d90342cb?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    season: 'Spring',
    stockStatus: 'In Stock'
  },
  {
    id: '14',
    name: 'Orange Tree Sapling',
    category: 'Fruits',
    description: 'Sweet and tangy oranges for fresh juice and snacking.',
    detailedDescription: 'This orange sapling is a hardy and productive tree, providing fragrant blossoms and juicy fruits.',
    careInstructions: 'Provide regular watering and fertilizer for citrus plants. Protect from frost.',
    plantingInstructions: 'Plant in full sun with well-draining soil. Space trees 12-15 feet apart.',
    price: 29.99,
    image: 'https://plus.unsplash.com/premium_photo-1730132431641-55e5d4181d96?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    season: 'Summer',
    stockStatus: 'Low Stock'
  },
  {
    id: '15',
    name: 'Strawberry Plants',
    category: 'Fruits',
    description: 'Sweet strawberries perfect for gardens and pots.',
    detailedDescription: 'These strawberry plants produce bright red, juicy berries that are ideal for fresh eating or desserts.',
    careInstructions: 'Keep soil moist and weed-free. Mulch to retain soil moisture and protect fruits.',
    plantingInstructions: 'Plant in full sun. Space 12-18 inches apart in rows.',
    price: 9.99,
    image: 'https://images.unsplash.com/photo-1519180392711-496e450edf6a?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    season: 'Spring',
    stockStatus: 'In Stock'
  },
  {
    id: '35',
    name: 'Winter Pansies',
    category: 'Flowers',
    description: 'Cold-hardy flowers for winter color.',
    detailedDescription: 'These tough little flowers provide color even in cold weather.',
    careInstructions: 'Remove spent blooms to encourage continued flowering.',
    plantingInstructions: 'Plant in fall for winter blooms.',
    price: 370.13,
    image: 'https://images.unsplash.com/photo-1457089328109-e5d9bd499191?auto=format&fit=crop&q=80&w=800',
    season: 'Winter',
    stockStatus: 'In Stock'
  }
];