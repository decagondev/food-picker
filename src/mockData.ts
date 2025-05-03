import { Food } from './types';

export const mockFoods: Food[] = [
  {
    id: '1',
    name: 'Margherita Pizza',
    description: 'Classic Italian pizza with tomato sauce, mozzarella, and basil',
    type: 'dinner',
    cuisine: 'italian',
    complexity: 'easy',
    imageUrl: 'https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?q=80&w=500'
  },
  {
    id: '2',
    name: 'Avocado Toast',
    description: 'Sourdough bread topped with smashed avocado, cherry tomatoes, and microgreens',
    type: 'breakfast',
    cuisine: 'american',
    dietary: 'vegetarian',
    complexity: 'easy',
    imageUrl: 'https://images.unsplash.com/photo-1588137378633-dea1a55ffe85?q=80&w=500'
  },
  {
    id: '3',
    name: 'Chicken Biryani',
    description: 'Fragrant rice dish with spiced chicken, saffron, and caramelized onions',
    type: 'dinner',
    cuisine: 'indian',
    complexity: 'medium',
    imageUrl: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=500'
  },
  {
    id: '4',
    name: 'Vegetable Pad Thai',
    description: 'Rice noodles stir-fried with tofu, bean sprouts, peanuts, and tamarind sauce',
    type: 'lunch',
    cuisine: 'asian',
    dietary: 'vegan',
    complexity: 'medium',
    imageUrl: 'https://images.unsplash.com/photo-1559314809-0d155014e29e?q=80&w=500'
  },
  {
    id: '5',
    name: 'Beef Street Tacos',
    description: 'Corn tortillas with marinated beef, onions, cilantro, and lime',
    type: 'lunch',
    cuisine: 'mexican',
    complexity: 'easy',
    imageUrl: 'https://images.unsplash.com/photo-1570461226513-e48d63964f7f?q=80&w=500'
  },
  {
    id: '6',
    name: 'Chocolate Protein Smoothie',
    description: 'Banana and chocolate protein blend with almond milk and peanut butter',
    type: 'snack',
    cuisine: 'american',
    complexity: 'easy',
    imageUrl: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=500'
  },
  {
    id: '7',
    name: 'Beef Wellington',
    description: 'Filet steak coated with pâté and duxelles, wrapped in puff pastry',
    type: 'dinner',
    cuisine: 'american',
    complexity: 'hard',
    imageUrl: 'https://images.unsplash.com/photo-1608644141089-e12f3dac6c95?q=80&w=500'
  },
  {
    id: '8',
    name: 'Vegan Buddha Bowl',
    description: 'Rice bowl with roasted vegetables, tofu, avocado, and tahini dressing',
    type: 'lunch',
    cuisine: 'mediterranean',
    dietary: 'vegan',
    complexity: 'medium',
    imageUrl: 'https://images.unsplash.com/photo-1611892367637-c22911b05be1?q=80&w=500'
  }
]; 