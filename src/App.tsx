import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  FileText, 
  Users, 
  Search, 
  Phone as PhoneIcon, 
  CheckCircle, 
  Home, 
  Shield, 
  Leaf, 
  Scale, 
  GraduationCap, 
  Heart, 
  AlertCircle,
  ExternalLink,
  ChevronRight,
  Menu,
  X
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const processSteps = [
    { icon: FileText, title: "Accepting Complaints", description: "Submit your grievance through our form or contact us directly" },
    { icon: Users, title: "Team Visit", description: "Our team will visit your area or meet with you personally" },
    { icon: Search, title: "Research & Planning", description: "We research the matter and devise steps to resolve the issue" },
    { icon: PhoneIcon, title: "Contact Authorities", description: "We reach out to the concerned authorities on your behalf" },
    { icon: CheckCircle, title: "Follow-up", description: "Continuous monitoring and follow-up on the matter" },
    { icon: CheckCircle, title: "Final Resolution", description: "Ensuring your issue is resolved completely" }
  ];

  const services = [
    { 
      icon: Home, 
      title: "Municipal Issues", 
      description: "Road maintenance, waste management, irregular water supply, and other civic infrastructure problems",
      color: "bg-blue-500",
      image: "https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    { 
      icon: Shield, 
      title: "Women's Safety", 
      description: "Sexual harassment at workplaces, domestic violence, and crimes against women",
      color: "bg-pink-500",
      image: "https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    { 
      icon: Leaf, 
      title: "Environmental Concerns", 
      description: "Illegal deforestation, tree cutting, pollution, and environmental protection issues",
      color: "bg-green-500",
      image: "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    { 
      icon: Scale, 
      title: "Legal Guidance", 
      description: "Legal support and guidance for various civil and criminal matters",
      color: "bg-purple-500",
      image: "https://images.pexels.com/photos/5668882/pexels-photo-5668882.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    { 
      icon: GraduationCap, 
      title: "Educational Sector", 
      description: "Issues related to education system, schools, and academic institutions",
      color: "bg-indigo-500",
      image: "https://images.pexels.com/photos/289737/pexels-photo-289737.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    { 
      icon: Heart, 
      title: "Child Protection", 
      description: "Child abuse cases, child safety, and welfare-related matters",
      color: "bg-red-500",
      image: "https://images.pexels.com/photos/1720186/pexels-photo-1720186.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    { 
      icon: AlertCircle, 
      title: "De-Addiction Support", 
      description: "Assistance for substance abuse and addiction recovery programs",
      color: "bg-orange-500",
      image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    { 
      icon: Shield, 
      title: "Police Cases", 
      description: "Support with police complaints and law enforcement related issues",
      color: "bg-gray-700",
      image: "https://images.pexels.com/photos/8112199/pexels-photo-8112199.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-lg z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Janata Ki Soch</h1>
                <p className="text-xs text-gray-600">By Utkarsh Global Foundation</p>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('hero')} className="text-gray-700 hover:text-blue-600 transition-colors">Home</button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-blue-600 transition-colors">About</button>
              <button onClick={() => scrollToSection('process')} className="text-gray-700 hover:text-blue-600 transition-colors">Process</button>
              <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-blue-600 transition-colors">Services</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-blue-600 transition-colors">Contact</button>
            </div>

            {/* Mobile menu button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-700 hover:text-blue-600"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden bg-white border-t border-gray-200">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <button onClick={() => scrollToSection('hero')} className="block px-3 py-2 text-gray-700 hover:text-blue-600">Home</button>
                <button onClick={() => scrollToSection('about')} className="block px-3 py-2 text-gray-700 hover:text-blue-600">About</button>
                <button onClick={() => scrollToSection('process')} className="block px-3 py-2 text-gray-700 hover:text-blue-600">Process</button>
                <button onClick={() => scrollToSection('services')} className="block px-3 py-2 text-gray-700 hover:text-blue-600">Services</button>
                <button onClick={() => scrollToSection('contact')} className="block px-3 py-2 text-gray-700 hover:text-blue-600">Contact</button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen">
        <div 
          className="absolute top-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920')`
          }}
        ></div>
        <div className="absolute top-0 w-full h-full bg-gradient-to-br from-blue-900/90 via-blue-800/85 to-blue-700/80"></div>
        <div className="container relative mx-auto px-4">
          <div className="items-center flex flex-wrap">
            <div className="w-full lg:w-8/12 px-4 ml-auto mr-auto text-center">
              <div className="pr-12">
                <h1 className="text-white font-bold text-5xl lg:text-7xl mb-6 leading-tight drop-shadow-lg">
                  Janata Ki Soch
                </h1>
                <p className="text-blue-100 text-xl lg:text-2xl font-medium mb-2">
                  जनता की सोच
                </p>
                <p className="text-blue-200 text-lg lg:text-xl mb-8">
                  Public Opinion by Utkarsh Global Foundation
                </p>
                <h2 className="text-white text-2xl lg:text-3xl font-semibold mb-8 leading-relaxed drop-shadow-md">
                  Utkarsh is Here for You!<br />
                  <span className="text-blue-200">Calling Citizens to Share Their Grievances!</span>
                </h2>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <a 
                    href="https://docs.google.com/forms/d/e/1FAIpQLSdOJo273NH8GL5g8LvFtwGXI7MzsqJjLNql1a7GX_vJcd6uGQ/viewform?usp=dialog"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-blue-700 font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-2"
                  >
                    <FileText className="w-5 h-5" />
                    <span>File a Complaint</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <button 
                    onClick={() => scrollToSection('contact')}
                    className="border-2 border-white text-white font-bold px-8 py-4 rounded-full hover:bg-white hover:text-blue-700 transition-all duration-300 flex items-center space-x-2"
                  >
                    <Phone className="w-5 h-5" />
                    <span>Contact Us</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
                  Our Mission
                </h2>
                <p className="text-xl text-gray-700 leading-relaxed mb-8">
                  Janata Ki Soch is a unique initiative from <strong>Utkarsh Global Foundation</strong> to help citizens resolve 
                  civic, legal, or social issues. Utkarsh acts as the bridge between citizens and the authorities, 
                  ensuring speedy resolution of issues.
                </p>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                      <Users className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Citizen-Centric</h3>
                    <p className="text-gray-600 text-sm">We put citizens first, ensuring their voices are heard and issues addressed.</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                      <CheckCircle className="w-6 h-6 text-green-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Results-Driven</h3>
                    <p className="text-gray-600 text-sm">Systematic approach ensures effective resolution with proper follow-up.</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                      <Shield className="w-6 h-6 text-purple-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Confidential</h3>
                    <p className="text-gray-600 text-sm">Your information remains completely confidential and secure.</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                      <Heart className="w-6 h-6 text-orange-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Community Focus</h3>
                    <p className="text-gray-600 text-sm">Building stronger communities through collective action and support.</p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Community meeting and civic engagement"
                  className="rounded-2xl shadow-2xl w-full h-96 object-cover"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border border-gray-100">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-gray-900">1000+</p>
                      <p className="text-gray-600 text-sm">Citizens Helped</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Our Process
              </h2>
              <p className="text-xl text-gray-600">
                A systematic 6-step approach to resolve your grievances effectively
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200">
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {index + 1}
                  </div>
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 ml-4">
                    <step.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2">
                      <ChevronRight className="w-8 h-8 text-blue-300" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Issues We Help Resolve
              </h2>
              <p className="text-xl text-gray-600">
                Approach Utkarsh if you need help with any of these areas
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 overflow-hidden">
                  <div className="relative h-48">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className={`absolute top-4 left-4 w-12 h-12 ${service.color} rounded-lg flex items-center justify-center`}>
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-8 rounded-2xl text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-4">Or Any Issue That You Need Help With</h3>
                  <p className="text-blue-100 mb-6">As a citizen or as an individual, we're here to support you</p>
                  <a 
                    href="https://docs.google.com/forms/d/e/1FAIpQLSdOJo273NH8GL5g8LvFtwGXI7MzsqJjLNql1a7GX_vJcd6uGQ/viewform?usp=dialog"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 bg-white text-blue-700 font-bold px-8 py-3 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                  >
                    <FileText className="w-5 h-5" />
                    <span>Submit Your Complaint</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Participation Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
                How Can You Participate?
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-blue-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600 relative">
                  <img 
                    src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600" 
                    alt="Filing complaint online"
                    className="w-full h-full object-cover opacity-80"
                  />
                  <div className="absolute inset-0 bg-blue-600/40"></div>
                  <div className="absolute bottom-4 left-4 w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <FileText className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">File a Complaint</h3>
                  <p className="text-gray-600 mb-6">Use our online form to submit your grievance. Your information will remain confidential.</p>
                  <a 
                    href="https://docs.google.com/forms/d/e/1FAIpQLSdOJo273NH8GL5g8LvFtwGXI7MzsqJjLNql1a7GX_vJcd6uGQ/viewform?usp=dialog"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-blue-600 font-semibold hover:text-blue-800"
                  >
                    <span>Submit Complaint</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
              <div className="bg-green-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gradient-to-br from-green-400 to-green-600 relative">
                  <img 
                    src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600" 
                    alt="Phone consultation"
                    className="w-full h-full object-cover opacity-80"
                  />
                  <div className="absolute inset-0 bg-green-600/40"></div>
                  <div className="absolute bottom-4 left-4 w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Call or Write</h3>
                  <p className="text-gray-600 mb-6">Contact us directly via phone or email if you face any problems and need immediate help.</p>
                  <button 
                    onClick={() => scrollToSection('contact')}
                    className="inline-flex items-center space-x-2 text-green-600 font-semibold hover:text-green-800"
                  >
                    <span>Contact Details</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="bg-purple-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gradient-to-br from-purple-400 to-purple-600 relative">
                  <img 
                    src="https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=600" 
                    alt="Community volunteers"
                    className="w-full h-full object-cover opacity-80"
                  />
                  <div className="absolute inset-0 bg-purple-600/40"></div>
                  <div className="absolute bottom-4 left-4 w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Volunteer</h3>
                  <p className="text-gray-600 mb-6">Join our events as a volunteer and contribute to addressing community issues.</p>
                  <button 
                    onClick={() => scrollToSection('contact')}
                    className="inline-flex items-center space-x-2 text-purple-600 font-semibold hover:text-purple-800"
                  >
                    <span>Get Involved</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
            <div className="relative">
              <div 
                className="bg-gradient-to-r from-gray-900 to-gray-800 text-white p-12 rounded-2xl relative overflow-hidden"
                style={{
                  backgroundImage: `url('https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className="absolute inset-0 bg-gray-900/80"></div>
                <div className="relative z-10 text-center">
                  <h3 className="text-3xl font-bold mb-4">Your Voice Matters!</h3>
                  <p className="text-gray-300 text-lg mb-4">Let it be heard, loud and clear. Utkarsh is here to help.</p>
                  <p className="text-xl font-semibold text-blue-300">Together, we can tackle challenges and create a safe, happy, and better world for all!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=1200')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4">
                Get in Touch
              </h2>
              <p className="text-xl text-blue-100">
                Ready to resolve your grievance? Contact us today!
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 hover:bg-white/15 transition-colors">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Phone</h3>
                <a href="tel:9820047924" className="text-blue-100 hover:text-white text-lg font-medium transition-colors">
                  +91 9820047924
                </a>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 hover:bg-white/15 transition-colors">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Email</h3>
                <a href="mailto:janatakisoch@utkarshglobalfoundation.org" className="text-blue-100 hover:text-white text-lg font-medium break-all transition-colors">
                  janatakisoch@utkarshglobalfoundation.org
                </a>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 hover:bg-white/15 transition-colors">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Address</h3>
                <p className="text-blue-100 leading-relaxed">
                  Corporate office no. 501, 5th floor, Vasudev Chambers, Near Sonapur Signal, 
                  Mulund (W), Mumbai, Maharashtra, 400078.
                </p>
              </div>
            </div>
            <div className="text-center mt-12">
              <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLSdOJo273NH8GL5g8LvFtwGXI7MzsqJjLNql1a7GX_vJcd6uGQ/viewform?usp=dialog"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-3 bg-white text-blue-700 font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-lg"
              >
                <FileText className="w-6 h-6" />
                <span>File Your Complaint Now</span>
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center space-x-3 mb-4 md:mb-0">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                  <Users className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Janata Ki Soch</h3>
                  <p className="text-gray-400 text-sm">By Utkarsh Global Foundation</p>
                </div>
              </div>
              <div className="text-center md:text-right">
                <p className="text-gray-400 mb-2">© 2024 Utkarsh Global Foundation. All rights reserved.</p>
                <p className="text-gray-500 text-sm">Empowering citizens, resolving grievances, building communities.</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;