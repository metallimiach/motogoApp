import { NgModule } from '@angular/core';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';

export const firebaseConfig = {
    apiKey: "AIzaSyCpn2YUkpxT8NkUMy7IefG6j9WaNWGkOHk",
    authDomain: "motogpapp-340d5.firebaseapp.com",
    databaseURL: "https://motogpapp-340d5.firebaseio.com",
    storageBucket: "motogpapp-340d5.appspot.com",
    messagingSenderId: "389882453724"
};

const firebaseAuthConfig = {
  provider: AuthProviders.Anonymous,
  method: AuthMethods.Anonymous
};

@NgModule({
    imports: [
        AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig)
    ]
})
export class AppFirebaseModule {}