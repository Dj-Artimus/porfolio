import { motion } from "framer-motion";

const skills = [
  { name: "React / Next.js", level: 90 },
  { name: "JavaScript", level: 85 },
  { name: "Node.js", level: 80 },
  { name: "SQL / Database Design", level: 75 },
  { name: "CSS / Tailwind", level: 70 },
];

const SkillBar = ({ name, level }) => (
  <div className="mb-6">
    <div className="flex justify-between mb-1">
      <span className="font-medium">{name}</span>
      <span>{level}%</span>
    </div>
    <div className="w-full h-4 bg-gray-300 dark:bg-gray-700 rounded">
      <motion.div
        className="h-full bg-primary rounded"
        style={{ width: `${level}%` }}
        initial={{ width: 0 }}
        animate={{ width: `${level}%` }}
        transition={{ duration: 1 }}
      />
    </div>
  </div>
);

const SkillSectionEnhanced = () => (
  <section id="skills" className="py-16 px-8 bg-gray-100 dark:bg-gray-900">
    <div className="container mx-auto">
      <h2 className="text-4xl font-bold text-primary mb-8">My Skillset</h2>
      <div>
        {skills.map((skill, idx) => (
          <SkillBar key={idx} name={skill.name} level={skill.level} />
        ))}
      </div>
    </div>
  </section>
);

export default SkillSectionEnhanced;