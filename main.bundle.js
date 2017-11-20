webpackJsonp([0,3],{

/***/ 169:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_api_service__ = __webpack_require__(170);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return CharacterService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CharacterService = (function () {
    function CharacterService(api) {
        this.api = api;
        this.characters = {};
    }
    CharacterService.prototype.getCharacters = function () {
        return this.api
            .get('characters')
            .map(function (response) {
            return response;
        });
    };
    CharacterService.prototype.getCharacter = function (name) {
        var _this = this;
        if (this.characters[name]) {
            return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].of(this.characters[name]);
        }
        else {
            return this.api
                .get('characters/' + name)
                .map(function (response) {
                var char = response;
                char.equipment.map(function (item) {
                    if (item.stats) {
                        item.stats.attributes = Object.keys(item.stats.attributes).map(function (a) {
                            return { attribute: a, modifier: item.stats.attributes[a] };
                        });
                    }
                    return item;
                });
                _this.characters[name] = char;
                return char;
            });
        }
    };
    CharacterService.prototype.getCharacterItems = function (name) {
        var _this = this;
        return this.api
            .get('characters/' + name + '/equipment')
            .flatMap(function (result) {
            return _this.api.get('items?ids=' + result.equipment.map(function (item) { return item.id; }).join(','));
        })
            .map(function (items) {
            return items.reduce(function (map, item) {
                map[item.id] = item;
                return map;
            }, {});
        });
    };
    CharacterService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_api_service__["a" /* ApiService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_api_service__["a" /* ApiService */]) === 'function' && _a) || Object])
    ], CharacterService);
    return CharacterService;
    var _a;
}());
//# sourceMappingURL=/Users/illiptic/dev/workspaces/web/nggw/src/character.service.js.map

/***/ },

/***/ 170:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(337);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ApiService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var baseUrl = '/api/';
var key = '5129EB54-8EB1-3941-95FF-BF1826D6309F615A7A1B-52D6-423E-97E7-0450B0C25307';
var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
    Authorization: 'Bearer ' + key
});
var ApiService = (function () {
    function ApiService(http) {
        this.http = http;
    }
    ApiService.prototype.get = function (url) {
        return this.http
            .get(baseUrl + url, { headers: headers })
            .map(function (response) { return response.json(); });
    };
    ApiService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], ApiService);
    return ApiService;
    var _a;
}());
//# sourceMappingURL=/Users/illiptic/dev/workspaces/web/nggw/src/api.service.js.map

/***/ },

/***/ 243:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_api_service__ = __webpack_require__(170);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AccountService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AccountService = (function () {
    function AccountService(api) {
        this.api = api;
    }
    AccountService.prototype.getAccount = function () {
        return this.api
            .get('account')
            .map(function (response) {
            return response;
        });
    };
    AccountService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_api_service__["a" /* ApiService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_api_service__["a" /* ApiService */]) === 'function' && _a) || Object])
    ], AccountService);
    return AccountService;
    var _a;
}());
//# sourceMappingURL=/Users/illiptic/dev/workspaces/web/nggw/src/account.service.js.map

/***/ },

/***/ 360:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_api_service__ = __webpack_require__(170);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ProfessionService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfessionService = (function () {
    function ProfessionService(api) {
        this.api = api;
        this.professions = null;
    }
    ProfessionService.prototype.getProfessions = function () {
        var _this = this;
        if (this.professions) {
            return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].of(this.professions);
        }
        return this.api
            .get('professions')
            .map(function (response) {
            return response;
        })
            .flatMap(function (ids) {
            return _this.api.get('professions?ids=' + ids.join(','));
        })
            .flatMap(function (professions) {
            return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].forkJoin(professions.map(function (profession) {
                return _this.api.get('specializations?ids=' + profession.specializations.join(','))
                    .flatMap(function (specializations) {
                    profession.specializations = specializations;
                    return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].forkJoin(specializations.map(function (specialization) {
                        return _this.api.get('traits?ids=' + specialization.minor_traits.concat(specialization.major_traits).join(','))
                            .map(function (traits) {
                            specialization.traits = traits.sort(function (a, b) {
                                if (a.tier !== b.tier) {
                                    return a.tier - b.tier;
                                }
                                else if (a.order !== b.order) {
                                    return a.order - b.order;
                                }
                                return a.slot === 'Minor' ? -1 : 1;
                            });
                        });
                    }));
                });
            }))
                .map(function () {
                _this.professions = professions.reduce(function (map, profession) {
                    map[profession.id] = profession;
                    return map;
                }, {});
                return _this.professions;
            });
        });
    };
    ProfessionService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_api_service__["a" /* ApiService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_api_service__["a" /* ApiService */]) === 'function' && _a) || Object])
    ], ProfessionService);
    return ProfessionService;
    var _a;
}());
//# sourceMappingURL=/Users/illiptic/dev/workspaces/web/nggw/src/profession.service.js.map

