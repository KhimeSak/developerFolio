import generaliLogo from "./assets/images/generali.png";

export const illustration = {
  animated: true
};

export const greeting = {
  username: "Sakina Khimeche",
  title: "Bonjour, je suis Sakina",
  subTitle:
    "Future diplômée en Master Data, avec une expérience concrète en alternance. Je combine Data Analyst, Data Engineer et Data Scientist pour exploiter, transformer et valoriser les données.",
  display: true
};

export const socialMediaLinks = {
  github: "https://github.com/KhimeSak",
  linkedin: "https://www.linkedin.com/in/khimesak/",
  gmail: "khimechesakina@gmail.com",
  display: true
};

export const skillsSection = {
  title: "Compétences",
  subTitle: "Analyse, ingénierie et science des données réunies dans une approche complète.",
  skills: [
    "🔍 Analyse de données avec Python et Power BI",
    "⚙️ Conception de pipelines ETL (Airflow, Snowflake)",
    "🧠 Machine Learning et Deep Learning avec Scikit-learn et TensorFlow"
  ],
  display: true
};

export const techStack = {
  viewSkillBars: true,
  experience: [
    { Stack: "Data Analysis", progressPercentage: "85%" },
    { Stack: "Data Engineering", progressPercentage: "75%" },
    { Stack: "Data Science", progressPercentage: "70%" }
  ],
  display: true
};

export const workExperiences = {
  display: true,
  experience: [
    {
      role: "Data Engineer & Analyst",
      company: "Generali",
      companylogo: generaliLogo, // ✅ ici c’est une variable
      date: "2024 - Présent",
      desc: "Mise en place de pipelines de masquage, dashboards Power BI, export Snowflake",
      descBullets: [
        "Data Masking avec Streamlit",
        "Export Zeenea vers Snowflake"
      ]
    }
  ]
};

export const contactInfo = {
  title: "Contact 📞",
  subtitle: "Disponible pour toute opportunité ou collaboration",
  number: "+33 6 00 00 00 00",
  email_address: "khimechesakina@gmail.com",
  display: true
};

export default {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  techStack,
  workExperiences,
  contactInfo
};
