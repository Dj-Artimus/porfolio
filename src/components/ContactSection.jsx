const ContactSection = () => (
    <section id="contact" className="py-16 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-8 text-center">
        <h2 className="text-4xl font-bold text-primary mb-6">Contact Me</h2>
        <p className="mb-8 text-lg">
          Interested in collaborating or want to discuss an idea? Feel free to
          reach out to me!
        </p>
        <a
          href="mailto:mark@example.com"
          className="px-6 py-3 bg-primary text-white rounded shadow hover:bg-opacity-90 transition"
        >
          Send an Email
        </a>
      </div>
    </section>
  );
  
  export default ContactSection;