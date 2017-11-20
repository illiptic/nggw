webpackJsonp([0,3],{169:function(t,e,i){"use strict";var n=i(1),a=i(400),o=(i.n(a),i(170));i.d(e,"a",function(){return c});var r=this&&this.__decorate||function(t,e,i,n){var a,o=arguments.length,r=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,n);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(r=(o<3?a(r):o>3?a(e,i,r):a(e,i))||r);return o>3&&r&&Object.defineProperty(e,i,r),r},s=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},c=function(){function t(t){this.api=t,this.characters={}}return t.prototype.getCharacters=function(){return this.api.get("characters").map(function(t){return t})},t.prototype.getCharacter=function(t){var e=this;return this.characters[t]?a.Observable.of(this.characters[t]):this.api.get("characters/"+t).map(function(i){var n=i;return n.equipment.map(function(t){return t.stats&&(t.stats.attributes=Object.keys(t.stats.attributes).map(function(e){return{attribute:e,modifier:t.stats.attributes[e]}})),t}),e.characters[t]=n,n})},t.prototype.getCharacterItems=function(t){var e=this;return this.api.get("characters/"+t+"/equipment").flatMap(function(t){return e.api.get("items?ids="+t.equipment.map(function(t){return t.id}).join(","))}).map(function(t){return t.reduce(function(t,e){return t[e.id]=e,t},{})})},t=r([i.i(n.R)(),s("design:paramtypes",["function"==typeof(e="undefined"!=typeof o.a&&o.a)&&e||Object])],t);var e}()},170:function(t,e,i){"use strict";var n=i(1),a=i(337),o=i(361);i.d(e,"a",function(){return f});var r=this&&this.__decorate||function(t,e,i,n){var a,o=arguments.length,r=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,n);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(r=(o<3?a(r):o>3?a(e,i,r):a(e,i))||r);return o>3&&r&&Object.defineProperty(e,i,r),r},s=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},c=o.a.apiUrl+"/",p="5129EB54-8EB1-3941-95FF-BF1826D6309F615A7A1B-52D6-423E-97E7-0450B0C25307",l=new a.a({Authorization:"Bearer "+p}),f=function(){function t(t){this.http=t}return t.prototype.get=function(t){return this.http.get(c+t,{headers:l}).map(function(t){return t.json()})},t=r([i.i(n.R)(),s("design:paramtypes",["function"==typeof(e="undefined"!=typeof a.b&&a.b)&&e||Object])],t);var e}()},243:function(t,e,i){"use strict";var n=i(1),a=i(170);i.d(e,"a",function(){return s});var o=this&&this.__decorate||function(t,e,i,n){var a,o=arguments.length,r=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,n);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(r=(o<3?a(r):o>3?a(e,i,r):a(e,i))||r);return o>3&&r&&Object.defineProperty(e,i,r),r},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},s=function(){function t(t){this.api=t}return t.prototype.getAccount=function(){return this.api.get("account").map(function(t){return t})},t=o([i.i(n.R)(),r("design:paramtypes",["function"==typeof(e="undefined"!=typeof a.a&&a.a)&&e||Object])],t);var e}()},360:function(t,e,i){"use strict";var n=i(1),a=i(400),o=(i.n(a),i(170));i.d(e,"a",function(){return c});var r=this&&this.__decorate||function(t,e,i,n){var a,o=arguments.length,r=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,n);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(r=(o<3?a(r):o>3?a(e,i,r):a(e,i))||r);return o>3&&r&&Object.defineProperty(e,i,r),r},s=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},c=function(){function t(t){this.api=t,this.professions=null}return t.prototype.getProfessions=function(){var t=this;return this.professions?a.Observable.of(this.professions):this.api.get("professions").map(function(t){return t}).flatMap(function(e){return t.api.get("professions?ids="+e.join(","))}).flatMap(function(e){return a.Observable.forkJoin(e.map(function(e){return t.api.get("specializations?ids="+e.specializations.join(",")).flatMap(function(i){return e.specializations=i,a.Observable.forkJoin(i.map(function(e){return t.api.get("traits?ids="+e.minor_traits.concat(e.major_traits).join(",")).map(function(t){e.traits=t.sort(function(t,e){return t.tier!==e.tier?t.tier-e.tier:t.order!==e.order?t.order-e.order:"Minor"===t.slot?-1:1})})}))})})).map(function(){return t.professions=e.reduce(function(t,e){return t[e.id]=e,t},{}),t.professions})})},t=r([i.i(n.R)(),s("design:paramtypes",["function"==typeof(e="undefined"!=typeof o.a&&o.a)&&e||Object])],t);var e}()},361:function(t,e,i){"use strict";i.d(e,"a",function(){return n});var n={production:!0,apiUrl:"https://api.guildwars2.com/v2"}},427:function(t,e){function i(t){throw new Error("Cannot find module '"+t+"'.")}i.keys=function(){return[]},i.resolve=i,t.exports=i,i.id=427},428:function(t,e,i){"use strict";var n=i(554),a=(i.n(n),i(516)),o=i(1),r=i(361),s=i(547);r.a.production&&i.i(o._40)(),i.i(a.a)().bootstrapModule(s.a)},545:function(t,e,i){"use strict";var n=i(1),a=i(167);i.d(e,"a",function(){return c});var o=this&&this.__decorate||function(t,e,i,n){var a,o=arguments.length,r=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,n);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(r=(o<3?a(r):o>3?a(e,i,r):a(e,i))||r);return o>3&&r&&Object.defineProperty(e,i,r),r},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},s=[{path:"",redirectTo:"/characters",pathMatch:"full"}],c=function(){function t(){}return t=o([i.i(n.I)({imports:[a.a.forRoot(s)],exports:[a.a]}),r("design:paramtypes",[])],t)}()},546:function(t,e,i){"use strict";var n=i(1),a=i(243);i.d(e,"a",function(){return s});var o=this&&this.__decorate||function(t,e,i,n){var a,o=arguments.length,r=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,n);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(r=(o<3?a(r):o>3?a(e,i,r):a(e,i))||r);return o>3&&r&&Object.defineProperty(e,i,r),r},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},s=function(){function t(t){this.accountService=t}return t.prototype.ngOnInit=function(){this.getAccount()},t.prototype.getAccount=function(){var t=this;this.accountService.getAccount().subscribe(function(e){t.username=e.name.split(".").shift()})},t=o([i.i(n.G)({selector:"app-root",template:i(712),styles:[i(707)]}),r("design:paramtypes",["function"==typeof(e="undefined"!=typeof a.a&&a.a)&&e||Object])],t);var e}()},547:function(t,e,i){"use strict";var n=i(118),a=i(1),o=i(507),r=i(337),s=i(170),c=i(243),p=i(169),l=i(360),f=i(546),u=i(552),d=i(545),h=i(551);i.d(e,"a",function(){return y});var m=this&&this.__decorate||function(t,e,i,n){var a,o=arguments.length,r=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,n);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(r=(o<3?a(r):o>3?a(e,i,r):a(e,i))||r);return o>3&&r&&Object.defineProperty(e,i,r),r},g=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},y=function(){function t(){}return t=m([i.i(a.I)({declarations:[f.a,u.a],imports:[n.c,o.a,r.c,d.a,h.a],providers:[s.a,c.a,p.a,l.a],bootstrap:[f.a]}),g("design:paramtypes",[])],t)}()},548:function(t,e,i){"use strict";var n=i(1),a=i(118),o=i(167),r=i(169),s=i(360);i.d(e,"a",function(){return l});var c=this&&this.__decorate||function(t,e,i,n){var a,o=arguments.length,r=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,n);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(r=(o<3?a(r):o>3?a(e,i,r):a(e,i))||r);return o>3&&r&&Object.defineProperty(e,i,r),r},p=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},l=function(){function t(t,e,i,n){this.sanitizer=t,this.route=e,this.characterService=i,this.professionService=n,this.selectedSpecs={},this.display={}}return t.prototype.ngOnInit=function(){var t=this;this.professionService.getProfessions().subscribe(function(e){t.professions=e,t.setProfession()}),this.route.params.switchMap(function(e){return t.loading=!0,t.getCharacter(e.id).map(function(e){return t.character=e,t.loading=!1,e})}).subscribe(function(e){t.setSelectedSpecs(e),t.setProfession()})},t.prototype.toggle=function(t){this.display[t]=!this.display[t]},t.prototype.setSelectedSpecs=function(t){var e=this;this.selectedSpecs={},t.specializations&&t.specializations.pve&&t.specializations.pve.forEach(function(t){t&&(e.selectedSpecs[t.id]=t)})},t.prototype.setProfession=function(){this.professions&&this.character&&(this.profession=this.professions[this.character.profession])},t.prototype.getCharacter=function(t){return this.characterService.getCharacter(t)},t.prototype.characterSpecSelected=function(t){var e=this.selectedSpecs[t.specialization];return e&&("Minor"===t.slot||e.traits.indexOf(t.id)>-1)},t=c([i.i(n.G)({selector:"character-detail",template:i(713),styles:[i(708)]}),p("design:paramtypes",["function"==typeof(e="undefined"!=typeof a.b&&a.b)&&e||Object,"function"==typeof(l="undefined"!=typeof o.c&&o.c)&&l||Object,"function"==typeof(f="undefined"!=typeof r.a&&r.a)&&f||Object,"function"==typeof(u="undefined"!=typeof s.a&&s.a)&&u||Object])],t);var e,l,f,u}()},549:function(t,e,i){"use strict";var n=i(1),a=i(167),o=i(243),r=i(169);i.d(e,"a",function(){return p});var s=this&&this.__decorate||function(t,e,i,n){var a,o=arguments.length,r=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,n);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(r=(o<3?a(r):o>3?a(e,i,r):a(e,i))||r);return o>3&&r&&Object.defineProperty(e,i,r),r},c=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},p=function(){function t(t,e,i){this.router=t,this.accountService=e,this.characterService=i}return t.prototype.ngOnInit=function(){this.loading=!0,this.getCharacters()},t.prototype.getCharacters=function(){var t=this;this.characterService.getCharacters().subscribe(function(e){t.loading=!1,t.characterNames=e})},t=s([i.i(n.G)({selector:"character",template:i(714),styles:[i(709)]}),c("design:paramtypes",["function"==typeof(e="undefined"!=typeof a.b&&a.b)&&e||Object,"function"==typeof(p="undefined"!=typeof o.a&&o.a)&&p||Object,"function"==typeof(l="undefined"!=typeof r.a&&r.a)&&l||Object])],t);var e,p,l}()},550:function(t,e,i){"use strict";i.d(e,"a",function(){return n});var n=function(){function t(){}return t}()},551:function(t,e,i){"use strict";var n=i(1),a=i(98),o=i(167),r=i(549),s=i(548),c=i(553);i.d(e,"a",function(){return u});var p=this&&this.__decorate||function(t,e,i,n){var a,o=arguments.length,r=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,n);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(r=(o<3?a(r):o>3?a(e,i,r):a(e,i))||r);return o>3&&r&&Object.defineProperty(e,i,r),r},l=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},f=[{path:"characters",component:r.a,children:[{path:":id",component:s.a}]}],u=function(){function t(){}return t=p([i.i(n.I)({imports:[a.b,o.a.forChild(f)],declarations:[c.a,s.a,r.a]}),l("design:paramtypes",[])],t)}()},552:function(t,e,i){"use strict";var n=i(1);i.d(e,"a",function(){return r});var a=this&&this.__decorate||function(t,e,i,n){var a,o=arguments.length,r=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,n);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(r=(o<3?a(r):o>3?a(e,i,r):a(e,i))||r);return o>3&&r&&Object.defineProperty(e,i,r),r},o=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},r=function(){function t(){}return a([i.i(n.B)(),o("design:type",Object)],t.prototype,"callback",void 0),t=a([i.i(n.G)({selector:"app-menu",template:i(715),styles:[i(710)]}),o("design:paramtypes",[])],t)}()},553:function(t,e,i){"use strict";var n=i(1),a=i(550),o=i(169);i.d(e,"a",function(){return c});var r=this&&this.__decorate||function(t,e,i,n){var a,o=arguments.length,r=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,n);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(r=(o<3?a(r):o>3?a(e,i,r):a(e,i))||r);return o>3&&r&&Object.defineProperty(e,i,r),r},s=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},c=function(){function t(t){this.characterService=t,this.slots={armor:["Helm","Shoulders","Coat","Gloves","Leggings","Boots"],accessories:["Amulet","Backpack","Accessory1","Accessory2","Ring1","Ring2"],aquatic:["HelmAquatic","WeaponAquaticA","WeaponAquaticB"],weapons:["WeaponA1","WeaponA2","WeaponB1","WeaponB2"],tools:["Sickle","Axe","Pick"]}}return t.prototype.ngOnInit=function(){var t=this;this.itemsByCategory={},Object.keys(this.slots).forEach(function(e){t.itemsByCategory[e]=t.slots[e].map(function(t){return null})})},t.prototype.ngOnChanges=function(){var t=this,e=this.character;this.characterService.getCharacterItems(e.name).subscribe(function(e){t.equipment=e,Object.keys(t.slots).forEach(function(e){t.itemsByCategory[e]=t.getItems(e)})})},t.prototype.equipmentBackground=function(t){return"url(/assets/professions/"+t.toLowerCase()+".jpg)"},t.prototype.showDetails=function(t,e){t?this.displayDetails={item:t,x:e.target.offsetLeft+60+"px",y:e.target.offsetTop+"px"}:this.displayDetails=null},t.prototype.hideDetails=function(){this.displayDetails=null},t.prototype.getItems=function(t){var e=this;return this.slots[t].map(function(t){var i=e.character.equipment.filter(function(e){return e.slot===t})[0];return i?Object.assign({},e.equipment[i.id],i):null})},r([i.i(n.B)(),s("design:type","function"==typeof(e="undefined"!=typeof a.a&&a.a)&&e||Object)],t.prototype,"character",void 0),t=r([i.i(n.G)({selector:"equipment",template:i(716),styles:[i(711)]}),s("design:paramtypes",["function"==typeof(c="undefined"!=typeof o.a&&o.a)&&c||Object])],t);var e,c}()},554:function(t,e,i){"use strict";var n=i(568),a=(i.n(n),i(561)),o=(i.n(a),i(557)),r=(i.n(o),i(563)),s=(i.n(r),i(562)),c=(i.n(s),i(560)),p=(i.n(c),i(559)),l=(i.n(p),i(567)),f=(i.n(l),i(556)),u=(i.n(f),i(555)),d=(i.n(u),i(565)),h=(i.n(d),i(558)),m=(i.n(h),i(566)),g=(i.n(m),i(564)),y=(i.n(g),i(569)),v=(i.n(y),i(981));i.n(v)},707:function(t,e){t.exports='.main{max-width:1200px;margin:0 auto}.main .header{background-image:url("assets/header-bg.jpg");background-position:center;height:200px}\n'},708:function(t,e){t.exports=".details{padding:10px;box-shadow:5px 5px 8px black;margin:10px 20px;background:#333;overflow:auto}.details .present{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-line-pack:start;align-content:flex-start;height:64px;overflow:hidden}.details .present img{margin-top:-5px}.details .present .name{font-size:2em;font-weight:bold}.details .equipmentWrapper{position:relative;float:left;min-width:400px;min-height:400px;width:50%}.details .equipmentWrapper .equipmentLoader{position:absolute;width:100%;height:100%;background-color:black;opacity:.85;z-index:1;text-align:center;color:white;padding-top:50%}.details .specializations{background-color:black;color:white;float:left;min-width:400px;width:50%}.details .specializations .specialization{border-bottom:1px solid white;border-top:1px solid white;margin-bottom:-1px;background-color:#333;color:#aaa}.details .specializations .specialization.selected{background-color:black;color:white}.details .specializations .specialization.selected h2 img{opacity:1}.details .specializations .specialization .spec-container{position:relative;overflow:hidden;height:0;-webkit-transition:height 100ms ease-in;transition:height 100ms ease-in}.details .specializations .specialization .spec-container.show{height:160px}.details .specializations .specialization h2{margin:0;padding:8px;height:30px;z-index:1;cursor:pointer}.details .specializations .specialization h2 img{vertical-align:bottom;margin-right:5px;opacity:0.4}.details .specializations .specialization .background{position:absolute;left:0;bottom:0;background-position:0 100%;opacity:0.4}.details .specializations .specialization .trait-grid{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:wrap;flex-wrap:wrap;height:160px;-ms-flex-line-pack:distribute;align-content:space-around;-ms-flex-pack:distribute;justify-content:space-around}.details .specializations .specialization .trait{height:48px;width:48px;z-index:1;opacity:0.4}.details .specializations .specialization .trait.minor{margin:48px 0}.details .specializations .specialization .trait.selected{opacity:1}.details .specializations .specialization .trait img{width:100%;height:100%}\n"},709:function(t,e){t.exports=".character .character-list{list-style-type:none;height:65px;margin:10px 20px;padding:0px;box-shadow:5px 5px 8px black;background:#333;display:-webkit-box;display:-ms-flexbox;display:flex}.character .character-list li{-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;font-size:1.3em;font-weight:bold;margin:0;color:white;text-align:center;padding-top:20px;cursor:pointer;-webkit-transition:background 300ms ease-in;transition:background 300ms ease-in}.character .character-list li.selected{background:#666}.character character-detail{display:block}.character .detail{-webkit-box-flex:2;-ms-flex:2 0 auto;flex:2 0 auto}\n"},710:function(t,e){t.exports=""},711:function(t,e){t.exports=".equipment{position:relative;background-repeat:no-repeat;background-position:top center}.equipment .slot{width:48px;height:48px;margin:6px;background:-webkit-radial-gradient(#6B4500, #fff);background:radial-gradient(#6B4500, #fff);box-shadow:white 0 0 4px;border-radius:10px;overflow:hidden}.equipment .slot>div{width:48px;height:48px}.equipment .slot img{display:block;width:48px;height:48px}.equipment .armor{float:left;margin-left:10%}.equipment .accessories{float:right;margin-right:10%}.equipment .weapons{clear:both;margin:10px auto;width:264px}.equipment .weapons .slot{display:inline-block}.equipment .weapons .slot:nth-child(3){margin-left:24px}.equipment .aquatic,.equipment .tools{clear:both;margin:10px auto;width:180px}.equipment .aquatic .slot,.equipment .tools .slot{display:inline-block}.equipment .popover{position:absolute;padding:10px;background-color:#333;box-shadow:white 0px 0px 20px;z-index:2;color:white}.equipment .popover .title{font-weight:bold}\n"},712:function(t,e){t.exports='<div class="main">\n  <div class="header">\n\n  </div>\n\n  <h1 *ngIf="username">\n    Welcome, {{username}}\n  </h1>\n\n  <router-outlet></router-outlet>\n    <!-- <ul>\n      <li *ngFor="let prof of professions">\n        <img [src]="prof.icon" /><span>{{ prof.name }}</span>\n      </li>\n    </ul> -->\n\n\n</div>\n'},713:function(t,e){t.exports='<div *ngIf="character" class="details">\n  <div class="present">\n    <img *ngIf="profession" [src]="profession.icon_big" />\n    <span class="name">{{character.name}}</span>\n    <span class="info">Level {{character.level}} {{character.race}} {{ character.profession }}</span>\n  </div>\n\n  <div class="equipmentWrapper">\n    <div *ngIf="loading" class="equipmentLoader">Loading</div>\n    <equipment [character]="character"></equipment>\n  </div>\n\n  <div *ngIf="!professions" class="specializations">\n    Loading...\n  </div>\n  <div *ngIf="profession" class="specializations">\n    <div *ngFor="let spec of profession.specializations" class="specialization" [class.selected]="selectedSpecs[spec.id]">\n      <h2 (click)="toggle(spec.name)"><img height="30" [src]="spec.icon" />{{spec.name}}</h2>\n      <div class="spec-container" [class.show]="display[spec.name]">\n        <img class="background" [src]="spec.background">\n        <div class="trait-grid">\n          <div *ngFor="let trait of spec.traits" class="trait" [class.minor]="trait.slot === \'Minor\'" [class.selected]="characterSpecSelected(trait)">\n            <img [src]="trait.icon" [alt]="trait.name" [title]="trait.name" />\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>\n<div *ngIf="!character" class="details">\n  Loading...\n</div>\n'},714:function(t,e){t.exports='<div class="character">\n  <ul class="character-list">\n    <li *ngIf="loading">\n      <span>\n         Loading...\n      </span>\n    </li>\n    <li *ngFor="let char of characterNames" routerLinkActive="selected" [routerLink]="[char]">\n      <span>\n        {{ char }}\n      </span>\n    </li>\n  </ul>\n\n  <router-outlet></router-outlet>\n</div>\n'},715:function(t,e){t.exports='<ul>\n  <li *ngFor="let char of characterNames">\n    <span (click)="displayCharacter(char)">{{ char }}</span>\n  </li>\n</ul>\n'},716:function(t,e){t.exports='<div class="equipment" [style.background-image]="equipmentBackground(character.profession)">\n\n  <div class="armor">\n    <div class="slot" *ngFor="let item of itemsByCategory[\'armor\']" (mouseover)="showDetails(item, $event)" (mouseout)="hideDetails()">\n      <div *ngIf="item">\n        <img [src]="item.icon" [title]="item.name" (mouseout)="hideDetails()"/>\n      </div>\n    </div>\n  </div>\n\n  <div class="accessories">\n    <div class="slot" *ngFor="let item of itemsByCategory[\'accessories\']">\n      <div *ngIf="item" (mouseover)="showDetails(item, $event)" (mouseout)="hideDetails()">\n        <img [src]="item.icon" [title]="item.name" />\n      </div>\n    </div>\n  </div>\n\n  <div class="weapons">\n    <div class="slot" *ngFor="let item of itemsByCategory[\'weapons\']">\n      <div *ngIf="item" (mouseover)="showDetails(item, $event)" (mouseout)="hideDetails()">\n        <img [src]="item.icon" [title]="item.name" />\n      </div>\n    </div>\n  </div>\n\n  <div class="aquatic">\n    <div class="slot" *ngFor="let item of itemsByCategory[\'aquatic\']">\n      <div *ngIf="item" (mouseover)="showDetails(item, $event)" (mouseout)="hideDetails()">\n        <img [src]="item.icon" [title]="item.name" />\n      </div>\n    </div>\n  </div>\n\n  <div class="tools">\n    <div class="slot" *ngFor="let item of itemsByCategory[\'tools\']">\n      <div *ngIf="item" (mouseover)="showDetails(item, $event)" (mouseout)="hideDetails()">\n        <img [src]="item.icon" [title]="item.name" />\n      </div>\n    </div>\n  </div>\n\n  <div class="popover" *ngIf="displayDetails" [style.top]="displayDetails.y" [style.left]="displayDetails.x">\n    <span class="title">{{ displayDetails.item.name }}</span>\n    <div *ngIf="displayDetails.item.details.min_power">Power {{displayDetails.item.details.min_power}} - {{displayDetails.item.details.max_power}}</div>\n    <div *ngIf="displayDetails.item.details.defense">Defense {{displayDetails.item.details.defense}}</div>\n    <ul *ngIf="displayDetails.item.details.infix_upgrade">\n      <li *ngFor="let bonus of displayDetails.item.details.infix_upgrade.attributes">\n        +{{bonus.modifier}} {{bonus.attribute}}\n      </li>\n    </ul>\n    <ul *ngIf="displayDetails.item.stats">\n      <li *ngFor="let bonus of displayDetails.item.stats.attributes">\n        +{{bonus.modifier}} {{bonus.attribute}}\n      </li>\n    </ul>\n  </div>\n</div>\n'},982:function(t,e,i){t.exports=i(428)}},[982]);
//# sourceMappingURL=main.ec7e4e6610386ff8d8e4.bundle.map