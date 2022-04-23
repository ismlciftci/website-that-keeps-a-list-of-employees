import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {TodoService} from './services/todo.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { WallComponent } from './components/wall/wall.component';
import { TodoComponent } from './models/todo/todo.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WallComponent,
    TodoComponent
  ],
  imports: [

    BrowserModule,
    AppRoutingModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
