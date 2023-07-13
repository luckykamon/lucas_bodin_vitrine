import React, {} from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Resume from "./Components/Resume";
import Contact from "./Components/Contact";

const App = () => {

    const resumeData = {
        "main": {
            "name": "Lucas BODIN",
            "description": "Déployant l'innovation en tant que DevOps, je maîtrise également l'art du développement fullstack.",
            "image": "profilepic.jpg",
            "email": "lucas.bodin.contacter@gmail.com",
            "phone": "+33 6 59 35 01 42",
            "github": "https://github.com/luckykamon",
            "linkedin": "https://www.linkedin.com/in/lucasbodin/",
            "website": "lucasbodin.com",
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
                    "title": "Consultant développeur",
                    "years": "Septembre 2021 - Maintenant",
                    "description": "Mise en place d'un SVI pour Clarins: Il s'agit de gérer le routage d'un client appelant par téléphone/mail/réseaux sociaux/sms/chatbot vers un agent téléphonique en passant par des questions auprès de l'appelant. Puis de la configuration des API avec les différents logiciel de notre agent téléphonique afin de récupérer, d'afficher les données et lancer des processus d'actions (retour d'un produit qui génère mail de livraison avec Mondial Relay par exemple). Amélioration de l'interface agent pour AG2R la Mondiale: Ajout de fonctionnalités afin d'améliorer l'environnement pour les agents tel que de nouvelles API avec différents logiciels externes, ajout de statistiques de performances pour les superviseurs et correction de bugs. Exécutions de scripts python sur les données clients afin de les mettre à jour. POC pour CFE (Caisse des Français de l'Etranger) pour intégrer un nouveau système d'appel: L'objectif était de vérifier si Microsoft Dynamics 365 customer service pouvait répondre au cahier des charges d'un logiciel de téléphonie en fin de licence déjà existant. 1 ans: Mise en place d'un système de gestions de contrats pour les clients de Thales: Développements de fonctionnalités en javascript et C#. Mise en place du déploiement automatique du code sur les différents environnements, de tests automatiques et vérification de la qualité de code."
                },
                {
                    "company": "Eiko",
                    "title": "Développeur bénévole",
                    "years": "Juin 2022 - Septembre 2022",
                    "description": "Conversion automatique du code pour le navigateur Safari prêt a être publié avec Xcode avec Jenkins. Déploiement automatique de l'API de l'extension sur le serveur. Participation de la mise en place de l'architecture de la seconde application pour le front. Déploiement automatique du front de cette seconde application."
                },
                {
                    "company": "Purecontrol",
                    "title": "Développeur web fullstack",
                    "years": "Janvier 2021 - Août 2021",
                    "description": "Amélioration de l’espace client préexistant, ajout de nouvelles fonctionnalités tel que l’ajout de documents, création de tutoriel. Création de garde-fou sécurisant des stations d’épurations / piscines en utilisant de l'IA avec tensorflow."
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
                    "name": "Défi Qr Code",
                    "technologies": "NodeJs - Express - React",
                    "years": "2021-2023",
                    "description": "Course d'orientation qui s'est déroulée dans le parc des Gayeulles. Les participants doivent scanner des qr codes afin de gagner de trouver des indices. L'objectif est de scanner tout les qr code et de découvrir le mot caché.",
                    "url": "https://courir-a-plusieurs.site"
                },
                {
                    "name": "Génération de Qr Code",
                    "technologies": "Spring Boot - Java",
                    "years": "2022-2023",
                    "description": "APIs qui renvoie une image de qr code à partir d'un texte. Interface web pour générer des qr codes à partir d'un texte. Option permettant de personnaliser le qr code (couleur et ajout de logo)",
                    "url": "https://generateqrcode.lucasbodin.com"
                },
                {
                    "name": "Recommandation de produits de supermarchés",
                    "technologies": "Scikit-Learn - Python",
                    "years": "2022",
                    "description": "Analyse et présentation de données notables à partir d'un dataset de produits et de tickets de caisse. Création d'un modèle de recommandation de produits pour le supermarché"
                },
                {
                    "name": "Cooming soon...",
                    "technologies": "Python C C++ SQL PHP Java C# CSS HTML JavaScript Scala OCaml SageMath",
                    "years": "2017 - 2023",
                    "description": "Plusieurs projets personnels et professionnels à venir..."
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
