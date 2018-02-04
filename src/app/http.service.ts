import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from "./model/task.model";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
  
@Injectable()
export class HttpService{
  
    constructor(private http: HttpClient){ }
         
    getData(): Observable<Task[]>{
        return this.http.get('tasks.json').map(res => res as Task[]);
	}
	
	
	postData(task: Task): Observable<Task>{         
       return this.http.put('http://localhost:7001/api/task', task);
    }
}