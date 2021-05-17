process.title = 'SokobanWebServer';
var args = process.argv,
    port = args[2] || 8080,
    webServer = require('./server');
webServer.listen(port, function() {
    console.log('Sokoban Server started at port ' + port);
});