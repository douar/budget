import { Component, OnInit, OnDestroy } from '@angular/core';
import {ExpenseService} from "../../../services/expense.service";
import {first, Observable, Subscription} from "rxjs";

@Component({
  selector: 'app-create-new',
  templateUrl: './create-new.component.html',
  styleUrls: ['./create-new.component.css']
})
export class CreateNewComponent {

  currentPage$: Observable<number> = this.expenseService.getTrackNewBudgetPage()

  constructor(private expenseService: ExpenseService) {}

  clickNext(current: number) {
    this.expenseService.setTrackBudgetPage(current + 1)
  }
}
