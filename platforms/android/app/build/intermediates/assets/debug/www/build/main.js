webpackJsonp([0],{

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__book_list_book_list__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cd_list_cd_list__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.bookList = __WEBPACK_IMPORTED_MODULE_2__book_list_book_list__["a" /* BookListPage */];
        this.home = __WEBPACK_IMPORTED_MODULE_1__home_home__["a" /* HomePage */];
        this.cdList = __WEBPACK_IMPORTED_MODULE_3__cd_list_cd_list__["a" /* CdListPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tabs',template:/*ion-inline-start:"/Users/arthurus/Desktop/OCIonic/src/pages/tabs/tabs.html"*/'<ion-tabs>\n	<ion-tab [root]="bookList" tabTitle="Livre" tabIcon="book"></ion-tab>\n	<ion-tab [root]="cdList" tabTitle="Cd" tabIcon="disc"></ion-tab>\n</ion-tabs>'/*ion-inline-end:"/Users/arthurus/Desktop/OCIonic/src/pages/tabs/tabs.html"*/
        })
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CdListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lend_cd_lend_cd__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_pret_service__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { Pret } from '../../models/Pret';

/**
 * Generated class for the CdListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CdListPage = /** @class */ (function () {
    function CdListPage(modalCtrl, navParams, pretService, menuCtrl) {
        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        this.pretService = pretService;
        this.menuCtrl = menuCtrl;
    }
    CdListPage.prototype.ionViewWillEnter = function () {
        this.CdList = this.pretService.CdList.slice();
    };
    CdListPage.prototype.onLoadCd = function (index) {
        //this.navCtrl.push(LendBookPage,{book:book});
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__lend_cd_lend_cd__["a" /* LendCdPage */], { index: index });
        modal.present();
    };
    CdListPage.prototype.onToggleMenu = function () {
        this.menuCtrl.open();
    };
    CdListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cd-list',template:/*ion-inline-start:"/Users/arthurus/Desktop/OCIonic/src/pages/cd-list/cd-list.html"*/'<!--\n  Generated template for the CdListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n   <ion-buttons start>\n      <button ion-button icon-only (click)="onToggleMenu()">\n        <ion-icon name="menu"></ion-icon>\n      </button>\n  </ion-buttons>\n    <ion-title>Liste des CDs</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n<ion-list>\n		<button ion-item \n			icon-start\n			*ngFor="let cd of CdList; let i = index" (click)="onLoadCd(i)">\n			<ion-icon name="power" [color]="cd.isOn ? \'secondary\':\'danger\' "></ion-icon>\n			{{cd.name}}</button>\n	</ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/arthurus/Desktop/OCIonic/src/pages/cd-list/cd-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__services_pret_service__["a" /* PretService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* MenuController */]])
    ], CdListPage);
    return CdListPage;
}());

//# sourceMappingURL=cd-list.js.map

/***/ }),

/***/ 114:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 114;

/***/ }),

/***/ 155:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 155;

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/arthurus/Desktop/OCIonic/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Ionic Blank\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  The world is your oyster.\n  <p>\n    If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will be your guide.\n  </p>\n</ion-content>\n'/*ion-inline-end:"/Users/arthurus/Desktop/OCIonic/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lend_book_lend_book__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_pret_service__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { Pret } from '../../models/Pret';

/**
 * Generated class for the BookListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BookListPage = /** @class */ (function () {
    function BookListPage(modalCtrl, navParams, pretService, menuCtrl) {
        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        this.pretService = pretService;
        this.menuCtrl = menuCtrl;
    }
    BookListPage.prototype.ionViewWillEnter = function () {
        this.booksList = this.pretService.booksList.slice();
    };
    BookListPage.prototype.onLoadBook = function (index) {
        //this.navCtrl.push(LendBookPage,{book:book});
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__lend_book_lend_book__["a" /* LendBookPage */], { index: index });
        modal.present();
    };
    BookListPage.prototype.onToggleMenu = function () {
        this.menuCtrl.open();
    };
    BookListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-book-list',template:/*ion-inline-start:"/Users/arthurus/Desktop/OCIonic/src/pages/book-list/book-list.html"*/'<!--\n  Generated template for the BookListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n  <ion-buttons start>\n      <button ion-button icon-only (click)="onToggleMenu()">\n        <ion-icon name="menu"></ion-icon>\n      </button>\n</ion-buttons>\n    <ion-title>Liste des livres</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n	<ion-list>\n		<button ion-item \n			icon-start\n			*ngFor="let book of booksList; let i = index" (click)="onLoadBook(i)">\n			<ion-icon name="power" [color]="book.isOn ? \'secondary\':\'danger\' "></ion-icon>\n			{{book.name}}</button>\n	</ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/arthurus/Desktop/OCIonic/src/pages/book-list/book-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__services_pret_service__["a" /* PretService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* MenuController */]])
    ], BookListPage);
    return BookListPage;
}());

