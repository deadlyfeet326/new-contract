import Button from './Button'

const Contract = ( {contract, pinContract} ) => {
  return (
    <div className='contract' >
        <h2>{contract.name} <Button  color="green" text="PIN" onClick={() => pinContract(contract._id)}/></h2>
        <p> <b>Contract Address : </b> {contract.address} </p>
        <p> 
            <b>Decimals : </b> {contract.decimals} 
            <b> Supply : </b> {contract.supply} 
        </p>
        <p> <b> Dev Wallet : </b>{contract.owner} </p>
        <a href= {"https://bscscan.com/address/" + contract.address } target="_blank"> BSC CONTRACT</a>
    </div>
  )
}

export default Contract