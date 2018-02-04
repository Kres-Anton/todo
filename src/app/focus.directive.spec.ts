import { Component } from '@angular/core';
import { TestBed, ComponentFixture, async, fakeAsync, tick} from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { DebugElement } from '@angular/core';
import { FocusDirective } from './focus.directive';

@Component({
	template:`
		<input type="text" focus>
	`
})

class FocusTestComponent {	
}

	describe('focus directive test',()=>{
		
		let fixture: ComponentFixture<FocusTestComponent>;
		let component: FocusTestComponent;
		let de: DebugElement;
	
		beforeEach(async(()=>{
			TestBed.configureTestingModule({
				declarations:[FocusTestComponent,FocusDirective]
			})
			.compileComponents();
		}));
		
		beforeEach(()=>{
			fixture = TestBed.createComponent(FocusTestComponent);
			component = fixture.componentInstance;
			de = fixture.debugElement.query(By.css('input'));
		});
		
		
		it("should be change focus stance in directive",()=>{
			
			let directive = de.injector.get(FocusDirective);
			let before = directive.focusEvent;
			de.triggerEventHandler('click', null); 
  			fixture.detectChanges();
  			let after = directive.focusEvent;
  			expect(before).not.toEqual(after);		
			
		});
	});
	


