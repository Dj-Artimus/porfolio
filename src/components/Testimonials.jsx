const testimonials = [
    {
      name: "Jane Doe",
      position: "UI/UX Designer",
      feedback:
        "Mark is an exceptional developer with a great eye for detail. His ability to solve problems quickly is truly remarkable.",
    },
    {
      name: "John Smith",
      position: "Tech Lead",
      feedback:
        "Collaborating with Mark was a fantastic experience. He’s highly skilled and brings innovative solutions to the table.",
    },
    {
      name: "Emily Johnson",
      position: "Product Manager",
      feedback:
        "Mark’s commitment to delivering high-quality work is outstanding. He’s a reliable and professional developer.",
    },
  ];
  
  const Testimonials = () => (
    <section className="py-16 bg-gray-100 dark:bg-gray-900 text-center">
      <h2 className="text-4xl font-bold text-primary dark:text-white mb-8">
        What People Say
      </h2>
      <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-gray-800 p-6 rounded shadow-lg"
          >
            <p className="text-gray-600 dark:text-gray-400 italic">
              "{testimonial.feedback}"
            </p>
            <h3 className="mt-4 font-bold text-primary dark:text-white">
              {testimonial.name}
            </h3>
            <p className="text-sm text-gray-500">{testimonial.position}</p>
          </div>
        ))}
      </div>
    </section>
  );
  
  export default Testimonials;