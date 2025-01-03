const projects = [
    {
      name: 'E-Commerce Platform',
      description:
        'A full-stack e-commerce website with user authentication, payment integration, and a powerful admin dashboard.',
      techStack: 'React, Node.js, MongoDB, REST API',
      link: '#',
    },
    {
      name: 'Portfolio Website',
      description: 'A personalized and feature-rich portfolio built with Next.js.',
      techStack: 'React, Next.js, Tailwind CSS',
      link: '#',
    },
    {
      name: 'Chat App',
      description:
        'A real-time chat application featuring user authentication and socket-based messaging.',
      techStack: 'React, Firebase, Socket.io',
      link: '#',
    },
  ];
  
  const ProjectsSection = () => (
    <section id="projects" className="py-16 bg-gray-200 dark:bg-gray-800">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-primary mb-6">Projects</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-gray-700 p-6 shadow-lg rounded-lg"
            >
              <h3 className="text-2xl font-semibold mb-2">{project.name}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                {project.description}
              </p>
              <p className="text-xs text-primary font-medium mb-4">
                {project.techStack}
              </p>
              <a
                href={project.link}
                className="text-sm text-primary hover:text-blue-500"
              >
                View More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
  
  export default ProjectsSection;