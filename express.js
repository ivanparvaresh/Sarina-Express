var express=require("express");

module.exports = function (sarina) {

    
    sarina.factory("sarina.express",function () {
        return express;
    });
    sarina.factory("sarina.express.app",["sarina.express"],function (express) {
        return express();
    });
    
}