import React from 'react';
import { ArrowRight, Users, Shield, Heart } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-teal-700"></div>
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url('/home.JPG')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      ></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-white">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="block">जनता की सोच</span>
              <span className="block text-3xl lg:text-4xl mt-2 text-blue-200">
                Janata Ki Soch
              </span>
            </h1>

            <p className="text-xl lg:text-2xl mb-4 text-blue-100">
              Public Opinion by Utkarsh Global Foundation
            </p>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8">
              <h2 className="text-2xl font-semibold mb-3 text-yellow-300">
                Utkarsh is Here for You!
              </h2>
              <p className="text-lg text-blue-100">
                Calling Citizens to Share Their Grievances!
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection('complaint-form')}
                className="bg-gradient-to-r bg-[#d1ae6e] bg-[#d1ae6e]  text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center group"
              >
                File a Complaint
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-800 transition-all duration-300"
              >
                Contact Us
              </button>
            </div>
          </div>

          {/* Right content - Stats */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center text-white">
              <Users className="w-12 h-12 mx-auto mb-3 text-yellow-300" />
              <div className="text-3xl font-bold mb-2">1000+</div>
              <div className="text-sm text-blue-100">Citizens Helped</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center text-white">
              <Shield className="w-12 h-12 mx-auto mb-3 text-green-300" />
              <div className="text-3xl font-bold mb-2">100%</div>
              <div className="text-sm text-blue-100">Confidential</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center text-white">
              <Heart className="w-12 h-12 mx-auto mb-3 text-red-300" />
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div className="text-sm text-blue-100">Support</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center text-white">
              <div className="text-3xl font-bold mb-2">6</div>
              <div className="text-sm text-blue-100">Step Process</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
