'use strict';

var React = require('react-native');
var PhotoTabItemView = require('./photoTabItemView');
var {
  StyleSheet,
  Navigator,
  Text,
  View,
} = React;


var PhotoTabNav = React.createClass({
  render: function() {
    return (
      <Navigator
          initialRoute={{name: 'PhotoTabItemView', component: PhotoTabItemView}}
          configureScene={() => {
              return Navigator.SceneConfigs.FloatFromRight;
          }}
          renderScene={(route, navigator) => {
              // count the number of func calls
              console.log(route, navigator);

              if (route.component) {
                  return React.createElement(route.component, { navigator });
              }
          }}
       />
    );
  }
});

module.exports = PhotoTabNav;
