var Reactor = require('./reactor');

module.exports = {
    addCounter: function () {
        Reactor.dispatch('ADD_COUNT', {value: 1});
    }
};