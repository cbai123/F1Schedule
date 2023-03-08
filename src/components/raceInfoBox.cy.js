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
      'scheduled': '2023-03-04T14:00:00+00:00'
    },
    {
      'description': 'Race',
      'scheduled': '2023-03-05T15:00:00+00:00'
    }]
  }

  const sprintRaceInfo = {
    'description': 'Bahrain Grand Prix 2023',
    'stages': [{
      'description':'Practice 1'
    },
    {
      'description': 'Qualification',
      'scheduled': '2023-03-03T13:00:00+00:00'
    },
    {
      'description': 'Practice 2'
    },
    {
      'description': 'Sprint',
      'scheduled': '2023-03-04T14:00:00+00:00'
    },
    {
      'description': 'Race',
      'scheduled': '2023-03-05T15:00:00+00:00'
    }]
  }

  beforeEach(() => {
    cy.mount(<RaceInfoBox raceInfo={raceInfo} />)
  })

  it('should render the name of the Grand Prix', () => {
    cy.get('[data-cy="race-title"]').should('contain.text', 'Bahrain Grand Prix 2023')
  })

  it('should not initially render the race info', () => {
    cy.get('[data-cy="quali-time"]').should('not.exist')
    cy.get('[data-cy="race-time"]').should('not.exist')
    cy.get('[data-cy="race-time"]').should('not.exist')
  })

  it('should show quali time after clicking the info box', () => {
    cy.get('[data-cy="race-title"]').click()

    cy.get('[data-cy="quali-time"]').should('contain.text', 'Start Time: 14:00')
  })

  it('should show race time after clicking the info box', () => {
    cy.get('[data-cy="race-title"]').click()

    cy.get('[data-cy="race-time"]').should('contain.text', 'Start Time: 15:00')
  })

  it('should not show sprint info if week is not a sprint week', () => {
    cy.get('[data-cy="race-title"]').click()

    cy.get('[data-cy="sprint-time"]').should('not.exist')
  })

  it('should show all correct info in a sprint week', () => {
    cy.mount(<RaceInfoBox raceInfo={sprintRaceInfo} />)
    cy.get('[data-cy="race-title"]').click()

    cy.get('[data-cy="quali-time"]').should('contain.text', 'Start Time: 13:00')
    cy.get('[data-cy="sprint-time"]').should('contain.text', 'Start Time: 14:00')
    cy.get('[data-cy="race-time"]').should('contain.text', 'Start Time: 15:00')
  })
})