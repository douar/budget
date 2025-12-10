import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Categories} from "../../../enums/categories";
import {Expense} from "../../../interfaces/expense";
import {ActivityType} from "../../../enums/activity-type";
import {ExpenseService} from "../../../services/expense.service";

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css']
})
export class ExpenseComponent {

  constructor(private expenseService: ExpenseService) {}

  categoryList: string[] = Object.values(Categories)

  expenseForm = new FormGroup({
    date: new FormControl('', Validators.required),
    category: new FormControl('', Validators.required),
    item: new FormControl('', Validators.required),
    amount: new FormControl('', Validators.required),
    note: new FormControl('')
  })

  formatCurrency() {
    const value = this.expenseForm.value.amount;

    if (value == null || value === '') return;

    this.expenseForm.patchValue({
      amount: Number(value).toFixed(2)
    });
  }

  handleSubmit() {
    if (this.expenseForm.invalid) {
      alert('Please fill all required fields')
      return;
    }

    alert('You have submitted!' + this.expenseForm.value)

    let newExpense: Expense = {
      date: String(this.expenseForm.value.date),
      category: String(this.expenseForm.value.category),
      item: String(this.expenseForm.value.item),
      amount: Number(this.expenseForm.value.amount),
      note: String(this.expenseForm.value.note),
      type: ActivityType.DEBIT
    }

    this.expenseService.newExpense(newExpense)
  }

}
