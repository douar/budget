import { Component } from '@angular/core';
import {BudgetService} from "../../../services/budget.service";

@Component({
  selector: 'app-income-list',
  templateUrl: './income-list.component.html',
  styleUrls: ['./income-list.component.css']
})
export class IncomeListComponent {

  selectedBudgetExpenseList = this.budgetService.getBudget()

  constructor(private budgetService: BudgetService) {}

}
