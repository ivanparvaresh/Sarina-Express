var sarina = require("sarina");
var sarinaExpress = require("./../express.js");

var app = sarina.create({});
app.module(sarinaExpress);

app.exec("run", ["sarina.express.app"], function (expressapp) {
    return {
        run: function (resolve, reject) {
            expressapp.listen(3000);
        }
    }

});

app.start();