# Blog_Backend_Nestjs

Ce projet est une application backend développée avec NestJS, PostgreSQL et Prisma. Il offre des fonctionnalités d'authentification via JWT et permet la gestion des utilisateurs, des articles et des commentaires. L'application comprend des autorisations différenciées pour les utilisateurs réguliers et les administrateurs.

## Table of Contents
- [Aperçu](#Aperçu)
- [Installation](#Installation)
- [Configuration](#Configuration)
- [Utilisation](#Utilisation)


## Aperçu
Ce projet propose une API backend construite avec NestJS, un framework Node.js moderne. Il utilise PostgreSQL comme base de données pour stocker les données de l'application et Prisma comme ORM pour interagir avec la base de données de manière efficace. L'authentification est gérée à l'aide de JSON Web Tokens (JWT) pour assurer la sécurité des endpoints. L'application comprend des fonctionnalités de gestion des utilisateurs, des articles et des commentaires, avec des autorisations spécifiques pour chaque type d'utilisateur. En outre, il offre une architecture modulaire et évolutive pour faciliter la maintenance et le développement futurs.

## Installation
1. Assurez-vous d'avoir Node.js et npm installés sur votre machine.
2. Clonez ce dépôt sur votre machine locale.
3. Exécutez `npm install` pour installer les dépendances.

### Configuration
Créez un fichier `.env` à la racine du projet avec les variables d'environnement suivantes :
1. DATABASE_URL=URL_DE_VOTRE_BASE_DE_DONNÉES
2. JWT_SECRET=VOTRE_SECRET_JWT

### Utilisation
1. Assurez-vous que votre base de données PostgreSQL est en cours d'exécution.
2. Exécutez `npm run start:dev` pour démarrer l'application en mode développement.
3. L'API sera disponible à l'adresse http://localhost:3000.




