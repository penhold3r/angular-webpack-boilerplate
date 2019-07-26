import angular from 'angular'

import 'angular-route'
import routerConfig from './routes/routes.config'

import AppController from './controllers/app.controller'

import NavBarComponent from './components/NavBarComponent/nav-bar.component'
import HomeComponent from './components/HomeComponent/home.component'
import FeaturesComponent from './components/FeaturesComponent/features.component'

const App = angular.module('App', ['ngRoute'])

App.config(routerConfig)

App.controller('AppController', AppController)

App.component('navBar', NavBarComponent)
App.component('home', HomeComponent)
App.component('features', FeaturesComponent)