//# sourceMappingURL=book-list.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LendBookPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_pret_service__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the LendBookPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LendBookPage = /** @class */ (function () {
    function LendBookPage(navCtrl, navParams, alertCtrl, viewCtrl, pretService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.viewCtrl = viewCtrl;
        this.pretService = pretService;
    }
    LendBookPage.prototype.ngOnInit = function () {
        this.index = this.navParams.get('index');
        this.book = this.pretService.booksList[this.index];
    };
    LendBookPage.prototype.onToggleBook = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Êtes-vous certain(e) de vouloir continuer ?',
            subTitle: 'Vous allez changer le statut du livre ',
            buttons: [
                {
                    text: 'Annuler',
                    role: 'cancel'
                },
                {
                    text: 'Confirmer',
                    handler: function () { return _this.onTogglePret(); }
                }
            ]
        });
        alert.present();
    };
    //alert prompt
    LendBookPage.prototype.presentPrompt = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Emprinteur',
            buttons: [
                {
                    text: 'Annuler',
                    role: 'cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Confirmer',
                    //handler: () => this.onTogglePret()
                    handler: function (data) {
                        _this.onTogglePret(),
                            _this.onDeleteEmprunteur();
                    }
                }
            ]
        });
        alert.present();
    };
    LendBookPage.prototype.onSubmitPrompt = function (form) {
        console.log('valeur ' + form);
        this.dismissModal();
    };
    //
    LendBookPage.prototype.onTogglePret = function () {
        this.book.isOn = !this.book.isOn;
        console.log('changed');
    };
    LendBookPage.prototype.dismissModal = function () {
        this.viewCtrl.dismiss();
    };
    LendBookPage.prototype.onSubmitForm = function (form) {
        console.log(form.value);
        this.dismissModal();
    };
    LendBookPage.prototype.onDeleteEmprunteur = function () {
        this.book.emprunteur = '';
        this.dismissModal();
    };
    LendBookPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-lend-book',template:/*ion-inline-start:"/Users/arthurus/Desktop/OCIonic/src/pages/lend-book/lend-book.html"*/'<!--\n  Generated template for the LendBookPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n  <ion-buttons>\n    <button ion-button clear (click)="dismissModal()">Fermer</button>\n  </ion-buttons>\n\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n	<ion-card>\n  <ion-card-header>\n    <ion-card-title>{{book.name}}</ion-card-title>\n  </ion-card-header>\n\n  <ion-card-content>\n    <p>{{book.description}}</p>\n\n  </ion-card-content>\n</ion-card>\n\n\n<form #f="ngForm" (ngSubmit)="onSubmitForm(f)">\n  <ion-list>\n    <ion-item>\n      <ion-label>Emprunteur :</ion-label>\n      <ion-input placeholder="Nom de l\'emprunteur" name="emprunteur" [(ngModel)]="book.emprunteur"></ion-input>\n    </ion-item>\n  </ion-list>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n  <button type="submit" ion-button full icon-start color="danger" [disabled] ="!book.isOn" (click)="onToggleBook()">\n  <ion-icon name="power" icon-start ></ion-icon>\n  Prêter\n  </button>\n    </ion-col>\n  <ion-col>\n  <button type="submit" ion-button full icon-start color="secondary" [disabled] ="book.isOn" (click)="presentPrompt()">\n  <ion-icon name="power" icon-start ></ion-icon>\n  Restitué\n</button>\n  </ion-col>\n</ion-row>\n</ion-grid>\n</form>\n</ion-content>\n'/*ion-inline-end:"/Users/arthurus/Desktop/OCIonic/src/pages/lend-book/lend-book.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__services_pret_service__["a" /* PretService */]])
    ], LendBookPage);
    return LendBookPage;
}());

