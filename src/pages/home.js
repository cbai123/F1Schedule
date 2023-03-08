import data from '../raceInfo.json'
import RaceInfoBox from "../components/raceInfoBox"

function Home() {
	const races = data.stages

	return(
		<div className="race-info-box-container">
			{ races.map((raceInfo, index) => {
					return <RaceInfoBox key={index} raceInfo={raceInfo} />
				})}
			
		</div>
	)
}

export default Home