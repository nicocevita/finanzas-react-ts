import React, { useState, useCallback, useEffect } from "react";
import ExpenseFilter from "./expenses/ExpensesFilter";
import ExpenseForm from "./expenses/ExpensesForm";
import ExpensesItem from "./expenses/ExpensesItem";
import Summary from "./summary/Summary";
import { Container, Grid, Box } from "@mui/material";

type Expense = {
  title: string;
  amount: number;
  type: string;
  date: string;
  id: string;
};

const Home: React.FC = () => {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [filteredExpenses, setFilteredExpenses] = useState<Expense[]>(expenses);
  const [monthlyIncome, setMonthlyIncome] = useState<number>(0);
  // const [isEditingIncome, setIsEditingIncome] = useState<boolean>(false);

  // const handleAddIncome = (income: number) => {
  //   setMonthlyIncome(income);
  //   setIsEditingIncome(false);
  // };

  // const handleEditIncome = () => {
  //   setIsEditingIncome(true);
  // };

  const [filters, setFilters] = useState<{
    keyword: string;
    type: string;
    date: string;
  }>({
    keyword: "",
    type: "",
    date: "",
  });

  const addExpense = (expense: Omit<Expense, "id">) => {
    setExpenses((prevExpenses) => [
      ...prevExpenses,
      { ...expense, id: Math.random().toString() },
    ]);
    setFilteredExpenses((prevExpenses) => [
      ...prevExpenses,
      { ...expense, id: Math.random().toString() },
    ]);
  };

  const filterExpenses = useCallback(() => {
    const filtered = expenses.filter((expense) => {
      const matchesKeyword =
        filters.keyword === "" ||
        expense.title.toLowerCase().includes(filters.keyword.toLowerCase());
      const matchesType =
        filters.type === "all" ||
        filters.type === "" ||
        expense.type === filters.type;
      const matchesDate = filters.date === "" || expense.date === filters.date;

      return matchesKeyword && matchesType && matchesDate;
    });

    setFilteredExpenses(filtered);
  }, [expenses, filters]);

  const handleFilterChange = (filter: {
    keyword: string;
    type: string;
    date: string;
  }) => {
    setFilters(filter);
  };

  useEffect(() => {
    filterExpenses();
  }, [filters, expenses, filterExpenses]);

  return (
    <Container maxWidth="md">
      <Box mt={3}>
        <Summary income={monthlyIncome} expenses={expenses} />
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <ExpenseFilter onFilterChange={handleFilterChange} />
            <Box>
              <ExpensesItem />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Home;
