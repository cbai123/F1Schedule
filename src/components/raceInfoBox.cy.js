import React from "react";
import RaceInfoBox from "./raceInfoBox";
import '../App.css'

describe('<RaceInfoBox />', () => {

  const raceInfo = {
    'round': 1,
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

  it('should render the date of the GP in the correct format', () => {
    cy.get('.race-title').should('contain.text', '05/03/23')
  })

  it('should not initially render the race info', () => {
    cy.get('[data-cy="quali-time"]').should('not.exist')
    cy.get('[data-cy="sprint-time"]').should('not.exist')
    cy.get('[data-cy="race-time"]').should('not.exist')
  })

  it('should show quali time after clicking the info box', () => {
    cy.get('.race-info-box').click()

    cy.get('[data-cy="quali-time"]').should('contain.text', 'Start Time: 14:00')
  })

  it('should show race time after clicking the info box', () => {
    cy.get('.race-info-box').click()

    cy.get('[data-cy="race-time"]').should('contain.text', 'Start Time: 15:00')
  })

  it('should not show sprint info if week is not a sprint week', () => {
    cy.get('.race-info-box').click()

    cy.get('[data-cy="sprint-time"]').should('not.exist')
  })

  it('should show all correct info in a sprint week', () => {
    cy.mount(<RaceInfoBox raceInfo={sprintRaceInfo} />)
    cy.get('.race-info-box').click()

    cy.get('[data-cy="quali-time"]').should('contain.text', 'Start Time: 13:00')
    cy.get('[data-cy="sprint-time"]').should('contain.text', 'Start Time: 14:00')
    cy.get('[data-cy="race-time"]').should('contain.text', 'Start Time: 15:00')
  })

  it('should not highlight race in red if it not the next race', () => {
    cy.get('.race-info-box').should('have.css', 'background-color', 'rgb(60, 59, 59)')
    cy.get('.next-race-info-box').should('not.exist')
  })

  it('should highlight the next race in red', () => {
    cy.mount(<RaceInfoBox raceInfo={raceInfo} nextRace={true}/>)
    cy.get('.race-info-box').should('not.exist')
    cy.get('.next-race-info-box').should('have.css', 'background-color', 'rgb(224, 5, 0)')
  })
})