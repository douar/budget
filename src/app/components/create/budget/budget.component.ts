import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {BudgetService} from "../../../services/budget.service";
import {Budget} from "../../../interfaces/budget";
import {first, Observable} from "rxjs";

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.css']
})
export class BudgetComponent {

  currentPage$: Observable<number> = this.budgetService.getTrackNewBudgetPage()

  newBudgetNameForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required)
  });

  constructor(private budgetService: BudgetService) {}

  createNewBudget() {
    let newBudget: Budget = {
      name: this.newBudgetNameForm.value.name,
      expense: [],
      income: []
    }

    let currentPage: number = 1
    this.currentPage$.pipe(first()).subscribe({
      next: value => {currentPage = value}
    })

    this.budgetService.newBudget(newBudget)
    this.budgetService.setTrackBudgetPage(currentPage + 1)
  }
}