/***/ },

/***/ 426:
/***/ function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 426;


/***/ },

/***/ 427:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(554);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__polyfills_ts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(553);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__(546);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_40" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/Users/illiptic/dev/workspaces/web/nggw/src/main.js.map

/***/ },

/***/ 544:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(167);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var appRoutes = [
    { path: '', redirectTo: '/characters', pathMatch: 'full' }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(appRoutes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
//# sourceMappingURL=/Users/illiptic/dev/workspaces/web/nggw/src/app-routing.module.js.map

/***/ },

/***/ 545:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__account_account_service__ = __webpack_require__(243);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(accountService) {
        this.accountService = accountService;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.getAccount();
    };
    AppComponent.prototype.getAccount = function () {
        var _this = this;
        this.accountService.getAccount()
            .subscribe(function (data) {
            _this.username = data.name.split('.').shift();
        });
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(712),
            styles: [__webpack_require__(707)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__account_account_service__["a" /* AccountService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__account_account_service__["a" /* AccountService */]) === 'function' && _a) || Object])
    ], AppComponent);
    return AppComponent;
    var _a;
}());
//# sourceMappingURL=/Users/illiptic/dev/workspaces/web/nggw/src/app.component.js.map

/***/ },

/***/ 546:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(506);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_api_service__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__account_account_service__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__character_character_service__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__professions_profession_service__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(545);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__common_menu_menu_component__ = __webpack_require__(551);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_routing_module__ = __webpack_require__(544);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__character_character_module__ = __webpack_require__(550);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_9__common_menu_menu_component__["a" /* MenuComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["c" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_10__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_11__character_character_module__["a" /* CharacterModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_4__services_api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_5__account_account_service__["a" /* AccountService */], __WEBPACK_IMPORTED_MODULE_6__character_character_service__["a" /* CharacterService */], __WEBPACK_IMPORTED_MODULE_7__professions_profession_service__["a" /* ProfessionService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/Users/illiptic/dev/workspaces/web/nggw/src/app.module.js.map

/***/ },

