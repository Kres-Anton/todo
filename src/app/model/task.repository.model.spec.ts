import { Model } from './task.repository.model';
import { HttpService } from '../http.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import { Task } from './task.model';
import { HttpClient } from '@angular/common/http';

describe('model repository',()=>{
	let model: Model;
	let httpService: HttpService;
	let taskArray=[		
				new Task(1, "Today_task1", "2015-04-21T06:50:21","2015-04-22T23:59:00","2015-04-21T00:00:01",false,
				false,false,5.5,3.3,60,"active","Lorem_ipsum_dolor_sit_amet,_consectetur_adipiscing_elit",0),
				new Task(11, "Today_task11", "2015-04-21T06:50:21","2015-04-22T23:59:00","2015-04-21T00:00:01",false,
				false,true,5.5,3.3,60,"active","Lorem_ipsum_dolor_sit_amet,_consectetur_adipiscing_elit",0,["meeting"]),
				new Task(1, "Today_task1", "2015-04-21T06:50:21","2015-04-22T23:59:00","2015-04-21T00:00:01",false,
				false,false,5.5,3.3,60,"deleted","Lorem_ipsum_dolor_sit_amet,_consectetur_adipiscing_elit",0)
				];
	
	beforeEach(()=>{
		httpService = new HttpService(null);
		model = new Model(httpService);
	});
	
	it('shoul retrun all tasks',()=>{
		spyOn(httpService,'getData').and.callFake(()=>{
			return Observable.from([taskArray]);
		});
		
		model.getData();
		expect(model.getTasks().length).toBe(taskArray.length);
	});
	
	it('shoul retrun  task by id',()=>{
		spyOn(httpService,'getData').and.callFake(()=>{
			return Observable.from([taskArray]);
		});
		
		model.getData();
		expect(model.getTask(taskArray[0].id)).toBe(taskArray[0]);
	});
	
	it('shoul retrun  task in answer when send put request',()=>{
		spyOn(httpService,'postData').and.callFake(()=>{
			return Observable.from([taskArray[0]]);
		});
		
		expect(model.postData(taskArray[0])).toEqual(Observable.from([taskArray[0]]));
	});
});
