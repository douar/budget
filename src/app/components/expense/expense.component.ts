import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import {Categories} from "../../enums/categories";

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css']
})
export class ExpenseComponent {

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

    const num = Number(value);
    this.expenseForm.patchValue({
      amount: num.toFixed(2)
    });
  }

  handleSubmit() {
    alert('You have submitted!'
      + this.expenseForm.value.date)
  }

}
