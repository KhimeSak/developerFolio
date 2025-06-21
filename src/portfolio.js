// illustration
export const illustration = {
  animated: true
};

// greeting
export const greeting = {
  username: "Sakina Khimeche",
  title: "Bonjour, je suis Sakina",
  subTitle:
    "Future diplômée en Master Data, avec une expérience concrète en alternance. Je combine Data Analyst, Data Engineer et Data Scientist pour exploiter, transformer et valoriser les données.",
  //resumeLink: "https://example.com/mon-cv.pdf",
  display: true
};

// social media
export const socialMediaLinks = {
  github: "https://github.com/KhimeSak",
  linkedin: "https://www.linkedin.com/in/khimesak/",
  gmail: "khimechesakina@gmail.com",
  display: true
};

// skills section
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

// tech stack
export const techStack = {
  viewSkillBars: true,
  experience: [
    { Stack: "Data Analysis", progressPercentage: "85%" },
    { Stack: "Data Engineering", progressPercentage: "75%" },
    { Stack: "Data Science", progressPercentage: "70%" }
  ],
  display: true
};

// education
export const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "IA School",
      //logo: require("./assets/images/iaschool.png"),
      subHeader: "Master Intelligence Artificielle - Data Science",
      duration: "2023 - 2025",
      desc: "Spécialisation en ingénierie de la donnée, machine learning et gouvernance",
      descBullets: ["Snowflake, Streamlit, Spark", "Projet Data Masking"]
    }
  ]
};

// work experience
export const workExperiences = {
  display: true,
  experience: [
    {
      role: "Data Engineer & Analyst",
      company: "Generali",
      //companylogo: require("./assets/images/generali.png"),
      date: "2024 - Présent",
      desc: "Mise en place de pipelines de masquage, dashboards Power BI, export Snowflake",
      descBullets: ["Data Masking avec Streamlit", "Export Zeenea vers Snowflake"]
    }
  ]
};

// certifications
export const achievementSection = {
  title: "Certifications",
  subtitle: "Certifications obtenues et en préparation",
  achievementsCards: [
    {
      title: "PL-300: Power BI Data Analyst Associate",
      subtitle: "Certification Microsoft",
      footerLink: [{ name: "Voir", url: "https://learn.microsoft.com/fr-fr/certifications/power-bi-data-analyst-associate/" }]
    },
    {
      title: "SnowPro Core",
      subtitle: "Certification Snowflake",
      footerLink: [{ name: "Voir", url: "https://www.snowflake.com/en/certification/snowpro-core-certification/" }]
    }
  ],
  display: true
};

// contact
export const contactInfo = {
  title: "Contact 📞",
  subtitle: "Disponible pour toute opportunité ou collaboration",
  number: "+33 6 00 00 00 00",
  email_address: "khimechesakina@gmail.com",
  display: true
};
"""

from pathlib import Path
portfolio_path = Path("/mnt/data/portfolio.js")
with open(portfolio_path, "w", encoding="utf-8") as f:
    f.write(portfolio_code)

portfolio_path.name


export default portfolio;
