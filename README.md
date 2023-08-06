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

Vous avez le choix entre deux backends : le backend principal (Project-10-Bank-API) et un backend optionnel (p13_bank_app_backend). Suivez les étapes en fonction de votre choix.

**Backend Principal - Project-10-Bank-API**

- Le backend principal est fourni avec l'exercice.
- Pour l'utiliser, assurez-vous que la variable d'environnement `REACT_APP_USE_MOCK_DATA` est définie à `true` dans le fichier `.env` de ce projet frontend.

- Clonez le backend principal :

  ```bash
  git clone https://github.com/OpenClassrooms-Student-Center/Project-10-Bank-API
  ```

#### Backend Optionnel - p13_bank_app_backend

- Si vous souhaitez une expérience enrichie avec des données réelles des comptes et des transactions, optez pour ce backend.
- Pour l'utiliser, assurez-vous que la variable d'environnement `REACT_APP_USE_MOCK_DATA` est définie à `false` dans le fichier `.env` de ce projet frontend.

- Clonez le backend optionnel :

  ```bash
  git clone https://github.com/5sensprod/p13_bank_app_backend
  ```
