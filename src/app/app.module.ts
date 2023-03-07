import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {TodoRowComponent} from './components/todo-row/todo-row.component';
import {TodoInputComponent} from './components/todo-input/todo-input.component';
import {TodoFiltersComponent} from './components/todo-filters/todo-filters.component';
import {TodoBuilderComponent} from './components/todo-builder/todo-builder.component';
import {FormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ToastrModule} from "ngx-toastr";

@NgModule({
  declarations: [
    AppComponent,
    TodoRowComponent,
    TodoInputComponent,
    TodoFiltersComponent,
    TodoBuilderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
