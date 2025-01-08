import React from 'react';
import { loisirs } from '../../data/portfolioData';
import { Trophy, Plane, Mountain } from 'lucide-react';

const iconMap = {
  Trophy: Trophy,
  Plane: Plane,
  Mountain: Mountain,
};

const Loisirs = () => {
  return (
    <section id="loisirs" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Loisirs</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {loisirs.map((loisir) => {
            const IconComponent = iconMap[loisir.icon as keyof typeof iconMap];
            return (
              <div key={loisir.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img
                    src={loisir.image}
                    alt={loisir.nom}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-emerald-100 rounded-full mr-3">
                      <IconComponent className="w-6 h-6 text-emerald-600" />
                    </div>
                    <h3 className="text-xl font-semibold">{loisir.nom}</h3>
                  </div>
                  <p className="text-gray-600">{loisir.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Loisirs;