var express=require("express");

module.exports = function (sarina) {
    sarina.factory("sarina.express",function () {
        return express();
    });
}