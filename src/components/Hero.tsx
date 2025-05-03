import { FC } from 'react';

const Hero: FC = () => {
  return (
    <div className="relative top-[50px] h-[500px] w-full">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/EHImg1.png')",
          filter: "brightness(0.7)"
        }}
      />
      
      <div className="relative h-full flex flex-col items-center justify-center text-white pl-[55%]">
        <h1 className="text-6xl font-bold mb-4">
          Elephant Hills
        </h1>
        <h2 className="text-4xl font-light mb-8">
          Cafe & Bakery
        </h2>
        <a 
          href="#"
          className="px-8 py-3 bg-white text-gray-900 rounded-full 
                     font-medium hover:bg-gray-100 transition-colors"
        >
          Website
        </a>
      </div>
    </div>
  );
};

export default Hero;
