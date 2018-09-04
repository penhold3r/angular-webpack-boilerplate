import angular from 'angular';

import "angular-route";
import routerConfig from '../router/routes.config';

import MainController from './controllers/MainController';
import NavBar from './controllers/NavBar';

const App = angular.module('App', ['ngRoute']);

App.config(routerConfig);

App.controller('MainController', MainController);
App.controller('NavBar', NavBar);

