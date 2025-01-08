import React from 'react';
import { experiences } from '../../data/portfolioData';
import { Briefcase } from 'lucide-react';

const ExperienceCard = ({ experience }: { experience: typeof experiences[0] }) => (
  <div className="mb-8 bg-white rounded-lg shadow-md p-6">
    <div className="flex items-start">
      <img
        src={experience.image}
        alt={experience.entreprise}
        className="w-16 h-16 rounded-lg object-cover mr-4"
      />
      <div>
        <div className="flex items-center mb-2">
          <span className="px-2 py-1 text-xs font-semibold text-indigo-600 bg-indigo-100 rounded-full mr-2">
            {experience.type}
          </span>
        </div>
        <h3 className="text-xl font-semibold text-gray-900">{experience.poste}</h3>
        <p className="text-indigo-600 font-medium">{experience.entreprise}</p>
        <p className="text-gray-600">{experience.lieu} | {experience.periode}</p>
        <ul className="mt-4 space-y-2">
          {experience.realisations.map((realisation, index) => (
            <li key={index} className="flex items-start">
              <span className="h-2 w-2 mt-2 bg-indigo-600 rounded-full mr-2" />
              <span className="text-gray-600">{realisation}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

const Experiences = () => {
  return (
    <section id="experiences" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Expériences</h2>
        <div className="max-w-3xl mx-auto">
          {experiences.map((experience) => (
            <ExperienceCard key={experience.id} experience={experience} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiences;