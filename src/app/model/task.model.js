"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Task = (function () {
    function Task(id, name, creation_date, due_date, start_date, is_completed, is_archived, estimated_effort, actual_effort, physical_progress, obj_status, description, project_id, tags) {
        this.id = id;
        this.name = name;
        this.creation_date = creation_date;
        this.due_date = due_date;
        this.start_date = start_date;
        this.is_completed = is_completed;
        this.is_archived = is_archived;
        this.estimated_effort = estimated_effort;
        this.actual_effort = actual_effort;
        this.physical_progress = physical_progress;
        this.obj_status = obj_status;
        this.description = description;
        this.project_id = project_id;
        this.tags = tags;
    }
    return Task;
}());
exports.Task = Task;
//# sourceMappingURL=task.model.js.map