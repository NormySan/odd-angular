// Import module dependencies.
import angular from 'angular';

// Import global styles.
import './styles.scss';

// Define the Angular app.
angular.module('app', []).run(function () {
  console.log('Hello world!');
});

// Bootstrap the application.
angular.element(document).ready(function () {
  angular.bootstrap(document, ['app']);
});
