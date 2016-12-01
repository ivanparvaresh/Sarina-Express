# Sarina.Express

Sarina Express is plugin to integrate Express web framework with sarina application framework.  
Sarina.Express created by [JavadParvaresh](https://github.com/javadparvaresh).

Sarina.Express has build on top of [Express](http://expressjs.com/).

## Table of contents
- [Quick Start](#quick-start)
- [Bugs and feature requests](#bugs-and-feature-requests)

## Quick start

Several quick start options are available:
- Clone the repo: `git clone https://github.com/javadparvaresh/Sarina-Express.git`
- Install with [npm](https://www.npmjs.com): `npm install sarina.express`


## Bugs and feature requests

Have a bug or a feature request? [please open a new issue](https://github.com/javadparvaresh/Sarina-Express/issues/new).

## The Basics
```javascript

var sarina=require("sarina");
var sarinaexpress=require("sarinaexpress");

// create a sarina app by passing configuration
var app=sarina.create({});
app.module(sarinaexpress);

// you can access express library by this service
app.factory("Sample",["sarina.express"],function(express){
    // now you have express in your service
    var app=express();
});

// or you can access express app by this service
app.factory("Sample",["sarina.express.app"],function(expressapp){
    
});

// start server easily by using server service
app.exec("run",["sarina.express.server"],function(server){
    return {
        run:function(resolve,reject){
            server.start(3000).then(resolve).catch(reject);
        }
    }
}); 

// finally we need to start app
app.start();

```
