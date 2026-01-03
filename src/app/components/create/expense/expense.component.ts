import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Categories} from "../../../enums/categories";
import {ExpenseService} from "../../../services/expense.service";

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css']
})
export class ExpenseComponent {

  categoryList: string[] = Object.values(Categories)

  expenseForm: FormGroup = new FormGroup({
    date: new FormControl('', Validators.required),
    category: new FormControl('', Validators.required),
    item: new FormControl('', Validators.required),
    amount: new FormControl('', Validators.required),
    note: new FormControl('')
  })
  constructor(private expenseService: ExpenseService) {}

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

    this.expenseService.newExpense(this.expenseForm)
  }

}
