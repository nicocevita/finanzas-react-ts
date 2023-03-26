import React, { useState } from "react";
import {
  Box,
  TextField,
  Select,
  MenuItem,
  Button,
  FormControl,
  InputLabel,
} from "@mui/material";
import { selectOptions } from "../../utils/selectGastos";
import expensesFormStore from "../../store/expensesFormStore/expensesFormStore";
import CustomModal from "../customModal/CustomModal";
import expensesListStore from "../../store/expensesListStore/expensesListStore";

const ExpenseForm: React.FC = () => {
  const [descripcion, setDescripcion] = useState("");
  const [monto, setMonto] = useState("");
  const [tipoGasto, setTipoGasto] = useState("food");
  const [fecha, setFecha] = useState("");

  const { open, setOpen } = expensesFormStore();
  const { onAddExpense } = expensesListStore();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newExpense = {
      descripcion,
      monto: parseFloat(monto),
      tipoGasto,
      fecha,
    };

    onAddExpense(newExpense);
    setDescripcion("");
    setMonto("");
    setTipoGasto("food");
    setFecha("");
  };

  return (
    <CustomModal
      open={open}
      handleClose={setOpen as () => void}
      title="Agregar nuevo gasto"
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        bgcolor: "white",
        display: "flex",
        flexDirection: "column",
        border: "1px solid #ccc",
        borderRadius: "0.5rem",
        padding: 20,
        boxShadow: "0 1px 4px rgba(0, 0, 0, 0.1)",
        gridGap: 20,
        alignItems: "center",
        justifyContent: "center",
        width: "auto",
        height: "auto",
      }}
    >
      <Box
        component="form"
        onSubmit={(e: React.FormEvent) => {
          setOpen();
          handleSubmit(e);
        }}
        display="flex"
        flexDirection="column"
        gap="1rem"
      >
        <TextField
          type="text"
          label="Descripción"
          variant="outlined"
          size="small"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          required
        />
        <TextField
          type="number"
          label="Monto"
          variant="outlined"
          size="small"
          value={monto}
          onChange={(e) => setMonto(e.target.value)}
          required
        />
        <FormControl variant="outlined" size="small">
          <InputLabel htmlFor="tipoGasto">Tipo de gasto</InputLabel>
          <Select
            label="Tipo de gasto"
            name="tipoGasto"
            value={tipoGasto}
            onChange={(e) => setTipoGasto(e.target.value)}
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
          value={fecha}
          onChange={(e) => setFecha(e.target.value)}
          required
        />
        <Button variant="contained" color="primary" type="submit">
          Agregar gasto
        </Button>
      </Box>
    </CustomModal>
  );
};

export default ExpenseForm;
