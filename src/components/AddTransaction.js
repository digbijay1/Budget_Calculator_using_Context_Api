import React,{useState,useContext} from "react";
import {v4 as uuidv4} from "uuid"
import {GlobalContext} from "../context/GlobalState"



function AddTransaction() {
    const {addIncome,addExpense} = useContext(GlobalContext);
//income code herre
  const[income,setIncome]=useState({
    incomeText:"",
    incomeAmount:0,
  })


  const {incomeText,incomeAmount}=income;
  const onchangeIncome=e=>{
    setIncome({...income,[e.target.name]:e.target.value})
   // console.log(income)
  }
  const onSubmitIncome=e=>{
    e.preventDefault();
    const newIncomeTransaction = {
      id: uuidv4(),
      incomeText: incomeText,
      incomeAmount:incomeAmount*1
    };
    // console.log(newIncomeTransaction)
    addIncome(newIncomeTransaction)
    setIncome({
      incomeText:"",
      incomeAmount:0
    })
  }


  // here for expense amount code 
const [expense,setExpense]=useState({
  expenseText:" ",
  expenseAmount:0,
})
const {expenseText,expenseAmount}=expense;
const onchangeExpense=(e)=>{
  setExpense({...expense,[e.target.name]:e.target.value})
}
const onSubmitExpense=(e)=>{

  e.preventDefault();
  const newExpenseTransaction={
    id:uuidv4(),
    expenseText,
    expenseAmount:expenseAmount*1
  }
  addExpense(newExpenseTransaction)
  setExpense({
      expenseText:" ",
      expenseAmount:0
    })
}



  return (
    <div className="form-wrapper">
      <form onSubmit={onSubmitIncome}>
        <div className="input-group income">
          <input
            name="incomeText"
            value={incomeText}
            onChange={onchangeIncome}
            type="text"
            placeholder="Add Income......"
            autoComplete="off"
          />
          <input
            name="incomeAmount"
            value={incomeAmount}
            onChange={onchangeIncome}
            type="number"
            placeholder="Amount"
            autoComplete="off"
          />
          <input type="submit" value="submit" />
        </div>
      </form>

      <form onSubmit={onSubmitExpense}>
        <div className="input-group income">
          <input
            onChange={onchangeExpense}
            name="expenseText"
            value={expenseText}
            type="text"
            placeholder="Add Expanse......"
            autoComplete="off"
          />
          <input
            onChange={onchangeExpense}
            name="expenseAmount"
            value={expenseAmount}
            type="number"
            placeholder="Amount"
            autoComplete="off"
          />
          <input type="submit" value="submit" />
        </div>
      </form>
    </div>
  );
}

export default AddTransaction;
