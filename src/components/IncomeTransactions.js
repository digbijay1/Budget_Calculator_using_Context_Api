import React, { useContext } from 'react'
import {GlobalContext}  from  "../context/GlobalState"

function IncomeTransactions(props) {
  const {deleteTransaction}=useContext(GlobalContext)
    return (
      
        <li className="transaction">
          <span className="transaction-text">
            {props.incomeTransaction.incomeText}
          </span>

          <span className="transaction-amount">
            {props.incomeTransaction.incomeAmount}
          </span>
          {/* {console.log(props.incomeTransaction.id)} */}
          <button className="delete-btn" onClick={()=>deleteTransaction(props.incomeTransaction.id)}>
            <i className="fas fa-trash"></i>
          </button>
        </li>
        
      
    );
}

export default IncomeTransactions
