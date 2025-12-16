import {ActivityType} from "../enums/activity-type";

export interface Income {
  date: string,
  item: string,
  amount: number,
  note?: string,
  type: ActivityType.CREDIT
  budgetName: string
}
