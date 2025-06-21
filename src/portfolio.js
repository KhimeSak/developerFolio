const portfolio = {
    "greeting": {
        "username": "Sakina Khimeche",
        "title": "Bonjour, je suis Sakina",
        "subTitle": "Une passionnée de Data. Je travaille dans les domaines de la Data Science, l'ingénierie des données, et l'analyse avancée.",
        "resumeLink": "https://example.com/mon-cv.pdf",
        "display": true
    },
    "skillsSection": {
        "title": "Ce que je fais",
        "subTitle": "DATA ENGINEERING | DATA ANALYSIS | DATA SCIENCE",
        "skills": [
            "⚡ Transformation de données massives via Python et PySpark",
            "⚡ Création de dashboards interactifs avec Power BI & Tableau",
            "⚡ Machine Learning pour la prédiction et la classification",
        ],
        "softwareSkills": [
            {"skillName": "Python", "fontAwesomeClassname": "logos:python"},
            {"skillName": "Power BI", "fontAwesomeClassname": "logos:powerbi"},
            {"skillName": "SQL", "fontAwesomeClassname": "logos:mysql"},
            {"skillName": "Snowflake", "fontAwesomeClassname": "logos:snowflake"},
        ],
        "display": true
    },
    "educationInfo": {
        "display": true,
        "schools": [
            {
                "schoolName": "IA School Paris",
                "logo": "iaschool.png",
                "subHeader": "Master en Intelligence Artificielle et Data Science",
                "duration": "2023 - 2025",
                "desc": "Spécialisation en data engineering, cloud et machine learning.",
                "descBullets": ["Projet de data masking", "Snowflake, Python, Spark"]
            }
        ]
    },
    "experience": {
        "display": true,
        "sections": [
            {
                "title": "Expérience professionnelle",
                "experiences": [
                    {
                        "role": "Data Analyste / Alternance",
                        "company": "Generali Assurance",
                        "companylogo": "generali.png",
                        "date": "Sept 2023 – Maintenant",
                        "desc": "Création de dashboards et gestion des rôles d'accès avec Snowflake",
                        "descBullets": [
                            "Projet de data masking conforme RGPD",
                            "Analyse de données clients pour décisions d'indemnisation"
                        ]
                    }
                ]
            }
        ]
    },
    "projects": {
        "display": true,
        "projects": [
            {
                "image": "masking.png",
                "projectName": "Data Masking Platform",
                "projectDesc": "Application de masquage de données sensibles avec Snowflake & Streamlit",
                "footerLink": [{"name": "Lien GitHub", "url": "https://github.com/KhimeSak/data-masking"}]
            },
            {
                "image": "pl300.png",
                "projectName": "Certification PL-300",
                "projectDesc": "Projet de préparation à la certification Power BI Analyst (PL-300)",
                "footerLink": []
            }
        ]
    },
    "contactInfo": {
        "display": true,
        "email": "sakina.khimeche@example.com",
        "phone": "+33 6 00 00 00 00",
        "linkedin": "https://www.linkedin.com/in/khimesak/",
        "github": "https://github.com/KhimeSak"
    }
}

import json
from pathlib import Path

# Écriture du JSON formaté dans un fichier
output_path = Path("/mnt/data/portfolio.js")
with open(output_path, "w", encoding="utf-8") as f:
    f.write("export const portfolioData = ")
    json.dump(portfolio, f, indent=2, ensure_ascii=false)
    f.write(";")
output_path.name

export default portfolio;
