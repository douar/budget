import { Component } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css']
})
export class ExpenseComponent {

  expenseForm = new FormGroup({
    date: new FormControl(''),
    category: new FormControl(''),
    item: new FormControl(''),
    amount: new FormControl(''),
    note: new FormControl('')
  })

  handleSubmit() {
    alert('You have submitted!'
      + this.expenseForm.value.date)
  }

}
