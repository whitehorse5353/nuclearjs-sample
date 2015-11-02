var React = require('react');
var Reactor = require('./reactor');
var Actions = require('./actions');
var Store = require('./store');

Reactor.registerStores({
    'counter': Store
});

module.exports = React.createClass({
    mixins: [Reactor.ReactMixin],
    getDataBindings: function () {
        return {
            count: ['counter', 'count']
        }
    },
    incrementCount: function () {
        Actions.addCounter();
    },
    render: function () {
        return (
            <div>i am compoentn <input type="button" onClick={this.incrementCount} value="+"/>{this.state.count}</div>)
    }
});