import React from 'react';
import { motion } from 'framer-motion';

const workExperiences = [
  {
    id: 1,
    title: 'Software Engineer',
    company: 'Tech Innovations',
    duration: '2022 - Present',
    description: 'Developing innovative software solutions and collaborating with cross-functional teams to deliver high-quality projects.'
  },
  {
    id: 2,
    title: 'Frontend Developer',
    company: 'Creative Agency',
    duration: '2020 - 2022',
    description: 'Worked on various web applications, focusing on user experience and innovative designs.'
  },
  {
    id: 3,
    title: 'Intern',
    company: 'Startups United',
    duration: '2019 - 2020',
    description: 'Gained experience in software development and participated in agile methodologies.'
  }
];

const WorkExperience = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Work Experience</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {workExperiences.map((experience) => (
            <motion.div 
              key={experience.id}
              className="p-6 border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-semibold mb-2">{experience.title}</h3>
              <p className="text-gray-700 mb-1">{experience.company}</p>
              <p className="text-gray-500 mb-4">{experience.duration}</p>
              <p className="text-gray-600">{experience.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;