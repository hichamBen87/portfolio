import React, { useState } from 'react';
import { Mail, Github, Linkedin, Phone, Menu, X } from 'lucide-react';
import { contactInfo } from '../data/contact';
import { useActiveSection } from '../hooks/useActiveSection';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPhoneVisible, setIsPhoneVisible] = useState(false);
  const activeSection = useActiveSection();

  const navigation = [
    { name: 'Éducation', href: '#education' },
    { name: 'Compétences', href: '#competences' },
    { name: 'Expériences', href: '#experiences' },
    { name: 'Projets', href: '#projets' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Loisirs', href: '#loisirs' },
  ];

  const socials = [
    { icon: Mail, href: `mailto:${contactInfo.email}`, label: 'Email' },
    { icon: Github, href: contactInfo.github, label: 'GitHub' },
    { icon: Linkedin, href: contactInfo.linkedin, label: 'LinkedIn' },
  ];

  const isActive = (href: string) => {
    return href.slice(1) === activeSection;
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-emerald-50/80 backdrop-blur-sm z-50 border-b border-gray-200">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="text-2xl font-bold text-emerald-600">BH</a>

          {/* Menu de navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`transition-colors ${
                  isActive(item.href)
                    ? 'text-emerald-600 font-semibold'
                    : 'text-gray-600 hover:text-emerald-600'
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Icônes sociales */}
          <div className="hidden md:flex items-center space-x-4">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-emerald-600 transition-colors"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}

            <button
              onClick={() => setIsPhoneVisible(!isPhoneVisible)}
              className="text-gray-600 hover:text-emerald-600 transition-colors"
            >
              <Phone className="w-5 h-5" />
            </button>

            {isPhoneVisible && (
              <div className="flex flex-col space-y-2">
                <a href={`tel:${contactInfo.phone1}`} className="text-emerald-600">
                  {contactInfo.phone1}
                </a>
                <a href={`tel:${contactInfo.phone2}`} className="text-emerald-600">
                  {contactInfo.phone2}
                </a>
              </div>
            )}
          </div>

          {/* Bouton de menu mobile */}
          <button
            className="md:hidden text-gray-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Menu mobile */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`transition-colors ${
                    isActive(item.href)
                      ? 'text-emerald-600 font-semibold'
                      : 'text-gray-600 hover:text-emerald-600'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="flex space-x-4 pt-4">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-emerald-600 transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;