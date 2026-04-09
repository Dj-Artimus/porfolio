# Work Experience

## Maedric  
**Full Project Experience (9+ Months)**  
- **Role**: Product Manager  
- **Responsibilities**:  
  - Managed the entire product lifecycle from concept to launch.  
  - Collaborated with cross-functional teams for e-commerce solutions.  
  - Worked on both frontend and backend to ensure seamless user experience.  

## Heat Scheme  
**Full Work Experience (6+ Months)**  
- **Role**: Project Coordinator  
- **Responsibilities**:  
  - Developed tariff structures and payment integration systems.  
  - Provided customer service support and streamlined service delivery.  

## Immutag  
**Blockchain Project (6+ Months)**  
- **Role**: Lead Developer  
- **Responsibilities**:  
  - Oversaw design iterations to enhance user interaction.  
  - Led multi-page development for a comprehensive application.  

## Unnamed Business Website Project  
**3+ Months**  
- **Role**: Web Designer  
- **Responsibilities**:  
  - Converted client designs into responsive web pages.  
  - Handled client communication and ensured satisfaction with deliverables.  

const workExperiences = [
  {
    company: 'Maedric',
    duration: 'Full Project Experience (9+ months)',
    details: 'Involved in product management, e-commerce lifecycle, frontend/backend work.'
  },
  {
    company: 'Heat Scheme',
    duration: 'Full Work Experience (6+ months)',
    details: 'Worked with tariffs, payment integration, services.'
  },
  {
    company: 'Immutag',
    duration: 'Blockchain project (6+ months)',
    details: 'Focused on design iterations and multi-page development.'
  },
  {
    company: 'Unnamed Business Website Project',
    duration: '3+ months',
    details: 'Handled design conversion and client handling.'
  }
];

// Render dynamically
workExperiences.map(experience => (
  <div className='experience'>
    <h3>{experience.company}</h3>
    <p>{experience.duration}</p>
    <p>{experience.details}</p>
  </div>
));