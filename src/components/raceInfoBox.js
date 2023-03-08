import { useState } from "react"

function RaceInfoBox({raceInfo}) {

  const [showInfo, setShowInfo] = useState(false)

  function timeFormat(time) {
    const date = new Date(time)
    const hour = '0' + date.getHours()
    const minutes = '0' + date.getMinutes()

    return `${hour.substr(-2)}:${minutes.substr(-2)}`
  }

  function handleClick() {
    setShowInfo(!showInfo)
  }

  // Check if weekend has sprint race or not
  function sprintRace() {
    if (raceInfo.stages[3].description === 'Sprint') {
      return (
        <>
          <h4>{raceInfo.stages[1].description}</h4>
          <p data-cy="quali-time">Start Time: {timeFormat(raceInfo.stages[1].scheduled)}</p>
          <h4>{raceInfo.stages[3].description}</h4>
          <p data-cy="sprint-time">Start Time: {timeFormat(raceInfo.stages[3].scheduled)}</p>
        </>
      )
    } else {
      return (
        <>
          <h4>{raceInfo.stages[3].description}</h4>
          <p data-cy="quali-time">Start Time: {timeFormat(raceInfo.stages[3].scheduled)}</p>
        </>
      )
    }
  }

  return(
    <div className='race-info-box' onClick={handleClick}>
      <h3 data-cy="race-title">{raceInfo.description}</h3>
      {showInfo && <div className='race-info'>
        {sprintRace()}
        <h4>{raceInfo.stages[4].description}</h4>
        <p data-cy="race-time">Start Time: {timeFormat(raceInfo.stages[4].scheduled)}</p>
      </div>}
    </div>
  )
}

export default RaceInfoBox