/***/ 547:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__character_character_service__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__professions_profession_service__ = __webpack_require__(360);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return CharacterDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CharacterDetailComponent = (function () {
    function CharacterDetailComponent(sanitizer, route, characterService, professionService) {
        this.sanitizer = sanitizer;
        this.route = route;
        this.characterService = characterService;
        this.professionService = professionService;
        this.selectedSpecs = {};
        this.display = {};
    }
    CharacterDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.professionService.getProfessions()
            .subscribe(function (professions) {
            _this.professions = professions;
            _this.setProfession();
        });
        this.route.params
            .switchMap(function (params) {
            _this.loading = true;
            return _this.getCharacter(params['id'])
                .map(function (character) {
                _this.character = character;
                _this.loading = false;
                return character;
            });
        })
            .subscribe(function (char) {
            _this.setSelectedSpecs(char);
            _this.setProfession();
        });
    };
    // ngOnChanges(): void {
    //   this.setSelectedSpecs()
    // }
    CharacterDetailComponent.prototype.toggle = function (name) {
        this.display[name] = !this.display[name];
    };
    CharacterDetailComponent.prototype.setSelectedSpecs = function (character) {
        var _this = this;
        this.selectedSpecs = {};
        if (character.specializations && character.specializations.pve) {
            character.specializations.pve.forEach(function (spec) {
                if (spec) {
                    _this.selectedSpecs[spec.id] = spec;
                }
            });
        }
    };
    CharacterDetailComponent.prototype.setProfession = function () {
        if (this.professions && this.character) {
            this.profession = this.professions[this.character.profession];
        }
    };
    CharacterDetailComponent.prototype.getCharacter = function (name) {
        return this.characterService.getCharacter(name);
    };
    CharacterDetailComponent.prototype.characterSpecSelected = function (trait) {
        var spec = this.selectedSpecs[trait.specialization];
        return spec && (trait.slot === 'Minor' || spec.traits.indexOf(trait.id) > -1);
    };
    CharacterDetailComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'character-detail',
            template: __webpack_require__(713),
            styles: [__webpack_require__(708)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DomSanitizer */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DomSanitizer */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__character_character_service__["a" /* CharacterService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__character_character_service__["a" /* CharacterService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__professions_profession_service__["a" /* ProfessionService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__professions_profession_service__["a" /* ProfessionService */]) === 'function' && _d) || Object])
    ], CharacterDetailComponent);
    return CharacterDetailComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/Users/illiptic/dev/workspaces/web/nggw/src/character-detail.component.js.map

/***/ },

/***/ 548:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__account_account_service__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__character_service__ = __webpack_require__(169);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return CharacterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CharacterComponent = (function () {
    function CharacterComponent(router, accountService, characterService) {
        this.router = router;
        this.accountService = accountService;
        this.characterService = characterService;
    }
    CharacterComponent.prototype.ngOnInit = function () {
        this.loading = true;
        this.getCharacters();
    };
    CharacterComponent.prototype.getCharacters = function () {
        var _this = this;
        this.characterService.getCharacters()
            .subscribe(function (data) {
            _this.loading = false;
            _this.characterNames = data;
        });
    };
    CharacterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'character',
            template: __webpack_require__(714),
            styles: [__webpack_require__(709)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__account_account_service__["a" /* AccountService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__account_account_service__["a" /* AccountService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__character_service__["a" /* CharacterService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__character_service__["a" /* CharacterService */]) === 'function' && _c) || Object])
    ], CharacterComponent);
    return CharacterComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/Users/illiptic/dev/workspaces/web/nggw/src/character.component.js.map

/***/ },

/***/ 549:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Character; });
var Character = (function () {
    function Character() {
    }
    return Character;
}());
//# sourceMappingURL=/Users/illiptic/dev/workspaces/web/nggw/src/character.model.js.map

/***/ },

/***/ 550:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__character_component__ = __webpack_require__(548);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__character_detail_character_detail_component__ = __webpack_require__(547);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__equipment_equipment_component__ = __webpack_require__(552);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return CharacterModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var routes = [
    {
        path: 'characters',
        component: __WEBPACK_IMPORTED_MODULE_3__character_component__["a" /* CharacterComponent */],
        children: [
            {
                path: ':id',
                component: __WEBPACK_IMPORTED_MODULE_4__character_detail_character_detail_component__["a" /* CharacterDetailComponent */]
            }
        ]
    }
];
var CharacterModule = (function () {
    function CharacterModule() {
    }
    CharacterModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forChild(routes)
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__equipment_equipment_component__["a" /* EquipmentComponent */],
                __WEBPACK_IMPORTED_MODULE_4__character_detail_character_detail_component__["a" /* CharacterDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_3__character_component__["a" /* CharacterComponent */]
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], CharacterModule);
    return CharacterModule;
}());
//# sourceMappingURL=/Users/illiptic/dev/workspaces/web/nggw/src/character.module.js.map

/***/ },

