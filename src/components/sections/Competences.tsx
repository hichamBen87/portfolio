import React from 'react';
import { competences } from '../../data/portfolioData';
import { Code, Server, Brain } from 'lucide-react';
import { SkillBar } from '../ui/SkillBar';
import { SectionTitle } from '../ui/SectionTitle';
import { IconWrapper } from '../ui/IconWrapper';

const SkillSection = ({ title, skills, Icon }: { title: string; skills: Array<{ nom: string; niveau: number }>; Icon: any }) => (
  <div className="bg-white rounded-lg shadow-md p-6">
    <div className="flex items-center mb-6">
      <IconWrapper Icon={Icon} />
      <h3 className="text-xl font-semibold">{title}</h3>
    </div>
    {skills.map((skill) => (
      <SkillBar key={skill.nom} {...skill} />
    ))}
  </div>
);

const Competences = () => {
  return (
    <section id="competences" className="py-20">
      <div className="container mx-auto px-4">
        <SectionTitle title="Compétences" />
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <SkillSection title="Frontend" skills={competences.frontend} Icon={Code} />
          <SkillSection title="Backend" skills={competences.backend} Icon={Server} />
          <SkillSection title="Intelligence Artificielle" skills={competences.ai} Icon={Brain} />
        </div>
      </div>
    </section>
  );
};

export default Competences;