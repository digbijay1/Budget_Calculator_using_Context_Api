import React,{useContext} from "react";
import {GlobalContext}  from  "../context/GlobalState"

function ExpenseTransactions({expenseTransaction}) {
    const {deleteTransaction}=useContext(GlobalContext)

  return (
    <li className="transaction">
      <span className="transaction-text">{expenseTransaction.expenseText}</span>

      <span className="transaction-amount">
        {expenseTransaction.expenseAmount}
      </span>
      <button className="delete-btn">
        <i
          className="fas fa-trash"
          onClick={() => deleteTransaction(expenseTransaction.id)}
        ></i>
      </button>
    </li>
  );
}

export default ExpenseTransactions;
