import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/Home";
import FixedExpenses from "./components/fixedExpenses/FixedExpenses";
import ExpenseForm from "./components/expenses/ExpensesForm";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/gastos-ingresos" exact component={FixedExpenses} />
        </Switch>
      </Router>
      <ExpenseForm />
    </div>
  );
}

export default App;
