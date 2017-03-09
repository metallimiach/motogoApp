"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
// custom modules
var app_firebase_module_1 = require("./app-firebase.module");
// routes
var app_routing_module_1 = require("./app-routing.module");
// components
var app_component_1 = require("./app.component");
var calendar_component_1 = require("././components/calendar.component");
var teams_component_1 = require("././components/teams.component");
var riders_component_1 = require("././components/riders.component");
var event_component_1 = require("././components/event.component");
// services
var event_service_1 = require("./services/event.service");
var team_service_1 = require("./services/team.service");
var rider_service_1 = require("./services/rider.service");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            app_routing_module_1.AppRoutingModule,
            app_firebase_module_1.AppFirebaseModule,
            http_1.HttpModule
        ],
        declarations: [
            app_component_1.AppComponent,
            calendar_component_1.CalendarComponent,
            teams_component_1.TeamComponent,
            riders_component_1.RiderComponent,
            event_component_1.EventComponent
        ],
        providers: [
            event_service_1.EventService,
            team_service_1.TeamService,
            rider_service_1.RiderService
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map