/*!
 *
 * Dasha - Bootstrap Admin Template
 *
 * Version: 1.2
 * Author: @themicon_co
 * Website: http://themicon.co
 * License: https://wrapbootstrap.com/help/licenses
 *
 */

import './modernizr.js'; // 'npm run modernizr' to create this file;

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import Web3 = require("web3");

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
    .then(() => { (<any>window).appBootstrap && (<any>window).appBootstrap(); })
    // .catch(err => console.error(err));

var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:9545"));
console.log(web3);

// web3login() {
//   var Web3 = require('web3');
//   // var web3 = new Web3();
//   if (typeof web3 !== 'undefined') {
//     web3 = new Web3(web3.currentProvider);
//     console.log(web3.currentProvider);
//   } else {
//     // set the provider you want from Web3.providers
//     var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:9545"));
//     console.log(web3);
//   }
//
//
// }
