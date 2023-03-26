import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { selectOptions } from "../../utils/selectGastos";

interface FixedExpense {
  id: string;
  title: string;
  amount: number;
  category: string;
  date: string;

}

interface Props {
  onAddFixedExpense: (expense: FixedExpense) => void;
  expenseToEdit?: FixedExpense;
  onUpdateFixedExpense?: (expense: FixedExpense) => void;
  onClose: () => void
}

const FixedExpenseForm: React.FC<Props> = ({
  onAddFixedExpense,
  expenseToEdit,
  onUpdateFixedExpense,
  onClose
}) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    if (expenseToEdit) {
      setTitle(expenseToEdit.title);
      setAmount(expenseToEdit.amount.toString());
      setCategory(expenseToEdit.category);
      setDate(expenseToEdit.date);
    }
  }, [expenseToEdit]);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!title || !amount || !category || !date) return;

    const newExpense: FixedExpense = {
      id: expenseToEdit ? expenseToEdit.id : Math.random().toString(),
      title,
      amount: parseFloat(amount),
      category,
      date,
    };

    if (expenseToEdit && onUpdateFixedExpense) {
      onUpdateFixedExpense(newExpense);
    } else {
      onAddFixedExpense(newExpense);
    }

    setTitle("");
    setAmount("");
    setCategory("");
    setDate("");
    onClose()
  };

  return (
    <Box component="form" onSubmit={handleSubmit} display="flex" flexDirection="column" gridGap={'1em'}>
      <TextField
        type="text"
        label="Descripción"
        variant="outlined"
        size="small"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <TextField
        type="number"
        label="Monto"
        variant="outlined"
        size="small"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
      />
      <FormControl variant="outlined" size="small">
        <InputLabel htmlFor="type">Tipo de gasto</InputLabel>
        <Select
          label="Tipo de gasto"
          name="type"
          value={category}
          onChange={(e) => setCategory(e.target.value as string)}
        >
          {selectOptions.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.text}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <TextField
        type="date"
        label="Fecha"
        variant="outlined"
        size="small"
        InputLabelProps={{
          shrink: true,
        }}
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <Button style={{marginTop: 10}} type="submit">
        Agregar gasto
      </Button>
    </Box>
  );
};

export default FixedExpenseForm;
