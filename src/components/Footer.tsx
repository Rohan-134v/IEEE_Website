import React from 'react';
import {Mail, MapPin, Linkedin, Instagram, ExternalLink, Globe } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Events', href: '#events' },
    { name: 'Membership', href: '#members' },
    { name: 'News', href: '#news' },
  ];

  const resources = [
    { name: 'IEEE.org', href: 'https://www.ieee.org', external: true },
    { name: 'IEEE Xplore', href: 'https://ieeexplore.ieee.org', external: true },
    { name: 'IEEE Spectrum', href: 'https://spectrum.ieee.org', external: true },
    { name: 'Student Activities', href: 'https://www.ieee.org/membership/students/', external: true },
    { name: 'Career Resources', href: 'https://careers.ieee.org', external: true }
  ];

  const socialLinks = [
    { icon: <Linkedin className="w-5 h-5" />, href: 'https://www.linkedin.com/company/ieee-pesuecc-sb', name: 'LinkedIn' },
    { icon: <Instagram className="w-5 h-5" />, href: 'https://www.instagram.com/ieee_pesuecc_sb?igsh=bmNkcWhseXVnd2Qx', name: 'Instagram' },
    { icon: <Mail className="w-5 h-5" />, href: 'mailto:ieee@pesu.edu', name: 'Email' }
  ];

  return (
    <footer className="bg-gray-900 dark:bg-black text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <img src="./src/assets/Logo.png" alt="IEEE Logo" className="w-12 h-12 object-contain" />
              <div>
                <h3 className="text-xl font-bold">IEEE Student Branch PESU</h3>
                <p className="text-sm text-gray-400">Engineering the future with us</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              Join us in shaping the future of technology and innovation.
              At Pes University, we empower students to connect, learn, and lead in the world of engineering.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="bg-gray-800 dark:bg-gray-700 p-2 rounded-lg hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 transition-all duration-200"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-blue-400 dark:hover:text-blue-300 transition-colors duration-200 flex items-center"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-4">IEEE Resources</h4>
            <ul className="space-y-3">
              {resources.map((resource, index) => (
                <li key={index}>
                  <a 
                    href={resource.href}
                    className="text-gray-300 hover:text-blue-400 dark:hover:text-blue-300 transition-colors duration-200 flex items-center"
                    target={resource.external ? "_blank" : undefined}
                    rel={resource.external ? "noopener noreferrer" : undefined}
                  >
                    {resource.name}
                    {resource.external && <ExternalLink className="w-3 h-3 ml-1" />}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <Mail className="w-5 h-5 text-gray-400 mr-3 mt-0.5" />
                <div>
                  <p className="text-gray-300">ieee.pesu.edu</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-gray-400 mr-3 mt-0.5" />
                <div>
                  <p className="text-gray-300">
                    Engineering Block, PES University<br />
                    Electronic City, Bangalore - 560100
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Globe className="w-5 h-5 text-gray-400 mr-3 mt-0.5" />
                <div>
                  <a href="https://www.ieee.org" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
                    www.ieee.org
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 dark:border-gray-700 pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 IEEE Student Branch. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <a href="https://www.ieee.org/security-privacy.html" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 dark:hover:text-blue-300 transition-colors duration-200">Privacy Policy</a>
              <a href="https://www.ieee.org/about/corporate/governance/p9-26.html" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 dark:hover:text-blue-300 transition-colors duration-200">Code of Ethics</a>
              <a href="https://www.ieee.org/about/help/site-terms-conditions.html" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 dark:hover:text-blue-300 transition-colors duration-200">Terms of Use</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;