import PinnedContract from "./PinnedContract"
import Button from "./Button"

const Pinned = ({ pinnedContracts, unpinContract}) => {
    console.log(pinnedContracts)
  return (
    <div className="pinnedContainer">
        {pinnedContracts.map((contract, index) => (
             <PinnedContract key={index} contract={contract} unpinContract={unpinContract}/>
        ))}
    </div>
  )
}

export default Pinned