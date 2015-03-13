# Flux

    git checkout ex6

Flux is the uni-directional pattern that manages the flow of data for React.

It consists of three entities:

* Dispatcher
* Store
* Actions

Lets install flux and setup the AppDispatcher

    npm install flux --save

Create a dispatcher folder and AppDispatcher.js

    mkdir dispatcher
    touch dispatcher/AppDispatcher.js

Add this code to the AppDispatcher file:

    var Dispatcher = require('flux').Dispatcher;
    module.exports = new Dispatcher();
