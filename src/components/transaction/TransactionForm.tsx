function TransactionForm() {
  return (
    <form method="POST" className="form">
      <label htmlFor="description">
        Description
        <textarea name="description" id="description" placeholder="Description" />
      </label>
      <label htmlFor="amount">
        Amount
        <input type="number" name="amount" id="name" step="0.01" placeholder="0" />
      </label>
      <label htmlFor="type">
        Type
        <select name="type" id="type">
          <option value="income" id="income">Income</option>
          <option value="expense" id="expense">Expense</option>
        </select>
      </label>
      <label htmlFor="submit">
        <input type="submit" name="submit" id="submit" value="Submit" />
      </label>
    </form>
  )
}

export default TransactionForm
