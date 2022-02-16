const Filters = ({ changeName, changeDecimals, changeSupply, changeDate}) => {
  return (
    <form className="filter-form">
        <div >
            <label > Name </label>
            <input type="text" placeholder="Contract Name" onChange={(e) => changeName(e.target.value)}/>
            <label> Decimals </label>
            <input type="text" placeholder="Decimal #" onChange={(e) => {
              if (e.target.value != null){
                changeDecimals(e.target.value)
              }else {
                changeDecimals(null)
              }
            }
            }
              />
          </div>
          <div>
            <label> Supply </label>
            <input type="text" placeholder="Supply #" onChange={(e) => {
              if (e.target.value != null){
                changeSupply(e.target.value)
              } else {
                changeSupply(null)}
              }
            }/>

            <label >Start Date</label>
            <input type="date" id="date" onChange={(e) => changeDate(e.target.value)}/>

        </div>

    </form>
  )
}

export default Filters