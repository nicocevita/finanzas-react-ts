import React from "react";
import { Box, Typography } from "@mui/material";
import { getCurrecyARS } from "../../utils/getCurrency";

interface Expense {
  title: string;
  amount: number;
  type: string;
  date: string;
  id: string;
}

interface Props {
  income: number;
  expenses: Expense[];
}

const Summary: React.FC<Props> = ({ income, expenses }) => {
  const totalExpenses = expenses.reduce(
    (acc, expense) => acc + expense.amount,
    0
  );
  const balance = income - totalExpenses;

  return (
    <Box
      sx={{
        bgcolor: "#AE12F6",
        border: "1px solid #ccc",
        borderRadius: "0.5rem",
        boxShadow: "0 1px 4px rgba(0, 0, 0, 0.1)",
      }}
      display="flex"
      justifyContent="space-around"
      padding="1rem"
      marginBottom="1rem"
    >
      <Box>
        <Typography style={{margin: 'unset' }} variant="h6" gutterBottom>
          {getCurrecyARS(income)}
        </Typography>
        <Typography variant="subtitle2">Ingresos</Typography>
      </Box>
      <Box>
        <Typography style={{margin: 'unset' }} variant="h6" gutterBottom>
          {getCurrecyARS(totalExpenses)}
        </Typography>
        <Typography variant="subtitle2">Gastos</Typography>
      </Box>
      <Box>
        <Typography style={{margin: 'unset' }} variant="h6" gutterBottom>
          {getCurrecyARS(balance)}
        </Typography>
        <Typography variant="subtitle2">Balance</Typography>
      </Box>
    </Box>
  );
};

export default Summary;
