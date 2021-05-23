# Sokoban Game

This game is part of the Conclusion Project of a Computer Engineering course.

It uses JavaScript, HTML and CSS to create a version of a famous game called Sokoban, where the player needs to push boxs to the goals.

## How to run
Download the code or run the following command:

    git clone https://github.com/lfares/sokoban-game.git

Then, open the _index.html_ file to play or start the web server.

To do that you will need to have Node.js installed. Then, you need to install npm:

    npm install

Now, build and start the server:

    npm run build
    npm start 

Go to http://localhost:3000/sokoban on your browser and start playing!

## Implementation

### Images
The images present on the game are from [Open Game Art](https://opengameart.org/content/sokoban-100-tiles).

### JavaScript Modules
The project uses JavaScript Modules to organize and separate the classes and, to minimize the number of HTTP requests, it counts with **[Webpack](https://webpack.js.org/)**. 

For more information on that, follow [this tutorial](https://www.sitepoint.com/bundle-static-site-webpack/).

### DataBase
A database is necessary to store game data for each player (movements, resets, time). For that it was used **[Google Firebase](https://console.firebase.google.com/u/2/?hl=pt-br)**. It is a simple real time database. 

For more information, check these tutorials:
* [Setup Firebase DB](https://firebase.google.com/docs/web/setup)
* [Read and write on DB](https://firebase.google.com/docs/database/web/read-and-write)

### Web Server
A web server was implemented to make it available to access the game without the project downloaded. To do that it was used **[Express](https://expressjs.com/pt-br/)** framework. 

More information check the Express part of [this tutorial](https://closebrace.com/tutorials/2017-03-02/the-dead-simple-step-by-step-guide-for-front-end-developers-to-getting-up-and-running-with-nodejs-express-and-mongodb) from Close Brace.

### Cloud
To make the web server visible outside the local browser, it was used [Azure](https://azure.microsoft.com/pt-br/) cloud system from Microsoft.

There are many ways and systems to deploy the web server on the cloud. For this game it was used the "Web App" resource from [VS Code](https://code.visualstudio.com/). 

More information on how to deploy it on [this tutorial](https://docs.microsoft.com/pt-br/azure/developer/javascript/tutorial/deploy-nodejs-azure-app-service-with-visual-studio-code?tabs=bash).