/***/ 551:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return MenuComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MenuComponent = (function () {
    function MenuComponent() {
    }
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(), 
        __metadata('design:type', Object)
    ], MenuComponent.prototype, "callback", void 0);
    MenuComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-menu',
            template: __webpack_require__(715),
            styles: [__webpack_require__(710)]
        }), 
        __metadata('design:paramtypes', [])
    ], MenuComponent);
    return MenuComponent;
}());
//# sourceMappingURL=/Users/illiptic/dev/workspaces/web/nggw/src/menu.component.js.map

/***/ },

/***/ 552:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__character_character_model__ = __webpack_require__(549);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__character_character_service__ = __webpack_require__(169);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return EquipmentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EquipmentComponent = (function () {
    function EquipmentComponent(characterService) {
        this.characterService = characterService;
        this.slots = {
            armor: [
                'Helm',
                'Shoulders',
                'Coat',
                'Gloves',
                'Leggings',
                'Boots'
            ],
            accessories: [
                'Amulet',
                'Backpack',
                'Accessory1',
                'Accessory2',
                'Ring1',
                'Ring2'
            ],
            aquatic: [
                'HelmAquatic',
                'WeaponAquaticA',
                'WeaponAquaticB'
            ],
            weapons: [
                'WeaponA1',
                'WeaponA2',
                'WeaponB1',
                'WeaponB2'
            ],
            tools: [
                'Sickle',
                'Axe',
                'Pick'
            ]
        };
    }
    EquipmentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.itemsByCategory = {};
        Object.keys(this.slots).forEach(function (cat) {
            _this.itemsByCategory[cat] = _this.slots[cat].map(function (slot) { return null; });
        });
    };
    EquipmentComponent.prototype.ngOnChanges = function () {
        var _this = this;
        var char = this.character;
        this.characterService.getCharacterItems(char.name)
            .subscribe(function (equipment) {
            _this.equipment = equipment;
            Object.keys(_this.slots).forEach(function (cat) {
                _this.itemsByCategory[cat] = _this.getItems(cat);
            });
        });
    };
    EquipmentComponent.prototype.equipmentBackground = function (profession) {
        return 'url(/assets/professions/' + profession.toLowerCase() + '.jpg)';
    };
    EquipmentComponent.prototype.showDetails = function (item, e) {
        if (item) {
            this.displayDetails = {
                item: item,
                x: (e.target.offsetLeft + 60) + 'px',
                y: (e.target.offsetTop) + 'px'
            };
        }
        else {
            this.displayDetails = null;
        }
    };
    EquipmentComponent.prototype.hideDetails = function () {
        this.displayDetails = null;
    };
    EquipmentComponent.prototype.getItems = function (category) {
        var _this = this;
        return this.slots[category].map(function (slot) {
            var piece = _this.character.equipment.filter(function (piece) {
                return piece.slot === slot;
            })[0];
            return piece ? Object.assign({}, _this.equipment[piece.id], piece) : null;
        });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__character_character_model__["a" /* Character */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__character_character_model__["a" /* Character */]) === 'function' && _a) || Object)
    ], EquipmentComponent.prototype, "character", void 0);
    EquipmentComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'equipment',
            template: __webpack_require__(716),
            styles: [__webpack_require__(711)]
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__character_character_service__["a" /* CharacterService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__character_character_service__["a" /* CharacterService */]) === 'function' && _b) || Object])
    ], EquipmentComponent);
    return EquipmentComponent;
    var _a, _b;
}());
//# sourceMappingURL=/Users/illiptic/dev/workspaces/web/nggw/src/equipment.component.js.map

/***/ },

/***/ 553:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/Users/illiptic/dev/workspaces/web/nggw/src/environment.js.map

/***/ },

/***/ 554:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(568);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(561);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(557);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(563);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(562);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(560);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(559);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(567);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(556);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(555);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(565);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(558);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(566);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(564);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(569);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(981);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=/Users/illiptic/dev/workspaces/web/nggw/src/polyfills.js.map

/***/ },

/***/ 707:
/***/ function(module, exports) {

module.exports = ".main {\n  max-width: 1200px;\n  margin: 0 auto; }\n  .main .header {\n    background-image: url(\"assets/header-bg.jpg\");\n    background-position: center;\n    height: 200px; }\n"

/***/ },

