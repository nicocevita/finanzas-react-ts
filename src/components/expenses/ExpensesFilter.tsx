import React, { useState, useEffect } from "react";
import {
  Box,
  TextField,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@mui/material";
import { selectOptions } from "../../utils/selectGastos";

interface ExpenseFilterProps {
  onFilterChange: (filter: {
    keyword: string;
    type: string;
    date: string;
  }) => void;
}

const ExpenseFilter: React.FC<ExpenseFilterProps> = ({ onFilterChange }) => {
  const [localFilters, setLocalFilters] = useState<{
    keyword: string;
    type: string;
    date: string;
  }>({
    keyword: "",
    type: "",
    date: "",
  });

  const handleFilterChange = (
    e:
      | React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
      | React.SyntheticEvent,
    child?: React.ReactNode
  ) => {
    const { name, value } = (e.target as
      | HTMLInputElement
      | HTMLSelectElement) || { name: "", value: "" };
    setLocalFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
  };

  const handleSelectMenuItem = (value: string) => {
    setLocalFilters((prevFilters) => ({ ...prevFilters, type: value }));
  };

  useEffect(() => {
    onFilterChange(localFilters);
  }, [localFilters, onFilterChange]);
  return (
    <Box display="flex" gap="1rem" marginBottom="1rem">
      <TextField
        name="keyword"
        label="Buscar por palabra clave"
        variant="outlined"
        size="small"
        onChange={handleFilterChange}
      />
      <FormControl variant="outlined" style={{ minWidth: 150 }} size="small">
        <InputLabel htmlFor="type">Tipo de gasto</InputLabel>
        <Select
          label="Tipo de gasto"
          name="type"
          value={localFilters.type}
          displayEmpty
        >
          <MenuItem value='all' onClick={() => handleSelectMenuItem('all')}>
          Todos
          </MenuItem>
          {selectOptions.map((option) => (
            <MenuItem
              key={option.value}
              value={option.value}
              onClick={() => handleSelectMenuItem(option.value)}
            >
              {option.text}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <TextField
        name="date"
        label="Fecha"
        type="date"
        variant="outlined"
        size="small"
        InputLabelProps={{
          shrink: true,
        }}
        onChange={handleFilterChange}
      />
    </Box>
  );
};

export default ExpenseFilter;
