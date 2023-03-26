import { create } from "zustand";
// import { persist, createJSONStorage } from "zustand/middleware";
import { IExpense, IExpensesList } from "./interface";

const INITIAL_STATE: IExpensesList = {
  expensesList: [],
  onAddExpense: () => {},
  $$storeMutators: [],
};

const expensesFormStore = create<IExpensesList>((set) => ({
  ...INITIAL_STATE,
  onAddExpense: (expense: IExpense) =>
    set((state) => ({
      expensesList: [...state.expensesList, expense],
    })),
}));

export default expensesFormStore;
