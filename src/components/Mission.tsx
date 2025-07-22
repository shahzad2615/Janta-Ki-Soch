import React from 'react';
import { Users, Target, Lock, Heart } from 'lucide-react';

const Mission = () => {
  const values = [
    {
      icon: Users,
      title: 'Citizen-Centric',
      description: 'We put citizens first, ensuring their voices are heard and issues addressed.'
    },
    {
      icon: Target,
      title: 'Results-Driven',
      description: 'Systematic approach ensures effective resolution with proper follow-up.'
    },
    {
      icon: Lock,
      title: 'Confidential',
      description: 'Your information remains completely confidential and secure.'
    },
    {
      icon: Heart,
      title: 'Community Focus',
      description: 'Building stronger communities through collective action and support.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mission Statement */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Our Mission</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Janata Ki Soch is a unique initiative from Utkarsh Global Foundation to help citizens 
              resolve civic, legal, or social issues. Utkarsh acts as the bridge between citizens 
              and the authorities, ensuring speedy resolution of issues.
            </p>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {values.map((value, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="bg-gradient-to-r from-blue-500 to-teal-500 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                <value.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">
                {value.title}
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* Image and Additional Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <img
              src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Community meeting and civic engagement"
              className="rounded-xl shadow-lg w-full h-64 lg:h-80 object-cover"
            />
          </div>
          <div className="order-1 lg:order-2">
            <div className="bg-gradient-to-r from-blue-800 to-teal-700 text-white rounded-xl p-8">
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">1000+</div>
                <div className="text-xl">Citizens Helped</div>
                <p className="mt-4 text-blue-100">
                  Join thousands of citizens who have successfully resolved their grievances 
                  through our systematic approach and dedicated support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
