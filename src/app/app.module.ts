import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ExpenseComponent } from './components/create/expense/expense.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { BudgetComponent } from './components/create/budget/budget.component';
import { CreateNewComponent } from './components/create/create-new/create-new.component';

@NgModule({
  declarations: [
    AppComponent,
    ExpenseComponent,
    BudgetComponent,
    CreateNewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
