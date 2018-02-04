import { TestBed, ComponentFixture,async} from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component'
import { RouterOutlet } from '@angular/router'



describe("AppComponent", () => {
		
	let fixture: ComponentFixture<AppComponent>;
	let component: AppComponent;
	
	
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports:[RouterTestingModule.withRoutes([])],
			declarations: [AppComponent],
		}).compileComponents();
	}));
	
	beforeEach(()=>{
		fixture = TestBed.createComponent(AppComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
		
	});



	it("component should be defined", () => {
		expect(component).toBeDefined();
	});
	
	it("should have a router outlet",()=>{
		fixture.detectChanges();
		let de = fixture.debugElement.queryAll(By.directive(RouterOutlet));
		

		expect(de).not.toBeNull();
	});

});