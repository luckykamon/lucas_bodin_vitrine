import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Resume from "./Components/Resume";
import Contact from "./Components/Contact";

const App = () => {

    const resumeData = {
        "main": {
            "name": "Lucas BODIN",
            "description": "DevOps Developer.",
            "image": "profilepic.jpg",
            "email": "lucas.bodin.contacter@gmail.com",
            "contactmessage": "Pour toute demande de collaboration professionnelle, merci de m'envoyer un mail.",
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
            "projects": [
                {
                    "name": "Swim Workout",
                    "technologies": "Swift - WatchOs - HealthKit",
                    "years": "2023-2024",
                    "description": "Application IOS/WatchOs permettant de lire ses entrainements de natation sur Apple Watch -> Done. Création et customisation de ses entrainements -> Done. Logique d'affichage différente des applications concurrentes fait par un nageur pour des nageurs pour une réelle utilisation en piscine -> Done. Enregistrement de l'activitée dans HealthKit -> Done. Lecture des données de sa séance fourni via les capteurs -> Almost Done. Génération d'entrainements de natations en fonction de la distance et des équipements à dispositions -> In Progress. Alternative à des applications avec abonnement régulier abusif par manque de concurrence. En développement..",
                    "url": ""
                },
                {
                    "name": "Défi Qr Code",
                    "technologies": "NodeJs - Express - React",
                    "years": "2021-2024",
                    "description": "Les participants doivent scanner des qr codes afin de gagner de trouver des indices. L'objectif est de scanner tout les qr code et de découvrir le mot caché. 3 éditions de course d'orientation se sont déroulée dans le parc des Gayeulles à l'occasion de l'anniversaire du groupe facebook Courir à Plusieurs. Refonte de l'UI/UX lorsque Swim Workout aboutira",
                    "url": "https://defiqrcode.lucasbodin.com/"
                },
                {
                    "name": "Génération de Qr Code",
                    "technologies": "Spring Boot - Java",
                    "years": "2022-2023",
                    "description": "APIs qui renvoie une image de qr code à partir d'un texte. Interface web pour générer des qr codes à partir d'un texte. Option permettant de personnaliser le qr code (couleur et ajout de logo)",
                    "url": "https://generateqrcode.lucasbodin.com"
                },
                {
                    "name": "Projets Epitech",
                    "technologies": "Full Stack",
                    "years": "2020 - 2023",
                    "description": "Recommandation de produits de supermarchés via modèle d'IA. Cooming soon.."
                }
            ],
            "work": [
                {
                    "company": "Pichet",
                    "title": "DevOps Developer",
                    "years": "Novembre 2023 - Maintenant",
                    "description": "Industrialisation des CI/CD des différents projets (Analyse, Build, Deploiement) via les templates Gitlab. Analyse du code (Sonarqube, CVE, Linter). Build automatique des images Docker sur Gitlab. Déploiement sur différents environnements via des templates Helm pour Kubernetes. Montée de version des infrastructures/applications (Php-Fpm, Memcached, Varnish, Solr, Redis, Symfony, Angular). Montée de version ou migration de BDD selon les besoins des projets. Gestion de l'infrastructure Terraform sur AWS. Migration du provider de cartes/auto-completions de Google Maps à Woosmap. Migration de provider de solution d'import de biens immobiliers de PIM à Ubiflow. Ajout de divers outils/configurations sur les postes linux des équipes de développement interne à Pichet via Ansible."
                },
                {
                    "company": "Agap2",
                    "title": "DevOps Developer",
                    "years": "Septembre 2023 - Août 2024",
                    "description": "Après une année passée chez Agap2, j'ai finalement été embauché par mon client Pichet en tant que Devops Developper."
                },
                {
                    "company": "CGI",
                    "title": "Consultant développeur",
                    "years": "Septembre 2021 - Août 2023",
                    "description": "Mise en place d'un SVI pour Clarins: Il s'agit de gérer le routage d'un client appelant par téléphone/mail/réseaux sociaux/sms/chatbot vers un agent téléphonique en passant par des questions auprès de l'appelant. Puis de la configuration des API avec les différents logiciel de notre agent téléphonique afin de récupérer, d'afficher les données et lancer des processus d'actions (retour d'un produit qui génère mail de livraison avec Mondial Relay par exemple). Amélioration de l'interface agent pour AG2R la Mondiale: Ajout de fonctionnalités afin d'améliorer l'environnement pour les agents tel que de nouvelles API avec différents logiciels externes, ajout de statistiques de performances pour les superviseurs et correction de bugs. Exécutions de scripts python sur les données clients afin de les mettre à jour. POC pour CFE (Caisse des Français de l'Etranger) pour intégrer un nouveau système d'appel: L'objectif était de vérifier si Microsoft Dynamics 365 customer service pouvait répondre au cahier des charges d'un logiciel de téléphonie en fin de licence déjà existant. Mise en place d'un système de gestions de contrats pour les clients de Thales: Développements de fonctionnalités en javascript et C#. Mise en place du déploiement automatique du code sur les différents environnements, de tests automatiques et vérification de la qualité de code"
                },
                {
                    "company": "Eiko",
                    "title": "Développeur bénévole",
                    "years": "Juin 2022 - Septembre 2022",
                    "description": "Conversion automatique du code pour le navigateur Safari prêt a être publié avec Xcode avec Jenkins. Déploiement automatique de l'API de l'extension sur le serveur. Participation de la mise en place de l'architecture de la seconde application pour le front. Déploiement automatique du front de cette seconde application"
                },
                {
                    "company": "Purecontrol",
                    "title": "Développeur Full Stack",
                    "years": "Janvier 2021 - Août 2021",
                    "description": "Amélioration de l’espace client préexistant, ajout de nouvelles fonctionnalités tel que l’ajout de documents, création de tutoriel. Création de garde-fou sécurisant des stations d’épurations / piscines en utilisant de l'IA avec tensorflow"
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
            ]
        }
    };

    return (
        <div className="App">
            <Header data={resumeData.main}/> <Resume data={resumeData.resume}/> <Contact data={resumeData.main}/>
            <Footer top data={resumeData.main}/>

        </div>
    );

};

export default App;
