import React from 'react'
import Button from './Button'

const pinnedContract = ( {contract, unpinContract} ) => {
  return (
    <div className='contract' >
        <h3>{contract.name} <Button color="red" text="X" onClick={() => unpinContract(contract._id)}/> </h3>
        <p> {contract.address.substring(0,22) + "..."} </p>
        <a href= {"https://bscscan.com/address/" + contract.address } target="_blank"> BSC CONTRACT</a>
    </div>
  )
}

export default pinnedContract