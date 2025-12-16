import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {IncomeService} from "../../../services/income.service";

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.css']
})
export class IncomeComponent {

  incomeForm: FormGroup = new FormGroup({
    date: new FormControl('', Validators.required),
    item: new FormControl('', Validators.required),
    amount: new FormControl('', Validators.required),
    note: new FormControl('')
  })

  constructor(private incomeService: IncomeService) {}

  formatCurrency() {
    const value = this.incomeForm.value.amount;

    if (value == null || value === '') return;

    this.incomeForm.patchValue({
      amount: Number(value).toFixed(2)
    });
  }

  handleSubmit() {
    console.log(JSON.stringify(this.incomeForm.value))

    if (this.incomeForm.invalid) {
      alert('Please fill all required fields')
      return;
    }

    // TODO delete
    alert('You have submitted!' + this.incomeForm.value)

    this.incomeService.newIncome(this.incomeForm)
  }

}
