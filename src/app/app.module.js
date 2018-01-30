"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var http_1 = require("@angular/common/http");
var task_repository_model_1 = require("./model/task.repository.model");
var http_service_1 = require("./http.service");
var forms_1 = require("@angular/forms");
var focus_directive_1 = require("./focus.directive");
var app_component_1 = require("./app.component");
var task_list_component_1 = require("./task-list-component/task-list.component");
var task_detail_component_1 = require("./task-detail-component/task-detail.component");
var appRoutes = [
    { path: '', component: task_list_component_1.TaskListComponent },
    { path: 'detail/:id', component: task_detail_component_1.TaskDetailComponent },
    { path: '**', redirectTo: '/' }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, router_1.RouterModule.forRoot(appRoutes), http_1.HttpClientModule, forms_1.FormsModule],
            declarations: [app_component_1.AppComponent, task_list_component_1.TaskListComponent, task_detail_component_1.TaskDetailComponent, focus_directive_1.FocusDirective],
            providers: [task_repository_model_1.Model, http_service_1.HttpService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map