//# sourceMappingURL=lend-book.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LendCdPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_pret_service__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the LendCdPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LendCdPage = /** @class */ (function () {
    function LendCdPage(navCtrl, navParams, alertCtrl, viewCtrl, pretService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.viewCtrl = viewCtrl;
        this.pretService = pretService;
    }
    LendCdPage.prototype.ngOnInit = function () {
        this.index = this.navParams.get('index');
        this.cd = this.pretService.CdList[this.index];
    };
    LendCdPage.prototype.onToggleCd = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Êtes-vous certain(e) de vouloir continuer ?',
            subTitle: 'Vous allez changer le statut du CD',
            buttons: [
                {
                    text: 'Annuler',
                    role: 'cancel'
                },
                {
                    text: 'Confirmer',
                    handler: function () { return _this.onTogglePret(); }
                }
            ]
        });
        alert.present();
    };
    LendCdPage.prototype.onTogglePret = function () {
        this.cd.isOn = !this.cd.isOn;
        console.log('changed');
    };
    LendCdPage.prototype.dismissModal = function () {
        this.viewCtrl.dismiss();
    };
    LendCdPage.prototype.presentPrompt = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Emprinteur',
            buttons: [
                {
                    text: 'Annuler',
                    role: 'cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Confirmer',
                    //handler: () => this.onTogglePret()
                    handler: function (data) {
                        _this.onTogglePret(),
                            _this.onDeleteEmprunteur();
                    }
                }
            ]
        });
        alert.present();
    };
    LendCdPage.prototype.onSubmitPrompt = function (form) {
        console.log('valeur ' + form);
        this.dismissModal();
    };
    LendCdPage.prototype.onSubmitForm = function (form) {
        console.log(form.value);
        this.dismissModal();
    };
    LendCdPage.prototype.onDeleteEmprunteur = function () {
        this.cd.emprunteur = '';
        this.dismissModal();
    };
    LendCdPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-lend-cd',template:/*ion-inline-start:"/Users/arthurus/Desktop/OCIonic/src/pages/lend-cd/lend-cd.html"*/'<!--\n  Generated template for the LendCdPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n  <ion-buttons>\n    <button ion-button clear (click)="dismissModal()">Fermer</button>\n  </ion-buttons>\n\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n	<ion-card>\n  <ion-card-header>\n    <ion-card-title>{{cd.name}}</ion-card-title>\n  </ion-card-header>\n\n  <ion-card-content>\n    <p>{{cd.description}}</p>\n\n  </ion-card-content>\n</ion-card>\n\n<form #f="ngForm" (ngSubmit)="onSubmitForm(f)">\n  <ion-list>\n    <ion-item>\n      <ion-label>Emprunteur :</ion-label>\n      <ion-input placeholder="Nom de l\'emprunteur" name="emprunteur" [(ngModel)]="cd.emprunteur"></ion-input>\n    </ion-item>\n  </ion-list>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n  <button type="submit" ion-button full icon-start color="danger" [disabled] ="!cd.isOn" (click)="onToggleCd()">\n  <ion-icon name="power" icon-start ></ion-icon>\n  Prêter\n  </button>\n    </ion-col>\n  <ion-col>\n  <button type="submit" ion-button full icon-start color="secondary" [disabled] ="cd.isOn" (click)="presentPrompt()">\n  <ion-icon name="power" icon-start ></ion-icon>\n  Restitué\n</button>\n  </ion-col>\n</ion-row>\n</ion-grid>\n</form>\n</ion-content>\n'/*ion-inline-end:"/Users/arthurus/Desktop/OCIonic/src/pages/lend-cd/lend-cd.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__services_pret_service__["a" /* PretService */]])
    ], LendCdPage);
    return LendCdPage;
}());

