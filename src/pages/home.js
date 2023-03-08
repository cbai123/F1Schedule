import { useEffect, useState } from 'react'
import RaceInfoBox from "../components/raceInfoBox"

function Home() {
	const [raceArr, setRaceArr] = useState([])

	useEffect(() => {
		const fetchRaceInfo = async () => {
			const response = await fetch('http://ergast.com/api/f1/current.json')

			const result = await response.json()
			const data = await result.MRData.RaceTable.Races
			setRaceArr(data)
		}

		fetchRaceInfo()
	}, [])

	return(
		<div className="race-info-box-container">
			{ raceArr.map((raceInfo, index) => {
					return <RaceInfoBox key={index} raceInfo={raceInfo} />
				})}
		</div>
	)
}

export default Home