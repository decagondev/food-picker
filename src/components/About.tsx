import { FC } from 'react';

const About: FC = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">About Us</h2>
        
        <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
          <p>
            Elephant Hills Cafe & Bakery is a beloved community-based pop-up coffee shop and bakery 
            nestled in the heart of El Sereno, Los Angeles. Founded and operated by the passionate 
            duo, Sid and Amber, this cozy spot has quickly become a local favorite for its handcrafted 
            lattes and delectable pastries. Drawing inspiration from Latin American flavors, their 
            unique offerings—like the Mazapan latte and dulce de leche drinks—have garnered rave 
            reviews from patrons.
          </p>

          <p>
            Located at 4903 Huntington Dr N, Elephant Hills Cafe & Bakery serves as more than just 
            a place to grab a morning coffee; it's a gathering spot that reflects the vibrant spirit 
            of the El Sereno community. With amenities like outdoor seating, free Wi-Fi, and a 
            pet-friendly environment, it offers a welcoming space for all. Whether you're stopping 
            by before your morning commute or seeking a relaxing spot to unwind, Elephant Hills 
            Cafe & Bakery invites you to experience their warm hospitality and flavorful creations.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