/***/ 708:
/***/ function(module, exports) {

module.exports = ".details {\n  padding: 10px;\n  box-shadow: 5px 5px 8px black;\n  margin: 10px 20px;\n  background: #333;\n  overflow: auto; }\n  .details .present {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    -ms-flex-line-pack: start;\n        align-content: flex-start;\n    height: 64px;\n    overflow: hidden; }\n    .details .present img {\n      margin-top: -5px; }\n    .details .present .name {\n      font-size: 2em;\n      font-weight: bold; }\n  .details .equipmentWrapper {\n    position: relative;\n    float: left;\n    min-width: 400px;\n    min-height: 400px;\n    width: 50%; }\n    .details .equipmentWrapper .equipmentLoader {\n      position: absolute;\n      width: 100%;\n      height: 100%;\n      background-color: black;\n      opacity: .85;\n      z-index: 1;\n      text-align: center;\n      color: white;\n      padding-top: 50%; }\n  .details .specializations {\n    background-color: black;\n    color: white;\n    float: left;\n    min-width: 400px;\n    width: 50%; }\n    .details .specializations .specialization {\n      border-bottom: 1px solid white;\n      border-top: 1px solid white;\n      margin-bottom: -1px;\n      background-color: #333;\n      color: #aaa; }\n      .details .specializations .specialization.selected {\n        background-color: black;\n        color: white; }\n        .details .specializations .specialization.selected h2 img {\n          opacity: 1; }\n      .details .specializations .specialization .spec-container {\n        position: relative;\n        overflow: hidden;\n        height: 0;\n        -webkit-transition: height 100ms ease-in;\n        transition: height 100ms ease-in; }\n        .details .specializations .specialization .spec-container.show {\n          height: 160px; }\n      .details .specializations .specialization h2 {\n        margin: 0;\n        padding: 8px;\n        height: 30px;\n        z-index: 1;\n        cursor: pointer; }\n        .details .specializations .specialization h2 img {\n          vertical-align: bottom;\n          margin-right: 5px;\n          opacity: 0.4; }\n      .details .specializations .specialization .background {\n        position: absolute;\n        left: 0;\n        bottom: 0;\n        background-position: 0 100%;\n        opacity: 0.4; }\n      .details .specializations .specialization .trait-grid {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: column;\n                flex-direction: column;\n        -ms-flex-wrap: wrap;\n            flex-wrap: wrap;\n        height: 160px;\n        -ms-flex-line-pack: distribute;\n            align-content: space-around;\n        -ms-flex-pack: distribute;\n            justify-content: space-around; }\n      .details .specializations .specialization .trait {\n        height: 48px;\n        width: 48px;\n        z-index: 1;\n        opacity: 0.4; }\n        .details .specializations .specialization .trait.minor {\n          margin: 48px 0; }\n        .details .specializations .specialization .trait.selected {\n          opacity: 1; }\n        .details .specializations .specialization .trait img {\n          width: 100%;\n          height: 100%; }\n"

/***/ },

/***/ 709:
/***/ function(module, exports) {

module.exports = ".character .character-list {\n  list-style-type: none;\n  height: 65px;\n  margin: 10px 20px;\n  padding: 0px;\n  box-shadow: 5px 5px 8px black;\n  background: #333;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n  .character .character-list li {\n    -webkit-box-flex: 1;\n        -ms-flex: 1 1 auto;\n            flex: 1 1 auto;\n    font-size: 1.3em;\n    font-weight: bold;\n    margin: 0;\n    color: white;\n    text-align: center;\n    padding-top: 20px;\n    cursor: pointer;\n    -webkit-transition: background 300ms ease-in;\n    transition: background 300ms ease-in; }\n    .character .character-list li.selected {\n      background: #666; }\n\n.character character-detail {\n  display: block; }\n\n.character .detail {\n  -webkit-box-flex: 2;\n      -ms-flex: 2 0 auto;\n          flex: 2 0 auto; }\n"

/***/ },

