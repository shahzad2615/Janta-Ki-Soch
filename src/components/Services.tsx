import React from 'react';
import { 
  Building, 
  Shield, 
  Leaf, 
  Scale, 
  GraduationCap, 
  Baby, 
  HeartHandshake, 
  AlertTriangle,
  HelpCircle
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Building,
      title: 'Municipal Issues',
      description: 'Road maintenance, waste management, irregular water supply, and other civic infrastructure problems',
      image: 'https://media.assettype.com/freepressjournal/2024-06/f5237c09-ff65-4faa-a85e-63e37ba7f4b5/WhatsApp_Image_2024_06_15_at_11_32_21_AM.jpeg'
    },
    {
      icon: Shield,
      title: "Women's Safety",
      description: 'Sexual harassment at workplaces, domestic violence, and crimes against women',
      image: 'https://dz01iyojmxk8t.cloudfront.net/wp-content/uploads/2019/12/05163310/files-india-assault-women_dbd75c92-ad70-11e8-8465-1eef8cfbb700.jpg'
    },
    {
      icon: Leaf,
      title: 'Environmental Concerns',
      description: 'Illegal deforestation, tree cutting, pollution, and environmental protection issues',
      image: 'https://static.vecteezy.com/system/resources/previews/013/339/218/original/deforestation-trees-stump-and-deforestation-background-forest-and-environment-global-warming-cutting-down-trees-environmental-pollution-and-ecological-problems-landscape-of-dead-nature-with-cut-vector.jpg'
    },
    {
      icon: Scale,
      title: 'Legal Guidance',
      description: 'Legal support and guidance for various civil and criminal matters',
      image: 'https://lawbhoomi.com/wp-content/uploads/2023/04/Lawyer.webp'
    },
    {
      icon: GraduationCap,
      title: 'Educational Sector',
      description: 'Issues related to education system, schools, and academic institutions',
      image: 'https://th.bing.com/th/id/OIP.fFcQ_tmVnuuz_YsTHPkbFQHaE8?rs=1&pid=ImgDetMain'
    },
    {
      icon: Baby,
      title: 'Child Protection',
      description: 'Child abuse cases, child safety, and welfare-related matters',
      image: 'https://th.bing.com/th/id/OIP.e1pb_86v9ZubopoB-L_aYgHaEI?rs=1&pid=ImgDetMain'
    },
    {
      icon: HeartHandshake,
      title: 'De-Addiction Support',
      description: 'Assistance for substance abuse and addiction recovery programs',
      image: 'https://th.bing.com/th/id/OIP.SsxYJbQrJvBXoZCO_H9EGwHaEJ?rs=1&pid=ImgDetMain'
    },
    {
      icon: AlertTriangle,
      title: 'Police Cases',
      description: 'Support with police complaints and law enforcement related issues',
      image: 'https://media.licdn.com/dms/image/v2/D4D12AQFwqr3E-Y26Lg/article-cover_image-shrink_423_752/B4DZV.AC1wHIAU-/0/1741575696300?e=2147483647&v=beta&t=HLtP1QFTLvQcHrqxWfgOQENrForLHRKsPsNVFpbNmdc'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Issues We Help Resolve</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Approach Utkarsh if you need help with any of these areas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Support Section */}
        <div className="bg-gradient-to-r from-blue-600 to-[#2466e5] rounded-xl p-8 text-white text-center">
          <HelpCircle className="w-16 h-16 mx-auto mb-4 text-yellow-300" />
          <h3 className="text-2xl font-bold mb-4">
            Or Any Issue That You Need Help With
          </h3>
          <p className="text-xl text-blue-100 mb-6">
            As a citizen or as an individual, we're here to support you
          </p>
          <button 
            onClick={() => {
              const element = document.getElementById('complaint-form');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-[#cd9f4c] text-white px-8 py-3 rounded-full font-semibold   transition-colors duration-300"
          >
            Submit Your Complaint
          </button>
        </div>

        {/* How to Participate */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            How Can You Participate?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-r from-orange-100 to-orange-200 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <img
                  src="https://images.pexels.com/photos/4467687/pexels-photo-4467687.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Filing complaint online"
                  className="w-12 h-12 rounded-full object-cover"
                />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">File a Complaint</h4>
              <p className="text-gray-600 mb-4">
                Use our online form to submit your grievance. Your information will remain confidential.
              </p>
              <button 
                onClick={() => {
                  const element = document.getElementById('complaint-form');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-[#cd9f4c] text-white px-6 py-2 rounded-full font-medium hover:bg-blue-500 transition-colors"
              >
                Submit Complaint
              </button>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-green-100 to-green-200 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <img
                  src="https://static.vecteezy.com/system/resources/previews/003/720/476/non_2x/phone-icon-telephone-icon-symbol-for-app-and-messenger-vector.jpg"
                  alt="Phone consultation"
                  className="w-12 h-12 rounded-full object-cover"
                />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Call or Write</h4>
              <p className="text-gray-600 mb-4">
                Contact us directly via phone or email if you face any problems and need immediate help.
              </p>
              <button 
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-[#cd9f4c] text-white px-6 py-2 rounded-full font-medium hover:bg-blue-500 transition-colors"
              >
                Contact Details
              </button>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-100 to-purple-200 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <img
                  src="https://images.pexels.com/photos/3184611/pexels-photo-3184611.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Community volunteers"
                  className="w-12 h-12 rounded-full object-cover"
                />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Volunteer</h4>
              <p className="text-gray-600 mb-4">
                Join our events as a volunteer and contribute to addressing community issues.
              </p>
              <button 
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-[#cd9f4c] text-white px-6 py-2 rounded-full font-medium hover:bg-blue-500 transition-colors"
              >
                Get Involved
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;