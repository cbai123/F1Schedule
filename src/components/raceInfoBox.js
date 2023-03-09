import { useState } from "react"

function RaceInfoBox({raceInfo}) {

  const [showInfo, setShowInfo] = useState(false)

  function timeFormat(date, time) {
    const dateTime = new Date(`${date}T${time}`)
    const hour = '0' + dateTime.getHours()
    const minutes = '0' + dateTime.getMinutes()

    return `${hour.substr(-2)}:${minutes.substr(-2)}`
  }

  function dateFormat(date) {
    const raceDate = new Date(date)
    const day = '0' + raceDate.getDate()
    const month = '0' + (raceDate.getMonth() + 1)
    const year = raceDate.getFullYear().toString().slice(2,4)

    return `${day.substr(-2)}/${month.substr(-2)}/${year}`
  }

  function handleClick() {
    setShowInfo(!showInfo)
  }

  return(
    <div className='race-info-box' onClick={handleClick}>
      <h3 className="race-title">{dateFormat(raceInfo.date)}&emsp;{raceInfo.raceName}</h3>
      {showInfo && <div className='race-info'>
        <h4 className="info-box-quali">Qualifying</h4>
        <p className="info-box-time" data-cy="quali-time">Start Time: {timeFormat(raceInfo.Qualifying.date, raceInfo.Qualifying.time)}</p>
        {raceInfo.Sprint && 
        <>
          <h4 className="info-box-sprint">Sprint</h4>
          <p className="info-box-time" data-cy="sprint-time">Start Time: {timeFormat(raceInfo.Sprint.date, raceInfo.Sprint.time)}</p>
        </>
        }
        <h4 className="info-box-race">Race</h4>
        <p className="info-box-time" data-cy="race-time">Start Time: {timeFormat(raceInfo.date, raceInfo.time)}</p>
      </div>}
    </div>
  )
}

export default RaceInfoBox