import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function Race() {
  const [resultsArr, setResultsArr] = useState([])
  const { round } = useParams()

  useEffect(() => {
    const fetchResults = async () => {
      fetch(`https://ergast.com/api/f1/current/${round}/results.json`)
      .then(response => response.json())
      .then(result => result.MRData.RaceTable.Races[0].Results)
      .then(data => setResultsArr(data))
    }

    fetchResults()
  })

  return(
    <>
			<header className="App-header">
				<h2>F1 Schedule</h2>
			</header>

			<body className='App'>
        <div>
          <h1 style={{margin: 0}}>In Progress :)</h1>
        </div>
        <div>
          <h3>Results: </h3>
          {resultsArr.map((result, index) => {
            return <p key={index}>{result.position}: {result.Driver.givenName} {result.Driver.familyName}</p>
          })}
        </div>
      </body>
		</>
  )
}

export default Race