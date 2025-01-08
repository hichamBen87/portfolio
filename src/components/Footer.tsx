import React, { useState } from 'react';
import { ArrowUp, Mail, Github, Linkedin, Phone } from 'lucide-react';
import { contactInfo } from '../data/contact';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // State pour gérer l'affichage des numéros de téléphone
  const [isPhoneVisible, setIsPhoneVisible] = useState(false);

  // Informations de contact (dans contactInfo.js ou contactInfo.tsx)
  const contacts = [
    { icon: Mail, href: `mailto:${contactInfo.email}`, label: 'Email' },
    { icon: Github, href: contactInfo.github, label: 'GitHub' },
    { icon: Linkedin, href: contactInfo.linkedin, label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <button
            onClick={scrollToTop}
            className="bg-indigo-600 p-3 rounded-full hover:bg-indigo-700 transition-colors mb-8"
            aria-label="Retour en haut"
          >
            <ArrowUp className="w-6 h-6" />
          </button>

          {/* Afficher les icônes sociales */}
          <div className="flex space-x-6 mb-8">
            {contacts.map((contact) => (
              <a
                key={contact.label}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-400 transition-colors"
                aria-label={contact.label}
              >
                <contact.icon className="w-6 h-6" />
              </a>
            ))}
          </div>

          {/* Icône de téléphone et numéros */}
          <div>
            <button
              onClick={() => setIsPhoneVisible(!isPhoneVisible)} // Toggle phone numbers visibility
              className="text-gray-600 hover:text-indigo-600 transition-colors"
            >
              <Phone className="w-6 h-6" />
            </button>

            {isPhoneVisible && (
              <div className="mt-3 space-y-2">
                <a href={`tel:${contactInfo.phone1}`} className="text-indigo-600">
                  {contactInfo.phone1}
                </a>
                <a href={`tel:${contactInfo.phone2}`} className="text-indigo-600">
                  {contactInfo.phone2}
                </a>
              </div>
            )}
          </div>

          <p className="text-gray-400 text-center mt-8">
            Portfolio développé par BENJABROU Hicham
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
