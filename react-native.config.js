// create a folder in your root directory /assets/fonts/ 
// paste the custom fonts you want used in that folder
// create a file in the root called react-native.config.js
// Then add the following:

module.exports = {
    project: {
      ios: {},
      android: {},
    },
    assets: ['./assets/fonts'],
  };
  
