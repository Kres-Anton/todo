import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
 
import {Routes, RouterModule} from '@angular/router';

import { HttpClientModule }   from '@angular/common/http';

import { Model } from "./model/task.repository.model";
import { HttpService } from "./http.service";

import { FormsModule }   from '@angular/forms';

import { FocusDirective } from './focus.directive'
 
import { AppComponent }   from './app.component';
import { TaskListComponent }   from './task-list-component/task-list.component';
import { TaskDetailComponent }   from './task-detail-component/task-detail.component';

const appRoutes: Routes =[
    { path: '', component: TaskListComponent},
    { path: 'detail/:id', component: TaskDetailComponent},
    { path: '**', redirectTo: '/' }
];
 
@NgModule({
    imports:      [ BrowserModule, RouterModule.forRoot(appRoutes),HttpClientModule,FormsModule],
    declarations: [ AppComponent, TaskListComponent, TaskDetailComponent,FocusDirective],
    providers:[Model,HttpService],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }