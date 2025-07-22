import React from 'react';
import { Phone, Mail, MapPin, Heart, ExternalLink } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2">जनता की सोच</h3>
              <p className="text-lg text-gray-300">Janata Ki Soch</p>
              <p className="text-sm text-gray-400">By Utkarsh Global Foundation</p>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              A unique initiative to help citizens resolve civic, legal, or social issues. 
              Utkarsh acts as the bridge between citizens and authorities, ensuring speedy 
              resolution of issues through our systematic 6-step process.
            </p>
            <div className="flex items-center text-yellow-300">
              <Heart className="w-5 h-5 mr-2" />
              <span className="font-semibold">Utkarsh is Here for You!</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  className="text-gray-300 hover:text-white transition-colors text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-gray-300 hover:text-white transition-colors text-left"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('process')}
                  className="text-gray-300 hover:text-white transition-colors text-left"
                >
                  Our Process
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-gray-300 hover:text-white transition-colors text-left"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-300 hover:text-white transition-colors text-left"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Contact Information</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <Phone className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">+91 9820047924</p>
                  <p className="text-sm text-gray-400">24/7 Emergency Support</p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <Mail className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm break-all">
                    janatakisoch@utkarshglobalfoundation.org
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">
                    Corporate office no. 501, 5th floor, Vasudev Chambers, 
                    Near Sonapur Signal, Mulund (W), Mumbai, Maharashtra, 400078.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-400 mb-1">1000+</div>
              <div className="text-gray-300">Citizens Helped</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-400 mb-1">100%</div>
              <div className="text-gray-300">Confidential</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-400 mb-1">24/7</div>
              <div className="text-gray-300">Support Available</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-400 mb-1">6</div>
              <div className="text-gray-300">Step Process</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <h4 className="text-xl font-semibold mb-4">Ready to Make Your Voice Heard?</h4>
          <button
            onClick={() => {
              const event = new CustomEvent('openComplaintForm');
              window.dispatchEvent(event);
            }}
            className="bg-gradient-to-r from-[#cd9f4c] to-[#d1ae6e] text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            File Your Complaint Now
          </button>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">
              © 2024 Utkarsh Global Foundation. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </a>
              <div className="flex items-center text-gray-400 text-sm">
                Made with <Heart className="w-4 h-4 mx-1 text-red-400" /> for the people
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;