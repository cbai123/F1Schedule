import React from "react";
import Home from "./home";

describe('<Home />', () => {
  beforeEach(() => {
    cy.mount(<Home />)
  })

  it('renders the correct number of raceInfo boxes', () => {
    cy.get('.race-info-box').should('have.length', 24)
  })
})