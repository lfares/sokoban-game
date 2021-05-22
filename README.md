# Sokoban Game

This game is part of the Conclusion Project of a Computer Engineering course.

It uses JavaScript, HTML and CSS to create a version of a famous game called Sokoban, where the player needs to push boxs to the goals.

## How to run
Download the code or run the following command:

    git clone https://github.com/lfares/sokoban-game.git

Then, open the _index.html_ file to play or start the web server.

To do that you will need to have Node.js installed. Then, you need to install npm and nodemon:

    npm install
    npm install nodemon

Now, just start the server:

    npm run build

Go to http://localhost:8080 on your browser and start playing!

## Implementation

### Images
The images present on the game are from [Open Game Art](https://opengameart.org/content/sokoban-100-tiles).

### JavaScript Modules
The project uses JavaScript Modules to organize and separate the classes and, to minimize the number of HTTP requests, it counts with **[Webpack](https://webpack.js.org/)**. 

For more information on that, follow [this tutorial](https://www.sitepoint.com/bundle-static-site-webpack/).

### Web Server
A web server was implemented to make it available to access the game without the project downloaded.

More information on [this article](https://www.devmedia.com.br/construindo-um-servidor-web-com-node-js/32023) from DevMedia.