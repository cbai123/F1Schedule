import React from "react"

function RaceInfoBox( {raceInfo}) {

  const [showInfo, setShowInfo] = React.useState(false)

  function timeFormat(time) {
    const date = new Date(time)
    const hour = date.getHours()
    const minutes = '0' + date.getMinutes()

    return `${hour}:${minutes.substr(-2)}`
  }

  function handleClick() {
    setShowInfo(!showInfo)
  }

  return(
    <div className='race-info-box' onClick={handleClick}>
        <h3 data-cy="race-title">{raceInfo.description}</h3>
      {showInfo && <div className='race-info'>
        <h4>{raceInfo.stages[3].description}</h4>
        <p data-cy="quali-time">Start Time: {timeFormat(raceInfo.stages[3].scheduled)}</p>
        <h4>{raceInfo.stages[4].description}</h4>
        <p data-cy="race-time">Start Time: {timeFormat(raceInfo.stages[4].scheduled)}</p>
      </div>}
    </div>
  )
}

export default RaceInfoBox