//# sourceMappingURL=lend-cd.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SettingsPage = /** @class */ (function () {
    function SettingsPage(navCtrl, navParams, viewCtrl, menuCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.menuCtrl = menuCtrl;
    }
    SettingsPage.prototype.onToggleMenu = function () {
        this.menuCtrl.open();
    };
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-settings',template:/*ion-inline-start:"/Users/arthurus/Desktop/OCIonic/src/pages/settings/settings.html"*/'<!--\n  Generated template for the SettingsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n   <ion-buttons start>\n      <button ion-button icon-only (click)="onToggleMenu()">\n        <ion-icon name="menu"></ion-icon>\n      </button>\n  </ion-buttons>\n\n    <ion-title>Options</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n<p>Options</p>\n</ion-content>\n'/*ion-inline-end:"/Users/arthurus/Desktop/OCIonic/src/pages/settings/settings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* MenuController */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tabs_tabs__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the AuthPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AuthPage = /** @class */ (function () {
    function AuthPage(navCtrl, navParams, authService, menuCtrl, formBuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authService = authService;
        this.menuCtrl = menuCtrl;
        this.formBuilder = formBuilder;
    }
    AuthPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AuthPage');
    };
    AuthPage.prototype.ngOnInit = function () {
        this.mode = this.navParams.get('mode');
        this.initForm();
    };
    AuthPage.prototype.onToggleMenu = function () {
        this.menuCtrl.open();
    };
    AuthPage.prototype.initForm = function () {
        this.authForm = this.formBuilder.group({
            email: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].email]],
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]
        });
    };
    AuthPage.prototype.onSubmitForm = function () {
        var _this = this;
        var email = this.authForm.get('email').value;
        var password = this.authForm.get('password').value;
        if (this.mode === 'new') {
            this.authService.signUpUser(email, password).then(function () {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__tabs_tabs__["a" /* TabsPage */]);
            }).catch(function (error) {
                _this.errorMessage = error;
            });
        }
        else if (this.mode === 'connect') {
            this.authService.signInUser(email, password).then(function () {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__tabs_tabs__["a" /* TabsPage */]);
            }).catch(function (error) {
                _this.errorMessage = error;
            });
        }
    };
    AuthPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-auth',template:/*ion-inline-start:"/Users/arthurus/Desktop/OCIonic/src/pages/auth/auth.html"*/'<!--\n  Generated template for the AuthPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n  <ion-buttons start>\n      <button ion-button icon-only (click)="onToggleMenu()">\n        <ion-icon name="menu"></ion-icon>\n      </button>\n</ion-buttons>\n    <ion-title *ngIf="mode === \'new\'">Inscription</ion-title>\n    <ion-title *ngIf="mode === \'connect\'">connexion</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n	<form [formGroup]="authForm">\n		<ion-list>\n			<ion-item>\n				<ion-label floating>Adresse mail</ion-label>\n				<ion-input type="email" formControlName="email"></ion-input>\n			</ion-item>\n			<ion-item>\n				<ion-label floating>Mot de passe</ion-label>\n				<ion-input type="password" formControlName="password"></ion-input>\n			</ion-item>\n		</ion-list>\n		<button ion-button full (click)="onSubmitForm()">Soumettre</button>\n		<span ion-text color="danger">{{errorMessage}}</span>\n	</form>\n</ion-content>\n'/*ion-inline-end:"/Users/arthurus/Desktop/OCIonic/src/pages/auth/auth.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], AuthPage);
    return AuthPage;
}());

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_firebase__);

var AuthService = /** @class */ (function () {
    function AuthService() {
    }
    AuthService.prototype.signUpUser = function (email, password) {
        return new Promise(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_0_firebase__["auth"]().createUserWithEmailAndPassword(email, password).then(function (user) {
                resolve(user);
            }).catch(function (error) {
                reject(error);
            });
        });
    };
    AuthService.prototype.signInUser = function (email, password) {
        return new Promise(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_0_firebase__["auth"]().signInWithEmailAndPassword(email, password).then(function (user) {
                resolve(user);
            }).catch(function (error) {
                reject(error);
            });
        });
    };
    AuthService.prototype.signOut = function () {
        __WEBPACK_IMPORTED_MODULE_0_firebase__["auth"]().signOut();
    };
    return AuthService;
}());

