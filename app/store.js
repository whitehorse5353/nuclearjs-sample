var Store = require('nuclear-js').Store;
var toImmutable = require('nuclear-js').toImmutable;

module.exports = Store({
    getInitialState: function () {
        return toImmutable({})
    },
    initialize: function () {
        this.on('ADD_COUNT', addedCount);
        this.on('GET_COUNT', collectCounter);
    }
});

function addedCount(state, pl) {
    if (!state.hasIn(['count'])) {
        return state.setIn(['count'], pl.value);
    }
    return state.updateIn(['count'], function (e) {
        return e + 1;
    });
}

function collectCounter(state, pl){
    console.log('--------------',state.get('count'))
    if(state.get('count')){
        return state.get('count');
    }
    return state;
}