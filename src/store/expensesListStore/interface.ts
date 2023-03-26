export interface IExpensesList{
    expensesList: IExpense[]
    onAddExpense: (expense: IExpense) => void,
    $$storeMutators?: any[];
}

export interface IExpense{
    descripcion: string,
    monto: number,
    tipoGasto: string,
    fecha: string,
}