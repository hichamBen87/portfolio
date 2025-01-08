import React from 'react';
import { certifications } from '../../data/portfolioData';
import { Award, ExternalLink } from 'lucide-react';

const CertificationCard = ({ certification }: { certification: any }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex flex-col space-y-4">
        {/* Titre et informations */}
        <div className="flex items-start space-x-3">
          <Award className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-xl font-semibold text-gray-900">{certification.titre}</h3>
            <p className="text-indigo-600">{certification.organisme}</p>
            <p className="text-gray-600">{certification.date}</p>
          </div>
        </div>

        {/* Image du certificat */}
        <div className="w-full h-64 relative overflow-hidden rounded-lg bg-gray-50">
          <img
            src={certification.image}
            alt={certification.titre}
            className="w-full h-full object-contain"
          />
        </div>

        {/* Lien Coursera */}
        <a
          href={certification.courseraLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 transition-colors"
        >
          Voir le certificat sur Coursera
          <ExternalLink className="w-4 h-4 ml-2" />
        </a>
      </div>
    </div>
  );
};

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Certifications</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {certifications.map((cert) => (
            <CertificationCard key={cert.id} certification={cert} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;