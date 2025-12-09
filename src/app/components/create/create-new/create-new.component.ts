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
  pages: string[] = ["name", "expense", "income"]
  currentPageCount: number = 0
  currentPage: string = this.pages[this.currentPageCount]

  constructor(private expenseService: ExpenseService) {
    this.trackPageSub = this.expenseService.getTrackNewBudgetPage().subscribe({
      next: value => {
        console.log(value)
      },
      error: err => {
        console.log(err)
      }
    })
  }

  clickNext() {
    console.log('clicked next')
  }

  ngOnDestroy() {
    this.trackPageSub.unsubscribe()
  }
}
