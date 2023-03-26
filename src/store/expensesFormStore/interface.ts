import { IExpense } from "../expensesListStore/interface";

export interface IExpensesForm {
  expense: IExpense;
  open: boolean;
  setOpen: () => void;
}
