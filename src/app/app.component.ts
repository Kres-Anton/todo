import { Component} from '@angular/core';
  
@Component({
    selector: 'my-app',
    template: `<div class="wraper">
                    <router-outlet></router-outlet>
               </div>`
})
export class AppComponent {}