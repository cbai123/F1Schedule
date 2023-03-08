import RaceInfoBox from "../components/raceInfoBox"


function Home() {

	const raceInfo = {
		'description': 'Bahrain Grand Prix 2023',
		'stages': [{
			'description':'Practice 1'
		},
		{
			'description': 'Practice 2'
		},
		{
			'description': 'Practice 3'
		},
		{
			'description': 'Qualification',
			'scheduled': '2023-03-04T15:00:00+00:00'
		},
		{
      'description': 'Race',
      'scheduled': '2023-03-05T15:00:00+00:00'
    }]
	}
	return(
		<div className="race-info-box-container">
			<RaceInfoBox raceInfo={raceInfo} />
		</div>
	)
}

export default Home