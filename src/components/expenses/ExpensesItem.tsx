import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import foodIcon from "../../assets/comida-sana.png";
import transportIcon from "../../assets/transporte-publico.png";
import dailyExpensesIcon from "../../assets/moneda-de-dolar.png";
import educationIcon from "../../assets/libro.png";
import travelIcon from "../../assets/viajes.png";
import healthIcon from "../../assets/cuidado-de-la-salud.png";
import investmentIcon from "../../assets/beneficios.png";
import enterteimentIcon from "../../assets/coctel.png";
import rentIcon from "../../assets/edificio.png";
import { getCurrecyARS } from "../../utils/getCurrency";
import { selectOptions } from "../../utils/selectGastos";
import { makeStyles } from "@mui/styles";
import { IExpense } from "../../store/expensesListStore/interface";
import expensesListStore from "../../store/expensesListStore/expensesListStore";

interface IExpenseItem extends IExpense {
  id: string;
}

const useStyles = makeStyles({
  fadeIn: {
    animation: "$fadeIn 0.3s ease",
  },
  "@keyframes fadeIn": {
    "0%": {
      opacity: 0,
      transform: "translateY(20px)",
    },
    "100%": {
      opacity: 1,
      transform: "translateY(0)",
    },
  },
});

const ExpensesItem: React.FC = () => {
  const typeToIcon: { [key: string]: string } = {
    food: foodIcon,
    transport: transportIcon,
    dailyExpenses: dailyExpensesIcon,
    education: educationIcon,
    travel: travelIcon,
    health: healthIcon,
    investments: investmentIcon,
    enterteiment: enterteimentIcon,
    rent: rentIcon,
  };
  const classes = useStyles();
  const { expensesList } = expensesListStore();
  return (
    <>
      {expensesList.map((expense) => {
        const typeName = selectOptions.find(
          (sel) => sel.value === expense.tipoGasto
        );

        return (
          <Card
            className={classes.fadeIn}
            sx={{
              marginBottom: 1,
              display: "flex",
              justifyContent: "space-between",
              maxHeight: 50,
              alignItems: "center",
              padding: 1,
              borderRadius: 1,
              backgroundColor: typeName?.color,
            }}
          >
            <img
              src={typeToIcon[expense.tipoGasto]}
              alt={expense.tipoGasto}
              style={{ width: 30, height: 30 }}
            />
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography variant="body1">{expense.descripcion}</Typography>
              <Typography variant="body2" color="text.secondary">
                {typeName?.text}
              </Typography>
            </CardContent>
            <CardContent>
              <Typography variant="h6">
                {getCurrecyARS(expense.monto)}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {new Date(expense.fecha).toLocaleDateString()}
              </Typography>
            </CardContent>
          </Card>
        );
      })}
    </>
  );
};

export default ExpensesItem;
