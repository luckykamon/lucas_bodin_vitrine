import React, {} from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Resume from "./Components/Resume";
import Contact from "./Components/Contact";

const App = () => {

    const resumeData = {
        "main": {
            "name": "Lucas BODIN",
            "description": "Développeur fullstack actuellement en alternance spécialisé en Intelligence Artificielle",
            "image": "profilepic.jpg",
            "bio": "Curieux par l'univers de l'informatique, j'ai vité été passionné et orienté vers ce domaine. Diplomé d'une licence de mathématiques fondamentales/recherche à l'Université de Rennes 1 et d'une licence d'informatique à Epitech, je poursuis actuellement mes études à Epitech en alternance à CGI. ",
            "contactmessage": "Pour toute demande, merci de m'envoyer un mail ou de me contacter directement par téléphone",
            "email": "lucas.bodin.contacter@gmail.com",
            "phone": "+33 6 59 35 01 42",
            "github": "https://github.com/luckykamon",
            "linkedin": "https://www.linkedin.com/in/lucasbodin/",
            "website": "lucasbodin.com",
            "resumedownload": "/pdf/cv_lucas_bodin.pdf",
            "social": [
                {
                    "name": "github",
                    "url": "https://github.com/luckykamon",
                    "className": "fa fa-github"
                },
                {
                    "name": "linkedin",
                    "url": "https://www.linkedin.com/in/lucasbodin/",
                    "className": "fa fa-linkedin"
                }
            ]
        },
        "resume": {
            "skillmessage": "Expérience dans les compétences",
            "work": [
                {
                    "company": "CGI",
                    "title": "Consultant développeur junior ",
                    "years": "Septembre 2021 - Maintenant",
                    "description": "Prédiction/Tendances de prix sur des produits pour Leboncoin Redirection de canaux vers l’agent le mieux adapté pour AG2R la mondiale Amélioration de performance de l’analyse de données pour Thales"
                },
                {
                    "company": "Purecontrol",
                    "title": "Développeur web fullstack",
                    "years": "Janvier 2021 - Août 2021",
                    "description": "Création de garde-fou sécurisant des stations d’épurations / piscines Amélioration de l’espace client préexistant, ajout de nouvelles fonctionnalités tel que l’ajout de documents, création de tutoriel..."
                }
            ],
            "education": [
                {
                    "school": "Epitech",
                    "degree": "Master",
                    "graduated": "Août 2023",
                    "description": "Master en informatique spécialisé en Intelligence Artificielle"
                },
                {
                    "school": "Epitech",
                    "degree": "Licence",
                    "graduated": "Août 2021",
                    "description": "Licence en informatique spécialisé dans le développement de Web App"
                },
                {
                    "school": "Université de Rennes 1",
                    "degree": "Licence",
                    "graduated": "Août 2020",
                    "description": "Licence de mathématique pour la recherche"
                }
            ],
            "projects": [
                {
                    "name": "Recommandation de produits de supermarchés",
                    "technologies": "Scikit-Learn - Python",
                    "years": "2022",
                    "description": "A partir d'un dataset de produits et de tickets de caisse. Analyse et présentation de données notables. Création d'un modèle de recommandation de produits pour le supermarché."
                },
                {
                    "name": "Cooming soon...",
                    "technologies": "Python C C++ SQL PHP Java C# CSS HTML JavaScript Scala OCaml SageMath",
                    "years": "2017 - 2023",
                    "description": "Plusieurs projets personnels et professionnels à venir..."
                }
            ],
            "skills": [
                {
                    "name": "Python",
                    "icon": "faPython"
                },
                {
                    "name": "ReactJs"
                },
                {
                    "name": "CSS"
                },
                {
                    "name": "PHP"
                },
                {
                    "name": "JAVA"
                }
            ]
        }
    }

    return (
        <div className="App">
            <Header data={resumeData.main}/>
            <Resume data={resumeData.resume}/>
            <Contact data={resumeData.main}/>
            <Footer data={resumeData.main}/>
        </div>
    );

}

export default App;
