import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {Budget} from "../interfaces/budget";
import {Expense} from "../interfaces/expense";

@Injectable({
  providedIn: 'root'
})
export class BudgetService {

  private dummyBudgetList = [
    {name: "Ex 1", income: [], expense: []},
    {name: "ex 2", income: [], expense: []}
  ]

  private $trackNewBudgetPage = new BehaviorSubject<number>(1)
  private $budgetList = new BehaviorSubject<Budget[]>(this.dummyBudgetList)
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

  newBudget(budget: Budget): void {
    console.log('budget service called: ' + budget.name)
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

  setBudget(budget: Budget): void {
    this.$selectedBudget.next(budget);
  }

  getBudget(): Observable<Budget | null> {
    return this.$selectedBudget.asObservable()
  }

  addExpenseToBudget(expense: Expense) {
    console.log('addExpenseToBudgetCalled' + JSON.stringify(expense))
  }
}
