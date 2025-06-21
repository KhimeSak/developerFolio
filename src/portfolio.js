
const splashScreen = {
  enabled: true,
  animation: null,
  duration: 2000
};

const greeting = {
  username: "Sakina Khimeche",
  title: "Bonjour, je suis Sakina",
  subTitle:
    "Future diplômée en Master Data, avec une expérience concrète en alternance. Je combine les compétences d’une Data Analyst, Data Engineer et Data Scientist pour exploiter, transformer et valoriser les données.",
  resumeLink: "",
  displayGreeting: true
};

const socialMediaLinks = {
  github: "",
  linkedin: "https://www.linkedin.com/in/sakina-khimeche/",
  gmail: "khimechesakina@gmail.com",
  display: true
};

const skillsSection = {
  title: "Compétences",
  subTitle: "Analyse, ingénierie et science des données réunies dans une approche complète.",
  skills: [
    "🔍 Analyse : tableaux de bord, storytelling, analyse statistique avancée",
    "🧪 Science : machine learning, NLP, deep learning avec Python",
    "⚙️ Ingénierie : pipelines ETL avec Spark, Airflow, Snowflake"
  ],
  tools: [
    { skillName: "Power BI" },
    { skillName: "Python" },
    { skillName: "Pandas" },
    { skillName: "Scikit-learn" },
    { skillName: "TensorFlow" },
    { skillName: "SQL" },
    { skillName: "Streamlit" },
    { skillName: "Airflow" },
    { skillName: "Snowflake" },
    { skillName: "MongoDB" },
    { skillName: "Jupyter Notebook" },
    { skillName: "Anova" },
    { skillName: "Statistiques inférentielles" }
  ],
  display: true
};

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "IA School",
      subHeader: "Mastère Chef de projet en Intelligence Artificielle – Data Science",
      duration: "2023 - 2025"
    },
    {
      schoolName: "Université de Rouen",
      subHeader: "Licence 3 Informatique",
      duration: "2021 - 2023"
    },
    {
      schoolName: "Université de Béjaïa",
      subHeader: "Maitrise en Génie Logiciel + Licence Système d'information",
      duration: "2017 - 2021"
    }
  ]
};

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Data Engineer & Analyst (Alternance)",
      company: "Generali Vie",
      date: "Sep 2024 – Présent",
      desc: "Projet de Data Masking, suivi qualité, dashboards, gouvernance des accès.",
      descBullets: [
        "Masquage intelligent automatisé (Snowflake + Streamlit)",
        "Dashboards Power BI sur la qualité et les habilitations",
        "Export de métadonnées Zeenea vers Snowflake",
        "Benchmark des formations internes Data & IA"
      ]
    },
    {
      role: "Stagiaire Data Analyst",
      company: "Parapharmacie",
      date: "Avril 2021 – Juin 2021",
      desc: "Application de gestion de stock et alertes produits"
    },
    {
      role: "Stagiaire Data",
      company: "Sonatrach / TRC",
      date: "Janv 2020 – Juin 2020",
      desc: "Analyse et développement d’un système de traçabilité du carburant"
    }
  ]
};

const achievementSection = {
  title: "Certifications",
  subtitle: "Certifications obtenues et en préparation dans le domaine de la data",
  achievementsCards: [
    {
      title: "PL-300: Power BI Data Analyst Associate",
      subtitle: "Certification Microsoft Power BI",
      footerLink: [
        {
          name: "Voir",
          url: "https://learn.microsoft.com/fr-fr/certifications/power-bi-data-analyst-associate/"
        }
      ]
    },
    {
      title: "SnowPro Core Certification",
      subtitle: "Certification officielle Snowflake",
      footerLink: [
        {
          name: "Voir",
          url: "https://www.snowflake.com/en/certification/snowpro-core-certification/"
        }
      ]
    },
    {
      title: "DP-203: Azure Data Engineer Associate",
      subtitle: "Data Engineering sur Azure",
      footerLink: [
        {
          name: "Voir",
          url: "https://learn.microsoft.com/fr-fr/certifications/azure-data-engineer/"
        }
      ]
    }
  ],
  display: true
};

const openSource = { showGithubProfile: false, display: false };
const bigProjects = { title: "", subtitle: "", projects: [], display: false };
const blogSection = { title: "", subtitle: "", blogs: [], display: false };
const talkSection = { title: "", subtitle: "", talks: [], display: false };
const podcastSection = { title: "", subtitle: "", podcast: [], display: false };
const contactInfo = {
  title: "Contact",
  subtitle: "Disponible pour discuter d’opportunités professionnelles",
  number: "",
  email_address: "khimechesakina@gmail.com"
};
const twitterDetails = { userName: "", display: false };
const isHireable = true;

module.exports = {
  splashScreen,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  workExperiences,
  achievementSection,
  openSource,
  bigProjects,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
