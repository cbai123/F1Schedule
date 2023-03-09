import React from "react";
import Home from "./home";
import '../App.css'

describe('<Home />', () => {
  beforeEach(() => {
    cy.mount(<Home />)
  })

  it('renders the correct number of raceInfo boxes', () => {
    cy.get('.race-info-box').should('have.length', 22)
    cy.get('.next-race-info-box').should('have.length', 1)
  })
})