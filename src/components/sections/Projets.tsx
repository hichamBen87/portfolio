import React from 'react';
import { projets } from '../../data/portfolioData';
import { File } from 'lucide-react';  // Icône générique de fichier

const Projets = () => {
  return (
    <section id="projets" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Projets</h2>
        <div className="max-w-3xl mx-auto">
          {projets.map((projet) => (
            <div key={projet.id} className="mb-8 bg-white rounded-lg shadow-md overflow-hidden">
              {/* Image en haut, prenant la largeur entière de la section */}
              <img
                src={projet.image}
                alt={projet.titre}
                className="w-full h-64 object-cover" 
                /* Image qui prend toute la largeur et a une hauteur fixée */
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">{projet.titre}</h3>
                <p className="text-gray-600 mb-4">{projet.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {projet.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Lien vers la vidéo sur Google Drive */}
                <a
                  href={projet.lien}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-indigo-600 hover:text-indigo-700"
                >
                  <File className="w-5 h-5 mr-2" />
                  Lien vidéo vers mon Drive
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projets;
