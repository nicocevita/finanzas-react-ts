import React, { useState } from "react";
import {
  Box,
  Typography,
  Divider,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Grid,
} from "@material-ui/core";
import FixedExpenseForm from "./FixedExpensesForm";
import FixedExpenseItem from "./FixedExpensesItem";
import FixedIncomeForm from "./FixedIncomeForm";
import FixedIncomeItem from "./FixedIncomeItem";

interface FixedExpense {
  id: string;
  title: string;
  amount: number;
  category: string;
  date: string;
}

interface Income {
  id: string;
  title: string;
  amount: number;
  isFixed: boolean;
}

const FixedExpenses: React.FC = () => {
  // State for fixed expenses and incomes
  const [fixedExpenses, setFixedExpenses] = useState<FixedExpense[]>([]);
  const [incomes, setIncomes] = useState<Income[]>([]);
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  const [formType, setFormType] = useState<"fixedExpense" | "fixedIncome">(
    "fixedExpense"
  );

  const addFixedExpense = (expense: FixedExpense) => {
    setFixedExpenses((prevExpenses) => [...prevExpenses, expense]);
  };

  const editFixedExpense = (updatedExpense: FixedExpense) => {
    setFixedExpenses((prevExpenses) =>
      prevExpenses.map((expense) =>
        expense.id === updatedExpense.id ? updatedExpense : expense
      )
    );
  };

  const deleteFixedExpense = (id: string) => {
    setFixedExpenses((prevExpenses) =>
      prevExpenses.filter((expense) => expense.id !== id)
    );
  };

  const addIncome = (income: Income) => {
    setIncomes((prevIncomes) => [...prevIncomes, income]);
  };

  const editIncome = (updatedIncome: Income) => {
    setIncomes((prevIncomes) =>
      prevIncomes.map((income) =>
        income.id === updatedIncome.id ? updatedIncome : income
      )
    );
  };

  const deleteIncome = (id: string) => {
    setIncomes((prevIncomes) =>
      prevIncomes.filter((income) => income.id !== id)
    );
  };

  return (
    <Box sx={{ padding: "1rem" }}>
      <Typography variant="h4" gutterBottom>
        Gastos e ingresos fijos
      </Typography>
      <Grid style={{marginBottom: 10}} container spacing={2} justifyContent="center">
        <Grid item>
          <Button
            variant="contained"
            onClick={() => {
              openModal();
              setFormType("fixedExpense");
            }}
          >
            Agregar gasto fijo
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            onClick={() => {
              openModal();
              setFormType("fixedIncome");
            }}
          >
            Agregar ingreso fijo
          </Button>
        </Grid>
      </Grid>

      <Dialog open={modalOpen} onClose={closeModal}>
        <DialogTitle>Agregar gasto o ingreso fijo</DialogTitle>
        <DialogContent>
          {formType === "fixedExpense" && (
            <FixedExpenseForm
              onAddFixedExpense={addFixedExpense}
              onClose={closeModal}
            />
          )}
          {formType === "fixedIncome" && (
            <FixedIncomeForm
              onAddFixedIncome={addIncome}
              onClose={closeModal}
            />
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={closeModal}>Cancelar</Button>
        </DialogActions>
      </Dialog>
      <Divider variant="middle" />
      <Box display="flex" flexDirection="column">
        {/* Render FixedExpenseItem components */}
        {fixedExpenses.map((expense) => (
          <FixedExpenseItem
            key={expense.id}
            expense={expense}
            onEditFixedExpense={editFixedExpense}
            onDeleteFixedExpense={deleteFixedExpense}
          />
        ))}
        {/* Render FixedIncomeItem components */}
        {incomes.map((income) => (
          <FixedIncomeItem
            key={income.id}
            income={income}
            onEditIncome={editIncome}
            onDeleteIncome={deleteIncome}
          />
        ))}
      </Box>
    </Box>
  );
};

export default FixedExpenses;
