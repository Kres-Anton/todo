import { TestBed, ComponentFixture,async, fakeAsync, tick} from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { FormsModule,ReactiveFormsModule }   from '@angular/forms';
import { DebugElement } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { TaskListComponent } from './task-list.component';
import { TaskDetailComponent } from '../task-detail-component/task-detail.component';


import { Model } from '../model/task.repository.model';
import { Task } from '../model/task.model';




describe("TaskListComponent", () => {
		
	let fixture: ComponentFixture<TaskListComponent>;
	let component: TaskListComponent;


	let mockRepository = {
		
		values:[		
				new Task(1, "Today_task1", "2015-04-21T06:50:21","2015-04-22T23:59:00","2015-04-21T00:00:01",false,
				false,false,5.5,3.3,60,"active","Lorem_ipsum_dolor_sit_amet,_consectetur_adipiscing_elit",0),
				new Task(11, "Today_task11", "2015-04-21T06:50:21","2015-04-22T23:59:00","2015-04-21T00:00:01",false,
				false,true,5.5,3.3,60,"active","Lorem_ipsum_dolor_sit_amet,_consectetur_adipiscing_elit",0,["meeting"]),
				new Task(1, "Today_task1", "2015-04-21T06:50:21","2015-04-22T23:59:00","2015-04-21T00:00:01",false,
				false,false,5.5,3.3,60,"deleted","Lorem_ipsum_dolor_sit_amet,_consectetur_adipiscing_elit",0)
				],
		
		getTasks:function(){
		return mockRepository.values;
		},
		
		getData:function(){
		return mockRepository.values;
		}
		

	}
	

		
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports:[FormsModule,ReactiveFormsModule,RouterTestingModule.withRoutes([])],
			declarations: [TaskListComponent, TaskDetailComponent],
			providers:[	{provide: Model, useValue:mockRepository}]
		}).compileComponents()
	}));
	
	
	beforeEach(()=>{
		fixture = TestBed.createComponent(TaskListComponent);
		component = fixture.componentInstance;
	});
	
	




	it("component should be defined", () => {
		expect(component).toBeDefined();
	});
	
	
	it("should retrun all task", ()=>{
		
		expect(component.getData().length).toBe(mockRepository.getTasks().length);
	})
	
	it("getData method should be called on init", ()=>{
		spyOn(component,'ngOnInit').and.returnValue(mockRepository.getTasks());
		fixture.detectChanges();
		
		expect(component.ngOnInit).toHaveBeenCalled();
	});
	

});