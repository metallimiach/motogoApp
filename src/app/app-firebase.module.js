"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var angularfire2_1 = require("angularfire2");
exports.firebaseConfig = {
    apiKey: "AIzaSyCpn2YUkpxT8NkUMy7IefG6j9WaNWGkOHk",
    authDomain: "motogpapp-340d5.firebaseapp.com",
    databaseURL: "https://motogpapp-340d5.firebaseio.com",
    storageBucket: "motogpapp-340d5.appspot.com",
    messagingSenderId: "389882453724"
};
var firebaseAuthConfig = {
    provider: angularfire2_1.AuthProviders.Anonymous,
    method: angularfire2_1.AuthMethods.Anonymous
};
var AppFirebaseModule = (function () {
    function AppFirebaseModule() {
    }
    return AppFirebaseModule;
}());
AppFirebaseModule = __decorate([
    core_1.NgModule({
        imports: [
            angularfire2_1.AngularFireModule.initializeApp(exports.firebaseConfig, firebaseAuthConfig)
        ]
    })
], AppFirebaseModule);
exports.AppFirebaseModule = AppFirebaseModule;
//# sourceMappingURL=app-firebase.module.js.map