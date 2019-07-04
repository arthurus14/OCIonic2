import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';


import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { BookListPage } from '../pages/book-list/book-list';
import { LendBookPage } from '../pages/lend-book/lend-book';
import { CdListPage } from '../pages/cd-list/cd-list';
import { LendCdPage } from '../pages/lend-cd/lend-cd';
import { TabsPage } from '../pages/tabs/tabs';
import { SettingsPage } from '../pages/settings/settings';
import { AuthPage } from '../pages/auth/auth';

import { PretService } from '../services/pret.service';
import { AuthService } from '../services/auth.service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    BookListPage,
    LendBookPage,
    CdListPage,
    LendCdPage,
    SettingsPage,
    AuthPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    BookListPage,
    LendBookPage,
    CdListPage,
    LendCdPage,
    SettingsPage,
    AuthPage,
    TabsPage
  ],
  providers: [
    PretService,
    AuthService,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
