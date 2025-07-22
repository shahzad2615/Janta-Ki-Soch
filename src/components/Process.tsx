import React from 'react';
import { FileText, Users, Search, Phone, Eye, CheckCircle } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      number: '1',
      icon: FileText,
      title: 'Accepting Complaints',
      description: 'Submit your grievance through our form or contact us directly'
    },
    {
      number: '2',
      icon: Users,
      title: 'Team Visit',
      description: 'Our team will visit your area or meet with you personally'
    },
    {
      number: '3',
      icon: Search,
      title: 'Research & Planning',
      description: 'We research the matter and devise steps to resolve the issue'
    },
    {
      number: '4',
      icon: Phone,
      title: 'Contact Authorities',
      description: 'We reach out to the concerned authorities on your behalf'
    },
    {
      number: '5',
      icon: Eye,
      title: 'Follow-up',
      description: 'Continuous monitoring and follow-up on the matter'
    },
    {
      number: '6',
      icon: CheckCircle,
      title: 'Final Resolution',
      description: 'Ensuring your issue is resolved completely'
    }
  ];

  return (
    <section id="process" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A systematic 6-step approach to resolve your grievances effectively
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative bg-white border-2 border-gray-100 rounded-xl p-6 hover:border-blue-300 hover:shadow-lg transition-all duration-300 group"
            >
              {/* Step Number */}
              <div className="absolute -top-4 -left-4 bg-gradient-to-r from-blue-600 to-teal-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                {step.number}
              </div>

              {/* Icon */}
              <div className="bg-gradient-to-r from-blue-100 to-teal-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mt-4 group-hover:scale-110 transition-transform duration-300">
                <step.icon className="w-8 h-8 text-blue-600" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>

              {/* Connector Line (except for last items in each row) */}
              {index < steps.length - 1 && (index + 1) % 3 !== 0 && (
                <div className="hidden lg:block absolute top-8 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-300 to-teal-300"></div>
              )}
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-[#2466e5] to-[#2466e5] rounded-xl p-8 border border-blue-200">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Start the Process?
            </h3>
            <p className="text-white mb-6">
              Our dedicated team is here to guide you through every step of resolving your grievance.
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById('complaint-form');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-gradient-to-r from-[#d1ae6e] to-[#cd9f4c] text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Submit Your Complaint
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;