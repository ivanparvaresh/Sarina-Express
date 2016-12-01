var express = require("express");
var pug=require("pug");

module.exports = function (sarina) {

    // express default configuration
    sarina.factory("sarina.express", function () {
        return express;
    });
    sarina.factory("sarina.express.app", ["sarina.express"], function (express) {
        return express();
    });
    sarina.factory("sarina.express.server",["sarina.express.app"],function(app){
        return {
            start:function(port){
                return new Promise(function(resolve,reject){
                    app.listen(80,function(){
                        resolve();
                    }).on("error",function(err){
                        reject(err);
                    })
                });
            }
        }
    })
}