'use strict';

var React = require('react-native');
var {
  StyleSheet,
  TabBarIOS,
  Text,
  View,
} = React;


var PhotoTabItemView0 = React.createClass({
  statics: {
    title: '<PhotoTabItemView0>'
  },

  displayName: 'PhotoTabItemView',

  getInitialState: function() {
    return {
    };
  },
  onPress() {
      this.props.navigator.pop();
  },
  render: function() {
    return (
      <View style={styles.content}>
          <View style={{width:120,  padding: 20, backgroundColor: 'green'}}/>
          <Text
              onPress={this.onPress()}
              style={styles.button}>
            Go Back!
          </Text>
      </View>
    );
  },

});

var styles = StyleSheet.create({
  content: {
    flex: 1,
    top : 50,
    alignItems: 'center',
  },
  tabText: {
    color: 'white',
    margin: 50,
  },
  button: {
    textAlign: 'center',
    color: 'black',
    marginBottom: 7,
    borderRadius: 2
  }
});

module.exports = PhotoTabItemView0;
