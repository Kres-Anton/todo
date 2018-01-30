import {Task} from "./task.model";
import { Injectable } from "@angular/core";
import { HttpService } from "../http.service";

@Injectable()
export class Model {
	

	private tasks: Task[] = [];
	private locator =(t: Task,id: number)=> t.id == id;
	
	constructor (private httpService:HttpService ){
		this.httpService.getData().subscribe(data => this.tasks = data);
	}
		
	
	getTasks(): Task[]{
		return this.tasks;
	}
	
	getTask(id: number) : Task {
		return this.tasks.find(t => this.locator(t,id));
	}
	
	postData(t: Task){
		return this.httpService.postData(t);
	}
}
