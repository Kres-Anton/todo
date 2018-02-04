import { Component } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Model } from '../model/task.repository.model';
import { Task } from '../model/task.model';
import {Router, RouterModule} from '@angular/router';
     
@Component({
    selector: 'task-detail',
    templateUrl: './task-detail.component.html',
    styleUrls: ['/task-detail.style.less']
})
export class TaskDetailComponent { 
	
	public id: number;
	public task: Task;
	public selected: boolean = false;
	public done: boolean = false;
	
	constructor(private taskModel: Model, 
				private activateRoute: ActivatedRoute,
				private router: Router ){}
	
	ngOnInit(){
		this.taskModel.getData();
		this.activateRoute.params.subscribe(p =>{
			if(p['id']=== 0){
				this.router.navigate(['/'])
			} else {
				this.id = p['id'];
			}
		});
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
    
    redirect() {
    	this.router.navigate(['/']);
  	}
    
    saveData(t: Task){
    	this.taskModel.postData(t).subscribe(
                    (data) => {
                    		this.done=true;
                    		setTimeout(()=>{
                    			this.done=false;
                    			this.redirect();
                    			},2000);
                    },
                    error => {
                    	console.log(error);
                    	this.redirect();
                    }
                );
    }
    
}