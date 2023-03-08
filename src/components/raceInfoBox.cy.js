import React from "react";
import RaceInfoBox from "./raceInfoBox";

describe('<RaceInfoBox />', () => {

  const raceInfo = {
    'raceName': 'Bahrain Grand Prix 2023',
    'date': '2023-03-05',
    'time': '15:00:00Z',
    'Qualifying': {
      'date': '2023-03-04',
      'time': '14:00:00Z'
    }
  }

  const sprintRaceInfo = {
    'raceName': 'Bahrain Grand Prix 2023',
    'date': '2023-03-05',
    'time': '15:00:00Z',
    'Qualifying': {
      'date': '2023-03-03',
      'time': '13:00:00Z'
    },
    'Sprint': {
      'date': '2023-03-04',
      'time': '14:00:00Z'
    }
  }

  beforeEach(() => {
    cy.mount(<RaceInfoBox raceInfo={raceInfo} />)
  })

  it('should render the name of the Grand Prix', () => {
    cy.get('.race-title').should('contain.text', 'Bahrain Grand Prix 2023')
  })

  it('should not initially render the race info', () => {
    cy.get('.quali-time').should('not.exist')
    cy.get('.sprint-time').should('not.exist')
    cy.get('.race-time').should('not.exist')
  })

  it('should show quali time after clicking the info box', () => {
    cy.get('.race-title').click()

    cy.get('.quali-time').should('contain.text', 'Start Time: 14:00')
  })

  it('should show race time after clicking the info box', () => {
    cy.get('.race-title').click()

    cy.get('.race-time').should('contain.text', 'Start Time: 15:00')
  })

  it('should not show sprint info if week is not a sprint week', () => {
    cy.get('.race-title').click()

    cy.get('.sprint-time').should('not.exist')
  })

  it('should show all correct info in a sprint week', () => {
    cy.mount(<RaceInfoBox raceInfo={sprintRaceInfo} />)
    cy.get('.race-title').click()

    cy.get('.quali-time').should('contain.text', 'Start Time: 13:00')
    cy.get('.sprint-time').should('contain.text', 'Start Time: 14:00')
    cy.get('.race-time').should('contain.text', 'Start Time: 15:00')
  })
})