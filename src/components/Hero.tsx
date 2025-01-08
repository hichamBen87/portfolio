import React from 'react';
import { Mail, Github, Linkedin, Phone, MapPin } from 'lucide-react';
import { ContactButton } from './ui/ContactButton';
import { InternshipAlert } from './ui/InternshipAlert';
import { contactInfo } from '../data/contact';

const Hero = () => {
  return (
    <section className="pt-32 pb-16 bg-gradient-to-b from-indigo-50 to-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <InternshipAlert />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              BENJABROU Hicham
            </h1>
            <p className="text-gray-600 mb-8 leading-relaxed animate-fade-in">
              <span className="font-bold text-gray-900">Ingénieur en Génie Informatique</span> en fin de formation, avec une expertise en développement Full Stack (JavaScript, Java, Angular, React, Flutter) et un intérêt marqué pour le Machine Learning. Solide expérience en configuration et sécurisation de réseaux (VPN, pare-feux), acquise lors de stages pratiques. Compétences complémentaires en DevOps (Docker, Kubernetes, CI/CD), Cloud et maîtrise des méthodes Agile (SCRUM).
            </p>

            <div className="space-y-3">
              <ContactButton 
                href={`mailto:${contactInfo.email}`}
                Icon={Mail}
                label={contactInfo.email}
              />
              <ContactButton 
                href={contactInfo.github}
                Icon={Github}
                label="github.com/hichamBen87"
              />
              <ContactButton 
                href={contactInfo.linkedin}
                Icon={Linkedin}
                label="linkedin.com/in/hicham-benjabrou"
              />
              <div className="flex space-x-6">
                <ContactButton 
                  href={`tel:${contactInfo.phone1}`}
                  Icon={Phone}
                  label={contactInfo.phone1}
                />
                <ContactButton 
                  href={`tel:${contactInfo.phone2}`}
                  Icon={Phone}
                  label={contactInfo.phone2}
                />
              </div>
              <ContactButton 
                href={`https://www.google.com/maps?q=${contactInfo.coordinates}`}
                Icon={MapPin}
                label={contactInfo.address}
              />
            </div>
          </div>
          <div className="md:w-1/2">
            <img
              src="/images/profile.PNG"
              alt="Benjabrou Hicham"
              className="rounded-full w-64 h-64 md:w-80 md:h-80 object-cover mx-auto shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;