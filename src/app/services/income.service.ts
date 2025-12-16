import {Injectable} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {BudgetService} from "./budget.service";
import {first} from "rxjs";
import {Income} from "../interfaces/income";
import {ActivityType} from "../enums/activity-type";

@Injectable({
  providedIn: 'root'
})
export class IncomeService {

  constructor(private budgetService: BudgetService) { }

  newIncome(incomeForm: FormGroup) {
    // Get current budget name
    let budgetName: string = ''
    this.budgetService.getBudget().pipe(first()).subscribe({
      next: value => {
        if (value !== null) {
          budgetName = value.name
        }
      }
    })

    // Build new income object
    let newIncome: Income = {
      date: String(incomeForm.value.date),
      item: incomeForm.value.item,
      amount: Number(incomeForm.value.amount),
      note: incomeForm.value.note,
      type: ActivityType.CREDIT,
      budgetName: budgetName
    }

    // Update current budget and budget list
    this.budgetService.addIncomeToBudget(newIncome)
  }
}
