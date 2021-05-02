import React,{useContext} from "react";
import {GlobalContext} from "../context/GlobalState"
import IncomeTransactions from "./IncomeTransactions"
function IncomeList() {
  const {incomeTransactions}=useContext(GlobalContext)
  console.log(incomeTransactions)
  return (
    <div className="transactions transactions-income ">
      <h2>Transaction History</h2>
      <ul className="transaction-list">
        {incomeTransactions.map((incomeTransaction)=>{
          return    <IncomeTransactions incomeTransaction={incomeTransaction} key={incomeTransaction} />;
          })}
      </ul>
    </div>
  );
}

export default IncomeList;
