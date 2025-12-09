import { Component, OnInit, OnDestroy } from '@angular/core';
import {ExpenseService} from "../../../services/expense.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-create-new',
  templateUrl: './create-new.component.html',
  styleUrls: ['./create-new.component.css']
})
export class CreateNewComponent {

  trackPageSub: Subscription
  currentPageCount: number = 0

  constructor(private expenseService: ExpenseService) {
    this.trackPageSub = this.expenseService.getTrackNewBudgetPage().subscribe()
  }

  ngOnInit() {
    this.expenseService.getTrackNewBudgetPage().subscribe({
      next: value => {
        this.currentPageCount = value
      },
      error: err => {
        console.log(err)
      }
    })
  }

  clickNext() {
    this.expenseService.setTrackBudgetPage(this.currentPageCount+1)
  }

  ngOnDestroy() {
    this.trackPageSub.unsubscribe()
  }
}