/***/ 710:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 711:
/***/ function(module, exports) {

module.exports = ".equipment {\n  position: relative;\n  background-repeat: no-repeat;\n  background-position: top center; }\n  .equipment .slot {\n    width: 48px;\n    height: 48px;\n    margin: 6px;\n    background: -webkit-radial-gradient(#6B4500, white);\n    background: radial-gradient(#6B4500, white);\n    box-shadow: white 0 0 4px;\n    border-radius: 10px;\n    overflow: hidden; }\n    .equipment .slot > div {\n      width: 48px;\n      height: 48px; }\n    .equipment .slot img {\n      display: block;\n      width: 48px;\n      height: 48px; }\n  .equipment .armor {\n    float: left;\n    margin-left: 10%; }\n  .equipment .accessories {\n    float: right;\n    margin-right: 10%; }\n  .equipment .weapons {\n    clear: both;\n    margin: 10px auto;\n    width: 264px; }\n    .equipment .weapons .slot {\n      display: inline-block; }\n      .equipment .weapons .slot:nth-child(3) {\n        margin-left: 24px; }\n  .equipment .aquatic, .equipment .tools {\n    clear: both;\n    margin: 10px auto;\n    width: 180px; }\n    .equipment .aquatic .slot, .equipment .tools .slot {\n      display: inline-block; }\n  .equipment .popover {\n    position: absolute;\n    padding: 10px;\n    background-color: #333;\n    box-shadow: white 0px 0px 20px;\n    z-index: 2;\n    color: white; }\n    .equipment .popover .title {\n      font-weight: bold; }\n"

/***/ },

/***/ 712:
/***/ function(module, exports) {

module.exports = "<div class=\"main\">\n  <div class=\"header\">\n\n  </div>\n\n  <h1 *ngIf=\"username\">\n    Welcome, {{username}}\n  </h1>\n\n  <router-outlet></router-outlet>\n    <!-- <ul>\n      <li *ngFor=\"let prof of professions\">\n        <img [src]=\"prof.icon\" /><span>{{ prof.name }}</span>\n      </li>\n    </ul> -->\n\n\n</div>\n"

/***/ },

/***/ 713:
/***/ function(module, exports) {

module.exports = "<div *ngIf=\"character\" class=\"details\">\n  <div class=\"present\">\n    <img *ngIf=\"profession\" [src]=\"profession.icon_big\" />\n    <span class=\"name\">{{character.name}}</span>\n    <span class=\"info\">Level {{character.level}} {{character.race}} {{ character.profession }}</span>\n  </div>\n\n  <div class=\"equipmentWrapper\">\n    <div *ngIf=\"loading\" class=\"equipmentLoader\">Loading</div>\n    <equipment [character]=\"character\"></equipment>\n  </div>\n\n  <div *ngIf=\"!professions\" class=\"specializations\">\n    Loading...\n  </div>\n  <div *ngIf=\"profession\" class=\"specializations\">\n    <div *ngFor=\"let spec of profession.specializations\" class=\"specialization\" [class.selected]=\"selectedSpecs[spec.id]\">\n      <h2 (click)=\"toggle(spec.name)\"><img height=\"30\" [src]=\"spec.icon\" />{{spec.name}}</h2>\n      <div class=\"spec-container\" [class.show]=\"display[spec.name]\">\n        <img class=\"background\" [src]=\"spec.background\">\n        <div class=\"trait-grid\">\n          <div *ngFor=\"let trait of spec.traits\" class=\"trait\" [class.minor]=\"trait.slot === 'Minor'\" [class.selected]=\"characterSpecSelected(trait)\">\n            <img [src]=\"trait.icon\" [alt]=\"trait.name\" [title]=\"trait.name\" />\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>\n<div *ngIf=\"!character\" class=\"details\">\n  Loading...\n</div>\n"

/***/ },

