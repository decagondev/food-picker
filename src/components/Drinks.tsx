import { FC } from 'react';

export const Drinks: FC = () => {
  const drinkItems = [
    {
      id: 1,
      title: 'Title',
      description: "Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very short story.",
      image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80'
    },
    {
      id: 2,
      title: 'Title',
      description: "Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very short story.",
      image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80'
    },
    {
      id: 3,
      title: 'Title',
      description: "Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very short story.",
      image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80'
    },
    {
      id: 4,
      title: 'Title',
      description: "Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very short story.",
      image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80'
    },
    {
      id: 5,
      title: 'Title',
      description: "Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very short story.",
      image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80'
    },
    {
      id: 6,
      title: 'Title',
      description: "Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very short story.",
      image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Drinks</h2>
            <h3 className="text-xl text-gray-600 mb-12 text-center">Favorites</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {drinkItems.map((item) => (
                    <div key={item.id} className="rounded-lg overflow-hidden shadow-lg">
                        <div className="relative">
                            <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                            <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-50 text-white">
                                <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                                <p className="text-sm">{item.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
};
