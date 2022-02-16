import Launch from "./Launch"
import Button from "./Button"

const Launches = ({ launches, deleteLaunch}) => {
  return (
    <div className="pinnedContainer">
        {launches.map((launch, index) => (
             <Launch key={index} launch={launch} deleteLaunch={deleteLaunch}/>
        ))}
    </div>
  )
}

export default Launches