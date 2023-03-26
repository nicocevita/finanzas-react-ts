import { create } from "zustand";
import { IExpensesForm } from "./interface";

const INITIAL_STATE: IExpensesForm = {
  expense: {
    descripcion: "",
    monto: 0,
    tipoGasto: "",
    fecha: "",
  },
  open: false,
  setOpen: () => {},
};

const expensesFormStore = create<IExpensesForm>((set) => ({
  ...INITIAL_STATE,
  setOpen: () => set((state) => ({ ...state, open: !state.open })),
}));

export default expensesFormStore;
