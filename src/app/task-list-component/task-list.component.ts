import { Component } from '@angular/core';
import { Model } from '../model/task.repository.model';

     
@Component({
    selector: 'task-list',
    templateUrl: './task-list.component.html',
    styleUrls: ['/task-list.style.less']
})
export class TaskListComponent {
	 

	constructor (private taskModel: Model) {}
	
	ngOnInit(){
		this.taskModel.getData();
	}
	
    getData(){
    	return this.taskModel.getTasks();
    }
}



