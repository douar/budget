import { Injectable } from '@angular/core';
import {Expense} from "../interfaces/expense";
import {BudgetService} from "./budget.service";
import {first} from "rxjs";
import {ActivityType} from "../enums/activity-type";
import {FormGroup} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  constructor(private budgetService: BudgetService) { }

  newExpense(expenseForm: FormGroup) {

    let budgetName: string = ''
    this.budgetService.getBudget().pipe(first()).subscribe({
      next: value => {
        if (value !== null) {
          budgetName = value.name
        }
      }
    })

    let newExpense: Expense = {
      date: String(expenseForm.value.date),
      category: String(expenseForm.value.category),
      item: String(expenseForm.value.item),
      amount: Number(expenseForm.value.amount),
      note: String(expenseForm.value.note),
      type: ActivityType.DEBIT,
      budgetName: budgetName
    }

    console.log('called addNewExpense' + JSON.stringify(newExpense))
    this.budgetService.addExpenseToBudget(newExpense)
  }

}
