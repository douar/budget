import { Component } from '@angular/core';
import {BudgetService} from "../../../services/budget.service";

@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.css']
})
export class ExpenseListComponent {

  selectedBudgetExpenseList = this.budgetService.getBudget()

  constructor(private budgetService: BudgetService) {}

}
