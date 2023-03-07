import React from "react";
import RaceInfoBox from "./raceInfoBox";

describe('<RaceInfoBox />', () => {

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
    }]
  }

  it('should render the name of the Grand Prix', () => {
    cy.mount(<RaceInfoBox raceInfo={raceInfo}/>)

    cy.get('.race-title').should('contain.text', 'Bahrain Grand Prix 2023')
  })

  it('should render the time of qualifying', () => {
    cy.mount(<RaceInfoBox raceInfo={raceInfo} />)

    cy.get('.quali-time').should('contain.text', 'Start Time: 15:00')
  })
})