function ExpenseTracker({
    setAmount,setType,handleAddTransaction,transactions,amount,type
}){



    const totalIncome = transactions.reduce(
        ((acc, transaction) =>
          transaction.type == "income" ? acc + Number(transaction.amount) : acc),
        0
      );
    
      const totalExpense = transactions.reduce(
        ((acc, transaction) =>
          transaction.type == "expense" ? acc + Number(transaction.amount) : acc),
        0
      );
      const blanceAmount = totalIncome-totalExpense
    return(
        
      <div className='flex  flex-col  justify-center items-center'>

      <div className='flex   justify-center items-center gap-3 my-4'>
        <div className='p-4 px-5 border  border-purple-600 rounded-md'>
          <h1> Total Income </h1>
          <h1>{totalIncome}</h1>
        </div>
        <div className='p-4  px-5 border border-purple-600 rounded-md'>
          <h1> Total Expense </h1>
          <h1>{totalExpense} </h1>
        </div>
        <div className={`p-4  px-5 border border-purple-600 rounded-md ${blanceAmount > 0 ?'bg-green-50':'bg-red-50'}`}>
          <h1> Balance  </h1>
          <h1>{blanceAmount}</h1>
        </div>
      </div>

      <div className='flex'>
        <input value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className='border border-purple-600 p-1 rounded-sm mx-2' placeholder='Add Amount' type="number" />
        <select value={type}
          onChange={(e) => setType(e.target.value)}
          className='border border-purple-600 p-1 rounded-sm mx-2' >
          <option value="income"> Income</option>
          <option value="expense">Expense</option>
        </select>
        <button onClick={handleAddTransaction}
          className='border border-purple-600 p-1 rounded-sm mx-2 px-2'  >Submit</button>
      </div>
      <div>
        {
          transactions.map((data, index) => {
            return (
              <div key={index} className='flex my-2'>
                <h1 className='font-bold underline text-2xl w-60 '>{index + 1}{')'}{data.amount}</h1>
                <h1 className={`font-bold underline text-2xl
                   ${data.type === "income" ? "text-green-700" : 'text-red-700'}`}
                >
                  {data.type}</h1>
              </div>
            )
          })
        }
      </div>
    </div>
    )
}


export default ExpenseTracker;