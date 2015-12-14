'use strict';

var React = require('react-native');
var PhotoTabItemView0 = require('./photoTabItemView0');
var {
  StyleSheet,
  TabBarIOS,
  Text,
  View,
} = React;


var PhotoTabItemView = React.createClass({
  statics: {
    title: '<PhotoTabItemView>'
  },

  displayName: 'PhotoTabItemView',

  getInitialState: function() {
    return {
    };
  },

  onPress() {
      this.props.navigator.push({
          name: 'PhotoTabItemView0',
          component: PhotoTabItemView0
      });
  },

  render: function() {
    return (
      <View style={{flexDirection: 'row', height: 100, padding: 20}}>
        <View style={{backgroundColor: 'blue', flex: 0.5}} />
        <View style={{backgroundColor: 'red', flex: 0.5}} />
        <Text onPress={this.onPress.bind(this)}>
          Go to Next Item!
        </Text>
      </View>
    );
  },

});

var styles = StyleSheet.create({
  tabContent: {
    flex: 1,
    alignItems: 'center',
  },
  tabText: {
    color: 'white',
    margin: 50,
  },
});

module.exports = PhotoTabItemView;
