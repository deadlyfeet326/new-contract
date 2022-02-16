import Button from './Button'
const Filters = ({ name, decimals, supply, date, changeFilters}) => {
  return (
    <form className="filter-form">
        <div >
            <label > Name </label>
            <input type="text" placeholder="Contract Name" value={name} onChange={(e) => changeFilters(e.target.value, decimals, supply, date)}/>
            <label> Decimals </label>
            <input type="text" placeholder="Decimal #" value={decimals} onChange={(e) => {
              if (e.target.value != null){
                changeFilters(name, e.target.value, supply, date)
              }else {
                changeFilters(name, null, supply, date)
              }
            }
            }
              />
          </div>
          <div>
            <label> Supply </label>
            <input type="text" placeholder="Supply #" value={supply} onChange={(e) => {
              if (e.target.value != null){
                changeFilters(name, decimals, e.target.value, date)
              } else {
                changeFilters(name, decimals, null, date)}
              }
            }/>

            <label >Start Date</label>
            <input type="date" id="date" value={date} onChange={(e) => changeFilters(name, decimals, supply, e.target.value)}/>
        </div>
        <div>
          <Button color='black' text="Reset Filters" onClick={() => changeFilters("", "", "", "")}/>
        </div>

    </form>
  )
}

export default Filters