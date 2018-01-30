"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_service_1 = require("../http.service");
var Model = (function () {
    function Model(httpService) {
        var _this = this;
        this.httpService = httpService;
        this.tasks = [];
        this.locator = function (t, id) { return t.id == id; };
        this.httpService.getData().subscribe(function (data) { return _this.tasks = data; });
    }
    Model.prototype.getTasks = function () {
        return this.tasks;
    };
    Model.prototype.getTask = function (id) {
        var _this = this;
        return this.tasks.find(function (t) { return _this.locator(t, id); });
    };
    Model.prototype.postData = function (t) {
        return this.httpService.postData(t);
    };
    Model = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_service_1.HttpService])
    ], Model);
    return Model;
}());
exports.Model = Model;
//# sourceMappingURL=task.repository.model.js.map