/***/ 714:
/***/ function(module, exports) {

module.exports = "<div class=\"character\">\n  <ul class=\"character-list\">\n    <li *ngIf=\"loading\">\n      <span>\n         Loading...\n      </span>\n    </li>\n    <li *ngFor=\"let char of characterNames\" routerLinkActive=\"selected\" [routerLink]=\"[char]\">\n      <span>\n        {{ char }}\n      </span>\n    </li>\n  </ul>\n\n  <router-outlet></router-outlet>\n</div>\n"

/***/ },

/***/ 715:
/***/ function(module, exports) {

module.exports = "<ul>\n  <li *ngFor=\"let char of characterNames\">\n    <span (click)=\"displayCharacter(char)\">{{ char }}</span>\n  </li>\n</ul>\n"

/***/ },

/***/ 716:
/***/ function(module, exports) {

module.exports = "<div class=\"equipment\" [style.background-image]=\"equipmentBackground(character.profession)\">\n\n  <div class=\"armor\">\n    <div class=\"slot\" *ngFor=\"let item of itemsByCategory['armor']\" (mouseover)=\"showDetails(item, $event)\" (mouseout)=\"hideDetails()\">\n      <div *ngIf=\"item\">\n        <img [src]=\"item.icon\" [title]=\"item.name\" (mouseout)=\"hideDetails()\"/>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"accessories\">\n    <div class=\"slot\" *ngFor=\"let item of itemsByCategory['accessories']\">\n      <div *ngIf=\"item\" (mouseover)=\"showDetails(item, $event)\" (mouseout)=\"hideDetails()\">\n        <img [src]=\"item.icon\" [title]=\"item.name\" />\n      </div>\n    </div>\n  </div>\n\n  <div class=\"weapons\">\n    <div class=\"slot\" *ngFor=\"let item of itemsByCategory['weapons']\">\n      <div *ngIf=\"item\" (mouseover)=\"showDetails(item, $event)\" (mouseout)=\"hideDetails()\">\n        <img [src]=\"item.icon\" [title]=\"item.name\" />\n      </div>\n    </div>\n  </div>\n\n  <div class=\"aquatic\">\n    <div class=\"slot\" *ngFor=\"let item of itemsByCategory['aquatic']\">\n      <div *ngIf=\"item\" (mouseover)=\"showDetails(item, $event)\" (mouseout)=\"hideDetails()\">\n        <img [src]=\"item.icon\" [title]=\"item.name\" />\n      </div>\n    </div>\n  </div>\n\n  <div class=\"tools\">\n    <div class=\"slot\" *ngFor=\"let item of itemsByCategory['tools']\">\n      <div *ngIf=\"item\" (mouseover)=\"showDetails(item, $event)\" (mouseout)=\"hideDetails()\">\n        <img [src]=\"item.icon\" [title]=\"item.name\" />\n      </div>\n    </div>\n  </div>\n\n  <div class=\"popover\" *ngIf=\"displayDetails\" [style.top]=\"displayDetails.y\" [style.left]=\"displayDetails.x\">\n    <span class=\"title\">{{ displayDetails.item.name }}</span>\n    <div *ngIf=\"displayDetails.item.details.min_power\">Power {{displayDetails.item.details.min_power}} - {{displayDetails.item.details.max_power}}</div>\n    <div *ngIf=\"displayDetails.item.details.defense\">Defense {{displayDetails.item.details.defense}}</div>\n    <ul *ngIf=\"displayDetails.item.details.infix_upgrade\">\n      <li *ngFor=\"let bonus of displayDetails.item.details.infix_upgrade.attributes\">\n        +{{bonus.modifier}} {{bonus.attribute}}\n      </li>\n    </ul>\n    <ul *ngIf=\"displayDetails.item.stats\">\n      <li *ngFor=\"let bonus of displayDetails.item.stats.attributes\">\n        +{{bonus.modifier}} {{bonus.attribute}}\n      </li>\n    </ul>\n  </div>\n</div>\n"

/***/ },

/***/ 982:
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(427);


/***/ }

},[982]);
//# sourceMappingURL=main.bundle.map