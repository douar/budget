import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css']
})
export class ExpenseComponent {

  expenseForm = new FormGroup({
    date: new FormControl('', Validators.required),
    category: new FormControl('', Validators.required),
    item: new FormControl('', Validators.required),
    amount: new FormControl('', Validators.required),
    note: new FormControl('')
  })

  handleSubmit() {
    alert('You have submitted!'
      + this.expenseForm.value.date)
  }

}
