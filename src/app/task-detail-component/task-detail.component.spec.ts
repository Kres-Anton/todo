import { TestBed, ComponentFixture, async, fakeAsync, tick} from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { FormsModule,ReactiveFormsModule }   from '@angular/forms';
import { DebugElement } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { TaskDetailComponent } from '../task-detail-component/task-detail.component';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from "rxjs";
import { Model } from '../model/task.repository.model';
import { Task } from '../model/task.model';


class RouterStub {
	navigate(params){
		
	}
}

class ActivatedRouteStub {
	params: Observable<any> = Observable.empty();	
	
}


describe("TaskDetailComponent", () => {
	
	let fixture: ComponentFixture<TaskDetailComponent>;
	let component: TaskDetailComponent;
	
	
	let mockRepository = {
		
		values: [		
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
		},
		
		getTask:function(id){
			return mockRepository.values.filter((t)=> t.id==id);
		},
		
		postData:function(){
			return Observable.from([mockRepository.getTasks()[0]]);
		}
		

	}
	
	
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports:[FormsModule,ReactiveFormsModule],
			declarations: [TaskDetailComponent],
			providers:[	{provide: Model, useValue:mockRepository},
						{provide : Router, useClass: RouterStub},
						{provide: ActivatedRoute, useClass: ActivatedRouteStub }]
		}).compileComponents()
	}));
	
	
	beforeEach(()=>{
		fixture = TestBed.createComponent(TaskDetailComponent);
		component = fixture.componentInstance;
	});
	
	
	it("component should be defined", () => {
		expect(component).toBeDefined();
	});
	
	it ("should redirect to task list page after saving", fakeAsync(()=>{
		let router = TestBed.get(Router);
		let spy = spyOn(router,'navigate');
		
		
		component.saveData(mockRepository.getTasks()[0]);
		fixture.detectChanges();
		
		tick(2000);
		fixture.detectChanges();
		expect(spy).toHaveBeenCalledWith(['/']);
		})
		
	);
	
	it ("should change selected",()=>{
		let sa = component.selected;
		component.selectAction();
		fixture.detectChanges();
		
		expect(component.selected).not.toBe(sa);
	})
	
});