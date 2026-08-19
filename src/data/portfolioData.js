import profilePhoto from "../assets/images/profile/profile-photo.jpeg";

const portfolioData = {
  fullName: "SAI MUTHU PRASANNA R",
  role: "Full Stack Developer | MERN Stack",
  phone: "+91 7395934796",
  email: "saiprasannaworks@gmail.com",
  linkedin: "https://www.linkedin.com/in/saiprasannaworks/",
  github: "https://github.com/saiprasannaworks-droid",
  location: "Chennai, India",
  resumeUrl:
    "https://drive.google.com/file/d/1Mb2ypD4re0UA9onp0wBFqt3Y5V01DEzy/view?usp=sharing",
  profileImage: profilePhoto,

  heroTagline: "Building scalable web applications with the MERN stack.",

  careerObjective:
    "Motivated MERN Stack Developer with hands-on experience in building scalable web applications and responsive user interfaces. Skilled in implementing dynamic features, authentication, and real-time functionalities using modern technologies. Seeking an opportunity to contribute to impactful projects while continuously enhancing technical expertise.",

  highlights: [
    { label: "Core Stack", value: "React • Node • Express • MongoDB" },
    { label: "Focus", value: "Full Stack Apps & Product UI" },
    { label: "Base", value: "Chennai, India" },
    { label: "Training", value: "GUVI ZEN Class • MERN" },
  ],

  capabilityCards: [
    {
      title: "Frontend Development",
      description:
        "Building responsive interfaces with React, Tailwind CSS, and component-driven architecture focused on visual clarity and interaction flow.",
    },
    {
      title: "Backend Engineering",
      description:
        "Developing application logic with Node.js and Express, including REST APIs, JWT authentication, role-based access, and real-time features with Socket.IO.",
    },
    {
      title: "Database & Storage",
      description:
        "Working with MongoDB and MySQL for structured persistence, along with Cloudinary for media uploads and Firebase for auth services.",
    },
    {
      title: "DevOps & Deployment",
      description:
        "Deploying applications with Netlify and Render, managing code with Git & GitHub, and documenting APIs with Swagger.",
    },
  ],
};

export default portfolioData;