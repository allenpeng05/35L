
# BruinClassPals

Welcome to **BruinClassPals**, a social class planning app. **BruinClassPals** is a **MERN stack** full stack web application that connects UCLA students with eachother when finding/planning classes they want to take. 

## Features

When using the application, you must first **sign in** or **register**. Then, you will be redirected to the home page, where you can **add/remove classes**, **view your current class plan**, and **view your friends class plans**. On the Profile page, you will be able to **edit your profile**. On the Social page, you can **add friends** and **see recommended friends** based on mutual classes. 

## Technologies

* JavaScript
* Node.js
* Tailwind CSS
* React.js / Next.js
* Express.js
* MongoDB
* TailwindCSS

## Running Locally
Run the following commands to start our app.

```
npm install

cd frontend
npm run dev

cd ../backend
npm install bcrypt
node app.js
```

The app should be running on port 3000, assuming no other processes are currently bound to that port.


If any errors occur in regards to bcrypt, run:

```
rm -rf node_modules package-lock.json

npm install bcrypt --build-from-source
```

## Authors

*BruinClassPals* was made as a project for **COM SCI 35L** taught by Professor Paul Eggert in Winter 2025. **Made by:** Joshua Lipman, Joshua Du, Rohan Agarwhal, Allen Peng, & Neil Johnson. 
