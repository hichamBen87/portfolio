import React from 'react';
import { education } from '../../data/portfolioData';
import { Clock } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Éducation</h2>
        <div className="max-w-3xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-emerald-200" />

          {education.map((item) => (
            <div key={item.id} className="relative mb-12 ml-8 pl-12">
              {/* Timeline dot */}
              <div className="absolute -left-8 w-4 h-4 rounded-full bg-emerald-500 border-4 border-emerald-100" />
              
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <img
                    src={item.image}
                    alt={item.ecole}
                    className="w-20 h-20 rounded-lg object-cover shadow-md"
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold text-gray-900">{item.diplome}</h3>
                      <span className="text-sm font-medium text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
                        {item.annee}
                      </span>
                    </div>
                    <p className="text-emerald-600 font-medium mb-1">{item.ecole}</p>
                    <p className="text-gray-600 mb-2">{item.lieu}</p>
                    
                    {item.annee === "En cours" ? (
                      <div className="flex items-center gap-3 mt-2 bg-gradient-to-r from-emerald-50 to-teal-50 p-3 rounded-lg border border-emerald-100">
                        <div className="p-2 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full shadow-lg">
                          <Clock className="w-8 h-8 text-white animate-[spin_4s_ease-in-out_infinite]" strokeWidth={2.5} />
                        </div>
                        <span className="font-medium text-lg bg-gradient-to-r from-emerald-600 to-teal-600 text-transparent bg-clip-text">
                          Formation en cours
                        </span>
                      </div>
                    ) : (
                      <p className="text-gray-600">{item.description}</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;