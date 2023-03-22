import { useState } from "react"

function RaceInfoBox({raceInfo, nextRace, navigate}) {
  const [showInfo, setShowInfo] = useState(false)

  const raceDate = new Date(raceInfo.date)
  
  function dateFormat() {
    const day = '0' + raceDate.getDate()
    const month = '0' + (raceDate.getMonth() + 1)
    const year = raceDate.getFullYear().toString().slice(2,4)

    return `${day.substr(-2)}/${month.substr(-2)}/${year}`
  }

  function handleClick() {
    setShowInfo(!showInfo)
  }

  function changePage() {
    navigate(`/${raceInfo.round}`)
  }

  function nextRaceCheck() {
    if (nextRace) {
      return 'next-race-info-box'
    } else { 
      return 'race-info-box'
    }
  }

  return(
    <div className={nextRaceCheck('box')} onClick={handleClick}>
      <h3 className="race-title">{dateFormat()}&emsp;{raceInfo.raceName}</h3>
      {showInfo && <div className='race-info'>
        <h4 className="info-box-quali">Qualifying</h4>
        <p className="info-box-time" data-cy="quali-time">Start Time: {raceInfo.Qualifying.time.slice(0,5)}</p>
        {raceInfo.Sprint && 
        <>
          <h4 className="info-box-sprint">Sprint</h4>
          <p className="info-box-time" data-cy="sprint-time">Start Time: {raceInfo.Sprint.time.slice(0,5)}</p>
        </>
        }
        <h4 className="info-box-race">Race</h4>
        <p className="info-box-time" data-cy="race-time">Start Time: {raceInfo.time.slice(0,5)}</p>
        {raceDate <= new Date() && <button className='more-info-btn' onClick={changePage}>Results</button>}
      </div>}
    </div>
  )
}

export default RaceInfoBox