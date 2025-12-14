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

  currentPage$: Observable<number> = this.budgetService.getTrackNewBudgetPage()
  selectedBudget$: Observable<Budget | null> = this.budgetService.getBudget()

  constructor(private budgetService: BudgetService) {}

  clickNext(current: number) {
    this.budgetService.setTrackBudgetPage(current + 1)
  }
}
