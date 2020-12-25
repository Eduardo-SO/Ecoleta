<div align="center">
  <img src=".github/ecoleta.svg" />
</div>

<br />

# 📚 Table of contents
- <a href="#-layout">Layout</a>
- <a href="#-about-the-project">About the project</a>
- <a href="#-features">Features</a>
- <a href="#-technologies-used">Technologies used</a>
  - <a href="#web">Web</a>
  - <a href="#mobile">Mobile</a>
  - <a href="#server">Server</a>
- <a href="#-running-the-application">Running the application</a>
  - <a href="#pre-requisites">Pre-requisites</a>
  - <a href="#downloading">Downloading</a>
  - <a href="#adjustments">Adjustments</a>
  - <a href="#running-the-server">Running the server</a>
  - <a href="#running-the-front-end-(web)">Running the front-end (Web)</a>
  - <a href="#running-the-front-end-(mobile)">Running the front-end (Mobile)</a>
- <a href="#-author">Author</a>
- <a href="#-license">License</a>

# 🎨 Layout
<div align="center">
  <h2>Web</h2> 
  <img src=".github/ecoleta.gif" />
</div>

<div align="center">
  <h2>Mobile</h2> 
  <img src=".github/eco-mobile1.jpg" width="300px" />
  <img src=".github/eco-mobile2.jpg" width="300px" />
</div>


# 💡 About the project
**Ecoleta** is an application that connects companies or entities that collect organic or inorganic waste to people who need to dispose of this waste.

This is a project developed during the first **[Next Level Week](https://nextlevelweek.com/)**, carried out by **[Rocketseat](https://rocketseat.com.br/)**.

<div align="right">
  <a href="#-table-of-contents">Back to top</a>
</div>

# ⚙ Features
Companies or entities can register on the web platform by sending:

- An image of the collection point
- Name of the entity, email and whatsapp
- Address, so that it can appear on the map
- In addition to selecting one or more collection items:
  - Lamps
  - Batteries
  - Papers and cardboard
  - Electronic waste
  - Organic waste
  - Kitchen oil

Users have access to the mobile application, where they can:
- Browse the map to see the registered institutions
- Contact the entity via E-mail or WhatsApp

<div align="right">
  <a href="#-table-of-contents">Back to top</a>
</div>

# 🛠 Technologies used
This project was developed using the following technologies:

## Web
- TypeScript
- React.js
- Axios
- Leaflet
- React Router DOM
- React Dropzone
- React Icons

## Mobile
- TypeScript
- Axios
- Expo
- Expo Mail Composer
- Expo Google Fonts
- Expo Constants
- Expo Location
- React Native Maps
- React Navigation
- React Native SVG

## Server
- TypeScript
- Node.js
- Express
- Knex
- Celebrate
- Joi
- Multer
- CORS
- ts-node
- SQLite3

<div align="right">
  <a href="#-table-of-contents">Back to top</a>
</div>

# 🚀 Running the application

This project is divided into three parts:

- **Server** (backend folder)
- **Web** (web folder)
- **Mobile** (mobile folder)

💡 Both Web and Mobile need the Server to be running to work.

<div align="right">
  <a href="#-table-of-contents">Back to top</a>
</div>

## Pre-requisites

- **[Node.js](https://nodejs.org/en/download/)**

    *Install the LTS version.*

    Required to run JS / TS code on your machine.

- **[Yarn](https://classic.yarnpkg.com/pt-BR/docs/install/#windows-stable)**

    Node.js package manager.

    Used to install the libraries and frameworks used in the application.

    *You can also use NPM, which is installed on your computer when you install Node.js*

- **[Git](https://git-scm.com/downloads)**

    Contains several resources for versioning the code.

    It can also be used to download the application code on your local machine.

<div align="right">
  <a href="#-table-of-contents">Back to top</a>
</div>

## Downloading

Download the application on your machine with the following command on the terminal:

```bash
git clone https://github.com/Eduardo-SO/Ecoleta.git

# or if you have an SSH key configured on github run the command below

git clone git@github.com:Eduardo-SO/Ecoleta.git
```

Once this is done, a folder containing the application code will be downloaded

- Access it:

  ```bash
  cd Ecoleta
  ```

<div align="right">
  <a href="#-table-of-contents">Back to top</a>
</div>

## Adjustments
Before we continue, make sure to change the application's IP to your local machine's IP

You can change them at:
- `backend\src\controllers\ItemsController.ts`
- `backend\src\controllers\PointsController.ts`
- `mobile\src\services\api.ts`

<div align="right">
  <a href="#-table-of-contents">Back to top</a>
</div>

## Running the server

- Enter the `backend` folder:

  ```bash
  cd backend
  ```

- Install dependencies with Yarn:

  ```bash
  yarn
  ```

- Run the migrations to create the tables in the database:

  ```bash
  yarn knex:migrate
  ```

- Run the seed to populate the items table:

  ```bash
  yarn knex:seed
  ```

- Start the server:

  ```bash
  yarn dev:server
  ```

With that the server will be started on the port `3333`

**Open a new terminal** and continue following the steps below

<div align="right">
  <a href="#-table-of-contents">Back to top</a>
</div>

## Running the front-end (Web)

- If you are in the `backend` folder, run the following command to enter the `web` folder:

  ```bash
  cd ../web
  ```

- Install dependencies with Yarn:

  ```bash
  yarn
  ```

- Start the web server:

  ```bash
  yarn start
  ```

With that the server will be started in [http://localhost:3000/](http://localhost:3000/)

**Open a new terminal** and continue following the steps below

<div align="right">
  <a href="#-table-of-contents">Back to top</a>
</div>

## Running the front-end (Mobile)

To start the mobile application you will need a phone with the **Expo** application or an emulator

- If you are in the `web` folder, run the following command to enter the `mobile` folder:

  ```bash
  cd ../mobile
  ```

- Install dependencies with Yarn:

  ```bash
  yarn
  ```

- Start the mobile server:

  ```bash
  yarn start
  ```

- Open the expo application on your phone and scan the QR code that will appear

<div align="right">
  <a href="#-table-of-contents">Back to top</a>
</div>

# 👨‍💻 Author

Made with 💜 by [Eduardo Souza de Oliveira](https://github.com/Eduardo-SO)

[![Linkedin Badge](https://img.shields.io/badge/-Eduardo%20Souza%20de%20Oliveira-0a66c2?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/eduardo-s-242652103/)](https://www.linkedin.com/in/eduardo-s-242652103/) 
[![Gmail Badge](https://img.shields.io/badge/-eduardo.sool07@gmail.com-ea4335?style=flat-square&logo=Gmail&logoColor=white&link=mailto:eduardo.sool07@gmail.com)](mailto:eduardo.sool07@gmail.com)

<div align="right">
  <a href="#-table-of-contents">Back to top</a>
</div>

# 📜 License

This project is under the license MIT.

<div align="right">
  <a href="#-table-of-contents">Back to top</a>
</div>