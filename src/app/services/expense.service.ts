import { Injectable } from '@angular/core';
import {Expense} from "../interfaces/expense";

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  constructor() { }

  newExpense(expense: Expense) {
    console.log('called addNewExpense' + JSON.stringify(expense))
  }

}
