import Link from "next/link";

const ContactSection = () => (
    <section id="contact" className="py-16 bg-white dark:bg-black">
      <div className="container mx-auto px-8 text-center">
        <h2 className="text-4xl font-bold text-primary mb-6">Contact Me</h2>
        <p className="mb-8 text-lg">
          Interested in collaborating or want to discuss an idea? Feel free to
          reach out to me!
        </p>
        <Link
          href="mailto:pratik.djArtimus@gmail.com"
          className="px-6 py-3 inline-block text-black dark:text-white rounded-xl shadow hover:text-blue-600 dark:hover:text-blue-400 hover:scale-110 transition border border-gray-800 dark:border-gray-300"
        >
          Send an Email
        </Link>
      </div>
    </section>
  );
  
  export default ContactSection;