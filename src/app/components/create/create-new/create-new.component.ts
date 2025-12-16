import { Component } from '@angular/core';
import {Observable,} from "rxjs";
import {BudgetService} from "../../../services/budget.service";
import {Budget} from "../../../interfaces/budget";

@Component({
  selector: 'app-create-new',
  templateUrl: './create-new.component.html',
  styleUrls: ['./create-new.component.css']
})
export class CreateNewComponent {

  // TODO
  // 1. expense category - when other is selected let the user add their own option
  // 2. expense category - set to default, but allow user to create their own set of categories
  // 3. display list of expense and income
  // 4. add 'complete' or 'save' button at end of new budget creation

  currentPage$: Observable<number> = this.budgetService.getTrackNewBudgetPage()
  selectedBudget$: Observable<Budget | null> = this.budgetService.getBudget()

  constructor(private budgetService: BudgetService) {}

  clickNext(current: number) {
    this.budgetService.setTrackBudgetPage(current + 1)
  }
}
