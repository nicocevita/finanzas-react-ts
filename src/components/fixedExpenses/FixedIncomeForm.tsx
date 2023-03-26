import React, { useState, useEffect } from "react";
import { Box, TextField, Button } from "@mui/material";
import { FormControlLabel, Switch } from "@material-ui/core";

interface FixedIncome {
  id: string;
  title: string;
  amount: number;
  isFixed: boolean;
}

interface Props {
  onAddFixedIncome: (income: FixedIncome) => void;
  incomeToEdit?: FixedIncome;
  onUpdateFixedIncome?: (income: FixedIncome) => void;
  onClose: () => void;
}

const FixedIncomeForm: React.FC<Props> = ({
  onAddFixedIncome,
  incomeToEdit,
  onUpdateFixedIncome,
  onClose,
}) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    if (incomeToEdit) {
      setTitle(incomeToEdit.title);
      setAmount(incomeToEdit.amount.toString());
      setIsFixed(incomeToEdit.isFixed);
    }
  }, [incomeToEdit]);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!title || !amount) return;

    const newIncome: FixedIncome = {
      id: incomeToEdit ? incomeToEdit.id : Math.random().toString(),
      title,
      amount: parseFloat(amount),
      isFixed,
    };

    if (incomeToEdit && onUpdateFixedIncome) {
      onUpdateFixedIncome(newIncome);
    } else {
      onAddFixedIncome(newIncome);
    }

    setTitle("");
    setAmount("");
    setIsFixed(false);
    onClose();
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      display="flex"
      flexDirection="column"
      gap="1rem"
    >
      <TextField
        type="text"
        label="Titulo"
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

      <FormControlLabel
        control={
          <Switch
            checked={isFixed}
            onChange={(e) => setIsFixed(e.target.checked)}
            color="primary"
          />
        }
        label="Ingreso fijo"
        labelPlacement="start"
      />

      <Button type="submit">
        {incomeToEdit ? "Actualizar ingreso" : "Agregar ingreso"}
      </Button>
    </Box>
  );
};

export default FixedIncomeForm;
