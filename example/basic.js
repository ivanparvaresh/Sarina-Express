var sarina = require("sarina");
var sarinaExpress = require("./../express.js");

var app = sarina.create({});
app.module(sarinaExpress);

app.exec("run", ["sarina.express.server"], function (server) {
    return {
        run: function (resolve, reject) {
            server.start(3000).then(function(){
                console.log("Started");
                resolve();
            }).catch(reject);
        }
    }

});

app.start();