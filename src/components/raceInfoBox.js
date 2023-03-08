

function RaceInfoBox( {raceInfo}) {

  function timeFormat(time) {
    const date = new Date(time)
    const hour = date.getHours()
    const minutes = '0' + date.getMinutes()

    return `${hour}:${minutes.substr(-2)}`
  }

  return(
    <div>
      <h3 className="race-title">{raceInfo.description}</h3>
      <div>
        <h4>{raceInfo.stages[3].description}</h4>
        <p className="quali-time">Start Time: {timeFormat(raceInfo.stages[3].scheduled)}</p>
        <h4>{raceInfo.stages[4].description}</h4>
        <p className="race-time">Start Time: {timeFormat(raceInfo.stages[4].scheduled)}</p>
      </div>
    </div>
  )
}

export default RaceInfoBox