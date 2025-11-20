import {Categories} from "../enums/categories";
import {ActivityType} from "../enums/activity-type"

export interface Expense {
  date: string,
  category: Categories | string,
  item: string,
  amount: number,
  note: string,
  type: ActivityType.DEBIT
}
