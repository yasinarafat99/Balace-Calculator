const AddTransaction = () => {	
  const handleInput = (e) => {
   
  };

  
  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={handleInput}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input name="text" type="text" placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input name="amount" type="number" placeholder="Enter amount..." />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
};

export default AddTransaction;
