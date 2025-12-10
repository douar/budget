import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {Budget} from "../interfaces/budget";
import {Expense} from "../interfaces/expense";

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  private $trackNewBudgetPage = new BehaviorSubject<number>(1)
  private $budgetList = new BehaviorSubject<Budget[]>([])
  private $selectedBudget = new BehaviorSubject<Budget | null>(null)

  constructor() { }

  getTrackNewBudgetPage(): Observable<number> {
    return this.$trackNewBudgetPage.asObservable()
  }

  setTrackBudgetPage(num: number): void {
    this.$trackNewBudgetPage.next(num)
  }

  budgetExists(name: string): boolean {
    return this.$budgetList.getValue().some(
      b => b.name.toLowerCase() === name.toLowerCase()
    );
  }

  newBudget(budget: Budget) {
    // Check for dupe budget
    if (this.budgetExists(budget.name)) {
      return alert('A budget with this name already exists.')
    }

    // Add new budget
    this.$budgetList.next(
      [...this.$budgetList.getValue(), budget]
    )

    // Set selected budget to newly created budget
    this.setBudget(budget)
  }

  setBudget(budget: Budget | null) {
    this.$selectedBudget.next(budget);
  }

  getBudget() {
    return this.$selectedBudget.asObservable()
  }

  newExpense(expense: Expense) {
    console.log('called addNewExpense' + expense)
  }

}
