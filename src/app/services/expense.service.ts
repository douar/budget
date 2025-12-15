import { Injectable } from '@angular/core';
import {Expense} from "../interfaces/expense";
import {BudgetService} from "./budget.service";

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  constructor(private budgetService: BudgetService) { }

  newExpense(expense: Expense) {
    console.log('called addNewExpense' + JSON.stringify(expense))
    this.budgetService.addExpenseToBudget(expense)
  }

}
