import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.css']
})
export class BudgetComponent {

  newBudgetNameForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required)
  });

  constructor() {}

  createNewBudget() {
    console.log('clicked: ' + this.newBudgetNameForm.value.name)
  }
}
