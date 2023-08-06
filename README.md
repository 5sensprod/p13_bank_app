# Argent Bank Application

**Argent Bank** est une application web développée en collaboration avec **Remede Agency**. Elle permet aux clients d'authentifier, de gérer leurs comptes et de réaliser des transactions bancaires. Le projet est décomposé en deux phases :

1. Authentification des utilisateurs.
2. Modélisation des endpoints pour les transactions bancaires.

Pour tester l'authentification, veuillez utiliser l'un des comptes d'utilisateurs suivants :

- **Tony Stark**

  - Email: `tony@stark.com`
  - Password: `password123`

- **Steve Rogers**
  - Email: `steve@rogers.com`
  - Password: `password456`

Consultez ci-dessous pour plus de détails techniques et instructions d'installation.

## Prérequis

Pour faire fonctionner l'application **Argent Bank**, assurez-vous d'avoir les technologies suivantes installées :

- **Node.js v12**
- **MongoDB Community Server**

Avant de continuer, vérifiez que vous disposez des bonnes versions. Vous pouvez le faire en exécutant les commandes suivantes dans votre terminal :

```bash
# Vérifier la version de Node.js
node --version

# Vérifier la version de MongoDB
mongo --version
```

## 🚀 Installation

### Préparation

1. **Clonage du dépôt**

   - Commencez par cloner le dépôt frontend sur votre machine locale :

     ```bash
     git clone https://github.com/5sensprod/p13_bank_app
     ```

2. **Installation des dépendances**

   - Naviguez vers le répertoire du projet depuis votre terminal et installez les dépendances :

     ```bash
     cd p13_bank_app
     npm install
     ```

### Configuration du Backend

Vous avez le choix entre deux backends : le backend principal **(Project-10-Bank-API)** et un backend optionnel **(p13_bank_app_backend)**. Suivez les étapes en fonction de votre choix.

**Backend Principal - Project-10-Bank-API**

- Le backend principal est fourni avec l'exercice.
- Pour l'utiliser, assurez-vous que la variable d'environnement `REACT_APP_USE_MOCK_DATA` est définie à `true` dans le fichier `.env` de ce projet frontend.

- Vous pouvez accéder au dépôt du backend principal en visitant le lien suivant :
  [Project-10-Bank-API](https://github.com/OpenClassrooms-Student-Center/Project-10-Bank-API)

#### Backend Optionnel - p13_bank_app_backend

- Si vous souhaitez une expérience enrichie avec des données réelles des comptes et des transactions, optez pour ce backend.
- Pour l'utiliser, assurez-vous que la variable d'environnement `REACT_APP_USE_MOCK_DATA` est définie à `false` dans le fichier `.env` de ce projet frontend.

- Clonez le backend optionnel :

  ```bash
  git clone https://github.com/5sensprod/p13_bank_app_backend
  ```

## 🚀 Lancement de l'application frontend

Une fois que vous avez correctement configuré et lancé le serveur backend de votre choix, procédez comme suit pour démarrer l'application frontend :

1. Dans votre terminal, naviguez vers le répertoire du projet frontend (si ce n'est pas déjà fait) :

   ```bash
   cd p13_bank_app
   npm start
   ```

## 📚 Documentation

Pour accéder à la documentation complète de l'API, incluant les endpoints additionnels relatifs aux transactions, veuillez suivre ces étapes :

1. Rendez-vous sur [ce lien](https://github.com/5sensprod/p13_bank_app/blob/main/swagger.yaml) pour accéder au fichier `swagger.yaml`.
2. Copiez l'intégralité du contenu du fichier YAML.
3. Ouvrez le [Swagger Editor](https://editor.swagger.io/).
4. Supprimez tout le contenu existant dans le volet de modification sur la gauche.
5. Collez le contenu que vous avez copié depuis le fichier YAML dans le volet de modification.

Le Swagger Editor affichera alors la documentation complète de l'API incluant les endpoints additionnels.

**Note :** Si vous utilisez le backend optionnel **p13_bank_app_backend**, la documentation finale Swagger est également accessible directement à cette adresse : [http://localhost:3001/api-docs/](http://localhost:3001/api-docs/).