//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(231);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_book_list_book_list__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_lend_book_lend_book__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_cd_list_cd_list__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_lend_cd_lend_cd__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_tabs_tabs__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_settings_settings__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_auth_auth__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_pret_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_auth_service__ = __webpack_require__(207);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_book_list_book_list__["a" /* BookListPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_lend_book_lend_book__["a" /* LendBookPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_cd_list_cd_list__["a" /* CdListPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_lend_cd_lend_cd__["a" /* LendCdPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_auth_auth__["a" /* AuthPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_book_list_book_list__["a" /* BookListPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_lend_book_lend_book__["a" /* LendBookPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_cd_list_cd_list__["a" /* CdListPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_lend_cd_lend_cd__["a" /* LendCdPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_auth_auth__["a" /* AuthPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_14__services_pret_service__["a" /* PretService */],
                __WEBPACK_IMPORTED_MODULE_15__services_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_settings_settings__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_cd_list_cd_list__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_auth_auth__ = __webpack_require__(206);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, menuCtrl) {
        var _this = this;
        this.menuCtrl = menuCtrl;
        //rootPage:any = TabsPage;
        this.tabsPage = __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__["a" /* TabsPage */];
        this.oPage = __WEBPACK_IMPORTED_MODULE_6__pages_settings_settings__["a" /* SettingsPage */];
        this.discPage = __WEBPACK_IMPORTED_MODULE_7__pages_cd_list_cd_list__["a" /* CdListPage */];
        this.authPage = __WEBPACK_IMPORTED_MODULE_8__pages_auth_auth__["a" /* AuthPage */];
        platform.ready().then(function () {
            //connexion firebase
            var firebaseConfig = {
                apiKey: "AIzaSyCqMJb7IIdadfPhJCC0YFVg828_9cyLXFs",
                authDomain: "ionicoc-81cab.firebaseapp.com",
                databaseURL: "https://ionicoc-81cab.firebaseio.com",
                projectId: "ionicoc-81cab",
                storageBucket: "",
                messagingSenderId: "1055362214176",
                appId: "1:1055362214176:web:7aee88997101b11a"
            };
            // Initialize Firebase
            __WEBPACK_IMPORTED_MODULE_4_firebase__["initializeApp"](firebaseConfig);
            __WEBPACK_IMPORTED_MODULE_4_firebase__["auth"]().onAuthStateChanged(function (user) {
                if (user) {
                    _this.isAuth = true;
                    _this.content.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__["a" /* TabsPage */]);
                }
                else {
                    _this.isAuth = false;
                    _this.content.setRoot(__WEBPACK_IMPORTED_MODULE_8__pages_auth_auth__["a" /* AuthPage */], { mode: 'connect' });
                }
            });
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp.prototype.onNavigate = function (page, data) {
        this.content.setRoot(page, data ? data : null);
        this.menuCtrl.close();
    };
    MyApp.prototype.onDisconnect = function () {
        __WEBPACK_IMPORTED_MODULE_4_firebase__["auth"]().signOut();
        this.menuCtrl.close();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('content'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */])
    ], MyApp.prototype, "content", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/arthurus/Desktop/OCIonic/src/app/app.html"*/'<ion-menu [content]="content">\n	<ion-header>\n		<ion-toolbar>\n			<ion-title>MENU</ion-title>\n		</ion-toolbar>\n	</ion-header>\n	<ion-content>\n		<ion-list>\n			<button ion-item icon-start (click)="onNavigate(oPage)" *ngIf="isAuth">\n				<ion-icon name="settings"></ion-icon>\n				Options\n			</button>\n			<button ion-item icon-start (click)="onNavigate(tabsPage)" *ngIf="isAuth">\n				<ion-icon name="book"></ion-icon>\n				Livres\n			</button>\n			<button ion-item icon-start (click)="onNavigate(discPage)" *ngIf="isAuth">\n				<ion-icon name="disc"></ion-icon>\n				CDs\n			</button>\n			<button ion-item icon-start (click)="onNavigate(authPage, {mode:\'new\'})" *ngIf="!isAuth">\n				<ion-icon name="person-add"></ion-icon>\n				Nouvel utilisateur\n			</button>\n			<button ion-item icon-start (click)="onNavigate(authPage, {mode:\'connect\'})" *ngIf="!isAuth">\n				<ion-icon name="person"></ion-icon>\n				Connexion\n			</button>\n			<button ion-item icon-start (click)="onDisconnect()" *ngIf="isAuth">\n				<ion-icon name="exit"></ion-icon>\n				Déconnexion\n			</button>\n		</ion-list>\n	</ion-content>\n</ion-menu>\n<ion-nav [root]="tabsPage" #content></ion-nav>\n'/*ion-inline-end:"/Users/arthurus/Desktop/OCIonic/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* MenuController */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PretService; });
//import { Component } from '@angular/core';
//import { Pret } from '../models/Pret';
var PretService = /** @class */ (function () {
    function PretService() {
        this.booksList = [
            {
                name: '1984',
                description: [
                    'science-fiction'
                ],
                isOn: true,
                emprunteur: ''
            },
            {
                name: 'la ferme des animaux',
                description: [
                    'roman'
                ],
                isOn: false,
                emprunteur: 'Jérémy'
            }
        ];
        this.CdList = [
            {
                name: 'Kid rock',
                description: [
                    'US'
                ],
                isOn: true,
                emprunteur: ''
            },
            {
                name: 'Trio',
                description: [
                    'Fr'
                ],
                isOn: false,
                emprunteur: 'Jérémy'
            }
        ];
    }
    return PretService;
}());

//# sourceMappingURL=pret.service.js.map

/***/ })

},[208]);
//# sourceMappingURL=main.js.map