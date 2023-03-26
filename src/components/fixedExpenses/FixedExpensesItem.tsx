import React, { useState } from "react";
// import "../styles/FixedExpenseItem.css";

interface Props {
  expense: {
    id: string;
    title: string;
    amount: number;
    category: string;
    date: string;
  };
  onEditFixedExpense: (updatedExpense: Props["expense"]) => void;
  onDeleteFixedExpense: (id: string) => void;
}

const FixedExpenseItem: React.FC<Props> = ({
  expense,
  onEditFixedExpense,
  onDeleteFixedExpense,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(expense.title);
  const [amount, setAmount] = useState(expense.amount.toString());
  const [category, setCategory] = useState(expense.category);
  const [date, setDate] = useState(expense.date);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    onEditFixedExpense({
      ...expense,
      title,
      amount: parseFloat(amount),
      category,
      date,
    });
    setIsEditing(false);
  };

  const handleDelete = () => {
    onDeleteFixedExpense(expense.id);
  };

  return (
    <li className="fixed-expense-item">
      {isEditing ? (
        <>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <button onClick={handleSave}>Guardar</button>
          <button onClick={() => setIsEditing(false)}>Cancelar</button>
        </>
      ) : (
        <>
          <span>{title}</span>
          <span>${amount}</span>
          <span>{category}</span>
          <span>{date}</span>
          <button onClick={handleEdit}>Editar</button>
          <button onClick={handleDelete}>Eliminar</button>
        </>
      )}
    </li>
  );
};

export default FixedExpenseItem;
