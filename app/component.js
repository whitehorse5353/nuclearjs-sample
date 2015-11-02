var React = require('react');
var Reactor = require('./reactor');
var Actions = require('./actions');
var Store = require('./store');

Reactor.registerStores({
    'counter': Store
});

module.exports = React.createClass({
    getInitialState: function () {
        return {
            count : Reactor.evaluate(['counter', 'count'])
        }
    },
    incrementCount: function(){
        Actions.addCounter();
        this.setState({count: Reactor.evaluate(['counter', 'count'])})
    },
    render: function () {
        return (<div>i am compoentn <input type="button" onClick={this.incrementCount} value="+" />{this.state.count}</div>)
    }
});