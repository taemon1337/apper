var app = require('../server');

var datasource = app.dataSources.mongodb;
var automodels = ['User', 'Applet'];

automodels.forEach(function (modelName) {
  datasource.automigrate(modelName, function (err) {
    if (err) throw err;
    datasource.disconnect();
  });
});

// datasource.isActual(automodels, function (err, actual) {
//   if (!actual) {
//     datasource.autoupdate(automodels, function (err, result) {
//       if (err) throw err;
//       datasource.disconnect();
//     });
//   }
// });
