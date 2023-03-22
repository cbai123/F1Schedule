import React from "react";
import Home from "./home";
import '../App.css'

describe('<Home />', () => {
  beforeEach(() => {

    cy.intercept({
      method: 'GET',
      url: 'https://ergast.com/api/f1/current.json'
    },
    {fixture: 'races.json'}
    ).as('getRaces')

    cy.mount(<Home />)
    cy.wait('@getRaces')
  })
  
  it('renders the correct number of raceInfo boxes', () => {
    cy.mount(<Home />)
    cy.wait('@getRaces')

    cy.get('.race-info-box').should('have.length', 2)
    cy.get('.next-race-info-box').should('have.length', 1)
  })

  afterEach(() => {
    cy.clock().then((clock) => {
      clock.restore()
    })
  })

  it('returns the correct next race test 1', () => {
    const date = new Date('2023/03/25')
    cy.clock(date)
    cy.mount(<Home />)
    cy.wait('@getRaces')

    cy.get('.next-race-info-box').should('contain.text', 'Australian Grand Prix')
  })

  it('returns the correct next race test 2', () => {
    const date = new Date('2023/03/15')
    cy.clock(date)
    cy.mount(<Home />)
    cy.wait('@getRaces')

    cy.get('.next-race-info-box').should('contain.text', 'Saudi Arabian Grand Prix')
  })

  it('returns the correct next race if it is the day of the race', () => {
    const date = new Date('2023/04/02')
    cy.clock(date)
    cy.mount(<Home />)
    cy.wait('@getRaces')

    cy.get('.next-race-info-box').should('contain.text', 'Australian Grand Prix')
  })

  it('should not return a next race if the date is past the last race', 
  () => {
    const date = new Date('2023/04/03')
    cy.clock(date)
    cy.mount(<Home />)
    cy.wait('@getRaces')

    cy.get('.next-race-info-box').should('not.exist')
  })
})