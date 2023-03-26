import React, { useState } from "react";
// import "../styles/FixedIncomeItem.css";

interface Props {
  income: {
    id: string;
    title: string;
    amount: number;
    isFixed: boolean;
  };
  onEditIncome: (updatedIncome: Props["income"]) => void;
  onDeleteIncome: (id: string) => void;
}

const FixedIncomeItem: React.FC<Props> = ({
  income,
  onEditIncome,
  onDeleteIncome,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(income.title);
  const [amount, setAmount] = useState(income.amount.toString());
  const [isFixed, setIsFixed] = useState(income.isFixed);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    onEditIncome({
      ...income,
      title,
      amount: parseFloat(amount),
      isFixed,
    });
    setIsEditing(false);
  };

  const handleDelete = () => {
    onDeleteIncome(income.id);
  };

  return (
    <li className="fixed-income-item">
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
          <label>
            Ingreso fijo
            <input
              type="checkbox"
              checked={isFixed}
              onChange={() => setIsFixed(!isFixed)}
            />
          </label>
          <button onClick={handleSave}>Guardar</button>
          <button onClick={() => setIsEditing(false)}>Cancelar</button>
        </>
      ) : (
        <>
          <span>{title}</span>
          <span>${amount}</span>
          <span>{isFixed ? "Fijo" : "Variable"}</span>
          <button onClick={handleEdit}>Editar</button>
          <button onClick={handleDelete}>Eliminar</button>
        </>
      )}
    </li>
  );
};

export default FixedIncomeItem;
