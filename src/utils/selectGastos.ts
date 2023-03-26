interface ISelectOptions{
    text: string;
    value: string;
    color: string;
}
export const selectOptions: ISelectOptions[] = [
  { text: "Comida", value: "food", color: '#ff00004d'},
  { text: "Transporte", value: "transport", color: '#9900ff57'},
  { text: "Gasto diario", value: "dailyExpenses", color: '#96fa6e5b'},
  { text: "Educación", value: "education", color: '#5582fd67'},
  { text: "Viajes", value: "travel", color: '#ff66006e'},
  { text: "Salud", value: "health", color: '#027c215b'},
  { text: "Inversion", value: "investments", color: '#00974c52'},
  { text: "Alquiler", value: "rent", color: '#425a9e7c'},
  { text: "Entretenimiento", value: "enterteiment", color: '#90349c7e'},
];
