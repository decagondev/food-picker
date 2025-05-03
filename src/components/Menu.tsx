import { FC } from 'react';

const Menu: FC = () => {
  const menuItems = [
    {
      id: 1,
      title: 'Mazapan Latte',
      description: 'Our signature latte infused with the sweet flavor of traditional Mexican mazapan candy.',
      price: '$5.50',
      image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80'
    },
    {
      id: 2,
      title: 'Dulce de Leche Mocha',
      description: 'Rich espresso blended with chocolate and caramelized milk for a decadent treat.',
      price: '$6.00',
      image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80'
    },
    {
      id: 3,
      title: 'Conchas & Coffee Combo',
      description: 'Our freshly baked traditional Mexican sweet bread paired with a coffee of your choice.',
      price: '$7.50',
      image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Menu</h2>
        <h3 className="text-xl text-gray-600 mb-12 text-center">Favorites</h3>
        
        <div className="border border-gray-200 rounded-lg p-6 bg-white">
          {menuItems.map((item) => (
            <div key={item.id} className="flex items-start py-6 border-b border-gray-200 last:border-b-0">
              <div className="w-24 h-24 bg-gray-200 rounded mr-6 overflow-hidden flex-shrink-0">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <h4 className="text-lg font-semibold text-gray-900 mb-1">{item.title}</h4>
                <p className="text-gray-600 text-sm mb-3">{item.description}</p>
                <button className="px-4 py-1 bg-gray-200 text-gray-800 rounded text-sm hover:bg-gray-300 transition-colors">
                  {item.price}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
