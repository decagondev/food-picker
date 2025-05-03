import { FC } from 'react';

const ImagesTop: FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-2 gap-8">
        <div className="rounded-lg shadow-lg overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
            alt="Coffee Shop Interior"
            className="w-full h-[400px] object-cover"
          />
        </div>
        <div className="rounded-lg shadow-lg overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
            alt="Coffee and Pastries" 
            className="w-full h-[400px] object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default ImagesTop;
