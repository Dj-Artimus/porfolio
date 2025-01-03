const CallToAction = () => (
  <section className="py-16 bg-primary text-white text-center">
    <div className="container mx-auto">
      <h2 className="text-4xl font-bold mb-6">
        Want to bring your ideas to life?
      </h2>
      <p className="mb-8 text-lg">
        I specialize in crafting modern, responsive, and scalable applications.
        Feel free to explore my projects or get in touch to collaborate!
      </p>
      <div className="flex justify-center gap-6">
        <a
          href="#projects"
          className="px-6 py-3 bg-white text-primary rounded shadow-lg hover:bg-gray-100 transition"
        >
          View My Projects
        </a>
        <a
          href="#contact"
          className="px-6 py-3 border border-white rounded hover:bg-white hover:text-primary transition"
        >
          Contact Me
        </a>
      </div>
    </div>
  </section>
);

export default CallToAction;
