import { useEffect, useState } from 'react'
import RaceInfoBox from "../components/raceInfoBox"

function Home({navigate}) {
	const [raceArr, setRaceArr] = useState([])
	const dateArr = []
	useEffect(() => {
		const fetchRaceInfo = async () => {
			const response = await fetch('https://ergast.com/api/f1/current.json')

			const result = await response.json()
			const data = await result.MRData.RaceTable.Races
			setRaceArr(data)
		}

		fetchRaceInfo()
	}, [])

	raceArr.forEach(raceInfo => {
		dateArr.push(new Date(raceInfo.date))
	})

	const nextRaceIndex = dateArr.findIndex(date => date > new Date())


	return(
		<>
			<header className="App-header">
				<h2>F1 Schedule</h2>
			</header>

			<body className='App'>
				<div className="race-info-box-container">
					{ raceArr.map((raceInfo, index) => {
							const nextRace = index === nextRaceIndex
							return <RaceInfoBox key={index} raceInfo={raceInfo} nextRace={nextRace} navigate={navigate}/>
						})}
				</div>
			</body>
		</>
	)
}

export default Home