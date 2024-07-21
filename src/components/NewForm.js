import React from 'react'

const NewForm = () => {
  return (
        <div className="form max-w-sm mx-auto w-96">
        
    <h1 className='font-bold pb-4 text-xl'>Transaction</h1>

    
        <div className="grid gap-4">
            <div className="input-group">
                <input type="text"  onChange={(e) =>settrans(e.target.value)}
                placeholder='Sallary, House Rend, SIP' className='form-input' />
            </div>
            <select className='form-input' >
                <option value="Investment" defaultValue>Investment</option>
                <option value="Expense">Expense</option>
                <option value="Savings">Savings</option>
            </select>
            <div className="input-group">
                <input type="text"  placeholder='Amount' className='form-input'
                onChange={(e) => setnum(e.target.value)} />
            </div>
            <div className="submit-btn">
                <button onClick={handelclick}
                 className='border py-2 text-white bg-indigo-500 w-full'>Make Transaction</button>
            </div>
        </div>    
  

   
</div>
  )
}

export default NewForm
