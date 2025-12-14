import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {BudgetService} from "../../../services/budget.service";
import {Budget} from "../../../interfaces/budget";

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.css']
})
export class BudgetComponent {

  newBudgetNameForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required)
  });

  constructor(private budgetService: BudgetService) {}

  createNewBudget() {
    console.log('clicked: ' + this.newBudgetNameForm.value.name)
    let newBudget: Budget = {
      name: this.newBudgetNameForm.value.name,
      expense: [],
      income: []
    }
    this.budgetService.newBudget(newBudget)
  }
}
