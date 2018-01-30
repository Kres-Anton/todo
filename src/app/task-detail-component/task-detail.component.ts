import { Component } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Model } from '../model/task.repository.model';
import { Task } from '../model/task.model';
     
@Component({
    selector: 'task-detail',
    templateUrl: './task-detail.component.html',
    styleUrls: ['/task-detail.style.less']
})
export class TaskDetailComponent { 
	
	public id: number;
	public task: Task;
	private selected: boolean = false;
	public done: boolean = false;
	
	constructor(private taskModel: Model, 
				private activateRoute: ActivatedRoute){
		this.id = activateRoute.snapshot.params['id'];
		this.task = this.getData();
	}
	
	selectAction(){
		this.selected=!this.selected;
	}
	
	isSelected(){
		return this.selected;
	}
	
	getData(){
    	return this.taskModel.getTask(this.id);
    }
    
    saveData(t: Task){
    	this.taskModel.postData(t).subscribe(
                    (data) => {
                    	if(data["result"]=='ok'){
                    		this.done=true;
                    		setTimeout(()=>{this.done=false;},2000);
                    	} 
                    },
                    error => console.log(error)
                );
    }
    
}