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
var router_1 = require("@angular/router");
var task_repository_model_1 = require("../model/task.repository.model");
var TaskDetailComponent = (function () {
    function TaskDetailComponent(taskModel, activateRoute) {
        this.taskModel = taskModel;
        this.activateRoute = activateRoute;
        this.selected = false;
        this.done = false;
        this.id = activateRoute.snapshot.params['id'];
        this.task = this.getData();
    }
    TaskDetailComponent.prototype.selectAction = function () {
        this.selected = !this.selected;
    };
    TaskDetailComponent.prototype.isSelected = function () {
        return this.selected;
    };
    TaskDetailComponent.prototype.getData = function () {
        return this.taskModel.getTask(this.id);
    };
    TaskDetailComponent.prototype.saveData = function (t) {
        var _this = this;
        this.taskModel.postData(t).subscribe(function (data) {
            if (data["result"] == 'ok') {
                _this.done = true;
                setTimeout(function () { _this.done = false; }, 2000);
            }
        }, function (error) { return console.log(error); });
    };
    TaskDetailComponent = __decorate([
        core_1.Component({
            selector: 'task-detail',
            templateUrl: './task-detail.component.html',
            styleUrls: ['/task-detail.style.less']
        }),
        __metadata("design:paramtypes", [task_repository_model_1.Model,
            router_1.ActivatedRoute])
    ], TaskDetailComponent);
    return TaskDetailComponent;
}());
exports.TaskDetailComponent = TaskDetailComponent;
//# sourceMappingURL=task-detail.component.js.map