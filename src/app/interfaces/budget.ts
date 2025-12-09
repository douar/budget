import {Expense} from "./expense";
import {Income} from "./income";

export interface Budget {
  name: string,
  expense: Expense[],
  income: Income[]
}
