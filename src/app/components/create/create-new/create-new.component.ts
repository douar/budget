import { Component } from '@angular/core';
import {Observable,} from "rxjs";
import {BudgetService} from "../../../services/budget.service";

@Component({
  selector: 'app-create-new',
  templateUrl: './create-new.component.html',
  styleUrls: ['./create-new.component.css']
})
export class CreateNewComponent {

  currentPage$: Observable<number> = this.budgetService.getTrackNewBudgetPage()

  constructor(private budgetService: BudgetService) {}

  clickNext(current: number) {
    this.budgetService.setTrackBudgetPage(current + 1)
  }
}
