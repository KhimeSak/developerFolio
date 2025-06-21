
// Splash Screen
const splashScreen = {
  enabled: true,
  animation: null,
  duration: 2000
};

// Greeting Section
const greeting = {
  username: "Sakina Khimeche",
  title: "Bonjour, je suis Sakina",
  subTitle: "Passionnée par la donnée sous toutes ses formes, je combine les compétences d'une Data Analyst, Data Engineer et Data Scientist. Mon objectif : transformer les données en décisions et automatiser les processus pour plus de performance et de valeur.",
  resumeLink: "",
  displayGreeting: true
};

// Social Media Links
const socialMediaLinks = {
  github: "",
  linkedin: "https://www.linkedin.com/in/sakina-khimeche/",
  gmail: "khimechesakina@gmail.com",
  display: true
};

// Skills Section
const skillsSection = {
  title: "Compétences",
  subTitle: "De l'analyse descriptive à la modélisation prédictive, en passant par la mise en production de pipelines de données.",
  skills: [
    "🔍 Data Analyst : Analyse exploratoire, visualisation (Power BI), storytelling, reporting automatisé",
    "🧪 Data Scientist : Préparation des données, apprentissage supervisé et non supervisé, deep learning avec Python",
    "⚙️ Data Engineer : Conception de pipelines ETL avec PySpark et Airflow, gestion de la qualité et du stockage dans Snowflake"
  ],
  tools: [
    { skillName: "Power BI", fontAwesomeClassname: "fas fa-chart-bar" },
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

// Education Section
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

// Work Experience
const workExperiences = {
  display: true,
  experience: [
    {
      role: "Data Engineer & Analyst (Alternance)",
      company: "Generali Vie",
      date: "Sep 2024 – Présent",
      desc: "Mise en œuvre d’un projet de Data Masking, visualisation avancée, qualité des données et gouvernance.",
      descBullets: [
        "Règles de masquage automatisées avec Streamlit et Snowflake",
        "Création de dashboards Power BI",
        "Export de métadonnées Zeenea vers Snowflake",
        "Benchmark des formations Data/IA internes"
      ]
    },
    {
      role: "Stagiaire Data Analyst",
      company: "Parapharmacie",
      date: "Avril 2021 – Juin 2021",
      desc: "Développement d’une application de suivi de stock avec alertes intelligentes"
    },
    {
      role: "Stagiaire Data",
      company: "Sonatrach / TRC",
      date: "Janv 2020 – Juin 2020",
      desc: "Analyse de consommation et gestion d'application carburant"
    }
  ]
};

// Certifications
const achievementSection = {
  title: "Certifications",
  subtitle: "Certifications orientées Data Engineering, BI et Science",
  achievementsCards: [
    {
      title: "PL-300: Power BI Data Analyst Associate",
      subtitle: "Analyse de données et création de rapports avec Power BI",
      footerLink: [
        {
          name: "Voir",
          url: "https://learn.microsoft.com/fr-fr/certifications/power-bi-data-analyst-associate/"
        }
      ]
    },
    {
      title: "SnowPro Core Certification",
      subtitle: "Fondamentaux de Snowflake pour les ingénieurs data",
      footerLink: [
        {
          name: "Voir",
          url: "https://www.snowflake.com/en/certification/snowpro-core-certification/"
        }
      ]
    },
    {
      title: "DP-203: Azure Data Engineer Associate",
      subtitle: "Conception et implémentation de solutions data sur Azure",
      footerLink: [
        {
          name: "Voir",
          url: "https://learn.microsoft.com/fr-fr/certifications/azure-data-engineer/"
        }
      ]
    },
    {
      title: "Google Data Analytics Certificate",
      subtitle: "Fondamentaux de l’analyse de données (Coursera)"
    }
  ],
  display: true
};

module.exports = {
  splashScreen,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  workExperiences,
  achievementSection
};
